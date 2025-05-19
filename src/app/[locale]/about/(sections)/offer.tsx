import { typography } from "@/ui/variants";
import { twMerge } from "tailwind-merge";
import { getTranslations } from "next-intl/server";

const icon = ["/tranquil.png", "/beds.png", "/clock-24.png", "/community.png"];

const getOffer = async () => {
  const t = await getTranslations("about.services");
  return icon.map((icon, i) => ({
    title: t(`${i + 1}.title`),
    description: t(`${i + 1}.desc`),
    icon,
  }));
};

export default async function WeOffer() {
  const t = await getTranslations("about.services");
  const offer = await getOffer();
  return (
    <section className="page snap snap-center bg-white w-full *:m-auto min-h-fit">
      <div className="max-w-prose pl-5 py-5">
        <h2
          className={twMerge(
            typography({
              color: "black",
              semantic: "largeTitle",
            }),
            "mb-10 w-fit"
          )}
        >
          {t("title")}
        </h2>
        <ul className=" mt-10 ">
          {offer.map(({ title, description }) => (
            <li key={title} className="mb-5 flex gap-5 items-center">
              <div>
                <h3
                  className={twMerge(
                    typography({
                      color: "black",
                      semantic: "title",
                    }),
                    " w-fit p-1"
                  )}
                >
                  {title}
                </h3>
                <p className={twMerge(typography())}>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
