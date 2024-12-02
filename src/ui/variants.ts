import { tv } from "tailwind-variants";

export const button = tv({
  base: "font-bold text-gray-500 py-3 px-4 text-white rounded bg-primary flex gap-2",
});

export const typography = tv({
  base: "text-gray-500 font-normal",
  variants: {
    weight: {
      paragraph: "font-light",
      thin: "font-thin",
    },
    color: {
      primary: "!text-gray-500",
      inverse: "!text-white",
      brand: "!text-primary",
    },

    semantic: {
      title: "font-bold !text-black",
      bigTitle: "font-bold text-3xl",
    },

    size: {
      small: "text-sm",
      medium: "text-md",
      large: "text-lg",
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