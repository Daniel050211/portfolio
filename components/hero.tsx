"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { site, stats } from "@/lib/site";
import { gsap } from "gsap";
import { CountUp } from "@/components/count-up";

export function Hero() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scopeRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          "[data-hero-chip]",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.55, delay: 0.08 }
        )
        .fromTo(
          "[data-hero-title]",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.05, stagger: 0.08 },
          "-=0.15"
        )
        .fromTo(
          "[data-hero-tagline]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.55"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.35"
        )
        .fromTo(
          "[data-hero-stat]",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.06 },
          "-=0.25"
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-5 pb-24 pt-28 sm:px-8"
      ref={scopeRef}
    >
      <div
        aria-hidden="true"
        className="signal-grid pointer-events-none absolute inset-0 opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[100px] float-soft"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-[24rem] w-[24rem] rounded-full bg-secondary/10 blur-[90px]"
      />
      <div aria-hidden="true" className="noise absolute inset-0" />

      {/* decorative signal line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-1/3 h-px overflow-hidden opacity-40"
      >
        <div className="signal-sweep h-full w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-center gap-3">
          <div
            data-hero-chip
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent-strong"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {site.status} · {site.availability}
          </div>
          <div
            data-hero-chip
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/70 px-3 py-1.5 font-mono text-[11px] text-muted-foreground"
          >
            <Sparkles className="h-3 w-3 text-amber" />
            PolyU · AI &amp; IE · {site.location}
          </div>
        </div>

        <h1 className="mt-8 max-w-5xl">
          <span className="block overflow-hidden">
            <span
              data-hero-title
              className="block font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Systems that
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              data-hero-title
              className="block font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              <span className="text-accent">see</span>
              <span className="text-muted-foreground/50"> · </span>
              <span className="text-secondary">reason</span>
              <span className="text-muted-foreground/50"> · </span>
              <span className="text-amber">act</span>
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              data-hero-title
              className="mt-1 block font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              in the real world.
            </span>
          </span>
        </h1>

        <p
          data-hero-tagline
          className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/65 sm:text-lg"
        >
          I&apos;m <span className="font-semibold text-foreground">{site.name}</span>
          — {site.role} at {site.institution}. This is my{" "}
          <span className="text-accent">Signal Lab</span>: a live portfolio of
          AI automation, product tools, quant research, and systems engineering.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            data-hero-cta
            href="#lab"
            className="group inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-on-primary transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-[var(--glow)]"
          >
            Enter the Lab
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            data-hero-cta
            href={site.resumeUrl}
            download
            className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-border bg-surface/50 px-6 text-sm font-medium text-foreground/80 transition-all duration-300 hover:border-accent hover:text-accent"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <button
            data-hero-cta
            type="button"
            onClick={() =>
              window.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              )
            }
            className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-dashed border-border px-5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-accent/50 hover:text-accent sm:ml-1"
          >
            Press
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[11px]">
              ⌘K
            </kbd>
          </button>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              data-hero-stat
              className="rounded-2xl border border-border bg-surface/60 px-4 py-4 backdrop-blur-sm"
            >
              <p className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#lab"
        aria-label="Scroll to lab section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-foreground/35 transition-colors hover:text-accent sm:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
