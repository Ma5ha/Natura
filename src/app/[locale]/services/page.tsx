import { typography } from "@/ui/variants";
import { twMerge } from "tailwind-merge";
import OurServices from "./(sections)/our-services";
import Detailed from "./(sections)/detailed";

export default function Services() {
  return (
    <>
      <OurServices />
      <Detailed />
    </>
  );
}
