import { button, typography } from "@/ui/variants";
import { Clock, Cross, Info, Mail, MapPin } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { getTranslations } from "next-intl/server";
import Input from "@/app/components/input";

const translateCards = async () => {
  const t = await getTranslations("sections.contact");
  return [
    { title: t("email"), Icon: Mail, children: "naturainfo@gmail.com" },
    { title: t("address"), Icon: MapPin, children: "Pale, Pribanjska 55" },
    {
      title: t("ambulance"),
      Icon: Cross,
      children: (
        <>
          <span>+387 57 223 945</span> <span>+387 65 213 666</span>
        </>
      ),
    },
    {
      title: t("info"),
      Icon: Info,
      children: (
        <>
          <span>+387 57 223 945</span> <span>+387 65 213 666</span>
        </>
      ),
    },
    {
      title: t("hours"),
      Icon: Clock,
      children: (
        <>
          <span>{t("monSun")}</span> <span>08:00-17:00</span>
        </>
      ),
    },
  ];
};

export default async function Contact() {
  const t = await getTranslations("sections.contact");
  const info = await translateCards();
  return (
    <section
      id="contact"
      className="page snap-start flex flex-wrap gap-10 justify-center items-center relative lg:flex-row"
    >
      <div
        id="info"
        className="flex flex-wrap max-w-prose gap-2 xl:flex-col l:w-[30ch] lg:self-start"
      >
        {info.map(({ title, Icon, children }) => (
          <div
            key={title}
            className="card bg-white sm:w-[30ch] grow  last:mr-auto max-w-1/2"
          >
            <div className="flex gap-2 ">
              <Icon className="stroke-primary" />
              <h3
                className={twMerge(typography({ semantic: "title" }), "mb-3")}
              >
                {title}
              </h3>
            </div>
            <p className={twMerge("flex flex-col", typography())}>{children}</p>
          </div>
        ))}
      </div>

      <form className="card *:mb-8 w-full max-w-prose  bg-white self-start">
        <h2 className="title">{t("title")}</h2>

        <div className="flex flex-wrap gap-8 w-full">
          <Input
            label={t("form.email")}
            placeholder={t("form.placeholders.email")}
          />
          <Input
            label={t("form.subject")}
            placeholder={t("form.placeholders.subject")}
          />
        </div>

        <div className="flex flex-wrap gap-8 w-full">
          <Input
            label={t("form.firstName")}
            placeholder={t("form.placeholders.firstName")}
          />
          <Input
            label={t("form.lastName")}
            placeholder={t("form.placeholders.lastName")}
          />
        </div>

        <div className="input-control grow">
          <label>{t("form.message")}</label>
          <textarea placeholder={t("form.placeholders.message")} />
        </div>

        <button className={twMerge(button(), "ml-auto")}>
          <Mail />
          {t("form.button")}
        </button>
      </form>
    </section>
  );
}
