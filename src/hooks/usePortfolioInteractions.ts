import { useEffect } from "react";
import { contact, navItems } from "../data/portfolio";

type Cleanup = () => void;

export function usePortfolioInteractions() {
  useEffect(() => {
    let cancelled = false;
    const observers: IntersectionObserver[] = [];
    const cleanupFns: Cleanup[] = [];
    const timeouts = new Set<number>();
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
      mobileMenu.toggleAttribute("inert", true);

      const openMenu = () => {
        mobileMenu.hidden = false;
        mobileMenu.toggleAttribute("inert", false);
        mobileMenu.classList.add("open");
        mobileMenu.setAttribute("aria-hidden", "false");
        hamburger.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
        mobileClose.focus();
      };
      const closeMenu = () => {
        mobileMenu.classList.remove("open");
        mobileMenu.setAttribute("aria-hidden", "true");
        mobileMenu.toggleAttribute("inert", true);
        mobileMenu.hidden = true;
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        if (document.activeElement instanceof HTMLElement && mobileMenu.contains(document.activeElement)) {
          hamburger.focus();
        }
      };
      const closeMenuOnEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
          closeMenu();
        }
      };

      addElementEvent(hamburger, "click", openMenu);
      addElementEvent(mobileClose, "click", closeMenu);
      mobileMenu.querySelectorAll<HTMLElement>("a").forEach((link) => addElementEvent(link, "click", closeMenu));
      addWindowEvent("keydown", closeMenuOnEscape);
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
      document.body.style.overflow = "";
    };
  }, []);
}
