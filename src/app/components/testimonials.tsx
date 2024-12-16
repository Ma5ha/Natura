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
    job: "Bivši klijent",
  },
  {
    content: [
      "Kada sam morao smjestiti svoju majku u dom, bilo mi je jako teško. No, kad sam upoznao osoblje i vidio uvjete u Domu za starija lica “Natura”, osjećao sam se mnogo bolje.",
      "Sad, nakon 3 mjeseca, moja majka izgleda i osjeća se mnogo bolje. Hvala vam, Natura!",
    ],
    author: "Ante Zadro",
    job: "Posjetilac",
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
      <div className="flex gap-2 flex-wrap">
        {testimonials
          .concat(additionalTestimonials)
          .map(({ content, author, job }, i) => (
            <div
              className={
                "card bg-white max-w-[50ch] flex flex-col justify-between gap-2"
              }
            >
              {content.map((p, i) => (
                <p key={i} className={twMerge(typography(), "indent-4 ")}>
                  {p}
                </p>
              ))}
              <div className=" bg-gray-100 rounded-lg px-2 py-1 w-fit">
                <h3
                  className={typography({
                    color: "black",
                    weight: "bold",
                    size: "medium",
                  })}
                >
                  {author}
                </h3>
                <div className={twMerge(typography(), "text-xs ")}>{job}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Testimonial;
