import { projects } from "../data/portfolio";
import type { ProjectCard as ProjectCardType, ProjectLink } from "../types";
import { SectionHeader } from "./SectionHeader";
import { Tags } from "./Tags";

export function ProjectsSection() {
  return (
    <section id="projects" aria-label="Projects">
      <div className="container">
        <SectionHeader eyebrow="Projects" title="Selected work" />

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

function ProjectNotes({ notes }: { notes: string[] }) {
  return (
    <ul className="project-notes">
      {notes.map((note) => (
        <li key={note}>{note}</li>
      ))}
    </ul>
  );
}

function FeaturedProject() {
  const project = projects.featured;

  return (
    <article className="project-featured reveal">
      <div className="pf-content">
        <div className="project-role">{project.role}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <ProjectNotes notes={project.notes} />
        <Tags items={project.tags} />
        {project.links && <ProjectLinks links={project.links} note={project.linksNote} />}
      </div>
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
      {project.notes && <ProjectNotes notes={project.notes} />}
      <Tags items={project.tags} />
      <ProjectLinks links={project.links} />
    </article>
  );
}

function ProjectLinks({ links, note }: { links: ProjectLink[]; note?: string }) {
  return (
    <div className="project-links">
      {links.map((link) => (
        <a className="project-link" href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener" : undefined} key={link.label}>
          [ {link.label} ↗ ]
        </a>
      ))}
      {note && <span className="project-links-note">{note}</span>}
    </div>
  );
}
