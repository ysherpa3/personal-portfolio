"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-white/5"
          : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between"
      >
        <Link
          href="/"
          aria-label="Yogesh Sherpa — home"
          className="font-mono text-sm tracking-widest text-white/60 hover:text-white transition-colors duration-200"
        >
          YS
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-muted hover:text-white transition-colors duration-200 tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span
            aria-hidden="true"
            className={`block w-5 h-px bg-white/70 transition-all duration-300 ${open ? "rotate-45 translate-y-1.25" : ""}`}
          />
          <span
            aria-hidden="true"
            className={`block w-5 h-px bg-white/70 transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            aria-hidden="true"
            className={`block w-5 h-px bg-white/70 transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.25" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="sm:hidden bg-background/95 backdrop-blur-xl border-t border-white/5 px-6 py-8"
      >
        <ul className="flex flex-col gap-6">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="text-lg text-muted hover:text-white transition-colors duration-200 tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
