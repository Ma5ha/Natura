import { typography } from "@/ui/variants";
import { FC, HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input: FC<InputProps> = ({
  className,
  label,
  errorMessage,
  ...props
}) => {
  return (
    <div className={twMerge(`input-control w-full`, className)}>
      <label>{label}</label>
      <input
        data-error={Boolean(errorMessage)}
        className="data-[error=true]:border-red-700 data-[error=true]:border data-[error=true]:outline-red-700 "
        {...props}
      />
      <p
        data-error={Boolean(errorMessage)}
        className={twMerge(
          typography({ align: "left" }),
          "!data-[error=true]:visible text-red-700"
        )}
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default Input;
