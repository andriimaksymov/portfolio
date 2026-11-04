import { navItems } from "@/data/nav";
import { profile } from "@/data/portfolio";

/** Server component: no client JavaScript. */
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page site-header-inner">
        <a className="site-name" href="#top">
          {profile.name}
        </a>
        <nav className="site-nav" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
