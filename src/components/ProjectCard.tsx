import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  const titleId = `project-${project.id}-title`;
  const { image } = project;
  return (
    <article className="project" aria-labelledby={titleId}>
      {image && (
        // Plain <img>: the site is a static export with no image optimizer, so
        // the files are pre-sized WebP (scripts/screenshots.mjs) with explicit
        // dimensions to prevent layout shift.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="project-shot"
          src={`${image.base}-640.webp`}
          srcSet={`${image.base}-640.webp 640w, ${image.base}-1280.webp 1280w`}
          sizes="(min-width: 1000px) 340px, (min-width: 640px) 45vw, 100vw"
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading="lazy"
          decoding="async"
        />
      )}
      <h4 className="project-title" id={titleId}>
        {project.title}
      </h4>
      <p className="project-kind">
        {project.kind} · {project.year}
      </p>
      <p className="project-summary">{project.summary}</p>
      <div className="project-details">
        {project.details.map((d) => (
          <p key={d}>{d}</p>
        ))}
      </div>
      <ul className="tags" aria-label={`${project.title} stack`}>
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <ul className="project-links">
        {project.links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>
              {link.label}
              <span className="sr-only"> for {project.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
