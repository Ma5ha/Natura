import { typography } from "@/ui/variants";
import { Apple, Bed, Stethoscope, Users, Volleyball } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";

const getLeftSideCards = async () => {
  const t = await getTranslations("services.leftSideCards");
  return [
    { label: t("1"), data: 35, Icon: Volleyball },
    { label: t("2"), data: 45, Icon: Users },
    { label: t("3"), data: 70, Icon: Bed },
  ];
};

const getRightSideCards = async () => {
  const t = await getTranslations("services.rightSideCards");
  return [
    { label: t("1.label"), desc: t("1.desc"), Icon: Users },
    { label: t("2.label"), desc: t("2.desc"), Icon: Stethoscope },
    { label: t("3.label"), desc: t("3.desc"), Icon: Apple },
  ];
};

export default async function OurServices() {
  const t = await getTranslations("services");
  const leftSideCards = await getLeftSideCards();
  const rightSideCards = await getRightSideCards();
  return (
    <section className=" snap-start flex flex-wrap xl:flex-nowrap gap-10 justify-center items-top relative p-5 md:p-20">
      <div className="max-w-prose bg-white px-5 py-20 h-full card backdrop-blur-sm max-h-[800px]">
        <h1 className="title mb-10">{t("title")}</h1>
        <p className={twMerge("text-justify ", typography())}>
          {t.rich("desc", {
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
    </section>
  );
}
