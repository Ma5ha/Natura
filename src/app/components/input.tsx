import { FC, HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
}

const Input: FC<InputProps> = ({ className, label, ...props }) => {
  return (
    <div className={`input-control grow ${className}`}>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
