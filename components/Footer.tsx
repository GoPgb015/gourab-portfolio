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
