import { button, typography } from "@/ui/variants";
import { twMerge } from "tailwind-merge";
import hero from "@public/hero.svg";
const titleText = [
  {
    title: "Room options",
    text: "Single, double, and triple rooms, equipped with modern medical beds, panic buttons, private bathrooms, TV, and internet.",
  },
  {
    title: "Physiotherapy services",
    text: "Customized therapy programs to aid recovery from injuries, surgeries, and chronic conditions like Parkinson's, arthritis, and neurological disorders, improving mobility and independence.",
  },
  {
    title: "Intensive care services",
    text: "Specialized care with continuous monitoring of vital signs, ensuring timely medical interventions for patients with serious health conditions.",
  },
  {
    title: "Personalized care",
    text: "Our skilled professionals work together to address the physical, emotional, and social needs of every resident.",
  },
  {
    title: "Holistic approach to senior care",
    text: "We focus on creating a warm, community-centered environment where each resident feels valued and supported.",
  },
];

export default async function Summary() {
  // const t = await getTranslations("sections.hero");
  return (
    <section className="page snap-center flex flex-col items-center justify-center bg-white/50">
      <div className="mb-5 bg-gray-100 px-5 py-20 rounded-lg">
        <h2
          className={typography({
            color: "black",
            semantic: "largeTitle",
            font: "serif",
          })}
        >
          <span className="text-primary">N</span>atura
        </h2>
        <h3 className={typography({})}>
          Personalized elderly care in a peaceful, nature-filled environment.
        </h3>

        <ul className="mt-10 max-w-lg  marker:text-primary marker:text-[30px] marker:text-center">
          {titleText.map(({ title, text }) => (
            <li key={title} className="mb-5 flex items-start gap-5">
              <span className="min-w-5 size-5 inline-block bg-primary rounded-full"></span>
              <p className={typography()}>
                <span
                  className={twMerge(
                    typography({ semantic: "title", color: "primary" }),
                    "inline"
                  )}
                >
                  {title}:{" "}
                </span>
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
