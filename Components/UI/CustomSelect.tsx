import { cn } from "@/Utils";
import * as React from "react";
import Select, { Props } from "react-select";

type ItemTypes = Props & {
  placeholderText?: string;
  titleMessage?: string;
};

const sampleOptions = [
  // {
  //   label: "Finland",
  //   options: [

  //     // More options
  //   ],
  // },
  // {
  //   label: "Sweden",
  //   options: [{ label: "Stockholm", value: "Stockholm" }],
  // },
  {
    label: "Great Hotel",
    value: "Great Hotel 1",
  },
  {
    label: "Great Hotel",
    value: "Great Hotel 2",
  },
  {
    label: "Great Hotel",
    value: "Great Hotel 3",
  },
];

type RefType = React.ElementRef<typeof Select>;
const CustomSelect = React.forwardRef<RefType, ItemTypes>(
  (
    { value, placeholderText, titleMessage, options = sampleOptions, ...rest },
    ref
  ) => {
    return (
      <Select
        ref={ref}
        value={value}
        options={options}
        closeMenuOnSelect={true}
        hideSelectedOptions={false}
        placeholder={placeholderText}
        classNames={{
          control: ({ isFocused }) => {
            return cn("w-full h-full rounded-md  text-black");
          },
          menu: () => "",
          input: () => cn("text-black font-lg"),
          option: ({ isFocused, isSelected }) => cn("text-black font-lg"),
        }}
        {...rest}
      />
    );
  }
);
CustomSelect.displayName = "CustomSelect";
export default CustomSelect;
