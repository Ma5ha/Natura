import { typography } from "@/ui/variants";
import about1 from "@public/about-1.svg";
import about2 from "@public/about-2.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const pWarper = "lg:flex lg:flex-wrap lg:items-center w-fit space-y-2 *:grow";
const p = "max-w-[40ch]";
const image = "max-w-[40ch] m-auto";
export default function Mission() {
  return (
    <section className="page snap-center bg-white/50 w-full">
      <div className="m-auto *:m-auto space-y-20  bg-white/50 p-5 rounded-lg">
        <h2
          className={twMerge(
            "m-auto w-fit",
            typography({ semantic: "largeTitle", color: "black" })
          )}
        >
          We offer best care to elders{" "}
        </h2>
        <div className={twMerge(pWarper, "")}>
          <Image
            src={about1.src}
            alt="about-2"
            width={400}
            height={400}
            className={image}
          />
          <p className={twMerge(typography(), p)}>
            At Natura, we aim to create a space filled with care, respect, and
            dignity. Our focus is on fostering a nurturing environment where
            every resident feels valued, secure, and genuinely supported during
            this important chapter of their life. With kindness at our core, we
            strive to provide a home that enhances not just health but
            happiness, ensuring that each day brings comfort and joy.
          </p>
        </div>

        <div className={pWarper}>
          <Image
            className={(twMerge(image), "order-1")}
            src={about2.src}
            alt="about-2"
            width={400}
            height={400}
          />
          <p className={twMerge(typography(), p)}>
            We want to foster an environment where seniors can live with
            dignity, build meaningful connections, and experience care that
            truly understands and supports their needs. We strive to create a
            place where every individual feels valued and cherished. Through
            compassion and thoughtful attention, we ensure every resident
            thrives physically, emotionally, and socially.
          </p>
        </div>
      </div>
    </section>
  );
}
