import { Nav } from "@/components/Nav";
import { work } from "@/data/work";
import { about, contact, experiences, profile, skillGroups } from "@/data/portfolio";

const approach = [
  {
    title: "Modernize without stopping delivery",
    text: "My best work is on live products: strict-TypeScript migrations, dependency swaps, and test coverage added while features keep shipping. No big-bang rewrites.",
  },
  {
    title: "Own the frontend end to end",
    text: "From planning and component APIs through release. I want to be accountable for how the screen behaves, not just the person who styled it.",
  },
  {
    title: "Keep server state in one place",
    text: "Caching, loading, errors, and retries belong in a single layer. React Query over fetch-and-useState scattered across a dozen components.",
  },
  {
    title: "Test the paths that actually break",
    text: "Not coverage for a number. Playwright on the handful of flows that keep regressing, so failures show up before merge instead of in production.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <span id="top" aria-hidden="true" />
      <Nav />

      <main>
        {/* Hero */}
        <section className="page hero" aria-label="Introduction">
          <p className="hero-kicker">
            <span className="name">Andrii Maksymov</span>, Senior Frontend Engineer
          </p>
          <h1>
            Data-heavy product UIs, kept <em>maintainable</em>.
          </h1>
          <p className="hero-sub">
            Nine years in web, five in React, TypeScript, and Next.js. I ship frontends end to end and modernize
            the older ones without full rewrites.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              View work{" "}
              <span className="arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
            <a className="btn btn-ghost" href="/Andrii_Maksymov_CV.pdf" download>
              Download CV
            </a>
          </div>
        </section>

        {/* Selected work */}
        <section className="page section" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <h2 className="section-title" id="work-title">
              Selected work
            </h2>
            <span className="section-note mono">{String(work.length).padStart(2, "0")} projects</span>
          </div>

          <ol className="work-list">
            {work.map((entry, i) => {
              const num = String(i + 1).padStart(2, "0");
              const inner = (
                <>
                  <span className="work-num mono">{num}</span>
                  <div className="work-main">
                    <h3 className="work-title">
                      {entry.title}
                      {entry.href && (
                        <span className="work-arrow" aria-hidden="true">
                          {" "}
                          &rarr;
                        </span>
                      )}
                    </h3>
                    <p className="work-blurb">{entry.blurb}</p>
                    <div className="work-tags">
                      {entry.tags.map((t) => (
                        <span className="work-tag mono" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="work-meta mono">
                    {entry.meta}
                    <br />
                    {entry.year}
                  </span>
                </>
              );
              return (
                <li key={entry.id}>
                  {entry.href ? (
                    <a className="work-row work-link" href={entry.href} target="_blank" rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div className="work-row">{inner}</div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>

        {/* Experience */}
        <section className="page section" id="experience" aria-labelledby="exp-title">
          <div className="section-head">
            <h2 className="section-title" id="exp-title">
              Experience
            </h2>
            <span className="section-note mono">2017 to now</span>
          </div>

          <div className="exp-list">
            {experiences.map((e) => (
              <article className="exp" key={e.id}>
                <div className="exp-top">
                  <h3 className="exp-role">
                    {e.role} <span className="exp-co">{e.company}</span>
                  </h3>
                  <span className="exp-period mono">{e.period}</span>
                </div>
                <div className="exp-meta mono">
                  <span>{e.location}</span>
                  {e.employmentType && <span>{e.employmentType}</span>}
                  {e.badge && <span className="exp-badge">{e.badge.label}</span>}
                </div>
                <p className="exp-desc">{e.description}</p>
                {e.highlights && (
                  <ul className="exp-points">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
                {e.roles?.map((r) => (
                  <div className="exp-subrole" key={r.role}>
                    <div className="exp-subrole-top">
                      <h4>{r.role}</h4>
                      <span className="mono">{r.period}</span>
                    </div>
                    <ul className="exp-points">
                      {r.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="exp-tags mono">
                  {e.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How I work */}
        <section className="page section" id="approach" aria-labelledby="app-title">
          <div className="section-head">
            <h2 className="section-title" id="app-title">
              How I work
            </h2>
          </div>
          <ol className="approach-list">
            {approach.map((p, i) => (
              <li className="approach" key={p.title}>
                <span className="approach-num mono">{String(i + 1).padStart(2, "0")}</span>
                <div className="approach-body">
                  <h3 className="approach-title">{p.title}</h3>
                  <p className="approach-text">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section className="page section" id="skills" aria-labelledby="sk-title">
          <div className="section-head">
            <h2 className="section-title" id="sk-title">
              Skills
            </h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div className="skill-group" key={g.name}>
                <h3 className="skill-cat mono">{g.name}</h3>
                <p className="skill-items">{g.skills.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Background */}
        <section className="page section" id="about" aria-labelledby="ab-title">
          <div className="section-head">
            <h2 className="section-title" id="ab-title">
              Background
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-prose">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <aside className="about-side">
              <div className="about-block">
                <h3 className="about-label mono">Education</h3>
                {about.education.map((ed) => (
                  <p className="about-item" key={ed.institution}>
                    <strong>{ed.credential}</strong>
                    <br />
                    <span className="muted">
                      {ed.institution}, {ed.period}
                    </span>
                  </p>
                ))}
              </div>
              <div className="about-block">
                <h3 className="about-label mono">Certifications</h3>
                <ul className="about-certs">
                  {about.certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="about-block">
                <h3 className="about-label mono">Focus</h3>
                <p className="muted">{about.values.join(", ")}</p>
              </div>
            </aside>
          </div>
        </section>

        {/* Contact */}
        <section className="page section section-contact" id="contact" aria-labelledby="ct-title">
          <div className="section-head">
            <h2 className="section-title" id="ct-title">
              Get in touch
            </h2>
          </div>
          <p className="contact-lead">{contact.description}</p>
          <div className="contact-links">
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="contact-row mono">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="/Andrii_Maksymov_CV.pdf" download>
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="page foot">
        <div className="foot-inner">
          <span>Andrii Maksymov, {new Date().getFullYear()}</span>
          <span>Rivne, Ukraine, remote</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </>
  );
}
