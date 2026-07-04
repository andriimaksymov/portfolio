"use client";

import { useEffect, useRef, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      rootMargin: "-8px 0px 0px 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <span ref={sentinel} aria-hidden="true" style={{ position: "absolute", top: 0, height: 1, width: 1 }} />
      <header className="nav" data-scrolled={scrolled}>
        <div className="page nav-inner">
          <a className="monogram" href="#top" aria-label="Andrii Maksymov, home">
            A<b>M</b>
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a className="nav-link" href="#work">
              Work
            </a>
            <a className="nav-link" href="#experience">
              Experience
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
