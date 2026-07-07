import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="why-us">
        ...
      </section>

      <section id="contact">
        ...
      </section>
    </div>
  );
}
