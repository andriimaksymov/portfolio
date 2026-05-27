import { navItems } from "../data/portfolio";

export function Navigation() {
  return (
    <>
      <nav className="nav" id="nav">
        <div className="container nav-inner">
          <a href="#top" className="monogram" aria-label="Andrii Maksymov — home">
            AM
          </a>

          <div className="nav-links" role="navigation" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a href={`#${item.id}`} data-link={item.id} key={item.id}>
                {item.label}
              </a>
            ))}
          </div>

          <button className="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" type="button">
            <span />
          </button>
        </div>
      </nav>

      <div className="mobile-menu" id="mobileMenu" role="navigation" aria-hidden="true" aria-label="Mobile navigation" hidden>
        <button className="mobile-close" id="mobileClose" aria-label="Close menu" type="button">
          [ CLOSE ]
        </button>
        {navItems.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
