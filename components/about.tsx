import { education, site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { GraduationCap, MapPin, Target } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-y border-border bg-muted/40 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="mono-label text-accent">02 — About</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Engineering intelligence with real-world constraints
            </h2>
            <div className="mt-6 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {site.location}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5 text-accent" />
                  {site.institution}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={80}>
              <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                I&apos;m {site.fullName}, studying{" "}
                <span className="font-semibold text-foreground">
                  Artificial Intelligence &amp; Information Engineering
                </span>{" "}
                at PolyU. My work sits where perception, decision-making, and
                actuation meet — computer vision, robotic integration, multi-agent
                automation, and product systems people can ship.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
                I build with a hypothesis-driven loop: frame the question, gather
                signal, design the system, measure the result. From sensor fusion
                on embedded hardware to content pipelines with human review gates,
                I care about systems that hold up outside the notebook.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-accent" />
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                    Operating principles
                  </h3>
                </div>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Hypothesis before hype",
                    "Human-in-the-loop where it matters",
                    "Ship usable interfaces, not demos only",
                    "Measure impact in the real world",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Education
              </h3>
              <div className="mt-4 space-y-4">
                {education.map((item) => (
                  <div
                    key={item.degree}
                    className="relative border-l-2 border-accent/40 pl-5"
                  >
                    <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                    <p className="font-mono text-[11px] text-accent">
                      {item.period}
                    </p>
                    <p className="mt-1 font-semibold text-foreground">
                      {item.degree}
                    </p>
                    <p className="mt-0.5 text-sm text-foreground/60">{item.org}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
