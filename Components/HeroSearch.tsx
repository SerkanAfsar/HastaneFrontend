"use client";
import { useEffect, useState } from "react";
import CustomButton from "./UI/CustomButton";
import CustomSelect from "./UI/CustomSelect";
import { GetCityList } from "@/Services/Cities.Services";
import { City, District } from "@/Types";
import { GetCityWithHospitals } from "@/Services/Hospitals.Service";
import { slugText } from "@/Utils";
import { useRouter } from "next/navigation";

type optionsType = {
  name?: string;
  value?: string;
};
export default function HeroSearch() {
  const router = useRouter();
  const [cityList, setCityList] = useState<City[] | null>([]);
  const [districtList, setDistrictList] = useState<District[] | null>([]);

  const [city, setCity] = useState<optionsType | null>(null);
  const [district, setDistrict] = useState<optionsType | null>(null);

  useEffect(() => {
    GetCityList()
      .then((res) => {
        if (res.success) {
          setCityList(res.entities || null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCityChange = async (citySlug: string): Promise<void> => {
    const cityResult = await GetCityWithHospitals(citySlug);
    if (cityResult.success) {
      const districtResultList: District[] = Array.from(
        new Set(cityResult.entity?.hospitals?.map((a) => a.district)),
      ).map((a) => ({ name: a, url: slugText({ text: a }) }));
      setDistrictList(districtResultList);
    }
  };

  useEffect(() => {
    setDistrictList(null);
    setDistrict(null);
    if (city && city.value) {
      handleCityChange(city.value);
    }
  }, [city]);

  const handleSearch = () => {
    let url = `/hastaneler/${city?.value}`;
    if (district?.value) {
      url += `/${district.value}`;
    }
    return router.push(url);
  };

  return (
    <div className="flex w-full flex-col gap-3 p-3 md:w-fit md:flex-row md:gap-2 md:rounded-lg md:bg-white">
      <CustomSelect
        placeholderText="il Seçiniz"
        className="w-full text-left md:w-[200px]"
        titleMessage="İl Bulunamadı"
        options={cityList?.map((item, index) => ({
          label: item.cityName,
          value: item.citySlug,
        }))}
        onChange={(item: any) => setCity(item)}
        value={city}
      />
      <CustomSelect
        placeholderText="ilçe Seçiniz"
        titleMessage="İlçe Bulunamadı"
        className="w-full text-left md:w-[200px]"
        value={district}
        onChange={(item: any) => setDistrict(item)}
        options={districtList?.map((item, index) => ({
          label: item.name,
          value: item.url,
        }))}
      />
      <CustomButton
        className="w-full rounded-lg text-white md:w-[120px]"
        title={"Arama"}
        onClick={handleSearch}
      />
    </div>
  );
}
