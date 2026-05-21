import { useEffect } from "react";
import { about, contact, hero, navItems } from "../data/portfolio";

type Cleanup = () => void;

export function usePortfolioInteractions() {
  useEffect(() => {
    let cancelled = false;
    const observers: IntersectionObserver[] = [];
    const cleanupFns: Cleanup[] = [];
    const timeouts = new Set<number>();
    const animationFrames = new Set<number>();
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const addWindowEvent = <K extends keyof WindowEventMap>(
      type: K,
      listener: (event: WindowEventMap[K]) => void,
      options?: AddEventListenerOptions,
    ) => {
      window.addEventListener(type, listener, options);
      cleanupFns.push(() => window.removeEventListener(type, listener, options));
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
      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let ringX = mouseX;
      let ringY = mouseY;

      addWindowEvent("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      });

      const tick = () => {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
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
      addWindowEvent("scroll", onScroll, { passive: true });
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
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - (1 - progress) ** 3;
            const value = Math.round(target * eased);
            element.textContent = value + (progress === 1 ? suffix : "");
            if (progress < 1) requestFrame(frame);
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

    const typeline = document.getElementById("typeline");
    if (typeline) {
      let lineIndex = 0;
      let charIndex = 0;
      let deleting = false;

      const type = () => {
        if (prefersReduced) {
          typeline.textContent = hero.titleRotations[0];
          return;
        }

        const word = hero.titleRotations[lineIndex];
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
            lineIndex = (lineIndex + 1) % hero.titleRotations.length;
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
      about.terminalLines.forEach((segment) => {
        if (typeof segment.newline === "number") {
          termBody.appendChild(document.createTextNode("\n".repeat(segment.newline)));
          return;
        }
        const span = document.createElement("span");
        span.className = segment.className;
        span.textContent = segment.text;
        termBody.appendChild(span);
      });
      const cursor = document.createElement("span");
      cursor.className = "term-cursor";
      termBody.appendChild(cursor);
    };

    let terminalStarted = false;
    const startTerminal = () => {
      if (!termBody || terminalStarted) return;
      terminalStarted = true;
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
        if (!termBody || segmentIndex >= about.terminalLines.length) return;
        const segment = about.terminalLines[segmentIndex];
        if (typeof segment.newline === "number") {
          termBody.insertBefore(document.createTextNode("\n".repeat(segment.newline)), cursor);
          segmentIndex += 1;
          charIndex = 0;
          currentSpan = null;
          setTimer(step, 60);
          return;
        }

        if (!currentSpan) {
          currentSpan = document.createElement("span");
          currentSpan.className = segment.className;
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

        const delay = segment.className === "com" ? 28 : segment.className === "prompt" ? 30 : 8;
        setTimer(step, delay);
      };
      step();
    };

    const terminal = document.querySelector<HTMLElement>(".terminal");
    if (terminal && termBody) {
      const terminalObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startTerminal();
              terminalObserver.disconnect();
            }
          });
        },
        { threshold: 0.35 },
      );
      observers.push(terminalObserver);
      terminalObserver.observe(terminal);
    }

    const copyButton = document.getElementById("copyEmail");
    const copyTip = document.getElementById("copyTip");
    if (copyButton && copyTip) {
      const onCopy = async () => {
        const email = contact.methods.find((method) => method.copyValue)?.copyValue;
        if (!email) return;

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
            // The visible email remains available if legacy copy APIs fail.
          }
          textarea.remove();
        }
        copyTip.classList.add("show");
        setTimer(() => copyTip.classList.remove("show"), 1500);
      };

      addElementEvent(copyButton, "click", onCopy);
    }

    const sectionIds = navItems.map((item) => item.id);
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
}
