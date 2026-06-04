import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CompanyCarousel } from "@/components/company-carousel";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CompanyCarousel />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

