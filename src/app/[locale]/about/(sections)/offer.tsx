import { typography } from "@/ui/variants";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const offerings = [
  {
    title: "A Tranquil Setting for Comfort and Care",
    icon: "/tranquil.png",
    description:
      "Nestled in a serene environment, our home is surrounded by natural beauty, creating a peaceful atmosphere perfect for rehabilitation and elderly living.",
  },
  {
    title: "Thoughtfully Designed Accommodations",
    icon: "/beds.png",
    description:
      "We offer single, double, and triple rooms, each equipped with private bathrooms, TVs, internet, and modern electric medical beds. Every detail ensures safety and comfort.",
  },
  {
    title: "Personalized, Around-the-Clock Care",
    icon: "/clock-24.png",
    description:
      "Our team is available 24/7, providing attentive medical care and addressing personal needs with compassion and expertise.",
  },

  {
    title: "Moments of Joy and Connection",
    icon: "/community.png",
    description:
      "From engaging activities and serene walks to meals tailored to personal preferences, we foster a vibrant community where residents feel supported and valued.",
  },
];

export default function WeOffer() {
  return (
    <section className="page snap snap-center bg-white w-full *:m-auto">
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
          Here You will find
        </h2>
        <ul className=" mt-10 ">
          {offerings.map(({ title, description, icon }) => (
            <li key={title} className="mb-5 flex gap-5 items-center">
              <Image
                width={50}
                height={50}
                src={icon}
                alt={title}
                className="w-[50px] h-[50px]"
              />
              <div>
                <h3
                  className={twMerge(
                    typography({
                      color: "black",
                      semantic: "title",
                    }),
                    "bg-primary-50/50 w-fit p-1"
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
