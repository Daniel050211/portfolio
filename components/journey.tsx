"use client";

import { useEffect, useRef } from "react";
import { awards, experience } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { Award, Briefcase, HeartHandshake } from "lucide-react";

export function Journey() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-grown");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("is-grown");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mono-label text-accent">03 — Journey</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Path so far
          </h2>
          <p className="mt-4 max-w-xl text-base text-foreground/75">
            Internships, service, and academic recognition — the trail that
            shaped how I work.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Timeline */}
          <div className="relative space-y-0">
            <div
              ref={lineRef}
              aria-hidden="true"
              className="timeline-line absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-accent via-border to-border"
            />
            {experience.map((item, i) => {
              const Icon =
                item.type === "work" ? Briefcase : HeartHandshake;
              return (
                <Reveal key={item.title} delay={i * 90}>
                  <article className="relative flex gap-5 pb-10 last:pb-0">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/40">
                      <p className="font-mono text-[11px] text-accent">
                        {item.period}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-foreground/55">
                        {item.org}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Awards panel */}
          <Reveal delay={100}>
            <div className="sticky top-24 overflow-hidden rounded-3xl border border-border bg-surface p-7">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-soft text-amber">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Honors &amp; Awards
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Academic signal
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-0">
                {awards.map((award, i) => (
                  <li
                    key={`${award.year}-${award.title}`}
                    className={`flex gap-4 py-4 ${
                      i < awards.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="w-12 shrink-0 font-display text-sm font-bold text-amber">
                      {award.year}
                    </span>
                    <div>
                      <p className="text-sm font-medium leading-snug text-foreground/85">
                        {award.title}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {award.org}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
