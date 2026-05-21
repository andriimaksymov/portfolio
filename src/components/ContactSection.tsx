import { contact, profile } from "../data/portfolio";
import type { ContactMethod } from "../types";
import { ArrowRightIcon, SocialIcon } from "./Icons";
import { SectionHeader } from "./SectionHeader";

export function ContactSection() {
  return (
    <section id="contact" aria-label="Contact">
      <div className="container">
        <SectionHeader eyebrow={contact.eyebrow} title={contact.title} centered />

        <div className="contact-wrap reveal">
          <p className="contact-sub">{contact.description}</p>

          <div className="contact-methods">
            {contact.methods.map((method) => (
              <ContactCard method={method} key={method.label} />
            ))}
          </div>

          <a className="cta-big" href={`mailto:${profile.email}`}>
            Send me a message
            <ArrowRightIcon className="cta-big-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ method }: { method: ContactMethod }) {
  const content = (
    <>
      <div className="contact-ico">
        <SocialIcon name={method.icon} />
      </div>
      <div className="contact-label">{method.label}</div>
      <div className="contact-val">{method.value}</div>
    </>
  );

  if (method.copyValue) {
    return (
      <button className="contact-card" id="copyEmail" type="button" aria-label="Copy email to clipboard">
        {content}
        <span className="tooltip" id="copyTip">
          Copied ✓
        </span>
      </button>
    );
  }

  return (
    <a className="contact-card" href={method.href} target="_blank" rel="noopener">
      {content}
    </a>
  );
}
