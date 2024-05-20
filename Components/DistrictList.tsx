import { DistrictList as DistType } from "@/Types";
import Link from "next/link";

export default function DistrictList({
  cityName,
  cityUrl,
  districts,
}: DistType) {
  return (
    <ul className="flex flex-col gap-2 basis-1 md:basis-1/4">
      <li>
        <Link
          href={`/hastaneler/${cityUrl}`}
          title={`${cityName} Hastane Listesş`}
        >
          Bütün İlçeler
        </Link>
      </li>
      {districts?.map((item, index) => (
        <Link
          key={index}
          href={`/hastaneler/${cityUrl}/${item.url}`}
          title={`${cityName} ${item} Hastaneleri`}
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
}
