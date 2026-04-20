import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Services } from "../sections/Services";
import { WhyChooseUs } from "../sections/WhyChooseUs";
import { Industries } from "../sections/Industries";
import { Testimonials } from "../sections/Testimonials";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <Contact />
    </>
  );
}
