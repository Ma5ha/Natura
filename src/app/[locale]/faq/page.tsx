import { typography } from "@/ui/variants";
import { getTranslations } from "next-intl/server";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const FaqQuestions = [
  {
    question: "Koliko kostaju usluge?",
    answer: "Konacna cijena se formira za svakog klijenta pojedinacno. ",
  },
  { question: "Da li imamo jednokrevetnih soba?", answer: "" },
  {
    question: "Da li primamo korisnike koji su skroz nepokretni ili dementni?",
    answer: "",
  },
  { question: "Koliko obroka?", answer: "" },
  { question: "Jesu li obroci prilagodjeni potrebama starijih?", answer: "" },
  {
    question: "Da li korisnici mogu izaci iz doma na kraci period?",
    answer: "U zavisnosti od potreba",
  },
  { question: "Kada su i u koje vrijeme posjete?", answer: "" },
  { question: "Imamo li fizioterapeuta?", answer: "" },
  { question: "Doktor, ko nabavlja(podize) lijekove?", answer: "" },
  { question: "Imamo li drustveno-socijalne aktivnosti?", answer: "" },
  { question: "Koliko ljudi je max smjesteno u sobama?", answer: "" },
] as const;

const Faq: FC = async () => {
  const t = await getTranslations("faq");
  return (
    <section className="snap-start  page">
      <h2 className={typography({ semantic: "title", size: "xxlarge" })}>
        {t("title")}{" "}
        <span className={typography({ size: "large", color: "primary" })}>
          ({t("subtitle")})
        </span>
      </h2>

      <ul className="max-w-[70ch] mx-auto mt-10">
        {FaqQuestions.map(({ question, answer }) => (
          <li key={question} className="mb-2">
            <details className="border p-2 rounded-lg cursor-pointer bg-white/50">
              <summary
                className={twMerge(
                  "list-none",
                  typography({ weight: "semi", color: "black" })
                )}
              >
                {question}
              </summary>
              <p
                className={twMerge(
                  typography({ color: "primary", size: "large" }),
                  "mt-2"
                )}
              >
                {answer}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Faq;
