import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yogeshsherpa.com";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yogesh Sherpa — Front-End Developer",
  description:
    "Beginner front-end developer learning to build beautiful web experiences.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Yogesh Sherpa — Front-End Developer",
    description:
      "Beginner front-end developer learning to build beautiful web experiences.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Yogesh Sherpa — Front-End Developer",
    description:
      "Beginner front-end developer learning to build beautiful web experiences.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yogesh Sherpa",
  url: siteUrl,
  email: "ysherpa37@gmail.com",
  jobTitle: "Front-End Developer",
  sameAs: ["https://github.com/ysherpa3"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:text-sm focus:font-medium focus:rounded-full focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
