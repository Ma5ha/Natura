import Hero from "./(sections)/hero";
import About from "./(sections)/about";
import Services from "./services";
import Contact from "./(sections)/contact";
import Map from "./(sections)/map";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Map />
    </>
  );
}
