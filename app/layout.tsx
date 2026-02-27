import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gourab Chatterjee | AI & Analytics Professional",
  description:
    "AI and analytics professional with experience spanning enterprise analytics, banking, ESG research, and institutional AI operations. Published researcher with conference exposure across IIMs and IIT Kharagpur.",
  keywords: [
    "AI", "Analytics", "Machine Learning", "LLMs", "NLP", "Power BI",
    "Python", "Research", "Gourab Chatterjee"
  ],
  authors: [{ name: "Gourab Chatterjee" }],
  openGraph: {
    title: "Gourab Chatterjee | AI & Analytics Professional",
    description: "Bridging AI, analytics, and business strategy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-[var(--font-inter)] bg-space-black text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
