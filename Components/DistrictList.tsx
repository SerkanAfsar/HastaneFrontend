"use client";
import { DistrictList as DistType } from "@/Types";
import { cn } from "@/Utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export default function DistrictList({
  cityName,
  cityUrl,
  districts,
}: DistType) {
  const pathName = usePathname();

  const pathUrl = useCallback(
    ({
      cityUrlPath,
      distictUrlPath,
    }: {
      cityUrlPath: string;
      distictUrlPath: string | null;
    }): string => {
      let path = `/hastaneler/${cityUrlPath}`;
      if (distictUrlPath) {
        path += `/${distictUrlPath}`;
      }
      return path;
    },
    [],
  );

  const allCityPath = pathUrl({
    cityUrlPath: cityUrl || "Not Mapped",
    distictUrlPath: null,
  });

  return (
    <ul className="flex w-full basis-0 flex-col gap-2 md:basis-1/5">
      <li className="block w-full">
        <Link
          href={allCityPath}
          className={cn(
            "block p-3",
            allCityPath == pathName && "rounded-lg bg-customYellow text-black",
          )}
          title={`${cityName} Hastane Listesi`}
        >
          Bütün İlçeler
        </Link>
      </li>
      {districts?.map((item, index) => {
        const path = pathUrl({
          cityUrlPath: cityUrl || "Not Mapped",
          distictUrlPath: item.url,
        });
        return (
          <li className="block w-full" key={index}>
            <Link
              className={cn(
                "block p-3",
                path == pathName && "rounded-lg bg-customYellow text-black",
              )}
              href={path}
              title={`${cityName} ${item} Hastaneleri`}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
