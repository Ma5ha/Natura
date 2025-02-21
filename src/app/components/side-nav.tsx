"use client";

import { typography } from "@/ui/variants";
import { NaturaLogo } from "@public/natura-logo";
import Link from "next/link";

import { twMerge } from "tailwind-merge";

const navigation = [
  {
    label: "Gallery",
    href: "/",
  },
  {
    label: "Carer",
    href: "/services",
  },
];
export default function SideNav() {
  return (
    <aside className="inline-block h-full w-[200px] bg-white">
      <NaturaLogo className="m-auto my-11" lang="sr" />
      <nav className="w-full h-fit flex flex-col ">
        {navigation.map(({ label, href }) => (
          <Link
            data-active={label === "Gallery"}
            key={href}
            href={href}
            className={twMerge(
              typography({ weight: "bold", align: "center" }),
              "px-4 py-2 bg-gray-50 uppercase data-[active='true']:text-primary!"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
