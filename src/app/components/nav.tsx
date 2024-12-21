"use client";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import { NaturaLogo } from "@public/natura-logo";
import { twJoin } from "tailwind-merge";

import { useLocale } from "next-intl";
import LocalSwitcher from "../components/local-switcher";
import HamburgerMenu from "../components/hamburger-menu";
import useMedia from "../hooks/media";
import Show from "../components/show";
import { Link } from "@/i18n/routing";
const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Faq", href: "/faq" },
  { label: "Application", href: "/application" },
];

const activeClass = "text-primary border-b-primary h-full border-b-2 ";

export default function Nav() {
  const isLg = !useMedia(
    `(min-width:${resolveConfig(tailwindConfig).theme.screens.lg})`
  );

  const locale = useLocale();

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
          <HamburgerMenu activeIndex={0} />
        </Show>

        <div className="h-full box-content hidden lg:block mr-5">
          {links.map(({ label, href }, i) => (
            <Link
              key={label}
              className={twJoin(
                "ml-5 h-full font-semibold pb-5 tracking-tight",
                i === 0 && activeClass
              )}
              href={href}
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
