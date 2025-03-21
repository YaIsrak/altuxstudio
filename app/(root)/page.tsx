import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import NumbersSec from "@/components/home/NumbersSec";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import WhatGet from "@/components/home/WhatGet";

export default function MainPage() {
  return (
    <>
      <Hero />
      <WhatGet />
      <Projects />
      <Services />
      <About />
      <NumbersSec />
    </>
  );
}
