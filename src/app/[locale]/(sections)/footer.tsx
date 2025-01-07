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
import { twChain } from "@/ui/tw-chain";

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
          <span
            className={twMerge(
              typography({ semantic: "title", color: "inverse" }),
              typography({ color: "inverse" }),
              "leading-[45px]"
            )}
          >
            {t("general.menu")}
          </span>

          {navigation.map(({ label, href }) => (
            <li
              key={label}
              className={twMerge(
                typography({
                  weight: "paragraph",
                  size: "small",
                }),
                "hover:!text-primary cursor-pointer"
              )}
            >
              <Link locale={locale} href={href}>
                {t(["nav", label].join("."))}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2">
          <span
            className={twMerge(
              typography({ semantic: "title", color: "inverse" }),
              typography({ color: "inverse" }),
              "leading-[45px]"
            )}
          >
            {t("general.documents")}
          </span>

          {documents.map(({ label, href }) => (
            <li
              key={label}
              className={twMerge(
                typography({
                  weight: "paragraph",
                  size: "small",
                }),
                "hover:!text-primary cursor-pointer"
              )}
            >
              <a href={href} download>
                {t(["documents", label].join("."))}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" bg-gray-100 flex justify-between px-10 py-20">
        <div className="flex flex-col justify-center items-start h-full md:flex-row md:items-center">
          <h4 className={typography({ semantic: "title" })}>Contact</h4>
          <span className="flex items-center gap-2 md:ml-10">
            <Phone width={14} height={14} className="stroke-gray-500" />
            <a
              href="tel:+387 57 223 945"
              className={typography({
                size: "small",
              })}
            >
              +38757/223-945
            </a>
          </span>
          <span className="flex items-center gap-2 md:ml-4">
            <Mail width={14} height={14} className="stroke-gray-500" />
            <a
              href="mailto:naturainfo@gmail.com"
              className={typography({
                weight: "paragraph",

                size: "small",
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
