import { useEffect } from "react";

const portfolioMarkup = `
<a class="skip" href="#main">Skip to content</a>

<div class="cursor-dot" aria-hidden="true"></div>
<div class="cursor-ring" aria-hidden="true"></div>

<nav class="nav" id="nav">
  <div class="container nav-inner">
    <a href="#top" class="monogram" aria-label="Andrii Maksymov — home">AM</a>
    <div class="nav-links" role="navigation">
      <a href="#experience" data-link="experience">Work</a>
      <a href="#skills" data-link="skills">Skills</a>
      <a href="#projects" data-link="projects">Projects</a>
      <a href="#about" data-link="about">About</a>
      <a href="#contact" data-link="contact">Contact</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <button class="mobile-close" id="mobileClose" aria-label="Close menu">[ CLOSE ]</button>
  <a href="#experience">Work</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</div>

<main id="main">
  <a id="top"></a>

  <section class="hero" id="hero" aria-label="Introduction">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-left reveal">
          <div class="hero-status">
            <span class="dot" aria-hidden="true"></span>
            [ AVAILABLE FOR WORK ]
          </div>
          <h1>Andrii<br/>Maksymov</h1>
          <div class="hero-title" id="typeline" aria-live="polite"></div>
          <p class="hero-desc">
            9 years building high-performance web products at scale. I architect React/Next.js systems that are fast, maintainable, and built to grow.
          </p>
          <div class="btn-row">
            <a href="#experience" class="btn btn-primary">View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" class="btn btn-secondary">Download CV</a>
            <div class="socials">
              <a href="https://github.com/andriimaksymov" target="_blank" rel="noopener" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A12 12 0 0 0 .5 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 23.5 12.5 12 12 0 0 0 12 .5z"/></svg>
              </a>
              <a href="https://linkedin.com/in/maksymov-andrii" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7A1.7 1.7 0 1 1 8.2 6 1.7 1.7 0 0 1 6.5 7.7zM19 19h-3v-5c0-1.2-.5-2-1.6-2A1.7 1.7 0 0 0 13 13c-.1.2-.1.4-.1.6V19h-3V9h3v1.3A3 3 0 0 1 15.6 9c2 0 3.4 1.3 3.4 4V19z"/></svg>
              </a>
              <a href="mailto:andrii.maksymov.1@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="hero-illu reveal" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="draw d1" x="40" y="60" width="320" height="240" rx="10" stroke="#3B82F6" stroke-width="1.2"/>
            <line class="draw d1" x1="40" y1="84" x2="360" y2="84" stroke="#1E1E2E" stroke-width="1.2"/>
            <circle class="draw d1" cx="56" cy="72" r="3" fill="#FF5F57"/>
            <circle class="draw d1" cx="68" cy="72" r="3" fill="#FEBC2E"/>
            <circle class="draw d1" cx="80" cy="72" r="3" fill="#28C840"/>
            <line class="draw d2" x1="100" y1="84" x2="100" y2="300" stroke="#1E1E2E" stroke-width="1"/>
            <line class="draw d2" x1="60" y1="104" x2="86" y2="104" stroke="#3B82F6" stroke-width="1"/>
            <line class="draw d2" x1="60" y1="120" x2="90" y2="120" stroke="#6B7280" stroke-width="1"/>
            <line class="draw d2" x1="60" y1="136" x2="84" y2="136" stroke="#6B7280" stroke-width="1"/>
            <line class="draw d2" x1="60" y1="152" x2="92" y2="152" stroke="#6B7280" stroke-width="1"/>
            <line class="draw d2" x1="60" y1="168" x2="78" y2="168" stroke="#6B7280" stroke-width="1"/>
            <line class="draw d3" x1="118" y1="106" x2="180" y2="106" stroke="#3B82F6" stroke-width="1.2"/>
            <line class="draw d3" x1="186" y1="106" x2="240" y2="106" stroke="#10B981" stroke-width="1.2"/>
            <line class="draw d3" x1="246" y1="106" x2="290" y2="106" stroke="#6B7280" stroke-width="1.2"/>
            <line class="draw d4" x1="130" y1="124" x2="170" y2="124" stroke="#6B7280" stroke-width="1.2"/>
            <line class="draw d4" x1="176" y1="124" x2="220" y2="124" stroke="#3B82F6" stroke-width="1.2"/>
            <line class="draw d4" x1="226" y1="124" x2="280" y2="124" stroke="#6B7280" stroke-width="1.2"/>
            <line class="draw d5" x1="130" y1="142" x2="200" y2="142" stroke="#10B981" stroke-width="1.2"/>
            <line class="draw d5" x1="206" y1="142" x2="244" y2="142" stroke="#6B7280" stroke-width="1.2"/>
            <line class="draw d6" x1="118" y1="160" x2="190" y2="160" stroke="#3B82F6" stroke-width="1.2"/>
            <line class="draw d6" x1="196" y1="160" x2="250" y2="160" stroke="#6B7280" stroke-width="1.2"/>
            <rect class="draw d7" x="116" y="184" width="226" height="100" rx="6" stroke="#1E1E2E" stroke-width="1"/>
            <rect class="draw d7" x="128" y="198" width="60" height="40" rx="3" stroke="#3B82F6" stroke-width="1"/>
            <rect class="draw d7" x="194" y="198" width="60" height="40" rx="3" stroke="#3B82F6" stroke-width="1" stroke-opacity="0.5"/>
            <rect class="draw d7" x="260" y="198" width="70" height="40" rx="3" stroke="#3B82F6" stroke-width="1" stroke-opacity="0.3"/>
            <line class="draw d8" x1="128" y1="252" x2="240" y2="252" stroke="#6B7280" stroke-width="1"/>
            <line class="draw d8" x1="128" y1="266" x2="200" y2="266" stroke="#6B7280" stroke-width="1" stroke-opacity="0.6"/>
            <rect class="draw d8" x="280" y="30" width="84" height="28" rx="14" stroke="#3B82F6" stroke-width="1"/>
            <circle class="draw d8" cx="296" cy="44" r="3" fill="#10B981"/>
            <text class="draw d8" x="306" y="48" fill="#9CA3AF" font-family="JetBrains Mono" font-size="10">deployed</text>
            <circle class="draw d8" cx="40" cy="340" r="4" stroke="#3B82F6" stroke-width="1"/>
            <line class="draw d8" x1="44" y1="340" x2="80" y2="340" stroke="#3B82F6" stroke-width="1"/>
            <circle class="draw d8" cx="84" cy="340" r="4" stroke="#10B981" stroke-width="1"/>
            <line class="draw d8" x1="88" y1="340" x2="124" y2="340" stroke="#10B981" stroke-width="1"/>
            <circle class="draw d8" cx="128" cy="340" r="4" stroke="#6B7280" stroke-width="1"/>
          </svg>
        </div>
      </div>

      <div class="stats reveal" id="stats">
        <div class="stat"><div class="stat-num" data-target="9" data-suffix="+">0</div><div class="stat-label">Years of Experience</div></div>
        <div class="stat"><div class="stat-num" data-target="20" data-suffix="+">0</div><div class="stat-label">Projects Shipped</div></div>
        <div class="stat"><div class="stat-num" data-target="3" data-suffix="+">0</div><div class="stat-label">Engineers Mentored</div></div>
        <div class="stat"><div class="stat-num" data-target="90" data-suffix="+">0</div><div class="stat-label">Lighthouse Score</div></div>
      </div>
    </div>
  </section>

  <section id="experience" aria-label="Experience">
    <div class="container">
      <div class="section-head reveal">
        <div class="section-label">[ 01 — Experience ]</div>
        <h2 class="section-title">Where I've Worked</h2>
      </div>

      <div class="exp-layout">
        <aside class="exp-timeline reveal" aria-label="Timeline">
          <button class="tl-item active" data-target="exp-movadex"><span class="tl-dot"></span>2022 — Present</button>
          <button class="tl-item" data-target="exp-rivo"><span class="tl-dot"></span>2021 — 2022</button>
          <button class="tl-item" data-target="exp-proit"><span class="tl-dot"></span>2017 — 2021</button>
        </aside>

        <div class="exp-list">
          <article class="exp-entry reveal" id="exp-movadex">
            <div class="exp-head">
              <div class="exp-role">Senior Frontend Engineer</div>
              <div class="exp-sep">·</div>
              <div class="exp-company">Movadex</div>
            </div>
            <div class="exp-meta">
              <span>May 2022 – Present</span>
              <span>·</span>
              <span>Remote</span>
              <span class="pill">● Current</span>
            </div>
            <p class="exp-desc">Architecting greenfield SaaS platforms, leading frontend modernization, and building complex real-time UI systems. Sole frontend decision-maker across multiple long-running production products.</p>
            <div class="chips">
              <span class="chip"><span class="gdot"></span>Sub-1s LCP achieved</span>
              <span class="chip"><span class="gdot"></span>~40% fewer regressions</span>
              <span class="chip"><span class="gdot"></span>3+ platforms architected</span>
              <span class="chip"><span class="gdot"></span>4 engineers mentored</span>
            </div>
            <div class="tags">
              <span class="tag">Next.js 15</span>
              <span class="tag">TypeScript</span>
              <span class="tag">React Query</span>
              <span class="tag">WebSockets</span>
              <span class="tag">Playwright</span>
              <span class="tag">Tailwind CSS</span>
              <span class="tag">dnd-kit</span>
              <span class="tag">CI/CD</span>
            </div>
          </article>

          <article class="exp-entry reveal" id="exp-rivo">
            <div class="exp-head">
              <div class="exp-role">Middle Frontend Engineer</div>
              <div class="exp-sep">·</div>
              <div class="exp-company">Rivo Agency</div>
            </div>
            <div class="exp-meta">
              <span>Oct 2021 – Apr 2022</span>
              <span>·</span>
              <span>Rivne, Ukraine</span>
            </div>
            <p class="exp-desc">Built high-frequency data dashboards and collaborated cross-functionally with design and product to ship scalable, accessible React applications.</p>
            <div class="tags">
              <span class="tag">React</span>
              <span class="tag">Redux Toolkit</span>
              <span class="tag">Context API</span>
              <span class="tag">TypeScript</span>
              <span class="tag">REST APIs</span>
            </div>
          </article>

          <article class="exp-entry reveal" id="exp-proit">
            <div class="exp-head">
              <div class="exp-role">Frontend Developer</div>
              <div class="exp-sep">·</div>
              <div class="exp-company">PRO-IT</div>
            </div>
            <div class="exp-meta">
              <span>Jul 2017 – Sep 2021</span>
              <span>·</span>
              <span>Rivne, Ukraine</span>
              <span class="pill pill-green">↑ Promoted to React Dev · Nov 2020</span>
            </div>
            <p class="exp-desc">Started as an HTML/CSS developer building responsive interfaces for 10+ client projects. Promoted to React development after independently transitioning into component-based architecture.</p>
            <div class="tags">
              <span class="tag">React</span>
              <span class="tag">HTML/CSS</span>
              <span class="tag">JavaScript</span>
              <span class="tag">Stripe API</span>
              <span class="tag">Responsive Design</span>
              <span class="tag">Sass</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" aria-label="Skills">
    <div class="container">
      <div class="section-head reveal">
        <div class="section-label">[ 02 — Skills ]</div>
        <h2 class="section-title">My Technical Stack</h2>
      </div>

      <div class="skills-grid">
        <div class="skill-card reveal">
          <div class="skill-head">
            <div class="skill-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg></div>
            <div class="skill-name">Frontend Core</div>
          </div>
          <div class="skill-tags">
            <span class="skill-tag">React 18</span><span class="skill-tag">Next.js 15</span><span class="skill-tag">TypeScript</span><span class="skill-tag">JavaScript ES2024</span><span class="skill-tag">App Router</span><span class="skill-tag">RSC</span><span class="skill-tag">SSR/SSG/ISR</span>
          </div>
        </div>

        <div class="skill-card reveal">
          <div class="skill-head">
            <div class="skill-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg></div>
            <div class="skill-name">State &amp; Data</div>
          </div>
          <div class="skill-tags">
            <span class="skill-tag">TanStack Query</span><span class="skill-tag">Redux Toolkit</span><span class="skill-tag">Zustand</span><span class="skill-tag">SWR</span><span class="skill-tag">WebSockets</span><span class="skill-tag">Context API</span>
          </div>
        </div>

        <div class="skill-card reveal">
          <div class="skill-head">
            <div class="skill-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21l4-4M5 19l9.5-9.5a2.5 2.5 0 1 1 3.5 3.5L8.5 22.5M14 4l6 6"/></svg></div>
            <div class="skill-name">UI &amp; Styling</div>
          </div>
          <div class="skill-tags">
            <span class="skill-tag">Tailwind CSS</span><span class="skill-tag">shadcn/ui</span><span class="skill-tag">Radix UI</span><span class="skill-tag">MUI</span><span class="skill-tag">Framer Motion</span><span class="skill-tag">CSS Modules</span>
          </div>
        </div>

        <div class="skill-card reveal">
          <div class="skill-head">
            <div class="skill-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l9 4v6c0 5-3.8 9.4-9 10-5.2-.6-9-5-9-10V6l9-4z"/><path d="M9 12l2 2 4-4"/></svg></div>
            <div class="skill-name">Testing &amp; Quality</div>
          </div>
          <div class="skill-tags">
            <span class="skill-tag">Playwright</span><span class="skill-tag">Vitest</span><span class="skill-tag">Jest</span><span class="skill-tag">React Testing Library</span><span class="skill-tag">Storybook</span><span class="skill-tag">ESLint</span>
          </div>
        </div>

        <div class="skill-card reveal">
          <div class="skill-head">
            <div class="skill-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg></div>
            <div class="skill-name">Performance</div>
          </div>
          <div class="skill-tags">
            <span class="skill-tag">Core Web Vitals</span><span class="skill-tag">Lighthouse</span><span class="skill-tag">Bundle Optimization</span><span class="skill-tag">Code Splitting</span><span class="skill-tag">Image Optimization</span><span class="skill-tag">WCAG</span>
          </div>
        </div>

        <div class="skill-card reveal">
          <div class="skill-head">
            <div class="skill-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h5"/></svg></div>
            <div class="skill-name">Backend &amp; Tooling</div>
          </div>
          <div class="skill-tags">
            <span class="skill-tag">Node.js</span><span class="skill-tag">PostgreSQL</span><span class="skill-tag">Prisma</span><span class="skill-tag">GitHub Actions</span><span class="skill-tag">Vercel</span><span class="skill-tag">Cloudflare Workers</span><span class="skill-tag">Docker</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" aria-label="Projects">
    <div class="container">
      <div class="section-head reveal">
        <div class="section-label">[ 03 — Projects ]</div>
        <h2 class="section-title">Selected Work</h2>
      </div>

      <div class="projects-list">
        <article class="project-featured reveal">
          <div class="pf-content">
            <h3 class="project-title">Aivo Platform</h3>
            <p class="project-desc">Long-term production SaaS platform. Sole frontend architect — designed the full component architecture, real-time WebSocket system, PDF editor, rich-text engine, and E2E testing strategy from scratch.</p>
            <div class="tags">
              <span class="tag">Next.js</span><span class="tag">TypeScript</span><span class="tag">React Query</span><span class="tag">WebSockets</span><span class="tag">Playwright</span><span class="tag">Tiptap</span><span class="tag">dnd-kit</span>
            </div>
            <div class="pf-achievements">
              <div><span>✓</span>Real-time multi-user collaboration system</div>
              <div><span>✓</span>PDF editor replacing third-party tooling</div>
              <div><span>✓</span>E2E test suite eliminating regression classes</div>
            </div>
          </div>
          <div class="pf-illu" aria-hidden="true">
            <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="280" height="220" rx="8" stroke="#3B82F6" stroke-opacity="0.5" stroke-width="1"/>
              <line x1="20" y1="48" x2="300" y2="48" stroke="#1E1E2E" stroke-width="1"/>
              <circle cx="36" cy="34" r="3" fill="#FF5F57"/><circle cx="48" cy="34" r="3" fill="#FEBC2E"/><circle cx="60" cy="34" r="3" fill="#28C840"/>
              <rect x="36" y="64" width="80" height="160" rx="4" stroke="#3B82F6" stroke-opacity="0.4"/>
              <line x1="48" y1="80" x2="100" y2="80" stroke="#3B82F6" stroke-width="1"/>
              <line x1="48" y1="94" x2="92" y2="94" stroke="#6B7280" stroke-width="1"/>
              <line x1="48" y1="108" x2="100" y2="108" stroke="#6B7280" stroke-width="1"/>
              <line x1="48" y1="122" x2="86" y2="122" stroke="#10B981" stroke-width="1"/>
              <rect x="48" y="138" width="56" height="20" rx="3" stroke="#3B82F6" stroke-opacity="0.5"/>
              <rect x="48" y="166" width="56" height="20" rx="3" stroke="#3B82F6" stroke-opacity="0.5"/>
              <rect x="132" y="64" width="152" height="80" rx="4" stroke="#3B82F6" stroke-opacity="0.4"/>
              <line x1="144" y1="80" x2="200" y2="80" stroke="#3B82F6" stroke-width="1"/>
              <line x1="144" y1="94" x2="260" y2="94" stroke="#6B7280" stroke-width="1"/>
              <line x1="144" y1="108" x2="240" y2="108" stroke="#6B7280" stroke-width="1"/>
              <line x1="144" y1="122" x2="220" y2="122" stroke="#6B7280" stroke-width="1"/>
              <rect x="132" y="156" width="72" height="68" rx="4" stroke="#10B981" stroke-opacity="0.5"/>
              <rect x="212" y="156" width="72" height="68" rx="4" stroke="#3B82F6" stroke-opacity="0.5"/>
              <circle cx="248" cy="190" r="14" stroke="#3B82F6" stroke-opacity="0.7"/>
              <path d="M242 190l4 4 8-8" stroke="#10B981" stroke-width="1.4"/>
            </svg>
          </div>
        </article>

        <div class="project-grid">
          <article class="project reveal">
            <div class="project-label">Full-stack</div>
            <h3 class="project-title">Pet Life</h3>
            <p class="project-sub">Full-Stack Pet Health Platform</p>
            <p class="project-desc">End-to-end system for managing pet health records — from PostgreSQL schema design with Prisma, to Next.js 15 server components, to accessible UI. Full ownership.</p>
            <div class="tags">
              <span class="tag">Next.js 15</span><span class="tag">TypeScript</span><span class="tag">PostgreSQL</span><span class="tag">Prisma</span><span class="tag">Shadcn UI</span><span class="tag">Vercel</span>
            </div>
            <div class="project-links">
              <a class="project-link" href="https://github.com/andriimaksymov" target="_blank" rel="noopener">[ GitHub ↗ ]</a>
              <a class="project-link" href="#" rel="noopener">[ Live Demo ↗ ]</a>
            </div>
          </article>

          <article class="project reveal">
            <div class="project-label">Edge tooling</div>
            <h3 class="project-title">JSON UI Forge</h3>
            <p class="project-sub">Schema-Driven UI Builder</p>
            <p class="project-desc">A JSON-to-React rendering engine enabling no-code UI generation. Deployed on Cloudflare Workers edge for global low-latency access. Extensible without touching core logic.</p>
            <div class="tags">
              <span class="tag">React</span><span class="tag">TypeScript</span><span class="tag">JSON Schema</span><span class="tag">Cloudflare Workers</span>
            </div>
            <div class="project-links">
              <a class="project-link" href="https://github.com/andriimaksymov" target="_blank" rel="noopener">[ GitHub ↗ ]</a>
              <a class="project-link" href="#" rel="noopener">[ Live Demo ↗ ]</a>
            </div>
          </article>

          <article class="project reveal">
            <div class="project-label">Devtools</div>
            <h3 class="project-title">Portfolio Score</h3>
            <p class="project-sub">Developer Profile Analytics</p>
            <p class="project-desc">Automated scoring tool that ingests GitHub and LinkedIn profile data to generate structured, actionable feedback for developers.</p>
            <div class="tags">
              <span class="tag">React</span><span class="tag">Node.js</span><span class="tag">GitHub API</span>
            </div>
            <div class="project-links">
              <a class="project-link" href="https://github.com/andriimaksymov" target="_blank" rel="noopener">[ GitHub ↗ ]</a>
            </div>
          </article>

          <article class="project reveal" style="display:flex;align-items:center;justify-content:center;text-align:center;min-height:240px;">
            <div style="display:flex;flex-direction:column;gap:10px;align-items:center;">
              <div class="project-label">Coming next</div>
              <h3 class="project-title" style="font-size:22px;">More in the lab</h3>
              <p class="project-desc" style="max-width:260px;">A streaming-first design-system tooling project is currently in development. Reach out for early access.</p>
              <a class="project-link" href="#contact">[ Get in touch ↗ ]</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section id="about" aria-label="About">
    <div class="container">
      <div class="section-head reveal">
        <div class="section-label">[ 04 — About ]</div>
        <h2 class="section-title">A bit about me</h2>
      </div>

      <div class="about-grid">
        <div class="about-text reveal">
          <p>I've spent the last 9 years obsessing over how the web is built. Not just making things that look good — making things that are fast, scalable, and maintainable six months after launch.</p>
          <p>I started cutting HTML/CSS back in 2017 and never stopped pushing forward — from hand-coded layouts to React architecture, from client scripts to building real-time SaaS platforms. I care about the whole system: performance budgets, test coverage, CI pipelines, and the naming of variables.</p>
          <p>When I'm not writing code, I'm thinking about it. I follow the React and Next.js RFC process, contribute to team architecture decisions, and try to write frontend that future developers will thank me for.</p>
          <div class="value-chips">
            <span class="value">Product Thinking</span>
            <span class="value">High Ownership</span>
            <span class="value">Performance First</span>
          </div>
        </div>

        <div class="terminal reveal" aria-hidden="true">
          <div class="term-bar">
            <div class="lights"><span></span><span></span><span></span></div>
            <div class="term-title">~/andrii — zsh</div>
          </div>
          <div class="term-body" id="termBody"></div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" aria-label="Contact">
    <div class="container">
      <div class="section-head reveal" style="text-align:center;align-items:center;">
        <div class="section-label">[ 05 — Contact ]</div>
        <h2 class="section-title">Let's work together</h2>
      </div>

      <div class="contact-wrap reveal">
        <p class="contact-sub">I'm currently open to senior frontend and frontend architect roles — remote, full-time or contract. If you're building something ambitious, I'd love to hear about it.</p>

        <div class="contact-methods">
          <button class="contact-card" id="copyEmail" type="button" aria-label="Copy email to clipboard">
            <div class="contact-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></div>
            <div class="contact-label">Email</div>
            <div class="contact-val">andrii.maksymov.1@gmail.com</div>
            <span class="tooltip" id="copyTip">Copied ✓</span>
          </button>
          <a class="contact-card" href="https://linkedin.com/in/maksymov-andrii" target="_blank" rel="noopener">
            <div class="contact-ico"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7A1.7 1.7 0 1 1 8.2 6 1.7 1.7 0 0 1 6.5 7.7zM19 19h-3v-5c0-1.2-.5-2-1.6-2A1.7 1.7 0 0 0 13 13c-.1.2-.1.4-.1.6V19h-3V9h3v1.3A3 3 0 0 1 15.6 9c2 0 3.4 1.3 3.4 4V19z"/></svg></div>
            <div class="contact-label">LinkedIn</div>
            <div class="contact-val">linkedin.com/in/maksymov-andrii</div>
          </a>
          <a class="contact-card" href="https://github.com/andriimaksymov" target="_blank" rel="noopener">
            <div class="contact-ico"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A12 12 0 0 0 .5 12.5c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 23.5 12.5 12 12 0 0 0 12 .5z"/></svg></div>
            <div class="contact-label">GitHub</div>
            <div class="contact-val">github.com/andriimaksymov</div>
          </a>
        </div>

        <a class="cta-big" href="mailto:andrii.maksymov.1@gmail.com">
          Send me a message
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container footer-inner">
    <div>© 2025 Andrii Maksymov. Built with precision.</div>
    <div>React · Next.js · TypeScript</div>
  </div>
</footer>
`;

type TerminalSegment =
  | { cls: string; text: string; nl?: never }
  | { nl: number; cls?: never; text?: never };

const terminalLines: TerminalSegment[] = [
  { cls: "prompt", text: "$ " },
  { cls: "com", text: "whoami" },
  { nl: 1 },
  { cls: "res", text: "andrii.maksymov" },
  { nl: 2 },
  { cls: "prompt", text: "$ " },
  { cls: "com", text: "cat skills.json | jq '.core'" },
  { nl: 1 },
  { cls: "res", text: '["React", "Next.js", "TypeScript"]' },
  { nl: 2 },
  { cls: "prompt", text: "$ " },
  { cls: "com", text: "git log --oneline -5" },
  { nl: 1 },
  { cls: "hash", text: "a3f2c1b " },
  { cls: "res", text: "feat: real-time collab via WebSockets" },
  { nl: 1 },
  { cls: "hash", text: "9d8e4a0 " },
  { cls: "res", text: "perf: LCP < 1s, Lighthouse 90+" },
  { nl: 1 },
  { cls: "hash", text: "b7c3f21 " },
  { cls: "res", text: "test: E2E coverage via Playwright" },
  { nl: 1 },
  { cls: "hash", text: "2e1a9d8 " },
  { cls: "res", text: "arch: migrated to TypeScript strict" },
  { nl: 1 },
  { cls: "hash", text: "c5f8b3e " },
  { cls: "res", text: "init: greenfield SaaS platform" },
  { nl: 2 },
  { cls: "prompt", text: "$ " },
  { cls: "com", text: "echo $STATUS" },
  { nl: 1 },
  { cls: "green", text: "open to remote opportunities" },
  { nl: 1 },
];

function App() {
  useEffect(() => {
    let cancelled = false;
    const observers: IntersectionObserver[] = [];
    const cleanupFns: Array<() => void> = [];
    const timeouts = new Set<number>();
    const animationFrames = new Set<number>();
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const addEvent = <K extends keyof WindowEventMap>(
      target: Window,
      type: K,
      listener: (event: WindowEventMap[K]) => void,
      options?: AddEventListenerOptions,
    ) => {
      target.addEventListener(type, listener, options);
      cleanupFns.push(() => target.removeEventListener(type, listener, options));
    };

    const addElementEvent = <K extends keyof HTMLElementEventMap>(
      target: HTMLElement,
      type: K,
      listener: (event: HTMLElementEventMap[K]) => void,
      options?: AddEventListenerOptions,
    ) => {
      target.addEventListener(type, listener, options);
      cleanupFns.push(() => target.removeEventListener(type, listener, options));
    };

    const setTimer = (callback: () => void, delay: number) => {
      const id = window.setTimeout(() => {
        timeouts.delete(id);
        if (!cancelled) callback();
      }, delay);
      timeouts.add(id);
      return id;
    };

    const requestFrame = (callback: FrameRequestCallback) => {
      let id = 0;
      id = window.requestAnimationFrame((time) => {
        animationFrames.delete(id);
        if (!cancelled) callback(time);
      });
      animationFrames.add(id);
      return id;
    };

    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    if (isFinePointer && dot && ring) {
      let mx = window.innerWidth / 2;
      let my = window.innerHeight / 2;
      let rx = mx;
      let ry = my;

      addEvent(window, "mousemove", (event) => {
        mx = event.clientX;
        my = event.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      });

      const tick = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        requestFrame(tick);
      };
      tick();

      document.querySelectorAll<HTMLElement>("a, button, .skill-card, .project, .contact-card, .tl-item").forEach((element) => {
        const enter = () => ring.classList.add("hover");
        const leave = () => ring.classList.remove("hover");
        addElementEvent(element, "mouseenter", enter);
        addElementEvent(element, "mouseleave", leave);
      });
    } else {
      if (dot) dot.style.display = "none";
      if (ring) ring.style.display = "none";
    }

    const nav = document.getElementById("nav");
    if (nav) {
      const onScroll = () => {
        nav.classList.toggle("scrolled", window.scrollY > 80);
      };
      onScroll();
      addEvent(window, "scroll", onScroll, { passive: true });
    }

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileClose = document.getElementById("mobileClose");
    if (hamburger && mobileMenu && mobileClose) {
      const openMenu = () => {
        mobileMenu.classList.add("open");
        mobileMenu.setAttribute("aria-hidden", "false");
        hamburger.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      };
      const closeMenu = () => {
        mobileMenu.classList.remove("open");
        mobileMenu.setAttribute("aria-hidden", "true");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      };

      addElementEvent(hamburger, "click", openMenu);
      addElementEvent(mobileClose, "click", closeMenu);
      mobileMenu.querySelectorAll<HTMLElement>("a").forEach((link) => addElementEvent(link, "click", closeMenu));
    }

    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    if (prefersReduced) {
      reveals.forEach((element) => element.classList.add("in"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      observers.push(revealObserver);
      reveals.forEach((element) => revealObserver.observe(element));
    }

    const stats = document.getElementById("stats");
    if (stats) {
      let countersRun = false;
      const runCounters = () => {
        if (countersRun) return;
        countersRun = true;
        stats.querySelectorAll<HTMLElement>(".stat-num").forEach((element) => {
          const target = Number.parseInt(element.dataset.target ?? "0", 10);
          const suffix = element.dataset.suffix ?? "";
          const duration = 1400;
          const start = performance.now();

          const frame = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - (1 - t) ** 3;
            const val = Math.round(target * eased);
            element.textContent = val + (t === 1 ? suffix : "");
            if (t < 1) requestFrame(frame);
          };

          requestFrame(frame);
        });
      };

      if (prefersReduced) {
        stats.querySelectorAll<HTMLElement>(".stat-num").forEach((element) => {
          element.textContent = (element.dataset.target ?? "") + (element.dataset.suffix ?? "");
        });
        countersRun = true;
      } else {
        const statsObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                runCounters();
                statsObserver.disconnect();
              }
            });
          },
          { threshold: 0.4 },
        );
        observers.push(statsObserver);
        statsObserver.observe(stats);
      }
    }

    const lines = ["Senior Frontend Engineer", "React / Next.js Architect", "Product-minded Builder"];
    const typeline = document.getElementById("typeline");
    if (typeline) {
      let lineIndex = 0;
      let charIndex = 0;
      let deleting = false;

      const type = () => {
        if (prefersReduced) {
          typeline.textContent = lines[0];
          return;
        }

        const word = lines[lineIndex];
        if (!deleting) {
          charIndex += 1;
          typeline.textContent = word.slice(0, charIndex);
          if (charIndex === word.length) {
            setTimer(() => {
              deleting = true;
              type();
            }, 2200);
            return;
          }
          setTimer(type, 55);
        } else {
          charIndex -= 1;
          typeline.textContent = word.slice(0, charIndex);
          if (charIndex === 0) {
            deleting = false;
            lineIndex = (lineIndex + 1) % lines.length;
            setTimer(type, 250);
            return;
          }
          setTimer(type, 28);
        }
      };
      type();
    }

    const termBody = document.getElementById("termBody");
    const instantTerminal = () => {
      if (!termBody) return;
      termBody.innerHTML = "";
      terminalLines.forEach((segment) => {
        if (typeof segment.nl === "number") {
          termBody.appendChild(document.createTextNode("\n".repeat(segment.nl)));
          return;
        }
        const span = document.createElement("span");
        span.className = segment.cls;
        span.textContent = segment.text;
        termBody.appendChild(span);
      });
      const cursor = document.createElement("span");
      cursor.className = "term-cursor";
      termBody.appendChild(cursor);
    };

    let termStarted = false;
    const startTerminal = () => {
      if (!termBody || termStarted) return;
      termStarted = true;
      if (prefersReduced) {
        instantTerminal();
        return;
      }

      termBody.innerHTML = "";
      let segmentIndex = 0;
      let charIndex = 0;
      let currentSpan: HTMLSpanElement | null = null;
      const cursor = document.createElement("span");
      cursor.className = "term-cursor";
      termBody.appendChild(cursor);

      const step = () => {
        if (!termBody || segmentIndex >= terminalLines.length) return;
        const segment = terminalLines[segmentIndex];
        if (typeof segment.nl === "number") {
          termBody.insertBefore(document.createTextNode("\n".repeat(segment.nl)), cursor);
          segmentIndex += 1;
          charIndex = 0;
          currentSpan = null;
          setTimer(step, 60);
          return;
        }

        if (!currentSpan) {
          currentSpan = document.createElement("span");
          currentSpan.className = segment.cls;
          termBody.insertBefore(currentSpan, cursor);
        }
        charIndex += 1;
        currentSpan.textContent = segment.text.slice(0, charIndex);

        if (charIndex >= segment.text.length) {
          segmentIndex += 1;
          charIndex = 0;
          currentSpan = null;
          setTimer(step, 60);
          return;
        }

        const delay = segment.cls === "com" ? 28 : segment.cls === "prompt" ? 30 : 8;
        setTimer(step, delay);
      };
      step();
    };

    const terminal = document.querySelector<HTMLElement>(".terminal");
    if (terminal && termBody) {
      const termObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startTerminal();
              termObserver.disconnect();
            }
          });
        },
        { threshold: 0.35 },
      );
      observers.push(termObserver);
      termObserver.observe(terminal);
    }

    const copyButton = document.getElementById("copyEmail");
    const copyTip = document.getElementById("copyTip");
    if (copyButton && copyTip) {
      const onCopy = async () => {
        const email = "andrii.maksymov.1@gmail.com";
        try {
          await navigator.clipboard.writeText(email);
        } catch {
          const textarea = document.createElement("textarea");
          textarea.value = email;
          document.body.appendChild(textarea);
          textarea.select();
          try {
            document.execCommand("copy");
          } catch {
            // Older browser fallback failed; the visible email remains selectable.
          }
          textarea.remove();
        }
        copyTip.classList.add("show");
        setTimer(() => copyTip.classList.remove("show"), 1500);
      };

      addElementEvent(copyButton, "click", onCopy);
    }

    const sectionIds = ["experience", "skills", "projects", "about", "contact"];
    const linkMap: Record<string, HTMLElement> = {};
    document.querySelectorAll<HTMLElement>(".nav-links a").forEach((anchor) => {
      const key = anchor.dataset.link;
      if (key) linkMap[key] = anchor;
    });
    const scrollSpy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionIds.forEach((id) => linkMap[id]?.classList.remove("active"));
            const id = entry.target.id;
            linkMap[id]?.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    observers.push(scrollSpy);
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) scrollSpy.observe(element);
    });

    const timelineItems = document.querySelectorAll<HTMLElement>(".tl-item");
    timelineItems.forEach((item) => {
      const onClick = () => {
        const targetId = item.dataset.target;
        const target = targetId ? document.getElementById(targetId) : null;
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 96;
          window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
        }
      };
      addElementEvent(item, "click", onClick);
    });

    const experienceSpy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            timelineItems.forEach((item) => item.classList.toggle("active", item.dataset.target === id));
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 },
    );
    observers.push(experienceSpy);
    document.querySelectorAll<HTMLElement>(".exp-entry").forEach((entry) => experienceSpy.observe(entry));

    const initialHash = decodeURIComponent(window.location.hash.slice(1));
    if (initialHash) {
      setTimer(() => {
        document.getElementById(initialHash)?.scrollIntoView();
      }, 0);
    }

    return () => {
      cancelled = true;
      cleanupFns.forEach((cleanup) => cleanup());
      observers.forEach((observer) => observer.disconnect());
      timeouts.forEach((id) => window.clearTimeout(id));
      animationFrames.forEach((id) => window.cancelAnimationFrame(id));
      document.body.style.overflow = "";
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: portfolioMarkup }} />;
}

export default App;
