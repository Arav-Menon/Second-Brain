import { ReactElement } from "react";

interface ButtonProps {
  variants: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantsStyles = {
  primary: "bg-[#4843de] text-white",
  secondary: "bg-[#e0e7fe] text-[#3e38a7]",
};

const sizeStyles = {
  sm: "px-4 py-2 rounded-[6%] rounded-10 hover:bg-[#3e38a7]",
  md: "px-7 py-2 rounded-md hover:bg-[#3e38a7] ",
  lg: "p-6 rounded-lg ",
};

export const Buttons = (props: ButtonProps) => {
  return (
    <div className="flex items-center">
      <button
      onClick={props.onClick}
        className={`${variantsStyles[props.variants]} ${
          sizeStyles[props.size]
        } flex justify-center gap-1 `}
      >
        {props.startIcon} {props.text}{props.endIcon}
      </button>
    </div>
  );
};
