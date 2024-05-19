import { City as CityType } from "@/Types";
import Link from "next/link";

export default function City({ cityName, citySlug }: CityType) {
  return (
    <Link
      className="bg-colorOne rounded shadow-sm transition-all duration-300  hover:bg-customYellow hover:text-black h-[100px] leading-8 text-center p-3 flex justify-center items-center text-white text-xl"
      href={`/hastaneler/${citySlug}`}
      title={`${cityName} Hastane Listesi - Hastaneleri`}
    >
      {cityName} Hastaneleri
    </Link>
  );
}
