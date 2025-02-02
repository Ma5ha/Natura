import Hero from "./(sections)/hero";
import Contact from "./(sections)/contact";
import Map from "./(sections)/map";
import Testimonial from "../components/testimonials";
import Summary from "./(sections)/summary";

export default function Home() {
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
