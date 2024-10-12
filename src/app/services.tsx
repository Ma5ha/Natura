import { Waves } from "@/public/waves";
import { Apple, Bed, Stethoscope, Users, Volleyball } from "lucide-react";

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
    <section className="min-h-full snap-center p-5 md:p-20 *:mb-20 flex flex-wrap  gap-10 justify-center items-center relative">
      <div className="flex flex-col grow md:max-w-[20ch] md:min-w-[20ch] order-3 lg:order-none gap-10 justify-center">
        {leftSideCards.map(({ label, data, Icon }) => (
          <div className="card w-full">
            <div className="flex gap-2">
              <Icon className="stroke-primary " />{" "}
              <label className="card-sublabel">{label}</label>
            </div>

            <p className="card-data text-primary ">
              {data}
              <span className="text-black">+</span>
            </p>
          </div>
        ))}
      </div>
      <div className="max-w-prose">
        <h1 className="title mb-10">Services</h1>
        <p>
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
      <div className="md:max-w-[30ch]">
        {rightSideCards.map(({ label, desc, Icon }) => (
          <div className="w-full mt-10">
            <div className="flex gap-2">
              <Icon className="stroke-primary " />{" "}
              <h3 className="text-xl font-semibold">{label}</h3>
            </div>

            <p className="mt-5">{desc}</p>
          </div>
        ))}
      </div>

      <Waves className="absolute h-[100px] -bottom-20" />
    </section>
  );
}
