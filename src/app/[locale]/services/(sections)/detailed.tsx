import { Link } from "@/i18n/routing";
import { button, typography } from "@/ui/variants";
import { getTranslations } from "next-intl/server";

import { twMerge } from "tailwind-merge";

interface Section {
  title: string;
  subtitle: string;
  desc: string[];
}

export default async function Detailed() {
  const t = await getTranslations("services.sections");
  const keys = [1, 2, 3, 4, 5, 6] as const;
  const sections = keys.map((i) => t.raw(i.toString())) as unknown as Section[];

  return (
    <section className="page snap-start bg-white/50 w-full">
      <div className="mx-auto">
        <ul className=" bg-gray-100 border-l-2 border-primary-600 py-5 px-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {sections.map((section) => (
            <li key={section.title} className="mb-10">
              <h2
                className={twMerge(
                  typography({
                    semantic: "bigTitle",
                    color: "black",
                    size: "xlarge",
                  }),
                  "mb-2"
                )}
              >
                {section.title}
              </h2>
              <h3
                className={twMerge(
                  typography({ semantic: "largeTitleSub", size: "large" }),
                  "mb-5"
                )}
              >
                {section.subtitle}
              </h3>
              <ul className="list-disc px-5">
                {section.desc.map((desc) => (
                  <li
                    key={desc}
                    className={twMerge(typography({ color: "black" }), "mb-2")}
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <Link
          href="/#contact"
          className={twMerge(button({ sematic: "ghost" }))}
        >
          Contact us!
        </Link>
      </div>
    </section>
  );
}
