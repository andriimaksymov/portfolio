import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Code2,
  Github,
  GitBranch,
  Linkedin,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { AnimatedCard } from "./components/AnimatedCard";
import { CTAButton } from "./components/CTAButton";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { HeroVisual } from "./components/HeroVisual";
import { ProjectCard } from "./components/ProjectCard";
import { SectionWrapper } from "./components/SectionWrapper";
import { SkillBadge } from "./components/SkillBadge";
import { certificates, experiences, profile, projects, skillGroups, valueCards } from "./data/portfolio";

const navItems = [
  { label: "Work", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const heroStats = [
  { value: "5+", label: "Years building frontend products", icon: CalendarDays },
  { value: "3", label: "React roles from junior to senior", icon: GitBranch },
  { value: "2", label: "Public product case studies", icon: Code2 },
  { value: "CI/CD", label: "Deployment workflows owned", icon: Rocket },
];

const capabilities = [
  {
    title: "Build systems from scratch",
    description:
      "I architect greenfield platforms from the initial stack decision through scalable component, state, data, and deployment patterns.",
    tags: ["Next.js", "TypeScript", "React Query"],
    icon: Sparkles,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Modernize legacy frontends",
    description:
      "I turn older interfaces into maintainable, type-safe React architectures while reducing technical debt and keeping product delivery moving.",
    tags: ["Architecture", "Refactoring", "DX"],
    icon: GitBranch,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Optimize for performance",
    description:
      "I treat Core Web Vitals, SEO, bundle size, and responsiveness as product features, not late-stage polish.",
    tags: ["Performance", "SEO", "Core Web Vitals"],
    icon: Zap,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Raise team quality",
    description:
      "I improve delivery with code review habits, testing strategy, CI/CD workflows, and mentorship for junior and mid-level developers.",
    tags: ["Code Review", "Testing", "Mentorship"],
    icon: ShieldCheck,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

const impactAccents = [
  { icon: GitBranch, color: "text-indigo-600", bg: "bg-indigo-50", bar: "bg-indigo-500" },
  { icon: Zap, color: "text-emerald-600", bg: "bg-emerald-50", bar: "bg-emerald-500" },
  { icon: Rocket, color: "text-blue-600", bg: "bg-blue-50", bar: "bg-blue-500" },
  { icon: CheckCircle2, color: "text-violet-600", bg: "bg-violet-50", bar: "bg-violet-500" },
  { icon: Sparkles, color: "text-amber-600", bg: "bg-amber-50", bar: "bg-amber-500" },
];

const skillAccents = [
  { dot: "bg-indigo-500", text: "text-indigo-600", bg: "bg-indigo-50" },
  { dot: "bg-blue-500", text: "text-blue-600", bg: "bg-blue-50" },
  { dot: "bg-emerald-500", text: "text-emerald-600", bg: "bg-emerald-50" },
  { dot: "bg-amber-500", text: "text-amber-600", bg: "bg-amber-50" },
  { dot: "bg-violet-500", text: "text-violet-600", bg: "bg-violet-50" },
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/82 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#top" className="rounded-lg text-sm font-semibold tracking-tight text-neutral-950 outline-none transition hover:opacity-80 focus-visible:ring-2 focus-visible:ring-indigo-500">
          {profile.name}
          <span className="text-indigo-600">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg py-2 text-sm font-medium text-neutral-500 transition hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              {item.label}
            </a>
          ))}
        </div>
        <CTAButton href={`mailto:${profile.email}`} variant="primary" className="min-h-9 px-4 py-2">
          Hire Me
        </CTAButton>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white px-5 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 pb-20 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600"
            variants={fadeUp}
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Available for senior React opportunities
          </motion.div>

          <motion.h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-neutral-950 md:text-6xl" variants={fadeUp}>
            I design and build <span className="text-indigo-500">scalable</span>
            <br />
            React and Next.js systems that <span className="text-indigo-500">perform</span>.
          </motion.h1>

          <motion.p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-500 md:text-xl" variants={fadeUp}>
            {profile.title} focused on architecture decisions, sub-second user experiences, and product delivery that stays maintainable after launch.
          </motion.p>
          <motion.p className="mt-4 max-w-2xl leading-8 text-neutral-500" variants={fadeUp}>
            {profile.summary}
          </motion.p>

          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" variants={fadeUp}>
            <CTAButton href="#projects" variant="primary" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
              View Case Studies
            </CTAButton>
            <CTAButton href={`mailto:${profile.email}`} icon={<Mail className="h-4 w-4" aria-hidden="true" />}>
              Get in Touch
            </CTAButton>
            <CTAButton
              href="/Andrii Maksymov — Senior Front-End Engineer.pdf"
              download="Andrii Maksymov — Senior Front-End Engineer.pdf"
              icon={<ArrowDownToLine className="h-4 w-4" aria-hidden="true" />}
            >
              Download CV
            </CTAButton>
          </motion.div>

          <motion.div className="mt-8 flex flex-wrap items-center gap-3" variants={fadeUp}>
            <CTAButton
              href={profile.github}
              variant="ghost"
              icon={<Github className="h-4 w-4" aria-hidden="true" />}
              ariaLabel="Open Andrii Maksymov on GitHub"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-full px-0"
            >
              <span className="sr-only">GitHub</span>
            </CTAButton>
            <CTAButton
              href={profile.linkedin}
              variant="ghost"
              icon={<Linkedin className="h-4 w-4" aria-hidden="true" />}
              ariaLabel="Open Andrii Maksymov on LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-full px-0"
            >
              <span className="sr-only">LinkedIn</span>
            </CTAButton>
            <CTAButton
              href={`mailto:${profile.email}`}
              variant="ghost"
              icon={<Mail className="h-4 w-4" aria-hidden="true" />}
              ariaLabel="Email Andrii Maksymov"
              className="h-10 w-10 rounded-full px-0"
            >
              <span className="sr-only">Email</span>
            </CTAButton>
          </motion.div>

          <motion.div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4" variants={fadeUp}>
            {heroStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div key={stat.label} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                  <Icon className="mb-3 h-4 w-4 text-indigo-500" aria-hidden="true" />
                  <p className="text-base font-semibold text-neutral-950">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="Capabilities"
      title="What I actually do."
      description="Beyond writing components, I build the systems, workflows, and patterns that help frontend teams ship useful products with confidence."
      className="bg-white"
    >
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {capabilities.map((card) => {
          const Icon = card.icon;

          return (
            <motion.div key={card.title} variants={fadeUp}>
              <AnimatedCard className="h-full p-7 md:p-8">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-lg ${card.bg}`}>
                  <Icon className={`h-7 w-7 ${card.color}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-950">{card.title}</h3>
                <p className="mt-4 leading-8 text-neutral-500">{card.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <SkillBadge key={tag} label={tag} compact />
                  ))}
                </div>
              </AnimatedCard>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}

function Impact() {
  return (
    <SectionWrapper
      id="impact"
      eyebrow="Engineering Impact"
      title="Senior frontend work beyond shipping screens."
      description="My work centers on durable architecture, performance, clean delivery habits, and teams that can keep improving after launch."
      className="bg-neutral-50"
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {valueCards.map((card, index) => {
          const accent = impactAccents[index % impactAccents.length];
          const Icon = accent.icon;

          return (
            <motion.div key={card.title} variants={fadeUp}>
              <AnimatedCard className="h-full p-5">
                <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-lg ${accent.bg}`}>
                  <Icon className={`h-5 w-5 ${accent.color}`} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-950">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-500">{card.description}</p>
                <div className="mt-6 h-1 overflow-hidden rounded-full bg-neutral-100">
                  <motion.div
                    className={`h-full rounded-full ${accent.bar}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                  />
                </div>
              </AnimatedCard>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}

function Skills() {
  const primaryStack = ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma ORM"];

  return (
    <SectionWrapper
      id="skills"
      eyebrow="Tools & Stack"
      title="Production stack."
      description="A compact view of the tools I use most often across frontend architecture, backend work, quality, and delivery."
      className="!py-16 bg-neutral-50 lg:!py-20"
    >
      <motion.div
        className="max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <AnimatedCard className="p-5 sm:p-6 md:p-7" interactive={false}>
            <div className="flex flex-col gap-5 border-b border-neutral-200 pb-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-950">Core stack</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
                  The daily toolkit: small enough to scan quickly, broad enough to show how I ship production interfaces.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
                {primaryStack.map((skill) => (
                  <span key={skill} className="rounded-full bg-neutral-950 px-3 py-1.5 text-xs font-semibold text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="divide-y divide-neutral-100">
              {skillGroups.map((group, index) => {
                const accent = skillAccents[index % skillAccents.length];

                return (
                  <div key={group.title} className="grid gap-4 py-5 md:grid-cols-[13rem_1fr] md:items-start">
                    <div className="flex items-center gap-3">
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${accent.dot}`} />
                      <h4 className="text-sm font-semibold uppercase text-neutral-500">{group.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-full px-3 py-1.5 text-sm font-medium leading-5 ${accent.bg} ${accent.text}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedCard>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

function Projects() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="Case Studies"
      title="Projects, not just features."
      description="Selected projects framed around architecture, implementation, and the product value behind the technical decisions."
      className="bg-neutral-50"
    >
      <motion.div
        className="space-y-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {projects.map((project, index) => (
          <motion.div key={project.name} variants={fadeUp}>
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

function Certificates() {
  return (
    <SectionWrapper id="certificates" eyebrow="Certificates" title="Focused proof of depth." className="bg-white py-16 lg:py-20">
      <motion.div
        className="grid gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {certificates.map((certificate) => (
          <motion.div key={certificate} variants={fadeUp}>
            <AnimatedCard className="h-full p-5">
              <CheckCircle2 className="mb-4 h-5 w-5 text-emerald-600" aria-hidden="true" />
              <p className="text-sm font-semibold leading-6 text-neutral-950">{certificate}</p>
            </AnimatedCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-white pb-10">
      <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white p-6 shadow-[0_28px_80px_rgba(3,2,19,0.08)] md:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-500">Contact</p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-neutral-950 md:text-5xl">Let&apos;s build something scalable, fast, and useful.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-500 md:text-lg">
              I am open to senior frontend, React, Next.js, architecture, and product-focused engineering roles with teams building useful products.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <CTAButton href={`mailto:${profile.email}`} variant="primary" icon={<Mail className="h-4 w-4" aria-hidden="true" />}>
              Email Me
            </CTAButton>
            <CTAButton
              href={profile.linkedin}
              icon={<Linkedin className="h-4 w-4" aria-hidden="true" />}
              ariaLabel="Open Andrii Maksymov on LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </CTAButton>
            <CTAButton
              href={profile.github}
              icon={<Github className="h-4 w-4" aria-hidden="true" />}
              ariaLabel="Open Andrii Maksymov on GitHub"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </CTAButton>
            <CTAButton
              href="/Andrii Maksymov — Senior Front-End Engineer.pdf"
              download="Andrii Maksymov — Senior Front-End Engineer.pdf"
              icon={<ArrowDownToLine className="h-4 w-4" aria-hidden="true" />}
            >
              Download CV
            </CTAButton>
          </div>
        </div>
      </div>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>
          {profile.name}
          <span className="text-indigo-600">.</span>
        </p>
        <a className="rounded-lg text-neutral-500 transition hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </footer>
    </SectionWrapper>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-neutral-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Impact />
        <SectionWrapper
          id="experience"
          eyebrow="Experience"
          title="A timeline of increasing ownership."
          description="From modern React interfaces to architecture, mentorship, CI/CD, performance, SEO, and full frontend delivery."
          className="bg-neutral-50"
        >
          <ExperienceTimeline experiences={experiences} />
        </SectionWrapper>
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}
