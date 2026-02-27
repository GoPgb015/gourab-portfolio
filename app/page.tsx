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
