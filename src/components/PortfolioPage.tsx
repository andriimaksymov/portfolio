import { usePortfolioInteractions } from "../hooks/usePortfolioInteractions";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { Navigation } from "./Navigation";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";

export function PortfolioPage() {
  usePortfolioInteractions();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <Navigation />

      <main id="main">
        <span id="top" aria-hidden="true" />
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
