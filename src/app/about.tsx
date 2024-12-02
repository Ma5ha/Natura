import { Mission } from "@/public/mission";
import { Story } from "@/public/story";

import { typography } from "@/ui/variants";

export default function About() {
  return (
    <section id="about" className="page snap-start relative">
      <div className="bg-white card mx-auto ">
        <div className="flex gap-20 items-center justify-center flex-wrap ">
          <div className="max-w-prose shrink">
            <h1 className="title mb-10">Our Mission</h1>
            <p className={typography()}>
              Naš dom postoji još od 2012. godine. udaljen 200m od magistralnog
              puta Sarajevo - Pale, na svega 15-ak minuta od Baščaršije, 30
              minuta od sarajevskog aerodroma i 20 minuta od Olimpijskog centra,
              u mirnom okruženju, veličanstvenom prirodom i čistom ambijentu
              koji pogoduje rehabilitaciji i boravku starih ljudi.
            </p>
          </div>
          <Mission className="size-[300px]" />
        </div>
        <div className="flex gap-20 items-center justify-center flex-wrap">
          <Story className="order-1 xl:order-none size-[300px] " />
          <div className="max-w-prose">
            <h1 className="title mb-10">Our story</h1>
            <p className={typography()}>
              Naš dom postoji još od 2012. godine. udaljen 200m od magistralnog
              puta Sarajevo - Pale, na svega 15-ak minuta od Baščaršije, 30
              minuta od sarajevskog aerodroma i 20 minuta od Olimpijskog centra,
              u mirnom okruženju, veličanstvenom prirodom i čistom ambijentu
              koji pogoduje rehabilitaciji i boravku starih ljudi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
