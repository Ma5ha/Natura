import { Mission } from "@/public/mission";
import { Story } from "@/public/story";

export default function About() {
  return (
    <section className="min-h-full snap-center p-20 *:mb-20">
      <div className="flex gap-20 items-center justify-center flex-wrap">
        <div className="max-w-[50ch]">
          <h1 className="title mb-10">Our Mission</h1>
          <p>
            Naš dom postoji još od 2012. godine. udaljen 200m od magistralnog
            puta Sarajevo - Pale, na svega 15-ak minuta od Baščaršije, 30 minuta
            od sarajevskog aerodroma i 20 minuta od Olimpijskog centra, u mirnom
            okruženju, veličanstvenom prirodom i čistom ambijentu koji pogoduje
            rehabilitaciji i boravku starih ljudi.
          </p>
        </div>
        <Mission />
      </div>
      <div className="flex gap-20 items-center justify-center flex-wrap">
        <Story className="order-1 lg:order-none" />
        <div className="max-w-[50ch]">
          <h1 className="title mb-10">Our story</h1>
          <p>
            Naš dom postoji još od 2012. godine. udaljen 200m od magistralnog
            puta Sarajevo - Pale, na svega 15-ak minuta od Baščaršije, 30 minuta
            od sarajevskog aerodroma i 20 minuta od Olimpijskog centra, u mirnom
            okruženju, veličanstvenom prirodom i čistom ambijentu koji pogoduje
            rehabilitaciji i boravku starih ljudi.
          </p>
        </div>
      </div>
    </section>
  );
}
