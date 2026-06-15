import { about } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  return (
    <section id="about" aria-label="About">
      <div className="container">
        <SectionHeader eyebrow="[ 04 — About ]" title="A bit about me" />

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

            <div className="about-credentials">
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

          <div className="terminal reveal" aria-hidden="true">
            <div className="term-bar">
              <div className="lights">
                <span />
                <span />
                <span />
              </div>
              <div className="term-title">{about.terminalTitle}</div>
            </div>
            <div className="term-body" id="termBody" />
          </div>
        </div>
      </div>
    </section>
  );
}
