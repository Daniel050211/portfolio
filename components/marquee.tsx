"use client";

import { focusAreas } from "@/lib/site";

const items = focusAreas.flatMap((area) => area.tags);

export function Marquee() {
  const sequence = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y border-border bg-surface/60 py-5"
      aria-hidden="true"
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="marquee-track items-center gap-10 pr-10">
        {sequence.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
