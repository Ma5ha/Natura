import { typography } from "@/ui/variants";
import { Apple, Bed, Stethoscope, Users, Volleyball } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { getTranslations } from "next-intl/server";

type Card = {
  label: string;
  data?: number;
  desc?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const translateCards = async () => {
  const t = await getTranslations("sections.services");

  const leftSideCards = [
    { label: t("activity"), data: 35, Icon: Volleyball },
    { label: t("employed"), data: 45, Icon: Users },
    { label: t("beds"), data: 70, Icon: Bed },
  ];

  const rightSideCards = [
    {
      label: t("staff"),
      desc: t("desc.staff"),
      Icon: Users,
    },
    {
      label: t("doctors"),
      desc: t("desc.doctors"),
      Icon: Stethoscope,
    },
    {
      label: t("diet"),
      desc: t("desc.diet"),
      Icon: Apple,
    },
  ];

  return [leftSideCards, rightSideCards] as [Card[], Card[]];
};

export default async function Services() {
  const t = await getTranslations("sections.services");
  const [leftSideCards, rightSideCards] = await translateCards();
  return (
    <section
      id="services"
      className="page snap-start flex flex-wrap xl:flex-nowrap gap-10 justify-center items-top relative"
    >
      <div className="max-w-prose bg-white px-5 py-20 h-full card backdrop-blur max-h-[800px]">
        <h1 className="title mb-10">{t("title")}</h1>
        <p className={twMerge("text-justify ", typography())}>
          {t.rich("desc.services", {
            br: () => <br />,
          })}
        </p>
      </div>
      <div className="flex max-w-prose flex-wrap *:grow order-first *:w-[20ch] sm:flex-row sm:flex-wrap gap-2 items-start xl:h-fit xl:flex-col">
        {leftSideCards.map(({ label, data, Icon }) => (
          <div key={label} className="card bg-white">
            <div className="flex gap-2">
              <Icon className="stroke-primary " />
              <label className="card-sublabel">{label}</label>
            </div>

            <p className="card-data text-primary ">
              {data}
              <span className="text-black">+</span>
            </p>
          </div>
        ))}
      </div>
      <div className="max-w-prose w-full flex flex-col sm:flex-row sm:w-fit xl:flex-col gap-2">
        {rightSideCards.map(({ label, desc, Icon }) => (
          <div key={label} className=" bg-white card first:mt-0 md:w-[25ch] ">
            <div className="flex gap-2">
              <Icon className="stroke-primary " />{" "}
              <h3 className="text-xl font-semibold">{label}</h3>
            </div>

            <p className={twMerge(typography(), "mt-5")}>{desc}</p>
          </div>
        ))}
      </div>

      {/* <Waves className="absolute h-[100px] w-screen *:w-screen -bottom-20" /> */}
    </section>
  );
}
