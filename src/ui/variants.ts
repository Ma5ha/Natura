import { tv } from "tailwind-variants";

export const button = tv({
  base: "font-bold text-gray-500 py-3 px-4 text-white rounded bg-primary flex gap-2",
  variants: {
    sematic: {
      secondary: "bg-transparent text-primary border border-primary",
      ghost: "text-primary bg-transparent underline w-fit",
    },
  },
});

export const typography = tv({
  base: "text-gray-500 font-normal",
  variants: {
    align: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
    weight: {
      paragraph: "font-light",
      thin: "font-thin",
      bold: "font-bold",
      semi: "font-semibold",
    },
    color: {
      black: "!text-black",
      primary: "!text-gray-500",
      inverse: "!text-white",
      brand: "!text-primary",
    },

    semantic: {
      title: "font-bold !text-black",
      bigTitle: "font-bold text-3xl",
      largeTitle: "font-bold text-3xl",
      largeTitleSub: " text-2xl !text-gray-500",
    },

    size: {
      small: "!text-sm",
      medium: "text-md",
      large: "text-lg",
      xlarge: "text-xl",
      xxlarge: "text-2xl",
    },

    font: {
      serif: "font-serif",
      sans: "font-sans",
    },
  },
  defaultVariants: {
    weight: "paragraph",
    color: "primary",
  },
});
