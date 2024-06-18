import CityListContainer from "@/Containers/CityListContainer";
import HospitalsContainer from "@/Containers/HospitalsContainer";
import { GetCityList } from "@/Services/Cities.Services";
import { GetCityWithHospitals } from "@/Services/Hospitals.Service";
import { City, District, Hospital, ItemType, SlugPageProps } from "@/Types";
import { DistrictDataResult, slugText, throwErr } from "@/Utils";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string[] | null };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;
  if (!slug) {
    return {
      title: "Türkiye İl - İlçe Hastaneler Listesi | Hastane Numaraları",
      description: "Türkiye İl - İlçe Hastane Listesi | Hastane Numaraları",
      robots: "index,follow",
      authors: [{ name: "Hastane Rehberi" }],
      publisher: "Hastane Rehberi",
      openGraph: {
        title: "Türkiye İl - İlçe Hastane Rehberi Listesi | Hastane Numaraları",
        description:
          "Türkiye  İl - İlçe Hastane Rehberi Listesi || Hastane Numaraları",
        locale: "tr_TR",
      },
      twitter: {
        card: "summary",
        description:
          "Türkiye İl - İlçe Hastane Rehberi Listesi | Hastane Numaraları",
        title: "Türkiye İl - İlçe Hastane Rehberi Listesi | Hastane Numaraları",
        creator: "@hastanerehberi",
      },

      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_NAME}/hastaneler`,
      },
    };
  }
  const cityResult = await GetCityWithHospitals(slug[0]);
  const { cityName, citySlug } = cityResult.entity as City;

  if (slug.length == 1) {
    return {
      title: `${cityName} Hastaneleri | ${cityName} Hastane Numaraları`,
      description: `${cityName} Hastaneleri | ${cityName} Hastane Numaraları`,
      robots: "index,follow",
      authors: [{ name: "Hastane Rehberi" }],
      publisher: "Hastane Rehberi",

      openGraph: {
        title: `${cityName} Hastaneleri | ${cityName} Hastane Numaraları`,
        description: `${cityName} Hastaneleri | ${cityName} Hastane Numaraları`,
        locale: "tr_TR",
      },
      twitter: {
        card: "summary",
        description: `${cityName} Hastaneleri | ${cityName} Hastane Numaraları`,
        title: `${cityName} Hastaneleri | ${cityName} Hastane Numaraları`,
        creator: "@hastanerehberi",
      },

      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_NAME}/hastaneler/${citySlug}`,
      },
    };
  } else {
    const districtList = DistrictDataResult(cityResult.entity as City);
    const selectedDistrict = districtList.find((a) => a.url == slug[1]);

    return {
      title: `${cityName} ${selectedDistrict?.name} Hastaneleri | ${cityName} ${selectedDistrict?.name} Hastane Numaraları`,
      description: `${cityName} ${selectedDistrict?.name} Hastaneleri | ${cityName} ${selectedDistrict?.name} Hastane Numaraları`,
      robots: "index,follow",
      authors: [{ name: "Hastane Rehberi" }],
      publisher: "Hastane Rehberi",

      openGraph: {
        title: `${cityName} ${selectedDistrict?.name} Hastaneleri | ${cityName} ${selectedDistrict?.name} Hastane Numaraları`,
        description: `${cityName} ${selectedDistrict?.name} Hastaneleri | ${cityName} ${selectedDistrict?.name} Hastane Numaraları`,
        locale: "tr_TR",
      },
      twitter: {
        card: "summary",
        description: `${cityName} ${selectedDistrict?.name} Hastaneleri | ${cityName} ${selectedDistrict?.name} Hastane Numaraları`,
        title: `${cityName} ${selectedDistrict?.name} Hastaneleri | ${cityName} ${selectedDistrict?.name} Hastane Numaraları`,
        creator: "@hastanerehberi",
      },

      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_NAME}/hastaneler/${citySlug}/${selectedDistrict?.url}`,
      },
    };
  }
}

export default async function Hastaneler({ params: { slug } }: SlugPageProps) {
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

  const districtList = DistrictDataResult(cityResult.entity as City);

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
export const dynamic = "force-static";
export const revalidate = 10;

export async function generateStaticParams() {
  const result = await GetCityList();
  const arr = [];
  if (result.entities && result.success) {
    for (let index = 0; index < result.entities.length; index++) {
      const element = result.entities[index];
      arr.push({ slug: [`${element.citySlug}`] });

      const cityDetail = await GetCityWithHospitals(element.citySlug);

      if (cityDetail.success && cityDetail.statusCode != 404) {
        const districtList = DistrictDataResult(cityDetail.entity as City);

        districtList.forEach((item) => {
          arr.push({
            slug: [`${element.citySlug}`, `${item.url}`],
          });
        });
      }
    }
  }
  return arr;
}
