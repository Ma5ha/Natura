import Hero from "./(sections)/hero";
import Values from "./(sections)/values";
import Mission from "./(sections)/mission";
import WeOffer from "./(sections)/offer";
import Testimonial from "@/app/components/testimonials";

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <Mission />
      <Values />
      <WeOffer />
      <Testimonial />
    </div>
  );
}
