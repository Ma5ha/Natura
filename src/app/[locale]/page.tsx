import Hero from "./(sections)/hero";
import Contact from "./(sections)/contact";
import Map from "./(sections)/map";
import Testimonial from "../components/testimonials";
import Summary from "./(sections)/summary";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "sr" | "en" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <Summary />
      <Testimonial />
      <Contact />
      <Map />
    </>
  );
}
