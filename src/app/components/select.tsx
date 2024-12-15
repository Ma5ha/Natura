import React, { FC } from "react";
import * as Select from "@radix-ui/react-select";
import { twMerge } from "tailwind-merge";
import { typography } from "@/ui/variants";

type Props = {
  placeholder?: string;
  label?: string;
  root?: Select.SelectProps;
  trigger?: Select.SelectTriggerProps;
  content?: Select.SelectContentProps;
  value?: Select.SelectValueProps;
  children?: React.ReactNode;
};

export const Option: FC<Select.SelectItemProps> = ({ children, ...props }) => (
  <Select.Item
    {...props}
    className="rounded-md outline-none px-3 py-4 hover:bg-gray-50 cursor-pointer data-[state=checked]:bg-gray-200"
  >
    <Select.ItemText> {children}</Select.ItemText>
  </Select.Item>
);

const SelectComponent: FC<Props> & { Option: typeof Option } = ({
  placeholder,
  label,
  root,
  trigger,
  content,
  value,
  children,
}) => {
  return (
    <div className="input-control">
      <label>{label}</label>
      <Select.Root {...root}>
        <Select.Trigger
          {...trigger}
          className={twMerge(
            typography({ color: "black", align: "left" }),
            "rounded-md px-3 py-4 bg-gray-50 outline-primary min-h-[56px] data-[placeholder]:!text-gray-500 data-[placeholder]:!font-[400] !font-[400]"
          )}
        >
          <Select.Value placeholder={placeholder} {...value} />
        </Select.Trigger>
        <Select.Content
          {...content}
          position="popper"
          sideOffset={2}
          className="bg-white p-1 rounded-md shadow-md w-[var(--radix-select-trigger-width)] overflow-hidden "
        >
          <Select.Viewport>
            <Select.ScrollUpButton />
            {children}
            <Select.ScrollDownButton />
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

SelectComponent.Option = Option;

export default SelectComponent;
