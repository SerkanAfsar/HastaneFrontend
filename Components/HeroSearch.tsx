import React, { useRef } from "react";
import CustomButton from "./UI/CustomButton";
import CustomSelect from "./UI/CustomSelect";
import { cn } from "@/Utils";

const options = [
  { name: "Swedish", value: "sv" },
  { name: "English", value: "en" },
  {
    type: "group",
    name: "Group name",
    items: [{ name: "Spanish", value: "es" }],
  },
];

export default function HeroSearch() {
  return (
    <div className="md:rounded-lg flex p-3 md:w-fit w-full md:bg-white flex-col md:flex-row gap-3 md:gap-2">
      <CustomSelect
        placeholderText="il Seçiniz"
        className="text-left md:w-[200px] w-full"
        titleMessage="İl Bulunamadı"
      />
      <CustomSelect
        placeholderText="ilçe Seçiniz"
        titleMessage="İlçe Bulunamadı"
        className="text-left md:w-[200px] w-full"
      />
      <CustomButton
        className="rounded-lg w-full md:w-[120px] text-white"
        title={"Arama"}
      />
    </div>
  );
}
