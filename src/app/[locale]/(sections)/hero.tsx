import { button, typography } from "@/ui/variants";
import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";
import hero from "@public/hero.svg";

export default async function Hero() {
  // const t = await getTranslations("sections.hero");
  return (
    <section
      id="hero"
      className="page snap-center bg-hero bg-cover sm:flex sm:items-center sm:justify-center"
    >
      <img className="sm:order-1" src={hero.src} alt="hero" />
      <div className="max-w-[50ch]">
        <div className="mb-5">
          <h1
            className={typography({
              color: "black",
              semantic: "largeTitle",
            })}
          >
            Experience Peaceful, Personalized Senior Care
          </h1>
          <h2
            className={typography({
              semantic: "largeTitleSub",
            })}
          >
            A Tranquil Setting, Tailored Just for You
          </h2>
        </div>
        <p className={twMerge(typography(), "mb-5")}>
          At Natura, we provide exceptional elderly care in a calm,
          nature-filled environment, designed to support physical health,
          emotional well-being, and a sense of community
        </p>
        <div className="flex gap-2">
          <button className={button()}>Contact us</button>
          <button className={button({ sematic: "secondary" })}>About us</button>
        </div>
      </div>
    </section>
  );
}
