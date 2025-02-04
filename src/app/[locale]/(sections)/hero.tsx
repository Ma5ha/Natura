import { button, typography } from "@/ui/variants";
import { getLocale, getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";
import hero from "@public/hero.svg";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default async function Hero() {
  const local = await getLocale();
  const t = await getTranslations();
  return (
    <section
      id="hero"
      className="page snap-center bg-hero bg-cover lg:flex sm:items-center sm:justify-center *:m-auto"
    >
      <Image
        className="sm:order-1"
        src={hero.src}
        alt="hero"
        width={500}
        height={500}
      />
      <div className="max-w-[50ch]">
        <div className="mb-5">
          <h1
            className={typography({
              color: "black",
              semantic: "largeTitle",
            })}
          >
            {t("home.hero.title")}
          </h1>
          <h2
            className={typography({
              semantic: "largeTitleSub",
            })}
          >
            {t("home.hero.subtitle")}
          </h2>
        </div>
        <p className={twMerge(typography(), "mb-5")}>{t("home.hero.desc")}</p>
        <div className="flex gap-2">
          <Link locale={local} href="/#contact" className={button()}>
            {t("general.contact_us")}
          </Link>
          <Link
            locale={local}
            href="/about"
            className={button({ sematic: "secondary" })}
          >
            {t("general.about_us")}
          </Link>
        </div>
      </div>
    </section>
  );
}
