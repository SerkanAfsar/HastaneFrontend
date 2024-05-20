import HeroSection from "@/Components/HeroSection";
import CityListContainer from "@/Containers/CityListContainer";
import { GetCityList } from "@/Services/Cities.Services";

export default async function Home() {
  const result = await GetCityList();
  if (!result.success) {
    throw new Error(
      result.errorList ? result?.errorList[0] : "An Error Accured"
    );
  }
  return (
    <>
      <HeroSection />
      <div className="container mx-auto">
        <CityListContainer entities={result.entities ?? null} />
      </div>
    </>
  );
}
