import { typography } from "@/ui/variants";
import about1 from "@public/about-1.svg";
import about2 from "@public/about-2.svg";
import {
  Award,
  Handshake,
  HeartHandshake,
  icons,
  PersonStanding,
} from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const pWarper = "lg:flex lg:flex-wrap lg:items-center w-fit space-y-2 *:grow";
const p = "max-w-[40ch]";
const image = "max-w-[40ch] m-auto";

const values = [
  {
    icon: <HeartHandshake />,
    title: "Kindness",
    description: "Treating every resident like family.",
  },
  {
    icon: <Award />,
    title: "Excellence",
    description: "Providing care that goes beyond expectations.",
  },
  {
    icon: <Handshake />,
    title: "Respect",
    description: "Honoring every individual’s story, needs, and dignity.",
  },
  {
    icon: <PersonStanding />,
    title: "Community",
    description: "Building a home where no one feels alone.",
  },
];

export default function Values() {
  return (
    <div className="p-5 snap snap-center space-y-5">
      <h2
        className={twMerge(
          "m-auto w-fit",
          typography({ semantic: "largeTitle", color: "black" })
        )}
      >
        We will give{" "}
        <span className="bg-roof bg-no-repeat bg-top bg-contain bg-">you</span>
      </h2>
      <ul className="m-auto grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-prose">
        {values.map(({ title, description, icon }) => (
          <li
            key={title}
            className=" bg-white py-2 px-4 rounded-lg flex gap-3 items-center"
          >
            <span className="*:stroke-primary rounded-full size-10 min-w-10 min-h-10 flex justify-center items-center bg-gray-100">
              {icon}
            </span>
            <div>
              <h4
                className={twMerge(
                  typography({ semantic: "title", color: "primary" })
                )}
              >
                {title}:
              </h4>
              <p className={typography()}>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
