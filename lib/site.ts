export const site = {
  name: "Daniel Hau",
  fullName: "HAU Fu Tin (Daniel)",
  role: "AI & Information Engineering Student",
  institution: "The Hong Kong Polytechnic University",
  department: "Department of Electrical and Electronic Engineering",
  tagline:
    "I design intelligent systems that see, reason, and act — from computer vision and robotics to AI automation pipelines.",
  email: "daniel0211.hau@connect.polyu.hk",
  phone: "+852 9866 5515",
  whatsapp: "https://wa.me/85298665515",
  instagram: "https://www.instagram.com/",
  resumeUrl: "/Daniel-H-CV.pdf",
  location: "Hong Kong SAR, China",
  availability: "Open to internships & collaborations",
  status: "Signal online",
} as const;

export const navLinks = [
  { label: "Lab", href: "#lab", id: "lab" },
  { label: "About", href: "#about", id: "about" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const focusAreas = [
  {
    title: "Computer Vision",
    description:
      "Object recognition and visual understanding with deep learning — models that interpret the physical world.",
    tags: ["PyTorch", "TensorFlow", "Object Recognition"],
    icon: "eye" as const,
  },
  {
    title: "Robotic Integration",
    description:
      "Hardware + software systems: sensor fusion, Arduino/Raspberry Pi, and human–machine shared control.",
    tags: ["Arduino", "Raspberry Pi", "Sensor Fusion"],
    icon: "cpu" as const,
  },
  {
    title: "AI Automation",
    description:
      "Multi-agent pipelines that research, generate, review, and ship content — with humans still in the loop.",
    tags: ["Python", "n8n", "LLM Agents"],
    icon: "workflow" as const,
  },
  {
    title: "Product Engineering",
    description:
      "Shipping full-stack tools people can actually use: generators, dashboards, and trading research UIs.",
    tags: ["Next.js", "TypeScript", "Systems Design"],
    icon: "boxes" as const,
  },
] as const;

export type ProjectCategory =
  | "All"
  | "AI Automation"
  | "Product"
  | "Quant"
  | "Systems";

export const projectCategories: ProjectCategory[] = [
  "All",
  "AI Automation",
  "Product",
  "Quant",
  "Systems",
];

export const projects = [
  {
    id: "shopforge",
    title: "ShopForge",
    subtitle: "DIY storefront generator for small businesses",
    category: "Product" as ProjectCategory,
    year: "2026",
    featured: true,
    summary:
      "No-code website builder that turns a template + product data into a live shop with cart and booking flows — in about ten minutes.",
    problem:
      "Small shop owners need a sellable site without hiring a developer or learning a complex CMS.",
    solution:
      "Three-step wizard (template → content → style) with live preview, local persistence, and published routes at /sites/<slug>.",
    impact: [
      "7 industry templates across products and services",
      "Built-in cart / booking UX per template type",
      "Dashboard to manage, open, and delete sites",
    ],
    stack: ["Next.js 16", "React 19", "Tailwind CSS v4", "TypeScript"],
    links: [] as { label: string; href: string }[],
  },
  {
    id: "forgekit",
    title: "ForgeKit",
    subtitle: "Describe an app → get a working CRUD tool",
    category: "Product" as ProjectCategory,
    year: "2026",
    featured: true,
    summary:
      "Prompt-driven app generator that produces searchable, editable, deletable web apps with dedicated public URLs.",
    problem:
      "Simple internal tools still require scaffolding, forms, and storage boilerplate.",
    solution:
      "Config-driven generator maps user answers into a schema, then renders a universal AppShell with full CRUD over a JSON store.",
    impact: [
      "Four-step generation wizard",
      "Per-app public routes at /apps/<slug>",
      "REST API for apps and records",
    ],
    stack: ["Next.js", "React", "Tailwind", "JSON store"],
    links: [] as { label: string; href: string }[],
  },
  {
    id: "foshan-pipeline",
    title: "Foshan AI Content Pipeline",
    subtitle: "Multi-agent research → content → human review loop",
    category: "AI Automation" as ProjectCategory,
    year: "2026",
    featured: true,
    summary:
      "Python rewrite of a 73-node n8n workflow: news research, Xiaohongshu scraping, strategy claims, script generation, and approval UI.",
    problem:
      "Complex multi-LLM content ops were locked inside a fragile visual workflow with limited testability.",
    solution:
      "Modular Python pipelines (news / scripts / analysis) with dry-run mode, Google Sheets integration, and a local human-approval server.",
    impact: [
      "3 orchestrated pipelines with shared claim memory",
      "Offline dry-run for full flow validation",
      "Human-in-the-loop review at http://127.0.0.1:8787",
    ],
    stack: ["Python", "LangChain-style agents", "Apify", "Serper", "Google Sheets"],
    links: [] as { label: string; href: string }[],
  },
  {
    id: "quant-radar",
    title: "Quant Radar",
    subtitle: "Gold turtle-trading monitor & backtester",
    category: "Quant" as ProjectCategory,
    year: "2026",
    featured: false,
    summary:
      "Research dashboard for gold: live/simulated quotes, classic Turtle system signals, position sizing, and full backtest metrics.",
    problem:
      "Strategy research needs a clean loop from market data → signal → risk → historical proof.",
    solution:
      "Node proxy for Yahoo quotes, Turtle System 1/2 rules with ATR stops, and a backtest engine reporting return, win rate, drawdown, and Sharpe.",
    impact: [
      "Real-time + simulated market modes",
      "Risk-based unit sizing (1% per unit)",
      "Chart-native channel, exit, and stop overlays",
    ],
    stack: ["Node.js", "Vanilla JS", "Yahoo Finance API", "Canvas charts"],
    links: [] as { label: string; href: string }[],
  },
  {
    id: "xhs-report",
    title: "XHS Weekly Report Extractor",
    subtitle: "Scheduled social insight pipeline",
    category: "AI Automation" as ProjectCategory,
    year: "2026",
    featured: false,
    summary:
      "Automated weekly extraction and structuring of Xiaohongshu post signals into actionable report inputs.",
    problem:
      "Manual scraping and summarising of social posts does not scale week after week.",
    solution:
      "Scheduled Python jobs with config-driven extraction, structured outputs, and missed-run recovery.",
    impact: [
      "Weekly automation with catch-up logic",
      "Structured datasets for strategy review",
      "Operator-friendly run scripts",
    ],
    stack: ["Python", "Scheduling", "Data pipelines"],
    links: [] as { label: string; href: string }[],
  },
  {
    id: "ig-feedback-agent",
    title: "Instagram Feedback Agent",
    subtitle: "Comment → intent → DM automation",
    category: "Systems" as ProjectCategory,
    year: "2026",
    featured: false,
    summary:
      "n8n agent system that reads Instagram comments, classifies intent, and routes follow-up DMs with claim validation.",
    problem:
      "High comment volume buries real leads and support questions.",
    solution:
      "Workflow graph with claim matching, branch routing, and guardrails so only validated intents trigger outreach.",
    impact: [
      "Intent classification before action",
      "Claim-matching to reduce false positives",
      "Manual + automated collection modes",
    ],
    stack: ["n8n", "LLM agents", "Instagram APIs"],
    links: [] as { label: string; href: string }[],
  },
] as const;

export const experience = [
  {
    period: "Jun 2024 – Aug 2024",
    title: "Financial Management Intern",
    org: "AIA iDream Internship Programme",
    description:
      "Structured financial management internship — analytical thinking, client context, and professional delivery under real constraints.",
    type: "work" as const,
  },
  {
    period: "Oct 2023 – Oct 2024",
    title: "Student Ambassador",
    org: "CPCE, PolyU",
    description:
      "Represented the college across events and services with 30+ social service hours — communication, ownership, and campus leadership.",
    type: "service" as const,
  },
] as const;

export const awards = [
  {
    year: "2025",
    title: "CPCE Dean's List (Semester One & Two, 2024/25)",
    org: "CPCE, PolyU",
  },
  {
    year: "2025",
    title: "HKSAR Government Scholarship Fund – Endeavour",
    org: "HKSAR",
  },
  {
    year: "2024",
    title: "HKSAR Government Scholarship Fund – Endeavour",
    org: "HKSAR",
  },
  {
    year: "2024",
    title: "PolyU HKCC Outstanding Student Award (Bronze)",
    org: "PolyU HKCC",
  },
  {
    year: "2024",
    title: "HKCC Director's List",
    org: "PolyU HKCC",
  },
] as const;

export const education = [
  {
    period: "Sep 2025 – May 2027 (Expected)",
    degree: "BSc (Hons) in Artificial Intelligence & Information Engineering",
    org: "The Hong Kong Polytechnic University",
    detail: "Faculty of Engineering · EEE",
  },
  {
    period: "Sep 2023 – Aug 2025",
    degree: "Associate in Information Technology",
    org: "College of Professional and Continuing Education (CPCE), PolyU",
    detail: "Foundation in IT systems and applied computing",
  },
] as const;

export const skillGroups = [
  {
    group: "AI & ML",
    level: 85,
    skills: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "LLM Agents"],
  },
  {
    group: "Data",
    level: 80,
    skills: ["Pandas", "SQL", "Statistical Modelling", "Data Analysis"],
  },
  {
    group: "Systems & Robotics",
    level: 75,
    skills: ["Arduino", "Raspberry Pi", "Sensor Fusion", "Shared Control"],
  },
  {
    group: "Product Build",
    level: 82,
    skills: ["Next.js", "TypeScript", "Node.js", "n8n", "C++", "Java"],
  },
] as const;

export const languages = [
  { name: "Cantonese", level: "Native" },
  { name: "Mandarin", level: "Fluent" },
  { name: "English", level: "Fluent" },
] as const;

export const stats = [
  { label: "Featured builds", value: "6+" },
  { label: "Scholarships & lists", value: "5" },
  { label: "Service hours", value: "30+" },
  { label: "Languages", value: "3" },
] as const;
