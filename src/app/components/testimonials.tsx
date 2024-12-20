import { typography } from "@/ui/variants";
import React from "react";
import { twMerge } from "tailwind-merge";
import shape from "./shape.svg";

const additionalTestimonials = [
  {
    content: [
      "Ja sam u Domu za starija lica “Natura” bio 6 mjeseci. Tijekom svog boravka, imao sam svu potrebnu pomoć i skrb ustanove. Osoblje je vrlo ljubazno i stručno, a uprava je uvijek spremna da pomogne u svakoj situaciji.",
      "Preporučujem Dom za starija lica “Natura” svakome tko treba takvu vrstu skrbi.",
    ],
    author: "Ivan Milić",
    title: 'Hvala "Natura"!',
    job: "Bivši klijent",
  },
];

const testimonials = [
  {
    content: [
      "O Domu za starija lica “Natura” mogu reći sve najbolje. Uprava profesionalno rukovodi radom doma uz, isto tako, stručno i ljubazno osoblje koje pruža vrhunsku njegu, što se jednako odnosi na ishranu i higijenu.",
      "Zgrada je nova i stalno održavana, sa lijepom terasom, opremljena antidekubitalnim madracima, električnim krevetima, TV-om i pristupom internetu. Ukratko, moja majka izgleda i osjeća se bolje, znatno bolje nego prije smještaja u dom “Natura”. Sve pohvale!",
    ],
    author: "Neven Pecelj",
    job: "Posjetilac",
    title: "Profesionalna i stručna uprava",
  },
  {
    content: [
      "Već devet mjeseci je ovaj dom razlog zbog kojeg moj deda još uvijek ima snage da se bori i živi za svaki dan. Prije svega, Daliborka, ali i ostatak ekipe imaju savršen, kako profesionalni tako i ljudski pristup, što je meni najvažnije. Hvala vam od srca na tome.",
    ],
    author: "Maja Č.",
    title: "Ljubazan tim",
    job: "Posjetilac",
  },
];
const Testimonial = () => {
  return (
    <div className="page snap-start !min-h-[400px] flex justify-center items-center flex-wrap bg-primary-900">
      <div className="flex gap-2 flex-wrap justify-center">
        {testimonials
          .concat(additionalTestimonials)
          .map(({ content, author, job, title }, i) => (
            <div className={"card bg-white max-w-[50ch] flex flex-col  gap-2"}>
              <h4
                className={typography({
                  color: "black",
                  size: "large",
                  weight: "bold",
                })}
              >
                {title}
              </h4>
              {content.map((p, i) => (
                <p key={i} className={twMerge(typography(), "indent-4 ")}>
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
                  {author}
                </span>
                <div className={twMerge(typography(), "text-xs ")}>{job}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Testimonial;
