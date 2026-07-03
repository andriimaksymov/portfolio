import { about } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  return (
    <section id="about" aria-label="About">
      <div className="container">
        <SectionHeader eyebrow="About" title="Background" />

        <div className="about-grid">
          <div className="about-text reveal">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="value-chips">
              {about.values.map((value) => (
                <span className="value" key={value}>
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div className="about-credentials reveal">
            <div className="cred-block">
              <h3 className="cred-title">Education</h3>
              {about.education.map((entry) => (
                <div className="cred-item" key={entry.institution}>
                  <p className="cred-primary">{entry.credential}</p>
                  <p className="cred-secondary">
                    {entry.institution} · {entry.period}
                  </p>
                </div>
              ))}
            </div>

            <div className="cred-block">
              <h3 className="cred-title">Certifications</h3>
              <ul className="cred-list">
                {about.certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
