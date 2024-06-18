import HeroSection from "@/Components/HeroSection";
import CityListContainer from "@/Containers/CityListContainer";
import { GetCityList } from "@/Services/Cities.Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Türkiye İl - İlçe Hastaneler Listesi | Hastane Numaraları",
  description: "Türkiye İl - İlçe Hastane Listesi | Hastane Numaraları",
  robots: "index,follow",
  authors: [{ name: "Hastane Rehberi" }],
  publisher: "Hastane Rehberi",
  themeColor: "#fff",
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
    canonical: `${process.env.NEXT_PUBLIC_SITE_NAME}`,
  },
};

export default async function Home() {
  const result = await GetCityList();
  if (!result.success) {
    throw new Error(
      result.errorList ? result?.errorList[0] : "An Error Accured",
    );
  }
  return (
    <>
      <HeroSection />
      <div className="container mx-auto mb-6">
        <CityListContainer entities={result.entities ?? null} />
      </div>
    </>
  );
}
export const revalidate = 6000;
export const dynamic = "force-static";
