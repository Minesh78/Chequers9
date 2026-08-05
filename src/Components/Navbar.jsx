import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Brand from "./Brand";
import { site } from "../content/site";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <header className={`site-header${pathname === "/" ? " site-header--home" : ""}`}>
      <div className="header-inner shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {site.navigation.slice(1).map((item) => (
            <NavLink key={item.href} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {site.navigation.map((item) => (
          <NavLink key={item.href} to={item.href} end={item.href === "/"}>
            <span className="nav-dot" aria-hidden="true" />
            {item.shortLabel}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
