"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Menu, UserCircle, X } from "./icons";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Training", href: "#training" },
  { label: "About", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur border-b border-outline-variant">
      <div className="flex justify-between items-center px-gutter py-base max-w-7xl mx-auto">
        <a href="#top" className="flex items-center gap-base">
          <Image
            alt={`${siteConfig.name} logo`}
            src="/monarch-logo.png"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="font-headline-md text-primary hidden sm:block">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden md:flex gap-gutter">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-label-lg uppercase text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-base">
          <a
            href="#contact"
            className="bg-primary text-on-primary font-label-lg py-2 px-6 rounded-full hover:scale-95 duration-150 ease-in-out emergency-pulse uppercase"
          >
            Emergency
          </a>
          <a
            href="/login"
            aria-label="Staff sign in"
            title="Staff sign in"
            className="hidden md:inline-flex text-on-surface-variant hover:text-primary transition-colors"
          >
            <UserCircle />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-on-surface-variant hover:text-primary transition-colors"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-outline-variant bg-surface px-gutter py-base flex flex-col gap-base">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-label-lg uppercase text-on-surface-variant hover:text-primary py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/login"
            onClick={() => setOpen(false)}
            className="font-label-lg uppercase text-on-surface-variant hover:text-primary py-2"
          >
            Staff sign in
          </a>
        </nav>
      )}
    </header>
  );
}
