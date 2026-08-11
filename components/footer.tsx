import { ArrowUp, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/instagram-icon";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-primary px-5 py-14 text-on-primary sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 signal-grid opacity-30"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-on-primary/60">
              {site.role} · Signal Lab portfolio
            </p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-on-primary/15 bg-on-primary/5 px-3 py-1 font-mono text-[11px] text-on-primary/80">
              <span className="relative flex h-1.5 w-1.5">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {site.availability}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-on-primary/65 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-on-primary/10 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${site.email}`}
              aria-label="Email me"
              className="text-on-primary/65 transition-colors hover:text-accent"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-on-primary/65 transition-colors hover:text-accent"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-sm font-medium text-on-primary/65 transition-colors hover:text-accent"
            >
              WhatsApp
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="text-on-primary/65 transition-colors hover:text-accent"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-on-primary/45">
            © {year} {site.fullName}. Built as Signal Lab · Next.js &amp;
            Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
