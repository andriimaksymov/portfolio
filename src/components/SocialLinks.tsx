import { socialLinks } from "../data/portfolio";
import { SocialIcon } from "./Icons";

export function SocialLinks() {
  return (
    <div className="socials">
      {socialLinks.map((link) => (
        <a href={link.href} target={link.icon === "email" ? undefined : "_blank"} rel={link.icon === "email" ? undefined : "noopener"} aria-label={link.label} key={link.label}>
          <SocialIcon name={link.icon} />
        </a>
      ))}
    </div>
  );
}
