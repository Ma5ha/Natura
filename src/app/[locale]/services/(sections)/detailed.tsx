import { button, typography } from "@/ui/variants";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const sections = [
  {
    title: "Accommodation Services",
    subtitle:
      "We provide accommodations in single, double, and triple rooms, each designed to meet the needs of residents with varying physical and psychological conditions.",
    desc: [
      " Rooms are equipped with modern electric medical beds and panic buttons.",
      "Each room includes a private bathroom, TV, and internet access.",
    ],
  },
  {
    title: "Medical Care",
    subtitle:
      "Our highly skilled nurses and caregivers are available 24/7 to ensure personalized care for every resident",
    desc: [
      "Renowned doctors specializing in cardiology and internal medicine provide medical oversight.",
      "Intensive care services include monitoring, nursing, and treatment for critically ill or injured patients. Vital signs and organ functions are regularly observed to enable early intervention.",
    ],
  },
  {
    title: "Rehabilitation and Physiotherapy",
    subtitle:
      "Our physiotherapy programs are designed to improve mobility and overall well-being",
    desc: [
      "We address conditions like Parkinson’s disease, arthritis, and neurological issues.",
      "Services include manual therapy, movement exercises, and tailored rehabilitation plans.",
      "The goal is to preserve and enhance the health and independence of our residents.",
    ],
  },

  {
    title: "Dietary Services",
    subtitle: "Nutrition plays a vital role in maintaining health.",
    desc: [
      "Meals are fully adapted to the age and health conditions of our residents.",
      "Individual dietary needs and preferences are carefully accommodated.",
    ],
  },
  {
    title: "Emergency Transport",
    subtitle:
      "We provide safe and reliable transport for medical appointments and emergencies.",
    desc: [
      "Our modern ambulance is equipped with medical beds, oxygen tanks, medication shelves, an IV stand, and air conditioning",
    ],
  },
  {
    title: "Leisure and Well-being",
    subtitle:
      "A fulfilling and active lifestyle is part of our holistic approach.",
    desc: [
      "Residents can participate in daily activities designed to improve their mental and emotional well-being",
    ],
  },
];

export default function Detailed() {
  return (
    <section className="page snap-start bg-white/50 w-full">
      <div className="max-w-prose mx-auto">
        <ul className=" bg-gray-100 border-l-2 border-primary-600 py-5 px-5">
          {sections.map((section) => (
            <li key={section.title} className="mb-10">
              <h2
                className={twMerge(
                  typography({ semantic: "largeTitle", color: "black" }),
                  "mb-2"
                )}
              >
                {section.title}
              </h2>
              <h3
                className={twMerge(
                  typography({ semantic: "largeTitleSub" }),
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
          href="/services"
          className={twMerge(button({ sematic: "ghost" }))}
        >
          Contact us!
        </Link>
      </div>
    </section>
  );
}
