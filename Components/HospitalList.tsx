import { Hospital as HospitalType } from "@/Types";
import Hospital from "./Hospital";

export default function HospitalList({
  hospitals,
}: {
  hospitals: HospitalType[] | null;
}) {
  return (
    <div className="grid flex-auto grid-cols-1 gap-4 md:basis-3/4 md:grid-cols-2 lg:grid-cols-3">
      {hospitals?.map((item, index) => (
        <Hospital hospital={item} key={index} />
      ))}
    </div>
  );
}
