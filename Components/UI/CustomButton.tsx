import { cn } from "@/Utils";
import React from "react";

const CustomButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, title, type = "button", ...rest }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={cn("outline-none bg-customYellow px-2 py-3", className)}
      {...rest}
    >
      {title || "Not Defined"}
    </button>
  );
});
CustomButton.displayName = "CustomButton";
export default CustomButton;
