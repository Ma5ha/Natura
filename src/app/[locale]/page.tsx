import Hero from "./(sections)/hero";
import Contact from "./(sections)/contact";
import Map from "./(sections)/map";
import Testimonial from "../components/testimonials";
import Summary from "./(sections)/summary";

export const dynamicParams = false;
export const revalidate = false;

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
