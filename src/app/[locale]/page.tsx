import { setRequestLocale } from "next-intl/server";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./(sections)/hero"));
const Contact = dynamic(() => import("./(sections)/contact"));
const Testimonial = dynamic(() => import("../components/testimonials"));
const Summary = dynamic(() => import("./(sections)/summary"));
const GoogleMap = dynamic(() => import("./(sections)/map"));
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
