import { cn } from "@/Utils";
import * as React from "react";
import Select, { Props } from "react-select";

type ItemTypes = Props & {
  placeholderText?: string;
  titleMessage?: string;
};

type RefType = React.ElementRef<typeof Select>;
const CustomSelect = React.forwardRef<RefType, ItemTypes>(
  ({ value, placeholderText, titleMessage, options, ...rest }, ref) => {
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
            return cn("w-full h-full rounded-md  text-black p-1");
          },
          menu: () => "",
          input: () => cn("text-black font-lg"),
          option: ({ isFocused, isSelected }) => cn("text-black font-lg"),
        }}
        {...rest}
      />
    );
  },
);
CustomSelect.displayName = "CustomSelect";
export default CustomSelect;
