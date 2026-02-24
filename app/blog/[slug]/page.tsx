import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Gourab Chatterjee`,
    description: post.excerpt,
  };
}

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  'cyber-purple': { text: '#8338ec', bg: 'rgba(131,56,236,0.08)', border: 'rgba(131,56,236,0.25)' },
  'aurora-cyan':  { text: '#06b6d4', bg: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.25)' },
  'cyber-pink':   { text: '#ff006e', bg: 'rgba(255,0,110,0.08)',  border: 'rgba(255,0,110,0.25)' },
  'aurora-teal':  { text: '#14b8a6', bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.25)' },
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const c          = colorMap[post.color] ?? colorMap['aurora-cyan'];
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="relative min-h-screen bg-space-black">
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-40" />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 60% 20%, rgba(124,58,237,0.08) 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        <Navbar />

        <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-aurora-purple transition-colors mb-10 group no-underline"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All posts
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text, fontFamily: 'var(--font-jetbrains)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="text-3xl md:text-4xl font-black text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500 pb-8 border-b border-white/5 flex-wrap">
              <span>Gourab Chatterjee</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span style={{ color: c.text }}>{post.readTime}</span>
            </div>
          </header>

          {/* Article body */}
          <article
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author card */}
          <div className="mt-16 glass-card rounded-2xl p-6 neon-border flex items-start gap-5">
            <div
              className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black text-white"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', fontFamily: 'var(--font-space-grotesk)' }}
            >
              GC
            </div>
            <div>
              <h3 className="text-white font-bold mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Gourab Chatterjee
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                AI &amp; Analytics professional. Published researcher at IIMs &amp; IIT Kharagpur. Building at the intersection of machine intelligence and business strategy.
              </p>
              <div className="mt-3 flex gap-3">
                <a href="mailto:i.gourabchatterjee@gmail.com"
                  className="text-xs text-aurora-purple hover:text-white transition-colors no-underline"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}>
                  Email ↗
                </a>
                <a href="https://linkedin.com/in/gourabchatterjee-9la516287"
                  target="_blank" rel="noopener noreferrer"
                  className="text-xs text-aurora-cyan hover:text-white transition-colors no-underline"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}>
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* More posts */}
          {otherPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                More Writings
              </h2>
              <div className="space-y-4">
                {otherPosts.map((op) => {
                  const oc = colorMap[op.color] ?? colorMap['aurora-cyan'];
                  return (
                    <Link key={op.slug} href={`/blog/${op.slug}`} className="block group no-underline">
                      <div className="glass-card rounded-xl px-5 py-4 flex items-center justify-between gap-4 hover:border-aurora-purple/30 transition-all duration-300">
                        <div>
                          <p
                            className="text-white text-sm font-medium group-hover:opacity-80 transition-opacity"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}
                          >
                            {op.title}
                          </p>
                          <p className="text-slate-600 text-xs mt-0.5">{op.date} · {op.readTime}</p>
                        </div>
                        <svg
                          className="w-4 h-4 shrink-0 text-slate-600 group-hover:text-aurora-purple group-hover:translate-x-1 transition-all"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}
