"use client";
import City from "@/Components/City";
import CustomTextBox from "@/Components/UI/CustomTextBox";
import { City as CityType } from "@/Types";
import { cn } from "@/Utils";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type CityListContainerProps = {
  entities: CityType[] | null;
};

export default function CityListContainer({
  entities,
}: CityListContainerProps) {
  const pathName = usePathname();
  const [searchText, setSearchText] = useState<string>();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref && ref.current && pathName != "/") {
      ref.current.focus();
    }
  }, [ref, pathName]);

  const result = searchText
    ? entities?.filter((a) =>
        a.cityName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
      )
    : entities;

  const exist = result && result.length > 0;

  return (
    <section className="flex flex-col gap-6">
      <span className="mt-6 w-full text-center text-3xl uppercase">
        Türkiye Hastaneler Listesi
      </span>
      <div className="mx-auto w-[280px]">
        <CustomTextBox
          className="placeholder:text-center focus:border-customYellow"
          title="Aranacak İli Yazınız"
          placeholder="Aranacak İli Yazınız"
          isCenter={true}
          ref={ref}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div
        className={cn(
          "grid gap-4",
          exist
            ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-none",
        )}
      >
        {exist ? (
          result?.map((item, index) => (
            <City
              cityName={item.cityName}
              citySlug={item.citySlug}
              key={index}
            />
          ))
        ) : (
          <span className="w-full text-center text-xl font-bold">
            Aradığınız İl Bulunamadı!
          </span>
        )}
      </div>
    </section>
  );
}
