"use client";

import { useEffect, useRef, useState } from "react";
import { languages, skillGroups } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="scroll-mt-20 border-y border-border bg-muted/40 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mono-label text-accent">04 — Capabilities</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Signal strength
          </h2>
          <p className="mt-4 max-w-xl text-base text-foreground/75">
            A working toolbox across models, data, hardware, and product
            engineering — with languages for Hong Kong and beyond.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.group} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/35">
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {group.group}
                  </h3>
                </div>

                <div
                  className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted"
                  aria-hidden="true"
                >
                  <div
                    className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-accent to-secondary"
                    style={{
                      transform: visible
                        ? `scaleX(${group.level / 100})`
                        : "scaleX(0)",
                      transitionDelay: `${i * 90 + 120}ms`,
                    }}
                  />
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/70"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Languages
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-muted/40 px-4 py-3"
                >
                  <span className="text-sm font-medium text-foreground">
                    {lang.name}
                  </span>
                  <span className="font-mono text-[11px] text-accent">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
