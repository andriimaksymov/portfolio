import { experiences } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Tags } from "./Tags";

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Experience">
      <div className="container">
        <SectionHeader eyebrow="[ 01 — Experience ]" title="Where I've Worked" />

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
                <div className="exp-head">
                  <div className="exp-role">{experience.role}</div>
                  <div className="exp-sep">·</div>
                  <div className="exp-company">{experience.company}</div>
                </div>

                <div className="exp-meta">
                  <span>{experience.period}</span>
                  <span>·</span>
                  <span>{experience.location}</span>
                  {experience.badge && (
                    <span className={experience.badge.tone === "green" ? "pill pill-green" : "pill"}>{experience.badge.label}</span>
                  )}
                </div>

                <p className="exp-desc">{experience.description}</p>

                {experience.impact && (
                  <div className="chips">
                    {experience.impact.map((impact) => (
                      <span className="chip" key={impact}>
                        <span className="gdot" />
                        {impact}
                      </span>
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
