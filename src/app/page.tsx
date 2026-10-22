import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Intro } from "@/components/site/intro";
import { Services } from "@/components/site/services";
import { Portfolio } from "@/components/site/portfolio/portfolio";
import { About } from "@/components/site/about";
import { Process } from "@/components/site/process";
import { Testimonials } from "@/components/site/testimonials";
import { FAQ } from "@/components/site/faq";
import { ContactSection } from "@/components/site/contact-section";
import { Footer } from "@/components/site/footer";

/**
 * FABOM GLOBAL — single-page experience.
 * Sections are anchored (#home, #services, #portfolio, #about, #process,
 * #faq, #contact) so every navigation link scrolls to a real destination.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Intro />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
