"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/advisory", label: "Advisory" },
    { href: "/experience", label: "Experience" },
    { href: "/insights", label: "Insights" },
  ];

  return (
    <>
      <nav className="site-nav">
        <div className="nav-inner">

          {/* Monogram */}
          <Link href="/" className="nav-logo" aria-label="Auridian — Home" onClick={() => setOpen(false)}>
            <img
              src="/images/auridian-monogram-v10-gold.svg"
              alt="Auridian monogram"
              height={40}
              width={40}
            />
          </Link>

          {/* Desktop links */}
          <div className="nav-links nav-links-desktop">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${pathname === l.href ? "active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-link nav-link-engage">
              Engage
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`nav-hamburger-bar ${open ? "open" : ""}`} />
            <span className={`nav-hamburger-bar ${open ? "open" : ""}`} />
            <span className={`nav-hamburger-bar ${open ? "open" : ""}`} />
          </button>

        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="nav-mobile-overlay" onClick={() => setOpen(false)}>
          <div className="nav-mobile-menu" onClick={(e) => e.stopPropagation()}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-mobile-link ${pathname === l.href ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="nav-mobile-link nav-mobile-engage"
              onClick={() => setOpen(false)}
            >
              Engage
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
