"use client";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import Link from "next/link";
import { NaturaLogo } from "@public/natura-logo";
import { twJoin } from "tailwind-merge";
import { useEffect, useState } from "react";

import { useLocale } from "next-intl";
import LocalSwitcher from "../components/local-switcher";
import HamburgerMenu from "../components/hamburger-menu";
import useMedia from "../hooks/media";
import Show from "../components/show";
const links = ["Home", "About", "Services", "Contact"];
const ids = ["hero", "about", "services", "contact"];
const activeClass = "text-primary border-b-primary h-full border-b-2 ";

export default function Nav() {
  const isLg = !useMedia(
    `(min-width:${resolveConfig(tailwindConfig).theme.screens.lg})`
  );

  const locale = useLocale();
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

  // const t = useTranslations();

  return (
    <nav className="px-10 flex gap-2 justify-between items-center shadow-sm fixed w-screen z-50 bg-white backdrop-blur-sm top-0 h-[64px]">
      <NaturaLogo
        lang={locale as "sr" | "en"}
        className="min-w-[50px]"
        width={50}
        height={50}
      />
      <div className="flex gap-2 ">
        <Show when={isLg}>
          <HamburgerMenu activeIndex={activeSectionIndex} />
        </Show>

        <div className="h-full box-content hidden lg:block mr-5">
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
        </div>

        <LocalSwitcher />
      </div>
    </nav>
  );
}
