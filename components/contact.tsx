"use client";

import { FormEvent, useState } from "react";
import {
  Check,
  Copy,
  Download,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { InstagramIcon } from "@/components/instagram-icon";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setError("Could not copy — use the email link instead.");
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSent(false);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mono-label text-accent">05 — Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Open a channel
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/65 sm:text-lg">
            Hiring, collab, or just want to talk systems? Ping me — response
            usually within a day.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Channels */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Reveal delay={0}>
              <div className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-0.5 block break-all text-sm font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => void copyEmail()}
                    className="mt-2 inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" /> Copy address
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    WhatsApp
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground group-hover:text-accent">
                    {site.phone}
                  </p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={120}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Instagram
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground group-hover:text-accent">
                    Follow the feed
                  </p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={180}>
              <a
                href={site.resumeUrl}
                download
                className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Resume
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground group-hover:text-accent">
                    Download PDF
                  </p>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-surface p-6 sm:p-8"
              noValidate
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                Send a signal
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Opens your mail client with a pre-filled message — no backend
                required.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mono-label text-muted-foreground">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                    placeholder="Your name"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="mono-label text-muted-foreground">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mono-label text-muted-foreground">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                    placeholder="What are you building / hiring for?"
                  />
                </label>
              </div>

              {error && (
                <p className="mt-4 text-sm text-red-500" role="alert">
                  {error}
                </p>
              )}
              {sent && !error && (
                <p className="mt-4 text-sm text-accent" role="status">
                  Opening your email client…
                </p>
              )}

              <button
                type="submit"
                className="mt-6 inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-on-primary transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-[var(--glow)] sm:w-auto sm:px-8"
              >
                <Send className="h-4 w-4" />
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
