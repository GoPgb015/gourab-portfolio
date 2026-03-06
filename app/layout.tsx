import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gourab Chatterjee | The Portfolio",
  description: "AI. Analytics. Research. The story of turning data into decisions.",
  keywords: [
    "Gourab Chatterjee", "AI", "Analytics", "Machine Learning",
    "Portfolio", "IIT ISM", "Jaipuria", "Researcher",
  ],
  authors: [{ name: "Gourab Chatterjee" }],
  openGraph: {
    title: "Gourab Chatterjee | The Portfolio",
    description: "AI. Analytics. Research. The story of turning data into decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg-primary text-text-primary font-[var(--font-body)] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
