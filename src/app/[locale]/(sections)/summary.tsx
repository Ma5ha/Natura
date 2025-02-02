import { typography } from "@/ui/variants";
import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";

export default async function Summary() {
  const t = await getTranslations("home.summary");
  const list = [1, 2, 3, 4, 5].map((i) => ({
    title: t(`list.${i}.title`),
    text: t(`list.${i}.text`),
  }));

  return (
    <section className="page snap-center flex flex-col items-center justify-center bg-white/50 bg-care bg-fixed bg-contain bg-no-repeat bg-center">
      <div className="mb-5 bg-gray-100 px-5 py-20 rounded-lg">
        <h2
          className={typography({
            color: "black",
            semantic: "largeTitle",
            font: "serif",
          })}
        >
          <span className="text-primary">N</span>atura
        </h2>
        <h3 className={typography({})}>{t("subtitle")}</h3>

        <ul className="mt-10 max-w-lg  marker:text-primary marker:text-[30px] marker:text-center">
          {list.map(({ title, text }) => (
            <li key={title} className="mb-5 flex items-start gap-5">
              <span className="min-w-5 size-5 inline-block bg-primary rounded-full"></span>
              <p className={typography()}>
                <span
                  className={twMerge(
                    typography({ semantic: "title", color: "primary" }),
                    "inline"
                  )}
                >
                  {title}:{" "}
                </span>
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
