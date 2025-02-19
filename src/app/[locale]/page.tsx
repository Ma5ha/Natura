import Hero from "./(sections)/hero";
import Contact from "./(sections)/contact";
import Testimonial from "../components/testimonials";
import Summary from "./(sections)/summary";
import { setRequestLocale } from "next-intl/server";
import GoogleMap from "./(sections)/dynamic-map";

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
      <GoogleMap />
    </>
  );
}
