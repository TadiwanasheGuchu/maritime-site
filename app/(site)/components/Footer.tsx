import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Globe, Share2 } from "./icons";

const COLUMNS = [
  {
    title: "Navigation",
    links: [
      { label: "Services", href: "#services" },
      { label: "Training", href: "#training" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  const { website, share } = siteConfig.social;

  return (
    <footer className="bg-on-background text-surface">
      <div className="max-w-7xl mx-auto py-margin-desktop px-gutter flex flex-col md:flex-row justify-between items-start gap-gutter">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-base">
            <Image
              alt={`${siteConfig.name} logo`}
              src="/monarch-logo.png"
              width={64}
              height={64}
              className="h-16 w-16 object-contain bg-white rounded-full p-1"
            />
            <span className="font-headline-md text-surface">
              {siteConfig.name}
            </span>
          </div>
          <p className="font-body-md text-surface/80">{siteConfig.description}</p>
          {(website || share) && (
            <div className="flex gap-gutter">
              {website && (
                <a
                  href={website}
                  aria-label="Website"
                  className="text-surface hover:text-inverse-primary transition-colors"
                >
                  <Globe />
                </a>
              )}
              {share && (
                <a
                  href={share}
                  aria-label="Social"
                  className="text-surface hover:text-inverse-primary transition-colors"
                >
                  <Share2 />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-gutter">
          {COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h5 className="font-label-lg uppercase text-inverse-primary">
                {column.title}
              </h5>
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body-md text-surface/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 px-gutter py-4">
        <p className="font-body-md text-surface/40 text-xs text-center">
          © {new Date().getFullYear()} {siteConfig.legalName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
