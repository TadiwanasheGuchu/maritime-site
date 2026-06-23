import type { ComponentType } from "react";
import {
  Ambulance,
  Calendar,
  Droplets,
  GraduationCap,
  MedKit,
  Search,
  Waves,
} from "./icons";

type Service = {
  Icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    Icon: Waves,
    title: "Beach Lifeguards",
    description: "Professional shoreline surveillance and ocean rescue teams.",
  },
  {
    Icon: Waves,
    title: "Pool Safety",
    description: "Compliant guarding for resorts, municipal pools, and clubs.",
  },
  {
    Icon: Ambulance,
    title: "Emergency Response",
    description:
      "Rapid deployment units for water-based medical emergencies.",
  },
  {
    Icon: Search,
    title: "Search & Rescue",
    description: "Coordinated efforts for missing persons in aquatic zones.",
  },
  {
    Icon: Droplets,
    title: "Diving Operations",
    description:
      "Commercial diving search and professional recovery services.",
  },
  {
    Icon: GraduationCap,
    title: "Rescue Training",
    description:
      "Internationally recognised certification for aquatic professionals.",
  },
  {
    Icon: MedKit,
    title: "First Aid Training",
    description: "Advanced life support and basic first aid workshop cycles.",
  },
  {
    Icon: Calendar,
    title: "Event Coverage",
    description: "Safety logistics for triathlons, festivals, and water sports.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-margin-desktop px-gutter max-w-7xl mx-auto scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-gutter gap-base">
        <div>
          <h2 className="font-headline-lg text-on-surface">Our Expertise</h2>
          <p className="text-on-surface-variant mt-2 font-body-md">
            Comprehensive water safety solutions for every environment.
          </p>
        </div>
        <div className="bg-primary-fixed text-on-primary-fixed px-4 py-3 flex items-center gap-base rounded-full self-start md:self-auto">
          <Droplets size={20} />
          <span className="font-label-lg">
            NEW: Diving search &amp; recovery launched in 2024
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
        {SERVICES.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="p-8 border border-outline-variant rounded-lg hover:border-primary hover:bg-surface-container-low transition-all"
          >
            <Icon size={40} className="text-primary mb-4 block" />
            <h3 className="font-headline-md text-on-surface">{title}</h3>
            <p className="font-body-md text-on-surface-variant mt-4">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
