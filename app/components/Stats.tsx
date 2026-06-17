"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { target: number; suffix?: string; label: string };

const stats: Stat[] = [
  { target: 1500, suffix: "+", label: "Lives Secured" },
  { target: 24, suffix: "/7", label: "Hours Active" },
  { target: 850, suffix: "+", label: "Elite Guards" },
  { target: 100, suffix: "%", label: "Coastline" },
];

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        if (reduceMotion) {
          setValue(target);
          return;
        }

        const duration = 2000;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutCubic for a snappy settle
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="font-display text-6xl text-tertiary text-glow md:text-8xl"
    >
      {value}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-12 rounded-3xl glass-card p-12 md:gap-24 md:p-16">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <Counter target={stat.target} suffix={stat.suffix} />
          <div className="mt-2 text-sm font-bold uppercase tracking-widest text-white/40">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
