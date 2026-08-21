import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SkipLink } from "@/components/skip-link";
import { site } from "@/lib/site";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${site.name} — Signal Lab · AI & Information Engineering`,
  description: `${site.fullName} — ${site.role} at ${site.institution}. Computer vision, robotics, AI automation, and product engineering.`,
  keywords: [
    "Daniel Hau",
    "HAU Fu Tin",
    "AI Engineer",
    "Computer Vision",
    "Robotics",
    "PolyU",
    "Portfolio",
    "Hong Kong",
    "n8n",
    "Next.js",
  ],
  openGraph: {
    title: `${site.name} — Signal Lab`,
    description: site.tagline,
    type: "website",
    locale: "en_HK",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  jobTitle: site.role,
  alumniOf: site.institution,
  email: "mailto:" + site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hong Kong",
    addressCountry: "HK",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Computer Vision",
    "Robotics",
    "Data Science",
    "Deep Learning",
    "Process Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SkipLink />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
