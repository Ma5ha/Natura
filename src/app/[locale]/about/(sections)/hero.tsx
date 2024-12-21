import { typography, button } from "@/ui/variants";
import { twMerge } from "tailwind-merge";

export default function Hero() {
  return (
    <section className="max-w-prose page snap-center">
      <div className="max-w-prose">
        <h2 className={typography({ semantic: "largeTitle", color: "black" })}>
          Our story
        </h2>
        <p className={twMerge(typography(), "mb-20 mt-10")}>
          In 2012, Natura began with a dream to create more than a care
          facility—we wanted to create a home. Nestled in a peaceful and scenic
          location, our space is designed to offer seniors a retreat where they
          feel cared for and connected. Over the years, we’ve grown into a
          trusted place where residents and their families find comfort, knowing
          their loved ones are in caring hands.
        </p>
        <div className="flex gap-2">
          <button className={button()}>Contact us</button>
          <button className={button({ sematic: "secondary" })}>
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
