import { Hospital as HospitalType } from "@/Types";

export default function Hospital({ hospital }: { hospital: HospitalType }) {
  return <div>{hospital.address}</div>;
}
