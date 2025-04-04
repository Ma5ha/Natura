import { setRequestLocale } from "next-intl/server";

import dynamic from "next/dynamic";
import JsonLD from "./(sections)/json-ld";

const Hero = dynamic(() => import("./(sections)/hero"));
const Contact = dynamic(() => import("./(sections)/contact"));
const Testimonial = dynamic(() => import("../components/testimonials"));
const Summary = dynamic(() => import("./(sections)/summary"));
export default async function Home({
  locale,
  version,
}: {
  locale: "sr" | "en";
  version?: string;
}) {
  setRequestLocale(locale);
  return (
    <>
      <JsonLD />
      <Hero version={version} />
      <Summary />
      <Testimonial />
      <Contact />
    </>
  );
}
