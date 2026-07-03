import { hero, profile } from "../data/portfolio";
import { ArrowRightIcon } from "./Icons";
import { SocialLinks } from "./SocialLinks";

export function HeroSection() {
  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left reveal">
            <div className="hero-status">
              <span className="dot" aria-hidden="true" />
              {hero.status}
            </div>

            <h1>
              {hero.nameLines[0]}
              <br />
              {hero.nameLines[1]}
            </h1>

            <p className="hero-title">{hero.title}</p>
            <p className="hero-desc">{hero.description}</p>

            <div className="btn-row">
              <a href="#projects" className="btn btn-primary">
                View my work
                <ArrowRightIcon />
              </a>
              <a href={profile.cvHref} className="btn btn-secondary" download>
                Download CV
              </a>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
