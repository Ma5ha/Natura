import { button, typography } from "@/ui/variants";
import { Download } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { twMerge } from "tailwind-merge";

export default async function PersonalCard({
  params,
}: {
  params: Promise<{ locale: "sr" | "en" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("personalCard");
  const articlesList1 = new Array(20)
    .fill(1)
    .map((_, i) => t(`article1.list.${i + 1}`));
  const articlesList2 = new Array(9)
    .fill(1)
    .map((_, i) => t(`article2.list.${i + 1}`));
  const articlesList3 = new Array(5)
    .fill(1)
    .map((_, i) => t(`article3.list.${i + 1}`));
  const articlesList4 = new Array(4)
    .fill(1)
    .map((_, i) => t(`article4.list.${i + 1}`));

  return (
    <section
      className={twMerge(
        "page snap-start flex flex-col justify-center items-center",
        typography()
      )}
    >
      <div className="max-w-[500px]">
        <h1
          className={twMerge(
            typography({ semantic: "bigTitle", color: "black" }),
            "mb-5"
          )}
        >
          {t("title")}
        </h1>
        <article className="mb-5">
          <h2 className={typography({ semantic: "title" })}>
            {t("article1.title")}
          </h2>
          <ul
            className={twMerge(
              typography(),
              "list-inside list-disc marker:text-primary"
            )}
          >
            {articlesList1.map((article, i) => (
              <li key={i}>{article}</li>
            ))}
          </ul>
        </article>
        <article className="mb-5">
          <h2 className={typography({ semantic: "title" })}>
            {t("article2.title")}
          </h2>
          <ul
            className={twMerge(
              typography(),
              "list-inside list-disc marker:text-primary"
            )}
          >
            {articlesList2.map((article, i) => (
              <li key={i}>{article}</li>
            ))}
          </ul>
        </article>
        <article className="mb-5">
          <h2 className={typography({ semantic: "title" })}>
            {t("article3.title")}
          </h2>
          <ul
            className={twMerge(
              typography(),
              "list-inside list-disc marker:text-primary"
            )}
          >
            {articlesList3.map((article, i) => (
              <li key={i}>{article}</li>
            ))}
          </ul>
        </article>
        <article className="mb-5">
          <h2 className={typography({ semantic: "title" })}>
            {t("article4.title")}
          </h2>
          <ul
            className={twMerge(
              typography(),
              "list-inside list-disc marker:text-primary"
            )}
          >
            {articlesList3.map((article, i) => (
              <li key={i}>{article}</li>
            ))}
          </ul>
        </article>
        <a
          href="/documentation/lični-list-korisinka.docx"
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
