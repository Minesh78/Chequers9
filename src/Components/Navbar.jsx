import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Brand from "./Brand";
import { site } from "../content/site";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isDocked, setIsDocked] = useState(false);

  useEffect(() => {
    let frame = null;

    const updateDock = () => {
      frame = null;
      setIsDocked(window.scrollY > 72);
    };

    const handleScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateDock);
    };

    frame = window.requestAnimationFrame(updateDock);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <header className={`site-header${pathname === "/" ? " site-header--home" : ""}`}>
      <div className="header-inner shell">
        <Brand />
        <nav
          className={`desktop-nav${isDocked ? " desktop-nav--floating" : ""}`}
          aria-label="Primary navigation"
        >
          {site.navigation.map((item) => {
            const isHome = item.href === "/";

            return (
              <NavLink
                key={item.href}
                to={item.href}
                end={isHome}
                className={isHome ? "desktop-nav-home" : undefined}
                aria-hidden={isHome && !isDocked ? "true" : undefined}
                tabIndex={isHome && !isDocked ? -1 : undefined}
              >
                {item.label}
              </NavLink>
            );
          })}
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
