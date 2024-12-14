"use client";

import { NaturaLogo } from "@/public/natura-logo";
import { typography } from "@/ui/variants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { twJoin, twMerge } from "tailwind-merge";
import useToggle from "../hooks/toggle";

const links = ["Home", "About", "Services", "Contact"];
const ids = ["hero", "about", "services", "contact"];
const resolveExitEnterClass = (isOpen: boolean) =>
  isOpen ? "enter-icon" : "exit-icon";

export default function HamburgerMenu({
  activeIndex,
}: {
  activeIndex: number;
}) {
  const [isOpen, toggle] = useToggle(false);

  return (
    <>
      <div className="relative menu size-[24px] flex justify-center">
        <div className="w-[24px] h-[24px] relative menu lg:hidden">
          <button className="w-[24px] h-[24px]" onClick={toggle}>
            <Menu className="w-[24px] h-[24px] lg:stroke-green-700" />
          </button>
        </div>
      </div>
      <div
        className={twJoin(
          "fixed bg-white top-0 left-0 h-screen w-full hidden z-50",
          isOpen && " !flex"
        )}
      >
        <div className="min-w-[200px] grow  p-0 flex-col h-full hidden sm:flex">
          <div className="flex w-full h-full">
            <div className="bg-gray-100 h-full w-1/2 flex items-center justify-center">
              <NaturaLogo
                lang="sr"
                className="min-w-[50px]"
                width={150}
                height={150}
              />
            </div>
            <div className="h-full w-1/2 flex items-center justify-center  "></div>
          </div>

          <div className="flex w-full h-full">
            <div className="h-full w-1/2 flex items-center justify-center p-10">
              <p className={typography({ color: "primary", align: "center" })}>
                Dom {'"Natura"'} se nalazi u{" "}
                <span
                  className={typography({ color: "primary", weight: "bold" })}
                >
                  Pribanjskoj 55 Pale
                </span>
              </p>
            </div>
            <div className="bg-gray-100 h-full w-1/2 flex items-center justify-center">
              <ul
                className={twMerge(
                  "*:mb-5",
                  typography({
                    align: "center",
                  })
                )}
              >
                <li>
                  <a>naturainfo@gmail.com</a>
                </li>
                <li>
                  <a> (+387)57/223-945</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="min-w-[200px] grow bg-[#033830]">
          <div className="h-[64px] flex items-center justify-end px-10">
            <div className="relative menu size-[24px] flex justify-center">
              <button className="w-[24px] h-[24px]" onClick={toggle}>
                <X
                  color="white"
                  className={twJoin(
                    "absolute top-0 opacity-0",
                    resolveExitEnterClass(isOpen)
                  )}
                />
              </button>
            </div>
          </div>

          <ul
            className={twMerge(
              "m-auto w-fit",
              typography({
                font: "serif",
                color: "primary",
                weight: "thin",
                size: "xxlarge",
              })
            )}
          >
            {links.map((label, i) => (
              <li key={label}>
                <Link
                  key={label}
                  className={twJoin(
                    "ml-5  h-full pb-5 tracking-tighter  w-fit",
                    i === activeIndex && "!text-white"
                  )}
                  href={`#${ids[i]}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
