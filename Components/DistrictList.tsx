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
    []
  );

  const allCityPath = pathUrl({
    cityUrlPath: cityUrl || "Not Mapped",
    distictUrlPath: null,
  });

  return (
    <ul className="flex flex-col gap-2 basis-1 md:basis-1/4">
      <li>
        <Link
          href={allCityPath}
          className={cn(
            "p-3 block",
            allCityPath == pathName && "bg-customYellow text-black rounded-lg"
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
          <Link
            className={cn(
              "p-3 block",
              path == pathName && "bg-customYellow text-black rounded-lg"
            )}
            key={index}
            href={path}
            title={`${cityName} ${item} Hastaneleri`}
          >
            {item.name}
          </Link>
        );
      })}
    </ul>
  );
}
