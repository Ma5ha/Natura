import { button, typography } from "@/ui/variants";
import { Download } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { twMerge } from "tailwind-merge";

export default async function Documents({
  params,
}: {
  params: Promise<{ locale: "sr" | "en" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("protocol");
  const documentsList = new Array(5)
    .fill(1)
    .map((value, i) => t(`documentationList.${value + i}`));
  const clothesList = new Array(8)
    .fill(1)
    .map((value, i) => t(`clothesList.${value + i}`));
  const otherList = new Array(6)
    .fill(1)
    .map((value, i) => t(`otherList.${value + i}`));
  return (
    <section className="page snap-start flex flex-col items-center">
      <div>
        <h1
          className={twMerge(
            typography({ semantic: "bigTitle", color: "black" })
          )}
        >
          {t("title")}
          <span
            className={twMerge(
              typography({ font: "serif", semantic: "bigTitle" }),
              "first-letter:!text-primary-600 h-fit inline-block"
            )}
          >
            Natura
          </span>
        </h1>
        <p
          className={twMerge(
            typography({ size: "large" }),
            "mb-5 !leading-tight"
          )}
        >
          {t("subtitle")}
        </p>

        <article className="mb-5">
          <div className="flex justify-center items-center mb-2 w-fit gap-[1ch]">
            <h2 className={twMerge(typography({ semantic: "title" }))}>
              {t("documentation")}
            </h2>
          </div>

          <ul
            className={twMerge(
              typography(),
              "list-inside list-disc marker:text-primary"
            )}
          >
            {documentsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="mb-5">
          <h2 className={twMerge(typography({ semantic: "title" }), "mb-2")}>
            {t.rich("clothes", { small: (value) => <small>{value}</small> })}
          </h2>
          <ul
            className={twMerge(
              typography(),
              "list-inside list-disc marker:text-primary"
            )}
          >
            {clothesList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="mb-5">
          <h2 className={twMerge(typography({ semantic: "title" }), "mb-2")}>
            Ostalo
          </h2>
          <ul
            className={twMerge(
              typography(),
              "list-inside list-disc marker:text-primary"
            )}
          >
            {otherList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <a
          href="/documentation/protokol-za-prijem.docx"
          download
          className={twMerge(
            button({ sematic: "ghost" }),
            " w-fit float-right"
          )}
        >
          {t("button")} <Download height={20} />
        </a>
      </div>
    </section>
  );
}
