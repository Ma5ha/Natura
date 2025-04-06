import { typography } from "@/ui/variants";
import { getTranslations } from "next-intl/server";
import React from "react";
import { twMerge } from "tailwind-merge";

const generateRandom = () => {
  const id: number[] = [];
  while (true) {
    const number = Math.floor(Math.random() * 5);
    if (!id.includes(number)) id.push(number);
    if (id.length === 3) break;
  }

  return id;
};
const Testimonial = async () => {
  const id = generateRandom();
  const t = await getTranslations();
  const testimonials: Array<{
    title: string;
    body: string[];
    signature: string;
  }> = t.raw("testimonials");

  const selectedTestimonials = id.map((id) => testimonials[id]);
  return (
    <div className="snap-start py-10 w-full flex justify-center items-center flex-wrap  bg-gray-600 px-5">
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center">
        {selectedTestimonials.map(({ body, title, signature }) => (
          <div
            key={title}
            className={"card bg-white max-w-[40ch] flex flex-col  gap-2"}
          >
            <h4
              className={typography({
                color: "black",
                size: "large",
                weight: "bold",
              })}
            >
              {title}
            </h4>
            {body.map((p) => (
              <p key={p} className={twMerge(typography(), "indent-4 ")}>
                {p}
              </p>
            ))}

            <div className=" bg-gray-100 rounded-lg px-2 py-1 w-fit mt-auto">
              <span
                className={typography({
                  color: "black",
                  weight: "bold",
                  size: "medium",
                })}
              >
                {signature}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
