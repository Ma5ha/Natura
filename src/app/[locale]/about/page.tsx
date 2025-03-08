import Hero from "./(sections)/hero";
import Values from "./(sections)/values";
import Mission from "./(sections)/mission";
import WeOffer from "./(sections)/offer";
import Testimonial from "@/app/components/testimonials";
import { setRequestLocale } from "next-intl/server";
import JsonLD from "./(sections)/json-ld";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: "sr" | "en" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="flex flex-col justify-center items-center">
      <JsonLD />
      <Hero />
      <Mission />
      <Values />
      <WeOffer />
      <Testimonial />
    </div>
  );
}
