# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Daniel Hau — Signal Lab
**Updated:** 2026-08-21
**Category:** Personal engineering portfolio

---

## Global Rules

### Color Palette

| Role | Light | Dark | CSS Variable |
|------|-------|------|--------------|
| Background | `#F4F7F8` | `#05070A` | `--background` |
| Foreground | `#0B1220` | `#E8EEF2` | `--foreground` |
| Primary | `#0B1220` | `#E8EEF2` | `--primary` |
| On Primary | `#F4F7F8` | `#05070A` | `--on-primary` |
| Accent / signal | `#0D9488` | `#2EE6C5` | `--accent` |
| Secondary | `#0E7490` | `#38BDF8` | `--secondary` |
| Amber / awards | `#D97706` | `#FBBF24` | `--amber` |
| Muted | `#E8EEF1` | `#0C1219` | `--muted` |
| Border | `#D5DEE3` | `#1A2330` | `--border` |
| Surface | `#FFFFFF` | `#0A1018` | `--surface` |

**Color notes:** OLED dark-first. Cyan signal for action, sky secondary for “reason”, amber for honors. Avoid purple AI-template palettes.

### Typography

- **Display:** Syne
- **Body:** DM Sans
- **Mono / labels:** JetBrains Mono
- **Mood:** cinematic, technical, precise, editorial, engineering lab

### Spacing

8px grid. Hero padding `--space-3xl` (64px). Section padding 96–128px (`py-24` / `py-32`). Card padding 24–28px.

---

## Style Guidelines

**Style:** Dark Mode (OLED) + Signal Lab atmosphere

**Keep:** cursor glow, signal grid, scanlines, noise, floating glows, marquee, pulse dots, GSAP entrance motion.

**Page pattern:** Portfolio Grid

- Hero: **Name + role first**, then the “see · reason · act” line
- Primary CTA: View selected work
- Secondary CTA: Resume
- Work: featured case first (wide), visual covers, category filters
- Then about, journey, skills, contact

**Nav labels:** Work, About, Journey, Skills, Contact

---

## Anti-Patterns (Do NOT Use)

- Purple / pink “AI SaaS” palettes
- Inter as the only typeface
- Fake social links (empty GitHub, Instagram homepage)
- Skill percentages presented as measured proficiency
- Placeholder-only form labels
- Missing skip link or focus rings
- Invented project screenshots

### Additional Forbidden Patterns

- Emojis as icons — use Lucide / SVG
- Missing `cursor:pointer` on clickable elements
- Instant state changes — 150–300ms transitions
- Invisible focus states
- Ignoring `prefers-reduced-motion`

---

## Pre-Delivery Checklist

- [ ] No emojis used as icons
- [ ] All icons from Lucide (or a matching SVG)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Body text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] Native `<dialog>` (or equivalent focus trap) for overlays
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed nav (`scroll-padding-top`)
- [ ] Skip to content link
- [ ] Atmosphere effects still present
