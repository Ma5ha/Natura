import OurServices from "./(sections)/our-services";
import Detailed from "./(sections)/detailed";
import Testimonials from "@/app/components/testimonials";
import { setRequestLocale } from "next-intl/server";

export default async function Services({
  params,
}: {
  params: Promise<{ locale: "sr" | "en" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <OurServices />
      <Testimonials />
      <Detailed />
    </>
  );
}
