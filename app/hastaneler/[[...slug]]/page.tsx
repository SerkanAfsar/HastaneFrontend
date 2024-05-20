import CityListContainer from "@/Containers/CityListContainer";
import HospitalsContainer from "@/Containers/HospitalsContainer";
import { GetCityList } from "@/Services/Cities.Services";
import { GetCityWithHospitals } from "@/Services/Hospitals.Service";
import { District, SlugPageProps } from "@/Types";

export default async function Hastaneler({
  params: { slug },
  searchParams,
}: SlugPageProps) {
  if (!slug) {
    const result = await GetCityList();
    if (!result.success) {
      throw new Error(
        result.errorList && result.errorList.length > 0
          ? result.errorList[0]
          : "An Error Accoured"
      );
    }
    return (
      <div className="container mx-auto">
        <CityListContainer entities={result.entities ?? null} />
      </div>
    );
  }

  const cityResult = await GetCityWithHospitals(slug[0]);
  if (!cityResult.success) {
    throw new Error(
      cityResult.errorList && cityResult.errorList.length > 0
        ? cityResult.errorList[0]
        : "An Error Accoured"
    );
  }

  const districtList: District[] = Array.from(
    new Set(cityResult.entity?.hospitals?.map((a) => a.district))
  ).map((a) => ({ name: a, url: a }));

  return (
    <HospitalsContainer
      cityName={cityResult.entity?.cityName ?? null}
      cityUrl={cityResult.entity?.citySlug ?? null}
      districts={districtList}
      hospitals={cityResult.entity?.hospitals || null}
    />
  );
}
