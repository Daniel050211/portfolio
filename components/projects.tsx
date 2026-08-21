"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Boxes, Cpu, Eye, Workflow } from "lucide-react";
import {
  focusAreas,
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { ProjectModal } from "@/components/project-modal";
import { ProjectCover } from "@/components/project-cover";

const focusIcons = {
  eye: Eye,
  cpu: Cpu,
  workflow: Workflow,
  boxes: Boxes,
} as const;

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<{ id: string }>).detail;
      if (detail?.id) setActiveId(detail.id);
    };
    window.addEventListener("open-project", onOpen);
    return () => window.removeEventListener("open-project", onOpen);
  }, []);

  return (
    <section
      id="lab"
      className="relative scroll-mt-20 overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-accent/[0.08] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-1/5 h-80 w-80 rounded-full bg-secondary/[0.07] blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mono-label text-accent">01 — Signal Lab</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Selected systems
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75">
            Real builds across AI automation, product tooling, and research
            interfaces — not just course demos. Filter the lab or open a case
            study.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => {
            const Icon = focusIcons[area.icon];
            return (
              <Reveal key={area.title} delay={i * 70}>
                <article className="group glass relative h-full overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--glow)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-on-primary shadow-md shadow-[var(--glow)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {area.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80}>
          <div
            className="mt-14 flex flex-wrap gap-2"
            role="radiogroup"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              const selected = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setFilter(cat)}
                  className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selected
                      ? "border-accent bg-accent text-on-primary shadow-md shadow-[var(--glow)]"
                      : "border-border bg-surface/60 text-foreground/70 hover:border-accent/40 hover:text-accent"
                  }`}
                >
                  {cat}
                  <span
                    className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                      selected
                        ? "bg-on-primary/15 text-on-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {filtered.map((project, i) => {
            const featuredWide = filter === "All" && project.featured && i === 0;
            return (
              <Reveal
                key={project.id}
                delay={i * 60}
                className={featuredWide ? "md:col-span-2" : ""}
              >
                <button
                  type="button"
                  onClick={() => setActiveId(project.id)}
                  className={`group glass relative flex h-full w-full cursor-pointer overflow-hidden rounded-3xl text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--glow)] ${
                    featuredWide ? "flex-col md:flex-row" : "flex-col"
                  }`}
                >
                  <ProjectCover
                    id={project.id}
                    className={
                      featuredWide
                        ? "h-52 w-full md:h-auto md:min-h-[300px] md:w-[44%]"
                        : "h-40 w-full"
                    }
                  />
                  <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
                    />
                    <div className="relative flex items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-accent/25 bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                          {project.category}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {project.year}
                        </span>
                        {project.featured && (
                          <span className="rounded-full bg-amber-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-amber">
                            Featured
                          </span>
                        )}
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground/50 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-primary">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    <h3 className="relative mt-5 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="relative mt-1 text-sm font-medium text-foreground/60">
                      {project.subtitle}
                    </p>
                    <p className="relative mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
                      {project.summary}
                    </p>

                    <div className="relative mt-5 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs font-medium text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-muted-foreground">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveId(null)} />
    </section>
  );
}
