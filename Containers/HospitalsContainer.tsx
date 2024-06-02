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
      <section className="container mx-auto flex gap-4 my-4 text-base">
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
