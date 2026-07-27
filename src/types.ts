/**
 * Every type here backs something the page actually renders.
 * If a field stops being rendered, delete it — unused exports and unread
 * fields look like live copy and silently drift out of date.
 */

export type Profile = {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  cvHref: string;
};

export type HeroContent = {
  /** Sits after the name in the kicker line. */
  title: string;
  /** Rendered as `before<em>emphasis</em>after` in the h1. */
  headline: {
    before: string;
    emphasis: string;
    after: string;
  };
  description: string;
};

export type ExperienceBadge = {
  label: string;
};

export type ExperienceRoleGroup = {
  role: string;
  period: string;
  highlights: string[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  employmentType?: string;
  badge?: ExperienceBadge;
  description: string;
  /** Flat roles use `highlights`; roles with sub-positions use `roles`. */
  highlights?: string[];
  roles?: ExperienceRoleGroup[];
  tags: string[];
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type EducationEntry = {
  institution: string;
  credential: string;
  period: string;
};

export type AboutContent = {
  paragraphs: string[];
  values: string[];
  education: EducationEntry[];
  certifications: string[];
};

export type ContactContent = {
  description: string;
};
