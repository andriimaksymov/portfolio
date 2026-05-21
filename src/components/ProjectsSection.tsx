import { projects } from "../data/portfolio";
import type { ProjectCard as ProjectCardType, ProjectLink } from "../types";
import { FeaturedProjectIllustration } from "./Illustrations";
import { SectionHeader } from "./SectionHeader";
import { Tags } from "./Tags";

export function ProjectsSection() {
  return (
    <section id="projects" aria-label="Projects">
      <div className="container">
        <SectionHeader eyebrow="[ 03 — Projects ]" title="Selected Work" />

        <div className="projects-list">
          <FeaturedProject />

          <div className="project-grid">
            {projects.cards.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProject() {
  const project = projects.featured;

  return (
    <article className="project-featured reveal">
      <div className="pf-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <Tags items={project.tags} />
        <div className="pf-achievements">
          {project.achievements.map((achievement) => (
            <div key={achievement}>
              <span>✓</span>
              {achievement}
            </div>
          ))}
        </div>
      </div>

      <FeaturedProjectIllustration />
    </article>
  );
}

function ProjectCard({ project }: { project: ProjectCardType }) {
  if (project.variant === "placeholder") {
    return (
      <article className="project project-placeholder reveal">
        <div className="project-placeholder-inner">
          <div className="project-label">{project.label}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          <ProjectLinks links={project.links} />
        </div>
      </article>
    );
  }

  return (
    <article className="project reveal">
      <div className="project-label">{project.label}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-sub">{project.subtitle}</p>
      <p className="project-desc">{project.description}</p>
      <Tags items={project.tags} />
      <ProjectLinks links={project.links} />
    </article>
  );
}

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="project-links">
      {links.map((link) => (
        <a className="project-link" href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener" : undefined} key={link.label}>
          [ {link.label} ↗ ]
        </a>
      ))}
    </div>
  );
}
