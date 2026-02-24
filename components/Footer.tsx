export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6 text-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(0deg, rgba(124,58,237,0.04) 0%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div
            className="text-sm font-semibold tracking-wider text-slate-500"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            <span className="gradient-text font-bold">GC</span>
            <span className="text-slate-700 mx-2">/</span>
            gourab<span className="text-aurora-purple">.</span>ai
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Gourab Chatterjee · Built with{' '}
            <span className="text-slate-500">Next.js · Three.js · Tailwind · Framer Motion</span>
          </p>

          {/* Stack badges */}
          <div className="flex items-center gap-3">
            {['Next.js', 'R3F', 'Tailwind v4'].map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(168,85,247,0.06)',
                  border: '1px solid rgba(168,85,247,0.15)',
                  color: '#7c3aed',
                  fontFamily: 'var(--font-jetbrains)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
