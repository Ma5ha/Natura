import Image from "next/image";
import Hero from "./hero";
import About from "./about";
import Services from "./services";

export default function Home() {
  return [<Hero />, <About />, <Services />];
}
