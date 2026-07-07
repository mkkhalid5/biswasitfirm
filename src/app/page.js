import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
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
        <WhyChooseUs />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
