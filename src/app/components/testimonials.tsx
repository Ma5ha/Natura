import { typography } from "@/ui/variants";
import React from "react";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    content: [
      "O Domu za starija lica “Natura” mogu reći sve najbolje. Uprava profesionalno rukovodi radom doma uz, isto tako, stručno i ljubazno osoblje koje pruža vrhunsku njegu, što se jednako odnosi na ishranu i higijenu.",
      "Zgrada je nova i stalno održavana, sa lijepom terasom, opremljena antidekubitalnim madracima, električnim krevetima, TV-om i pristupom internetu. Ukratko, moja majka izgleda i osjeća se bolje, znatno bolje nego prije smještaja u dom “Natura”. Sve pohvale!",
    ],
    author: "Neven Pecelj",
    job: "Posjetilac",
  },
  {
    content: [
      "Već devet mjeseci je ovaj dom razlog zbog kojeg moj deda još uvijek ima snage da se bori i živi za svaki dan. Prije svega, Daliborka, ali i ostatak ekipe imaju savršen, kako profesionalni tako i ljudski pristup, što je meni najvažnije. Hvala vam od srca na tome.",
    ],
    author: "Maja Č.",
    job: "Posjetilac",
  },
];
const Testimonial = () => {
  return (
    <div className="page snap-start !min-h-[400px] ">
      {/* <h1 className="title mb-10 border-b pb-5 border-primary  m-auto">
        They say about us
      </h1> */}
      <div className="flex gap-2">
        {testimonials.map(({ content, author, job }, i) => (
          <div className="card bg-white max-w-[50ch]">
            {content.map((p, i) => (
              <p key={i} className={twMerge(typography())}>
                {p}
              </p>
            ))}

            <div className="mt-10">
              <h3
                className={typography({
                  color: "black",
                  weight: "bold",
                  size: "medium",
                })}
              >
                {author}
              </h3>
              <div
                className={twMerge(
                  typography({ color: "primary" }),
                  "text-xs "
                )}
              >
                {job}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
