import Link from 'next/link';
import { blogPosts } from '@/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog | Gourab Chatterjee',
  description:
    'Thoughts on AI, analytics, research, and the intersection of technology with business and society.',
};

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  'cyber-purple': { text: '#8338ec', bg: 'rgba(131,56,236,0.08)', border: 'rgba(131,56,236,0.25)' },
  'aurora-cyan':  { text: '#06b6d4', bg: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.25)' },
  'cyber-pink':   { text: '#ff006e', bg: 'rgba(255,0,110,0.08)',  border: 'rgba(255,0,110,0.25)' },
  'aurora-teal':  { text: '#14b8a6', bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.25)' },
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest     = blogPosts.slice(1);

  return (
    <div className="relative min-h-screen bg-space-black">
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-50" />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(124,58,237,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10">
        <Navbar />

        <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
          {/* ── Back + header ───────────────────────────────── */}
          <div className="mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-aurora-purple transition-colors mb-8 group no-underline"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to portfolio
            </Link>
            <p className="text-xs tracking-[0.3em] uppercase text-cyber-pink mb-3" style={{ fontFamily: 'var(--font-jetbrains)' }}>
              Thoughts &amp; Writings
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              The <span className="gradient-text-warm">Blog</span>
            </h1>
            <p className="text-slate-400 max-w-xl">
              Explorations in AI, data, research methodology, and the winding path of a career built at the intersection of engineering and strategy.
            </p>
          </div>

          {/* ── Featured post ─────────────────────────────── */}
          <Link href={`/blog/${featured.slug}`} className="block group no-underline mb-8">
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden hover:border-aurora-purple/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.08)] transition-all duration-300">
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7, #06b6d4)' }}
              />
              <div
                className="absolute top-4 right-6 text-xs text-slate-600 glass px-2 py-1 rounded-full"
                style={{ fontFamily: 'var(--font-jetbrains)' }}
              >
                Featured
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {featured.tags.map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
              <h2
                className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-aurora-purple transition-colors"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {featured.title}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm flex-wrap">
                <span className="text-slate-600">{featured.date}</span>
                <span className="text-slate-600">·</span>
                <span className="text-aurora-purple">{featured.readTime}</span>
                <span className="ml-auto text-aurora-purple flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* ── Remaining posts ───────────────────────────── */}
          <div className="grid sm:grid-cols-3 gap-5">
            {rest.map((post) => {
              const c = colorMap[post.color] ?? colorMap['aurora-cyan'];
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group no-underline">
                  <div
                    className="glass-card rounded-2xl p-6 h-full flex flex-col overflow-hidden relative hover:shadow-[0_0_20px_rgba(168,85,247,0.08)] transition-all duration-300"
                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(90deg, ${c.text}, transparent)` }}
                    />
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text, fontFamily: 'var(--font-jetbrains)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3
                      className="text-white font-bold text-sm leading-snug mb-3 flex-1 group-hover:opacity-80 transition-opacity"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-slate-600 text-xs">{post.date}</span>
                      <span className="text-xs" style={{ color: c.text }}>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
