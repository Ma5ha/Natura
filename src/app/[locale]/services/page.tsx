import OurServices from "./(sections)/our-services";
import Detailed from "./(sections)/detailed";
import Testimonials from "@/app/components/testimonials";

export default function Services() {
  return (
    <>
      <OurServices />
      <Testimonials />
      <Detailed />
    </>
  );
}
