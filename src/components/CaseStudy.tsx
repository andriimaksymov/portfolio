import type { CaseStudy as CaseStudyData } from "@/types";
import { Readable } from "./Readable";

export function CaseStudy({ study }: { study: CaseStudyData }) {
  const titleId = `case-${study.id}-title`;
  return (
    <article className="case" id={`case-${study.id}`} aria-labelledby={titleId}>
      <header>
        <p className="case-meta">
          <strong>{study.org}</strong>
          <span>{study.role}</span>
          {study.period && <span>{study.period}</span>}
        </p>
        <h3 className="case-title" id={titleId}>
          {study.title}
        </h3>
        <p className="case-note">{study.confidentiality}</p>
      </header>

      <div className="case-body">
        <div className="case-main">
          <h4 className="label">Context</h4>
          <div className="case-context">
            {study.context.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h4 className="label">What I did</h4>
          <ul className="case-points">
            {study.points.map((point) => (
              <li key={point.label}>
                <strong>{point.label}.</strong> <Readable text={point.text} />
              </li>
            ))}
          </ul>
        </div>

        <aside className="case-aside" aria-label={`${study.org}: results and stack`}>
          <h4 className="label">Results</h4>
          <dl className="metrics">
            {study.metrics.map((m) => (
              <div className="metric" key={m.label}>
                <dt>{m.label}</dt>
                <dd>
                  <Readable text={m.value} />
                </dd>
              </div>
            ))}
          </dl>

          <h4 className="label">Stack</h4>
          <ul className="tags">
            {study.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}
