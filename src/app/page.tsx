import RevealRunner from "@/components/RevealRunner";
import About from "@/components/sections/About";
import Approche from "@/components/sections/Approche";
import Cases from "@/components/sections/Cases";
import Contact from "@/components/sections/Contact";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <div className="aura" />
      <div className="grain" />

      <div className="shell">
        <Navbar />
        <main>
          <Hero />
          <Approche />
          <About />
          <Services />
          <Process />
          <Cases />
          <Testimonials />
          <Cta />
          <Contact />
        </main>
        <Footer />
      </div>

      <RevealRunner />
    </>
  );
}
