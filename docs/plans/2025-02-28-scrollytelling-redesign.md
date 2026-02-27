# Scrollytelling Portfolio Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete redesign of gourab-portfolio to premium scrollytelling experience with emerald/gold palette and "The AI Practitioner" narrative.

**Architecture:** Next.js 16 App Router with Framer Motion for scroll-linked animations. Server components for pages, client components for interactive sections. Tailwind v4 for styling with custom color tokens in globals.css.

**Tech Stack:** Next.js 16.1.6, React 19, Tailwind CSS v4, Framer Motion 12.34+, TypeScript, Playfair Display font.

---

## Prerequisites

Install Playfair Display font for the design system:

```bash
cd /Users/gourab.chatterjee/Documents/gourab/gourab-portfolio
npm install @fontsource/playfair-display
```

---

### Task 1: Update globals.css with new color palette and typography

**Files:**
- Modify: `app/globals.css`

**Step 1: Update CSS with new design system**

Replace the entire `app/globals.css` content with:

```css
@import "tailwindcss";
@import "@fontsource/playfair-display";

@theme {
  /* Color Palette - 60:30:10 */
  --color-emerald-deep: #0a4d3c;
  --color-emerald-dark: #0f6b54;
  --color-charcoal: #1a1a1a;
  --color-charcoal-light: #2a2a2a;
  --color-gold-warm: #d4af37;
  --color-gold-bright: #e5c649;
  --color-text-primary: #f5f5f5;
  --color-text-secondary: #a0a0a0;
  --color-text-muted: #606060;
  --color-border-gold: #b8942f;

  /* Gradients */
  --gradient-emerald: linear-gradient(135deg, #0a4d3c 0%, #0f6b54 100%);
  --gradient-gold: linear-gradient(135deg, #d4af37 0%, #e5c649 100%);

  /* Typography */
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

@layer base {
  :root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #0a4d3c;
    color: #f5f5f5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }

  code, pre, .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }
}

/* Utility classes */
.gradient-text-gold {
  background: linear-gradient(135deg, #d4af37 0%, #e5c649 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-emerald-bg {
  background: linear-gradient(135deg, #0a4d3c 0%, #0f6b54 100%);
}

.gold-border {
  border: 1px solid #b8942f;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0a4d3c;
}

::-webkit-scrollbar-thumb {
  background: #d4af37;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #e5c649;
}
```

**Step 2: Commit**

```bash
git add app/globals.css
git commit -m "feat: update color palette and typography to emerald/gold royal theme"
```

---

### Task 2: Update layout.tsx with Playfair Display font

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Add Playfair Display to layout**

Update the `layout.tsx` import to include Playfair Display:

```tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Gourab Chatterjee | AI Practitioner",
  description: "Building AI systems that transform data into impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```

**Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add Playfair Display font to layout"
```

---

### Task 3: Create SocialProof component with marquee scroll

**Files:**
- Create: `components/SocialProof.tsx`

**Step 1: Create the component**

```tsx
'use client';

import { motion } from 'framer-motion';

const companies = [
  { name: 'Company A', url: '#' },
  { name: 'Company B', url: '#' },
  { name: 'Company C', url: '#' },
  { name: 'Company D', url: '#' },
  { name: 'Company E', url: '#' },
];

export default function SocialProof() {
  return (
    <section className="py-8 border-y border-gold/20 overflow-hidden">
      <div className="flex items-center gap-8">
        <span className="text-sm uppercase tracking-widest text-text-secondary whitespace-nowrap">
          Trusted by top teams from:
        </span>
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {companies.map((company, i) => (
              <span key={i} className="text-text-primary text-lg font-semibold whitespace-nowrap">
                {company.name}
              </span>
            ))}
            {companies.map((company, i) => (
              <span key={`dup-${i}`} className="text-text-primary text-lg font-semibold whitespace-nowrap">
                {company.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/SocialProof.tsx
git commit -m "feat: add SocialProof marquee component"
```

---

### Task 4: Create ByTheNumbers stats section

**Files:**
- Create: `components/ByTheNumbers.tsx`

**Step 1: Create the stats component with scroll-triggered animations**

```tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '5+', label: 'Years in AI Research' },
  { number: '20+', label: 'Projects Delivered' },
  { number: '3', label: 'Publications' },
  { number: 'Millions', label: 'Data Points Processed' },
];

export default function ByTheNumbers() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={ref} className="py-24 gradient-emerald-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-warm mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          By The Numbers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const delay = index * 0.1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay }}
              >
                <div className="text-gold-warm text-5xl md:text-6xl font-mono mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/ByTheNumbers.tsx
git commit -m "feat: add ByTheNumbers stats section"
```

---

### Task 5: Redesign Hero component with new theme

**Files:**
- Modify: `components/Hero.tsx`

**Step 1: Replace Hero component**

```tsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-emerald-bg relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-gold-warm text-sm uppercase tracking-widest">
            AI Practitioner
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-[clamp(3rem,8vw,6rem)] font-display mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text-gold">Gourab Chatterjee</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-text-primary max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I build AI systems that transform data into impact.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gold-warm text-charcoal font-semibold rounded hover:bg-gold-bright transition-colors"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 gold-border text-gold-warm font-semibold rounded hover:bg-gold-warm/10 transition-colors"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-text-secondary text-sm flex flex-col items-center gap-2">
            Scroll to explore
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: redesign Hero with new emerald/gold theme"
```

---

### Task 6: Redesign Experience component as scroll-linked timeline

**Files:**
- Modify: `components/Experience.tsx`

**Step 1: Replace Experience with scroll-linked timeline**

```tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '@/data';

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={ref} className="py-32 bg-charcoal">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-warm mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Building Real
        </motion.h2>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="pl-8 border-l-2 border-gold-warm/30 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gold-warm rounded-full" />
              <div className="mb-2">
                <span className="text-gold-warm font-mono text-sm">{exp.period}</span>
              </div>
              <h3 className="text-2xl font-display text-text-primary mb-1">{exp.role}</h3>
              <p className="text-text-secondary mb-4">{exp.company}</p>
              <p className="text-text-primary/80">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/Experience.tsx
git commit -m "feat: redesign Experience as scroll-linked timeline"
```

---

### Task 7: Redesign Research as "The Foundation" chapter

**Files:**
- Modify: `components/Research.tsx`

**Step 1: Update Research component**

```tsx
'use client';

import { motion } from 'framer-motion';
import { research } from '@/data';

export default function Research() {
  return (
    <section className="py-32 gradient-emerald-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-warm mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Foundation
        </motion.h2>

        <motion.p
          className="text-xl text-text-primary mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Academic research that paved the way for practical AI applications.
        </motion.p>

        <div className="space-y-8">
          {research.map((paper, index) => (
            <motion.div
              key={index}
              className="bg-charcoal/50 p-6 rounded-lg gold-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-display text-gold-warm mb-2">{paper.title}</h3>
              <p className="text-text-secondary text-sm mb-2">{paper.venue} · {paper.year}</p>
              <p className="text-text-primary/80 text-sm">{paper.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/Research.tsx
git commit -m "feat: redesign Research as The Foundation chapter"
```

---

### Task 8: Redesign Skills grid component

**Files:**
- Modify: `components/Skills.tsx`

**Step 1: Update Skills component**

```tsx
'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data';

export default function Skills() {
  return (
    <section className="py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-warm mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Expertise
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-charcoal-light p-4 rounded gold-border text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: '#d4af37' }}
            >
              <span className="text-text-primary text-sm font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/Skills.tsx
git commit -m "feat: redesign Skills with grid layout and hover effects"
```

---

### Task 9: Redesign Contact component

**Files:**
- Modify: `components/Contact.tsx`

**Step 1: Update Contact component**

```tsx
'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-32 gradient-emerald-bg">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-warm mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Let's Build Something Together
        </motion.h2>

        <motion.p
          className="text-xl text-text-primary mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind? Let's discuss how we can work together.
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:gourab@example.com"
            className="inline-block px-8 py-4 bg-gold-warm text-charcoal font-semibold rounded hover:bg-gold-bright transition-colors"
          >
            Get In Touch
          </a>

          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="text-gold-warm hover:text-gold-bright transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gold-warm hover:text-gold-bright transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gold-warm hover:text-gold-bright transition-colors">
              Twitter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/Contact.tsx
git commit -m "feat: redesign Contact component"
```

---

### Task 10: Update main page to include new components

**Files:**
- Modify: `app/page.tsx`

**Step 1: Update page.tsx with new section order**

```tsx
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ByTheNumbers from '@/components/ByTheNumbers';
import Research from '@/components/Research';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import BlogSection from '@/components/BlogSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <ByTheNumbers />
      <Research />
      <Experience />
      <Skills />
      <BlogSection />
      <Contact />
      <Footer />
    </main>
  );
}
```

**Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: update main page with new component structure"
```

---

### Task 11: Update Navbar to match new theme

**Files:**
- Modify: `components/Navbar.tsx`

**Step 1: Update Navbar styling**

```tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-emerald-deep/90 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-display text-gold-warm">
          GC
        </a>

        <div className="hidden md:flex gap-8">
          {['About', 'Experience', 'Research', 'Skills', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-text-primary hover:text-gold-warm transition-colors text-sm uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="md:hidden text-gold-warm">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
```

**Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: update Navbar to match new emerald/gold theme"
```

---

### Task 12: Update Footer to match new theme

**Files:**
- Modify: `components/Footer.tsx`

**Step 1: Update Footer styling**

```tsx
export default function Footer() {
  return (
    <footer className="py-8 bg-charcoal border-t border-gold/20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Gourab Chatterjee. Built with care.
        </p>
      </div>
    </footer>
  );
}
```

**Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: update Footer to match new theme"
```

---

### Task 13: Update About component

**Files:**
- Modify: `components/About.tsx`

**Step 1: Update About with new styling**

```tsx
'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-32 gradient-emerald-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-warm mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Impact
        </motion.h2>

        <motion.p
          className="text-xl text-text-primary leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Transforming research into real-world AI solutions that deliver measurable results.
        </motion.p>

        <motion.p
          className="text-text-primary/80 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          From academic foundations to industry applications, I bring a unique perspective that bridges the gap between cutting-edge research and practical implementation.
        </motion.p>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/About.tsx
git commit -m "feat: update About to match new theme"
```

---

### Task 14: Remove unused NeuralCanvas three/ component

**Files:**
- Delete: `components/three/NeuralCanvas.tsx`

**Step 1: Remove the Three.js component**

```bash
rm -rf /Users/gourab.chatterjee/Documents/gourab/gourab-portfolio/components/three/
```

**Step 2: Commit**

```bash
git add -A
git commit -m "chore: remove unused Three.js NeuralCanvas component"
```

---

### Task 15: Update BlogSection styling

**Files:**
- Modify: `components/BlogSection.tsx`

**Step 1: Update BlogSection with new theme**

```tsx
'use client';

import { motion } from 'framer-motion';
import { blogPosts } from '@/data';
import Link from 'next/link';

export default function BlogSection() {
  return (
    <section className="py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-warm mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Latest Writing
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-charcoal-light p-6 rounded-lg gold-border h-full hover:border-gold-warm transition-colors">
                  <span className="text-gold-warm text-xs uppercase tracking-wider mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-display text-text-primary mb-3">{post.title}</h3>
                  <p className="text-text-secondary text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/BlogSection.tsx
git commit -m "feat: update BlogSection with new emerald/gold theme"
```

---

### Task 16: Update Certifications styling

**Files:**
- Modify: `components/Certifications.tsx`

**Step 1: Update Certifications component**

```tsx
'use client';

import { motion } from 'framer-motion';
import { certifications } from '@/data';

export default function Certifications() {
  return (
    <section className="py-32 gradient-emerald-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-warm mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-charcoal/50 p-4 rounded gold-border flex justify-between items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div>
                <h3 className="text-gold-warm font-semibold">{cert.name}</h3>
                <p className="text-text-secondary text-sm">{cert.issuer}</p>
              </div>
              <span className="text-text-muted text-xs font-mono">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/Certifications.tsx
git commit -m "feat: update Certifications with new theme"
```

---

### Task 17: Add About and Certifications to main page

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add About and Certifications sections**

```tsx
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ByTheNumbers from '@/components/ByTheNumbers';
import Research from '@/components/Research';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import BlogSection from '@/components/BlogSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <ByTheNumbers />
      <Research />
      <Experience />
      <About />
      <Skills />
      <Certifications />
      <BlogSection />
      <Contact />
      <Footer />
    </main>
  );
}
```

**Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add About and Certifications to main page"
```

---

### Task 18: Install Playfair Display font

**Files:**
- Modify: `package.json`

**Step 1: Install the font package**

```bash
cd /Users/gourab.chatterjee/Documents/gourab/gourab-portfolio
npm install @fontsource/playfair-display
```

**Step 2: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: install Playfair Display font"
```

---

### Task 19: Final test and verification

**Files:**
- Test: run dev server

**Step 1: Start development server**

```bash
cd /Users/gourab.chatterjee/Documents/gourab/gourab-portfolio
npm run dev
```

**Step 2: Verify**
- Open http://localhost:3000
- Check all sections render correctly
- Verify scrollytelling animations work
- Check mobile responsiveness
- Verify color palette applied correctly

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete scrollytelling portfolio redesign with emerald/gold royal theme"
```
