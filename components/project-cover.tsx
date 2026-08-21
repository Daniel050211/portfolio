import type { ReactNode } from "react";

const covers: Record<
  string,
  { from: string; to: string; graphic: ReactNode }
> = {
  shopforge: {
    from: "from-accent/25",
    to: "to-secondary/15",
    graphic: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="28" y="36" width="44" height="52" rx="4" />
        <rect x="84" y="28" width="52" height="60" rx="4" />
        <rect x="148" y="40" width="40" height="48" rx="4" />
        <path d="M40 56h20M40 66h14M96 48h28M96 60h20M160 56h16" />
        <circle cx="50" cy="78" r="3" fill="currentColor" stroke="none" />
        <circle cx="110" cy="78" r="3" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  forgekit: {
    from: "from-secondary/25",
    to: "to-accent/15",
    graphic: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="36" y="32" width="140" height="88" rx="8" />
        <path d="M36 52h140" />
        <circle cx="52" cy="42" r="3" fill="currentColor" stroke="none" />
        <circle cx="64" cy="42" r="3" />
        <rect x="52" y="66" width="48" height="10" rx="2" />
        <rect x="52" y="84" width="108" height="8" rx="2" />
        <rect x="52" y="98" width="88" height="8" rx="2" />
      </g>
    ),
  },
  "foshan-pipeline": {
    from: "from-accent/20",
    to: "to-amber/15",
    graphic: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="48" cy="76" r="14" />
        <circle cx="110" cy="48" r="14" />
        <circle cx="110" cy="104" r="14" />
        <circle cx="172" cy="76" r="14" />
        <path d="M62 76h34M124 48h34M124 104h34M110 62v28" />
      </g>
    ),
  },
  "quant-radar": {
    from: "from-amber/20",
    to: "to-accent/15",
    graphic: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M32 108h156" />
        <path d="M32 108 68 72 92 88 128 44 168 64 188 36" />
        <path d="M68 72v36M92 88v20M128 44v64M168 64v44" opacity="0.45" />
      </g>
    ),
  },
  "xhs-report": {
    from: "from-secondary/20",
    to: "to-accent/10",
    graphic: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="58" y="28" width="72" height="92" rx="6" />
        <rect x="74" y="40" width="72" height="92" rx="6" />
        <path d="M86 58h48M86 72h40M86 86h32" />
      </g>
    ),
  },
  "ig-feedback-agent": {
    from: "from-accent/25",
    to: "to-secondary/10",
    graphic: (
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="40" y="40" width="88" height="44" rx="12" />
        <rect x="92" y="78" width="88" height="44" rx="12" />
        <circle cx="58" cy="62" r="4" fill="currentColor" stroke="none" />
        <path d="M70 62h40M108 100h48" />
      </g>
    ),
  },
};

export function ProjectCover({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const cover = covers[id] ?? covers.forgekit;

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-muted ${className}`}
    >
      <div className="signal-grid absolute inset-0 opacity-60" />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${cover.from} ${cover.to}`}
      />
      <svg
        viewBox="0 0 220 140"
        className="absolute inset-0 h-full w-full text-accent/80"
        preserveAspectRatio="xMidYMid slice"
      >
        {cover.graphic}
      </svg>
      <div className="noise absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface/80 to-transparent" />
    </div>
  );
}
