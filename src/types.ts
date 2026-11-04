/**
 * Every type here backs something the page renders. If a field stops being
 * rendered, delete it: unread fields look like live copy and drift out of date.
 *
 * Source of truth for all copy: the frontend CV (CV_source.md, 2026-11-04).
 * If a fact isn't in the CV or its evidence report, it doesn't go here.
 */

export type Link = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  /** Core stack, shown next to the role. */
  stack: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  /** Other places link to this exact path. Don't rename the file. */
  cvHref: string;
  sourceHref: string;
};

export type Hero = {
  /** One plain sentence: who I am and what I work on. */
  lead: string;
  /** Short facts a recruiter filters on: years, location, engagement. */
  facts: string[];
};

/** A number worth remembering, with what it measures. */
export type Metric = {
  value: string;
  label: string;
};

/** One "what I did" point: a short label, then the detail. */
export type Point = {
  label: string;
  text: string;
};

/** Client work: text only. No screenshots, no client data. */
export type CaseStudy = {
  id: string;
  title: string;
  org: string;
  role: string;
  period?: string;
  /** Why there are no images. */
  confidentiality: string;
  context: string[];
  points: Point[];
  metrics: Metric[];
  stack: string[];
};

/** Personal projects: real screenshots and live links. */
export type Project = {
  id: string;
  title: string;
  kind: string;
  year: string;
  summary: string;
  details: string[];
  stack: string[];
  links: Link[];
  image?: {
    /** Path without extension; the page serves `-640.webp` and `-1280.webp`. */
    base: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  companyNote?: string;
  period: string;
  location?: string;
  /** Engagement details, e.g. part-time alongside another role. */
  meta: string[];
  /** Label differs by role: "Stack" for one product, "Stack across projects" for an agency. */
  stack?: { label: string; value: string };
  points: string[];
  /** Points to the matching case study, so the detail isn't repeated. */
  caseStudyId?: string;
};

export type Practice = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type About = {
  paragraphs: string[];
  education: {
    credential: string;
    institution: string;
    period: string;
  };
  languages: string[];
  location: string;
};

export type Contact = {
  lead: string;
  engagement: string;
};
