"use client";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import { NaturaLogo } from "../../../public/natura-logo";
import { twJoin } from "tailwind-merge";

import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "../components/local-switcher";
import HamburgerMenu from "../components/hamburger-menu";
import useMedia from "../hooks/media";
import Show from "../components/show";
import { Link, usePathname } from "@/i18n/routing";
import { navigation } from "@constants/nav";

const activeClass = "text-primary border-b-primary h-full border-b-2 ";

export default function Nav() {
  const isLg = !useMedia(
    `(min-width:${resolveConfig(tailwindConfig).theme.screens.lg})`
  );

  const t = useTranslations("nav");
  const pathname = usePathname();
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
          <HamburgerMenu />
        </Show>

        <div className="h-full box-content hidden lg:block mr-5">
          {navigation.map(({ label, href }) => (
            <Link
              key={label}
              className={twJoin(
                "ml-5 h-full font-semibold pb-5 tracking-tight",
                href === pathname && activeClass
              )}
              href={href}
            >
              {t(label)}
            </Link>
          ))}
        </div>

        <LocalSwitcher />
      </div>
    </nav>
  );
}
