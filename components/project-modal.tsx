"use client";

import { useLayoutEffect, useRef } from "react";
import { X } from "lucide-react";
import type { projects } from "@/lib/site";
import { ProjectCover } from "@/components/project-cover";

type Project = (typeof projects)[number];

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby={project ? "project-modal-title" : undefined}
      aria-label={project ? undefined : "Project details"}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {project && (
      <div
        className="modal-enter relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-border bg-surface shadow-2xl sm:rounded-3xl"
        data-lenis-prevent
      >
        <ProjectCover id={project.id} className="h-40 w-full sm:h-48" />
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-surface/95 px-6 py-5 backdrop-blur-md sm:px-8">
          <div>
            <p className="mono-label text-accent">
              {project.category} · {project.year}
            </p>
            <h2
              id="project-modal-title"
              className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-8 px-6 py-7 sm:px-8">
          <p className="text-base leading-relaxed text-foreground/80">
            {project.summary}
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-muted/40 p-5">
              <p className="mono-label text-muted-foreground">Problem</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {project.problem}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-muted/40 p-5">
              <p className="mono-label text-muted-foreground">Approach</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {project.solution}
              </p>
            </div>
          </div>

          <div>
            <p className="mono-label text-muted-foreground">Impact signals</p>
            <ul className="mt-3 space-y-2.5">
              {project.impact.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-foreground/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label text-muted-foreground">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/75"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 border-t border-border pt-6">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 cursor-pointer items-center rounded-full bg-primary px-5 text-sm font-semibold text-on-primary transition-colors hover:bg-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      )}
    </dialog>
  );
}
