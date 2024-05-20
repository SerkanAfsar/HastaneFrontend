import DistrictList from "@/Components/DistrictList";
import HospitalList from "@/Components/HospitalList";
import { HospitalsContainerType } from "@/Types";

export default function HospitalsContainer({
  cityName,
  cityUrl,
  districts,
  hospitals,
}: HospitalsContainerType) {
  return (
    <section className="container mx-auto flex gap-4">
      <DistrictList
        cityName={cityName}
        cityUrl={cityUrl}
        districts={districts}
      />
      <HospitalList hospitals={hospitals} />
    </section>
  );
}
