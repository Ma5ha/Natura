import { typography } from "@/ui/variants";
import { Award, Handshake, HeartHandshake, PersonStanding } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";

const getValues = async () => {
  const t = await getTranslations("about.values");
  return [
    <HeartHandshake key="1" />,
    <Award key="2" />,
    <Handshake key="3" />,
    <PersonStanding key="4" />,
  ].map((icon, i) => ({
    key: i,
    icon,
    title: t(`${i + 1}.title`),
    description: t(`${i + 1}.desc`),
  }));
};

export default async function Values() {
  const t = await getTranslations("about.values");
  const values = await getValues();
  return (
    <div className="p-5 snap snap-center space-y-5">
      <h2
        className={twMerge(
          "m-auto w-fit",
          typography({ semantic: "largeTitle", color: "black" })
        )}
      >
        {t.rich("title", {
          span: (text) => (
            <span className="bg-roof bg-no-repeat bg-top bg-[length:80px_10px]">
              {text}
            </span>
          ),
        })}
      </h2>
      <ul className="m-auto grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-prose">
        {values.map(({ title, description, icon }) => (
          <li
            key={title}
            className=" bg-white py-2 px-4 rounded-lg flex gap-3 items-center"
          >
            <span className="*:stroke-primary rounded-full size-10 min-w-10 min-h-10 flex justify-center items-center bg-gray-100">
              {icon}
            </span>
            <div>
              <h3
                className={twMerge(
                  typography({ semantic: "title", color: "primary" })
                )}
              >
                {title}:
              </h3>
              <p className={typography()}>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
