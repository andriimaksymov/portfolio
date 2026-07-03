export type NavItem = {
  id: string;
  label: string;
};

export type SocialIconName = "github" | "linkedin" | "email";

export type SkillIconName = "code" | "database" | "style" | "shield" | "zap" | "terminal";

export type Profile = {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  cvHref: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIconName;
};

export type HeroContent = {
  status: string;
  nameLines: [string, string];
  title: string;
  description: string;
};

export type ExperienceBadge = {
  label: string;
  tone?: "blue" | "green";
};

export type ExperienceRoleGroup = {
  role: string;
  period: string;
  highlights: string[];
};

export type Experience = {
  id: string;
  timelineLabel: string;
  company: string;
  role: string;
  period: string;
  location: string;
  employmentType?: string;
  badge?: ExperienceBadge;
  description: string;
  highlights?: string[];
  roles?: ExperienceRoleGroup[];
  tags: string[];
};

export type SkillGroup = {
  name: string;
  icon: SkillIconName;
  skills: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FeaturedProject = {
  title: string;
  role: string;
  description: string;
  notes: string[];
  tags: string[];
  links?: ProjectLink[];
  linksNote?: string;
};

export type ProjectCard = {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  notes?: string[];
  tags: string[];
  links: ProjectLink[];
  variant?: "standard" | "placeholder";
};

export type ProjectsContent = {
  featured: FeaturedProject;
  cards: ProjectCard[];
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

export type ContactMethod = {
  label: string;
  value: string;
  icon: SocialIconName;
  href?: string;
  copyValue?: string;
};

export type ContactContent = {
  title: string;
  eyebrow: string;
  description: string;
  methods: ContactMethod[];
};
