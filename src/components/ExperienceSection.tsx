import { experiences } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Tags } from "./Tags";

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Experience">
      <div className="container">
        <SectionHeader eyebrow="Experience" title="Where I've worked" />

        <div className="exp-layout">
          <aside className="exp-timeline reveal" aria-label="Timeline">
            {experiences.map((experience, index) => (
              <button className={index === 0 ? "tl-item active" : "tl-item"} data-target={experience.id} type="button" key={experience.id}>
                <span className="tl-dot" />
                {experience.timelineLabel}
              </button>
            ))}
          </aside>

          <div className="exp-list">
            {experiences.map((experience) => (
              <article className="exp-entry reveal" id={experience.id} key={experience.id}>
                <h3 className="exp-head">
                  <span className="exp-role">{experience.role}</span>
                  <span className="exp-sep">·</span>
                  <span className="exp-company">{experience.company}</span>
                </h3>

                <div className="exp-meta">
                  <span>{experience.period}</span>
                  <span>·</span>
                  <span>{experience.location}</span>
                  {experience.employmentType && (
                    <>
                      <span>·</span>
                      <span>{experience.employmentType}</span>
                    </>
                  )}
                  {experience.badge && (
                    <span className={experience.badge.tone === "green" ? "pill pill-green" : "pill"}>{experience.badge.label}</span>
                  )}
                </div>

                <p className="exp-desc">{experience.description}</p>

                {experience.highlights && (
                  <ul className="exp-highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>
                        <span className="gdot" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {experience.roles && (
                  <div className="exp-roles">
                    {experience.roles.map((role) => (
                      <div className="exp-subrole" key={role.role}>
                        <div className="exp-subrole-head">
                          <h4 className="exp-subrole-title">{role.role}</h4>
                          <span className="exp-subrole-period">{role.period}</span>
                        </div>
                        <ul className="exp-highlights">
                          {role.highlights.map((highlight) => (
                            <li key={highlight}>
                              <span className="gdot" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                <Tags items={experience.tags} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
