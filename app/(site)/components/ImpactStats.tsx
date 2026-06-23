"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const DURATION = 2000;

function useCountUp(end: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setValue(end);
      return;
    }

    let frame = 0;
    let startTs: number | null = null;
    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const progress = Math.min((ts - startTs) / DURATION, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, start]);

  return value;
}

function StatItem({
  end,
  label,
  active,
}: {
  end: number;
  label: string;
  active: boolean;
}) {
  const value = useCountUp(end, active);
  return (
    <div className="flex flex-col gap-2">
      <span className="font-display-lg text-on-primary">
        {value.toLocaleString("en-US")}+
      </span>
      <span className="font-label-lg uppercase tracking-wider opacity-80">
        {label}
      </span>
    </div>
  );
}

export default function ImpactStats() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  // Only render stats that have a verified value — keeps fabricated figures
  // off the page until real numbers are set in site-config.
  const stats = siteConfig.stats.filter(
    (s): s is { id: string; label: string; value: number } => s.value !== null
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (stats.length === 0) return null;

  return (
    <section ref={ref} className="bg-primary text-on-primary py-margin-desktop">
      <div className="max-w-7xl mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
        {stats.map((stat) => (
          <StatItem
            key={stat.id}
            end={stat.value}
            label={stat.label}
            active={active}
          />
        ))}
      </div>
    </section>
  );
}
