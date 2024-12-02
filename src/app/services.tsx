import { Waves } from "@/public/waves";
import { typography } from "@/ui/variants";
import { Apple, Bed, Stethoscope, Users, Volleyball } from "lucide-react";
import { twMerge } from "tailwind-merge";

const leftSideCards = [
  { label: "Activity", data: 35, Icon: Volleyball },
  { label: "Employed", data: 45, Icon: Users },
  { label: "Beds", data: 70, Icon: Bed },
];

const rightSideCards = [
  {
    label: "Staff",
    desc: "Naše visokokvalifikovane medicinske sestre i njegovateljice, kao i ostalo osoblje je uvijek tu za naše korisnike",
    Icon: Users,
  },
  {
    label: "Doctors",
    desc: "O našim korisnicima brinu priznati doktori iz oblasti kardiologije, interne medicine…",
    Icon: Stethoscope,
  },
  {
    label: "Diet",
    desc: "Ishrana je u potpunosti prilagođena životnoj dobi korisnika i može se prilagođavati u odnosu na zdravstveno stanje",
    Icon: Apple,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="page snap-start flex flex-wrap xl:flex-nowrap gap-10 justify-center items-top relative"
    >
      <div className="max-w-prose bg-white px-5 py-20 h-full card backdrop-blur max-h-[800px]">
        <h1 className="title mb-10">Services</h1>
        <p className={twMerge("text-justify ", typography())}>
          "Natura" offers a comprehensive care program for the elderly,
          providing tailored medical and personal services. Our highly qualified
          nurses and caregivers are always available, ensuring personal care and
          assistance to each resident.
          <br />
          <br />
          The meals provided are fully adapted to the specific dietary and
          health needs of the elderly. Experienced doctors, specializing in
          cardiology and internal medicine, take care of the residents' health,
          while a modern ambulance service is available for emergency transport
          and medical appointments upon request.
          <br />
          <br />
          This holistic approach ensures a safe, comfortable, and supportive
          environment for all residents.
        </p>
      </div>
      <div className="flex max-w-prose flex-wrap *:grow order-first *:w-[20ch] sm:flex-row sm:flex-wrap gap-2 items-start xl:h-fit xl:flex-col">
        {leftSideCards.map(({ label, data, Icon }) => (
          <div className="card bg-white">
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
          <div className=" bg-white card first:mt-0 md:w-[25ch] ">
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
