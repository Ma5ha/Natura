import { Link } from "@/i18n/routing";
import { button, typography } from "@/ui/variants";
import about1 from "@public/about-1.svg";
import about2 from "@public/about-2.svg";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const pWarper = "lg:flex lg:flex-wrap lg:items-center w-fit space-y-2 *:grow";
const p = "max-w-[40ch]";
const image = "max-w-[40ch] m-auto";
export default async function Mission() {
  const t = await getTranslations("about.mission");
  const locale = await getLocale();
  return (
    <section className="page snap-center bg-white/50 w-full">
      <div className="m-auto *:m-auto space-y-20  bg-white/50 p-5 rounded-lg">
        <h2
          className={twMerge(
            "m-auto w-fit",
            typography({ semantic: "largeTitle", color: "black" })
          )}
        >
          {t("title")}
        </h2>
        <div className={twMerge(pWarper, "")}>
          <Image
            src={about1.src}
            alt="about-2"
            width={400}
            height={400}
            className={image}
          />
          <p className={twMerge(typography(), p)}>{t("mission")}</p>
        </div>

        <div className={pWarper}>
          <Image
            className={(twMerge(image), "order-1")}
            src={about2.src}
            alt="about-2"
            width={400}
            height={400}
          />
          <p className={twMerge(typography(), p)}>{t("goals")}</p>
        </div>
      </div>
    </section>
  );
}
