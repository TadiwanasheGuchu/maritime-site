"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#stats", label: "Operational Reach" },
  { href: "#courses", label: "Training" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 transition-all duration-300 md:px-12 ${
        scrolled
          ? "border-b border-white/5 bg-background/85 py-3 backdrop-blur-md"
          : "py-5"
      }`}
    >
      <a
        href="#top"
        className="font-display text-3xl tracking-wider text-white md:text-4xl"
      >
        MONARCH
      </a>

      <div className="hidden items-center gap-8 font-medium tracking-wide text-on-primary/80 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-tertiary"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="rounded-full border-2 border-tertiary/50 px-6 py-2 font-bold text-tertiary shadow-[0_0_15px_rgba(29,158,117,0.2)] transition-all hover:bg-tertiary hover:text-white"
      >
        GET A QUOTE
      </a>
    </nav>
  );
}
