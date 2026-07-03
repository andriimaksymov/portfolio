import { skillGroups } from "../data/portfolio";
import { SkillIcon } from "./Icons";
import { SectionHeader } from "./SectionHeader";

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills">
      <div className="container">
        <SectionHeader eyebrow="Skills" title="Tools I reach for" />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card reveal" key={group.name}>
              <div className="skill-head">
                <div className="skill-ico">
                  <SkillIcon name={group.icon} />
                </div>
                <h3 className="skill-name">{group.name}</h3>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
