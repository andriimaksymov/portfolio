import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  Braces,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
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
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
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

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#top" className="flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-cyan-500">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-800">
            <Braces className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="hidden text-sm font-semibold text-slate-950 sm:inline">{profile.name}</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              {item.label}
            </a>
          ))}
        </div>
        <CTAButton href={`mailto:${profile.email}`} variant="primary" icon={<Mail className="h-4 w-4" aria-hidden="true" />}>
          Email
        </CTAButton>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-grid" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 animate-aurora bg-aurora opacity-95" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 pb-16 pt-12 lg:grid-cols-[1fr_0.9fr] lg:pb-24">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] text-slate-950 md:text-6xl lg:text-7xl" variants={fadeUp}>
            {profile.headline}
          </motion.h1>
          <motion.p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl" variants={fadeUp}>
            {profile.title}. {profile.summary}
          </motion.p>
          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" variants={fadeUp}>
            <CTAButton href="#projects" variant="primary" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
              View Projects
            </CTAButton>
            <CTAButton href={`mailto:${profile.email}`} icon={<Mail className="h-4 w-4" aria-hidden="true" />}>
              Contact Me
            </CTAButton>
            <CTAButton
              href="/Andrii-Maksymov-CV.pdf"
              download="Andrii-Maksymov-CV.pdf"
              icon={<ArrowDownToLine className="h-4 w-4" aria-hidden="true" />}
            >
              Download CV
            </CTAButton>
          </motion.div>
          <motion.div className="mt-8 flex flex-wrap items-center gap-3" variants={fadeUp}>
            <span className="text-sm text-slate-500">Links</span>
            <CTAButton
              href={profile.linkedin}
              variant="ghost"
              icon={<Linkedin className="h-4 w-4" aria-hidden="true" />}
              ariaLabel="Open Andrii Maksymov on LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </CTAButton>
            <CTAButton
              href={profile.github}
              variant="ghost"
              icon={<Github className="h-4 w-4" aria-hidden="true" />}
              ariaLabel="Open Andrii Maksymov on GitHub"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </CTAButton>
          </motion.div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}

function About() {
  const items = [
    "I build greenfield platforms from scratch with scalable frontend architecture.",
    "I modernize legacy systems into performant, type-safe React architectures.",
    "I work closely with product managers and UX/UI designers.",
    "I own frontend delivery from technical decisions to CI/CD and deployment.",
    "I mentor junior and mid-level developers.",
  ];

  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title="Frontend leadership with product context."
      description="I am a Senior Front-End React Developer with experience across architecture, system design, frontend modernization, performance optimization, SEO, and scalable UI systems."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <AnimatedCard className="p-7 md:p-8">
          <Sparkles className="mb-6 h-8 w-8 text-cyan-700" aria-hidden="true" />
          <p className="text-2xl font-semibold leading-snug text-slate-950">
            I help teams move faster by building modern frontend systems without compromising quality.
          </p>
          <p className="mt-5 leading-8 text-slate-600">
            My work spans technical direction, architecture decisions, performance, SEO, code review, mentorship, and delivery workflows.
          </p>
        </AnimatedCard>
        <motion.div
          className="grid gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {items.map((item) => (
            <motion.div
              key={item}
              className="flex gap-4 rounded-lg border border-slate-200 bg-white/75 p-5 shadow-[0_12px_34px_rgba(15,23,42,0.05)] backdrop-blur"
              variants={fadeUp}
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
              <p className="leading-7 text-slate-600">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function Skills() {
  const icons = ["01", "02", "03", "04", "05"];

  return (
    <SectionWrapper
      id="skills"
      eyebrow="Skills"
      title="A stack built for scalable product delivery."
      description="React and Next.js at the center, supported by typed systems, testing, CI/CD, performance work, and frontend leadership."
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {skillGroups.map((group, index) => (
          <motion.div key={group.title} variants={fadeUp}>
            <AnimatedCard className="h-full">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-slate-950">{group.title}</h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 font-mono text-sm text-cyan-700">
                  {icons[index]}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </AnimatedCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

function Projects() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="Projects"
      title="Product-shaped frontend work."
      description="Selected projects framed around architecture, implementation, and the product value behind the technical decisions."
    >
      <motion.div
        className="grid gap-6 lg:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {projects.map((project) => (
          <motion.div key={project.name} variants={fadeUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

function Value() {
  return (
    <SectionWrapper
      id="value"
      eyebrow="How I Create Value"
      title="Senior frontend work beyond shipping screens."
      description="The focus is durable architecture, fast experiences, clean delivery habits, and teams that can keep improving after launch."
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {valueCards.map((card) => (
          <motion.div key={card.title} variants={fadeUp}>
            <AnimatedCard className="h-full p-5">
              <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
            </AnimatedCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

function Certificates() {
  return (
    <SectionWrapper id="certificates" eyebrow="Certificates" title="Focused proof of depth." className="py-16 lg:py-20">
      <motion.div
        className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {certificates.map((certificate) => (
          <motion.div key={certificate} variants={fadeUp}>
            <AnimatedCard className="h-full p-5">
              <CheckCircle2 className="mb-4 h-5 w-5 text-emerald-700" aria-hidden="true" />
              <p className="text-sm font-semibold leading-6 text-slate-950">{certificate}</p>
            </AnimatedCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

function Contact() {
  return (
    <SectionWrapper id="contact" className="pb-10">
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-gradient-to-br from-white via-cyan-50/70 to-emerald-50 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.1)] backdrop-blur-xl md:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold text-cyan-700">Contact</p>
            <h2 className="max-w-3xl text-3xl font-semibold text-slate-950 md:text-5xl">Let&apos;s build something scalable, fast, and useful.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
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
          </div>
        </div>
      </div>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>{profile.name}</p>
        <a className="rounded-lg text-slate-500 transition hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </footer>
    </SectionWrapper>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f9fc] text-slate-950">
      <Header />
      <main>
        <Hero />
        <About />
        <SectionWrapper
          id="experience"
          eyebrow="Experience"
          title="A timeline of increasing ownership."
          description="From modern React interfaces to architecture, mentorship, CI/CD, performance, SEO, and full frontend delivery."
        >
          <ExperienceTimeline experiences={experiences} />
        </SectionWrapper>
        <Skills />
        <Projects />
        <Value />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}
