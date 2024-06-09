import { City as CityType } from "@/Types";
import Link from "next/link";

export default function City({ cityName, citySlug }: CityType) {
  return (
    <Link
      className="flex h-[100px] items-center justify-center rounded bg-colorOne p-3 text-center text-xl leading-8 text-white shadow-sm transition-all duration-300 hover:bg-customYellow hover:text-black"
      href={`/hastaneler/${citySlug}`}
      title={`${cityName} Hastane Listesi - Hastaneleri`}
    >
      {cityName} Hastaneleri
    </Link>
  );
}
