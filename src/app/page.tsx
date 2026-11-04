import { CaseStudy } from "@/components/CaseStudy";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteHeader } from "@/components/SiteHeader";
import { about, contact, experiences, hero, practices, profile, skillGroups } from "@/data/portfolio";
import { caseStudies, projects } from "@/data/work";

/**
 * One static page, rendered entirely on the server. There are no client
 * components: navigation is plain anchors and everything else is HTML and CSS.
 */
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        {/* Hero */}
        <section className="page hero" id="top" aria-labelledby="hero-title">
          <h1 id="hero-title">
            {profile.name}
            <span className="sr-only">, </span>
            <span className="hero-role">{profile.role}</span>
          </h1>
          <p className="hero-stack">{profile.stack}</p>
          <p className="hero-lead">{hero.lead}</p>
          <ul className="hero-facts" aria-label="At a glance">
            {hero.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <ul className="actions" aria-label="Contact and CV">
            <li>
              <a className="btn btn-primary" href={profile.cvHref} download>
                Download CV <span className="btn-note">PDF</span>
              </a>
            </li>
            <li>
              <a className="btn" href={`mailto:${profile.email}`}>
                Email
              </a>
            </li>
            <li>
              <a className="btn" href={profile.linkedin}>
                LinkedIn
              </a>
            </li>
            <li>
              <a className="btn" href={profile.github}>
                GitHub
              </a>
            </li>
          </ul>
        </section>

        {/* Selected work */}
        <section className="page section" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <h2 className="section-title" id="work-title">
              Selected work
            </h2>
            <p className="section-note">Client work is text only. Personal projects have screenshots and live links.</p>
          </div>

          {caseStudies.map((study) => (
            <CaseStudy key={study.id} study={study} />
          ))}

          <div className="projects-head">
            <h3 className="projects-title">Personal projects</h3>
            <p className="projects-note">Built and run on my own, outside client work.</p>
          </div>
          <ul className="projects">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="page section" id="experience" aria-labelledby="experience-title">
          <div className="section-head">
            <h2 className="section-title" id="experience-title">
              Experience
            </h2>
            <p className="section-note">2017 to now · fully remote since 2022</p>
          </div>
          <ol className="jobs">
            {experiences.map((job) => {
              const titleId = `${job.id}-title`;
              return (
                <li key={job.id}>
                  <article className="job" aria-labelledby={titleId}>
                    <p className="job-when">
                      {job.period}
                      {job.location && (
                        <>
                          <br />
                          {job.location}
                        </>
                      )}
                    </p>
                    <div>
                      <h3 className="job-title" id={titleId}>
                        {job.role}, <span className="job-company">{job.company}</span>
                        {job.companyNote && <span className="job-company"> ({job.companyNote})</span>}
                      </h3>
                      {job.meta.map((m) => (
                        <p className="job-meta" key={m}>
                          {m}
                        </p>
                      ))}
                      {job.stack && (
                        <p className="job-stack">
                          {job.stack.label}: {job.stack.value}
                        </p>
                      )}
                      <ul className="job-points">
                        {job.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      {job.caseStudyId && (
                        <a className="job-link" href={`#case-${job.caseStudyId}`}>
                          Read the case study<span className="sr-only"> for {job.company}</span>
                        </a>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </section>

        {/* How I work */}
        <section className="page section" id="how-i-work" aria-labelledby="how-title">
          <div className="section-head">
            <h2 className="section-title" id="how-title">
              How I work
            </h2>
          </div>
          <ul className="practices">
            {practices.map((practice) => (
              <li className="practice" key={practice.id}>
                <h3 className="practice-title">{practice.title}</h3>
                <div className="practice-body">
                  {practice.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="page section" id="skills" aria-labelledby="skills-title">
          <div className="section-head">
            <h2 className="section-title" id="skills-title">
              Skills
            </h2>
          </div>
          <dl className="skills">
            {skillGroups.map((group) => (
              <div className="skill" key={group.name}>
                <dt>{group.name}</dt>
                <dd>{group.skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <section className="page section" id="about" aria-labelledby="about-title">
          <div className="section-head">
            <h2 className="section-title" id="about-title">
              About
            </h2>
          </div>
          <div className="about">
            <div className="about-prose">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className="about-facts">
              <div>
                <dt>Based in</dt>
                <dd>{about.location}</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>
                  {about.education.credential}
                  <span className="sub">
                    {about.education.institution}, {about.education.period}
                  </span>
                </dd>
              </div>
              <div>
                <dt>Languages</dt>
                {about.languages.map((language) => (
                  <dd key={language}>{language}</dd>
                ))}
              </div>
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section className="page section section-contact" id="contact" aria-labelledby="contact-title">
          <div className="section-head">
            <h2 className="section-title" id="contact-title">
              Contact
            </h2>
          </div>
          <p className="contact-lead">{contact.lead}</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <p className="contact-engagement">{contact.engagement}</p>
          <ul className="actions" aria-label="Elsewhere">
            <li>
              <a className="btn" href={profile.linkedin}>
                LinkedIn
              </a>
            </li>
            <li>
              <a className="btn" href={profile.github}>
                GitHub
              </a>
            </li>
            <li>
              <a className="btn" href={profile.cvHref} download>
                Download CV <span className="btn-note">PDF</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page site-footer-inner">
          <span>
            {profile.name} · {about.location}
          </span>
          <span>
            Static site built with Next.js. <a href={profile.sourceHref}>Source on GitHub</a>
          </span>
        </div>
      </footer>
    </>
  );
}
