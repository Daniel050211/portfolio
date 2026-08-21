import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Marquee } from "@/components/marquee";
import { CursorGlow } from "@/components/cursor-glow";
import { ScrollProgress } from "@/components/scroll-progress";
import { About } from "@/components/about";
import { Journey } from "@/components/journey";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <Navigation />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
