import CityListContainer from "@/Containers/CityListContainer";
import HospitalsContainer from "@/Containers/HospitalsContainer";
import { GetCityList } from "@/Services/Cities.Services";
import { GetCityWithHospitals } from "@/Services/Hospitals.Service";
import { District, Hospital, ItemType, SlugPageProps } from "@/Types";
import { slugText, throwErr } from "@/Utils";
import { notFound } from "next/navigation";

export default async function Hastaneler({
  params: { slug },
  searchParams,
}: SlugPageProps) {
  if (!slug) {
    const result = await GetCityList();
    throwErr(result);
    return (
      <div className="container mx-auto">
        <CityListContainer entities={result.entities ?? null} />
      </div>
    );
  }
  if (slug.length > 2) {
    return notFound();
  }

  const serkan: ItemType[] = [{ pathName: "Tüm İller", url: "/hastaneler" }];
  const cityResult = await GetCityWithHospitals(slug[0]);

  if (cityResult.statusCode == 404) {
    return notFound();
  }
  throwErr(cityResult);

  const districtList: District[] = Array.from(
    new Set(cityResult.entity?.hospitals?.map((a) => a.district)),
  ).map((a) => ({ name: a, url: slugText({ text: a }) }));

  serkan.push({
    url: `/hastaneler/${slug[0]}`,
    pathName: cityResult.entity?.cityName ?? "Not Defined",
  });

  if (slug.length == 1) {
    const hospitals: Hospital[] | null = cityResult.entity?.hospitals || null;
    return (
      <HospitalsContainer
        cityName={cityResult.entity?.cityName ?? null}
        cityUrl={cityResult.entity?.citySlug ?? null}
        districts={districtList}
        breadCrumbs={serkan}
        hospitals={hospitals}
      />
    );
  } else if (slug.length == 2) {
    const distictItem: District | null =
      districtList.find((a) => a.url == slug[1]) ?? null;

    if (!distictItem) {
      return notFound();
    }

    serkan.push({
      url: `/hastaneler/${slug[0]}/${distictItem.url}`,
      pathName: distictItem.name,
    });
    const hospitals: Hospital[] | null =
      cityResult.entity?.hospitals?.filter(
        (item) => slug[1] == slugText({ text: item.district }),
      ) || null;

    return (
      <HospitalsContainer
        cityName={cityResult.entity?.cityName ?? null}
        cityUrl={cityResult.entity?.citySlug ?? null}
        districts={districtList}
        breadCrumbs={serkan}
        hospitals={hospitals}
      />
    );
  }
}
