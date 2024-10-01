import Image from "next/image";
import { Hero } from "./components/hero";
import { Logos } from "./components/logos";
import { How } from "./components/how";
import { Content } from "./components/content";
import { Cta } from "./components/cta";

export default function Home() {
  return (
    <div>
      <Hero />
      <Logos />
      <How />
      <Content />
      <Cta />
    </div>
  );
}
