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
        new Set(cityResult.entity?.hospitals?.map((a) => a.district))
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
    <div className="md:rounded-lg flex p-3 md:w-fit w-full md:bg-white flex-col md:flex-row gap-3 md:gap-2">
      <CustomSelect
        placeholderText="il Seçiniz"
        className="text-left md:w-[200px] w-full"
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
        className="text-left md:w-[200px] w-full"
        value={district}
        onChange={(item: any) => setDistrict(item)}
        options={districtList?.map((item, index) => ({
          label: item.name,
          value: item.url,
        }))}
      />
      <CustomButton
        className="rounded-lg w-full md:w-[120px] text-white"
        title={"Arama"}
        onClick={handleSearch}
      />
    </div>
  );
}
