import { typography } from "@/ui/variants";
import { ChevronRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const Faq: FC<{
  params: Promise<{ locale: "sr" | "en" }>;
}> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("faq");
  const faq = new Array(14).fill(1).map((_, i) => ({
    question: t(`questions.${i + 1}.question`),
    answer: t(`questions.${i + 1}.answer`),
  }));

  return (
    <section className="snap-start page">
      <div className="max-w-[70ch] mx-auto">
        <h2
          className={twMerge(
            typography({ semantic: "title", size: "xxlarge" })
          )}
        >
          {t("title")}{" "}
          <span className={typography({ size: "large", color: "primary" })}>
            ({t("subtitle")})
          </span>
        </h2>

        <ul className="mt-10">
          {faq.map(({ question, answer }) => (
            <li key={question} className="mb-2">
              <details className=" p-2 rounded-lg cursor-pointer bg-white/50 [&[open]>*>svg]:rotate-90">
                <summary
                  className={twMerge(
                    "list-none flex",
                    typography({ weight: "semi", color: "black" })
                  )}
                >
                  {question}
                  <ChevronRight
                    width={16}
                    className="ml-auto stroke-gray-600"
                  />
                </summary>
                <p
                  className={twMerge(
                    typography({ color: "primary", size: "small" }),
                    "mt-2"
                  )}
                >
                  {answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
