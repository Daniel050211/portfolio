"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Copy,
  Download,
  Mail,
  MessageCircle,
  Moon,
  Search,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { hasProfileUrl, navLinks, projects, site } from "@/lib/site";
import { useModKeyLabel } from "@/lib/mod-key";
import { GithubIcon } from "@/components/github-icon";

type CommandItem = {
  id: string;
  group: string;
  label: string;
  hint?: string;
  icon: ReactNode;
  run: () => void;
};

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const [lastResetKey, setLastResetKey] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const modKey = useModKeyLabel();
  const isDark = (resolvedTheme ?? "dark") === "dark";

  const close = useCallback(() => {
    onOpenChange(false);
    setQuery("");
    setActive(0);
  }, [onOpenChange]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.open(`mailto:${site.email}`);
    }
  }, []);

  const items = useMemo<CommandItem[]>(() => {
    const nav: CommandItem[] = navLinks.map((link) => ({
      id: `nav-${link.id}`,
      group: "Navigate",
      label: link.label,
      hint: link.href,
      icon: <ArrowUpRight className="h-4 w-4" />,
      run: () => {
        close();
        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
      },
    }));

    const projectItems: CommandItem[] = projects.map((p) => ({
      id: `proj-${p.id}`,
      group: "Projects",
      label: p.title,
      hint: p.category,
      icon: <ArrowUpRight className="h-4 w-4 text-accent" />,
      run: () => {
        close();
        const el = document.getElementById("lab");
        el?.scrollIntoView({ behavior: "smooth" });
        window.dispatchEvent(
          new CustomEvent("open-project", { detail: { id: p.id } })
        );
      },
    }));

    const actions: CommandItem[] = [
      {
        id: "copy-email",
        group: "Actions",
        label: copied ? "Email copied!" : "Copy email",
        hint: site.email,
        icon: <Copy className="h-4 w-4" />,
        run: () => {
          void copyEmail();
        },
      },
      {
        id: "mailto",
        group: "Actions",
        label: "Compose email",
        icon: <Mail className="h-4 w-4" />,
        run: () => {
          close();
          window.open(`mailto:${site.email}`);
        },
      },
      {
        id: "whatsapp",
        group: "Actions",
        label: "Open WhatsApp",
        hint: site.phone,
        icon: <MessageCircle className="h-4 w-4" />,
        run: () => {
          close();
          window.open(site.whatsapp, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "resume",
        group: "Actions",
        label: "Download resume",
        hint: "PDF",
        icon: <Download className="h-4 w-4" />,
        run: () => {
          close();
          const a = document.createElement("a");
          a.href = site.resumeUrl;
          a.download = "";
          a.click();
        },
      },
      {
        id: "theme",
        group: "Actions",
        label: isDark ? "Switch to light mode" : "Switch to dark mode",
        icon: isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        ),
        run: () => {
          setTheme(isDark ? "light" : "dark");
        },
      },
    ];

    if (hasProfileUrl(site.github)) {
      actions.splice(3, 0, {
        id: "github",
        group: "Actions",
        label: "Open GitHub",
        hint: site.github,
        icon: <GithubIcon className="h-4 w-4" />,
        run: () => {
          close();
          window.open(site.github, "_blank", "noopener,noreferrer");
        },
      });
    }

    return [...nav, ...projectItems, ...actions];
  }, [close, copied, copyEmail, isDark, setTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        item.hint?.toLowerCase().includes(q)
    );
  }, [items, query]);

  const groups = Array.from(new Set(filtered.map((i) => i.group)));

  const resetKey = `${open}-${query}`;
  if (resetKey !== lastResetKey) {
    setLastResetKey(resetKey);
    setActive(0);
  }

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 20);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpenChange, open]);

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className="cmd-dialog"
      aria-label="Command palette"
      onClose={close}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="modal-enter relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/30"
        data-lenis-prevent
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter" && filtered[active]) {
                e.preventDefault();
                filtered[active].run();
              }
            }}
            placeholder="Jump to section, open project, copy email…"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-0"
            aria-autocomplete="list"
            aria-controls="command-list"
          />
          <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
            ESC
          </kbd>
        </div>

        <div
          id="command-list"
          className="max-h-[min(52vh,420px)] overflow-y-auto p-2"
          role="listbox"
        >
          {filtered.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-muted-foreground">
              No matches for “{query}”
            </p>
          )}
          {groups.map((group) => {
            const groupItems = filtered.filter((i) => i.group === group);
            return (
              <div key={group} className="mb-2">
                <p className="mono-label px-3 py-2 text-muted-foreground">
                  {group}
                </p>
                {groupItems.map((item) => {
                  const index = filtered.indexOf(item);
                  const isActive = index === active;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() => setActive(index)}
                      onClick={() => item.run()}
                      className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                        isActive
                          ? "bg-accent-soft text-foreground"
                          : "text-foreground/80 hover:bg-muted"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                          isActive
                            ? "border-accent/40 bg-accent/15 text-accent"
                            : "border-border text-muted-foreground"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium">
                          {item.label}
                        </span>
                        {item.hint && (
                          <span className="block truncate text-xs text-muted-foreground">
                            {item.hint}
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          <span className="font-mono">↑↓ navigate · ↵ select</span>
          <span className="font-mono">
            Signal Lab · {modKey}K
          </span>
        </div>
      </div>
    </dialog>
  );
}
