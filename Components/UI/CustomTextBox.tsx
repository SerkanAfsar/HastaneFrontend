import { cn } from "@/Utils";
import * as React from "react";

type ElementProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  isCenter: boolean;
};

const CustomTextBox = React.forwardRef<HTMLInputElement, ElementProps>(
  (
    { className, title, type = "text", isCenter = false, placeholder, ...rest },
    ref
  ) => {
    const id = React.useId();
    return (
      <div className="w-full flex flex-col gap-2">
        <label
          className={cn(
            "font-bold w-full",
            isCenter ? "text-center" : "text-left"
          )}
          htmlFor={id}
        >
          {title}
        </label>
        <input
          type={type}
          ref={ref}
          id={id}
          name={rest.name ?? id}
          placeholder={placeholder}
          {...rest}
          className={cn(
            "outline-none  p-2 rounded border-2 border-colorOne text-colorTwo",
            className
          )}
        />
      </div>
    );
  }
);
CustomTextBox.displayName = "CustomTextBox";
export default CustomTextBox;
