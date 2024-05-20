import { Hospital as HospitalType } from "@/Types";
import Hospital from "./Hospital";

export default function HospitalList({
  hospitals,
}: {
  hospitals: HospitalType[];
}) {
  return (
    <div className="grid grid-cols-4 w-full gap-2 basis-1 md:basis-3/4">
      {hospitals?.map((item, index) => (
        <Hospital hospital={item} key={index} />
      ))}
    </div>
  );
}
