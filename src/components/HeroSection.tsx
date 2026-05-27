import { hero, profile } from "../data/portfolio";
import { ArrowRightIcon } from "./Icons";
import { HeroCodeIllustration } from "./Illustrations";
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

            <div className="hero-title" id="typeline" aria-hidden="true" />
            <p className="sr-only">{hero.titleRotations[0]}</p>
            <p className="hero-desc">{hero.description}</p>

            <div className="btn-row">
              <a href="#experience" className="btn btn-primary">
                View My Work
                <ArrowRightIcon />
              </a>
              <a href={profile.cvHref} className="btn btn-secondary" download>
                Download CV
              </a>
              <SocialLinks />
            </div>
          </div>

          <HeroCodeIllustration />
        </div>

        <div className="stats reveal" id="stats">
          {hero.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat-num" data-target={stat.value} data-suffix={stat.suffix}>
                0
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
