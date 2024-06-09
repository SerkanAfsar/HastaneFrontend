import BreadCrumb from "@/Components/BreadCrumb";
import DistrictList from "@/Components/DistrictList";
import HospitalList from "@/Components/HospitalList";
import { HospitalsContainerType } from "@/Types";

export default function HospitalsContainer({
  cityName,
  cityUrl,
  districts,
  hospitals,
  breadCrumbs,
}: HospitalsContainerType) {
  return (
    <>
      <BreadCrumb list={breadCrumbs} />
      <section className="container mx-auto my-4 flex flex-col items-start justify-start gap-4 text-base md:flex-row">
        <DistrictList
          cityName={cityName}
          cityUrl={cityUrl}
          districts={districts}
        />
        <HospitalList hospitals={hospitals} />
      </section>
    </>
  );
}
