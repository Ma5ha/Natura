import { Link } from "@/i18n/routing";
import { typography, button } from "@/ui/variants";
import { getLocale, getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";

export default async function Hero() {
  const t = await getTranslations("about.hero");
  const locale = await getLocale();
  return (
    <section className="w-full  snap-center bg-gray bg-about_hero bg-[length:400px_400px] bg-no-repeat bg-left-bottom  ">
      <div className="bg-linear-to-tl from-primary-900/20 to-slate-600 h-full w-full inline-block p-5">
        <div className="max-w-prose m-auto ">
          <h2
            className={typography({ semantic: "largeTitle", color: "inverse" })}
          >
            {t("title")}
          </h2>
          <p
            className={twMerge(typography({ color: "inverse" }), "mb-5 mt-10")}
          >
            {t("desc")}
          </p>
          <p
            className={twMerge(
              typography({ color: "inverse" }),
              "float-right inline mb-20"
            )}
          >
            {t.rich("action", {
              link: (text) => (
                <Link
                  locale={locale}
                  href="/#contact"
                  className={twMerge(
                    button({ sematic: "ghost" }),
                    "inline-block p-0"
                  )}
                >
                  {text}
                </Link>
              ),
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
