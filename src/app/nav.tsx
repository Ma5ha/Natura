"use client";

import Link from "next/link";
import { NaturaLogo } from "@public/natura-logo";
import { twJoin } from "tailwind-merge";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import useToggle from "./hooks/toggle";
const links = ["Home", "About", "Services", "Contact"];
const ids = ["hero", "about", "services", "contact"];
const activeClass = "text-primary border-b-primary h-full border-b-2 ";

const resolveExitEnterClass = (isOpen: boolean) =>
  isOpen ? "enter-icon" : "exit-icon";
const HamburgerMenu = ({ activeIndex }: { activeIndex: number }) => {
  const [isOpen, toggle] = useToggle();

  return (
    <>
      <div className="relative menu size-[24px] flex justify-center">
        <button className="w-[24px] h-[24px]" onClick={toggle}>
          <Menu
            className={twJoin(
              "absolute  top-0 opacity-0",
              resolveExitEnterClass(!isOpen)
            )}
          />
          <X
            className={twJoin(
              "absolute top-0 opacity-0",
              resolveExitEnterClass(isOpen)
            )}
          />
        </button>
      </div>
      <div
        className={twJoin(
          "fixed bg-white  left-0 top-[64px] p-10 hidden",
          isOpen && "scale-in-tr h-[calc(100vh-64px)] w-full !flex"
        )}
      >
        <ul className="ml-auto">
          {links.map((label, i) => (
            <li key={label}>
              <Link
                key={label}
                className={twJoin(
                  "ml-5 h-full font-semibold pb-5 tracking-tighter ",
                  i === activeIndex && "text-primary"
                )}
                href={`#${ids[i]}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default function Nav() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  useEffect(() => {
    const options = {
      root: document.querySelector("main"),
      rootMargin: "200px",
      threshold: 0.6,
    };
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = ids.indexOf(entry.target.id);
          setActiveSectionIndex(index);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section!);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <nav className="px-10 flex gap-2 justify-between items-center shadow-sm fixed w-screen z-50 bg-white backdrop-blur-sm top-0 h-[64px]">
      <NaturaLogo className="min-w-[50px]" width={50} height={50} />
      <HamburgerMenu activeIndex={activeSectionIndex} />

      {/* <div className="h-full mt-5 pb-5">
        {links.map((label, i) => (
          <Link
            key={label}
            className={twJoin(
              "ml-5 h-full font-semibold pb-5 tracking-tight",
              i === activeSectionIndex && activeClass
            )}
            href={`#${ids[i]}`}
          >
            {label}
          </Link>
        ))}
      </div> */}
    </nav>
  );
}
