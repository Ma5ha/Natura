import { typography } from "@/ui/variants";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import facebook from "@public/facebook-logo.png";
import instagram from "@public/instagram-logo.png";
import { twMerge } from "tailwind-merge";
import { getLocale, getTranslations } from "next-intl/server";
import { navigation } from "@/constants/nav";
import { Link } from "@/i18n/routing";
import { documents } from "@/constants/documentation";

export default async function Footer() {
  const t = await getTranslations();
  const locale = await getLocale();

  return (
    <footer className="bg-black snap-end  text-white pt-10 gap-20 flex flex-col justify-between">
      <div className="px-20 sm:flex gap-10 space-y-10 sm:space-y-0">
        <span
          className={twMerge(
            "first-letter:text-gray-200 h-fit inline-block",
            typography({ semantic: "bigTitle", color: "brand", font: "serif" })
          )}
        >
          Natura
        </span>

        <ul className="flex flex-col gap-2">
          <li
            className={twMerge(
              typography({ semantic: "title", color: "inverse" }),
              typography({ color: "inverse" }),
              "leading-[45px]"
            )}
          >
            {t("general.menu")}
          </li>

          {navigation.map(({ label, href }) => (
            <li
              key={label}
              className={twMerge(
                typography({
                  weight: "paragraph",
                  size: "small",
                }),
                "hover:!text-primary cursor-pointer !text-gray-400"
              )}
            >
              <Link locale={locale} href={href}>
                {t(["nav", label].join("."))}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2">
          <li
            className={twMerge(
              typography({ semantic: "title", color: "inverse" }),
              typography({ color: "inverse" }),
              "leading-[45px]"
            )}
          >
            {t("general.documents")}
          </li>

          {documents.map(({ label, href }) => (
            <li
              key={label}
              className={twMerge(
                typography({
                  weight: "paragraph",
                  size: "small",
                }),
                "hover:!text-primary cursor-pointe !text-gray-400"
              )}
            >
              <Link href={href} locale={locale}>
                {t(["documents", label].join("."))}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" bg-gray-100 flex justify-between px-10 py-20">
        <div className="flex flex-col justify-center items-start h-full md:flex-row md:items-center">
          <h2 className={typography({ semantic: "title", size: "large" })}>
            Contact
          </h2>
          <span className="flex items-center gap-2 md:ml-10">
            <Phone width={20} height={20} className="stroke-gray-500" />
            <a
              href="tel:+387 57 223 945"
              className={typography({
                size: "medium",
              })}
            >
              +38757/223-945
            </a>
          </span>
          <span className="flex items-center gap-2 md:ml-4">
            <Mail width={20} height={20} className="stroke-gray-500" />
            <a
              href="mailto:naturainfo@gmail.com"
              className={typography({
                weight: "paragraph",

                size: "medium",
              })}
            >
              naturainfo@gmail.com
            </a>
          </span>
        </div>

        <div className="bg-inherit flex gap-2 *:size-[24px] items-center">
          <Image alt="instagram logo" src={instagram} width={24} height={24} />
          <Image alt="facebook logo" src={facebook} width={24} height={24} />
        </div>
      </div>
    </footer>
  );
}
