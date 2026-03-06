"use client";

import { useState, useCallback } from "react";
import IntroSplash from "@/components/netflix/IntroSplash";
import Navbar from "@/components/netflix/Navbar";
import HeroBanner from "@/components/netflix/HeroBanner";
import ContentRow from "@/components/netflix/ContentRow";
import Card from "@/components/netflix/Card";
import Modal from "@/components/netflix/Modal";
import { useSound } from "@/hooks/useSound";
import {
  experiences,
  researchPapers,
  education,
  certifications,
  achievements,
  skillCategories,
} from "@/data/portfolio";

type ModalData = {
  thumbnail: string;
  title: string;
  seasonEpisode?: string;
  period?: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
  detail?: string;
} | null;

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [modal, setModal] = useState<ModalData>(null);
  const { enabled: soundEnabled, toggle: toggleSound } = useSound("/audio/ambient.mp3");

  const openModal = useCallback((data: ModalData) => setModal(data), []);
  const closeModal = useCallback(() => setModal(null), []);

  return (
    <>
      {!splashDone && <IntroSplash onComplete={() => setSplashDone(true)} />}

      <Navbar soundEnabled={soundEnabled} onToggleSound={toggleSound} />

      <main className="min-h-screen bg-bg-primary">
        <HeroBanner />

        {/* Row 1: Continue Watching */}
        <ContentRow title="Continue Watching">
          {experiences
            .filter((e) => e.season === 4)
            .map((exp) => (
              <Card
                key={exp.id}
                thumbnail={exp.thumbnail}
                title={exp.role}
                subtitle={exp.company}
                badge="NEW EPISODE"
                hoverDescription={exp.description}
                onClick={() =>
                  openModal({
                    thumbnail: exp.thumbnail,
                    title: exp.role,
                    seasonEpisode: `Season ${exp.season}, Episode ${exp.episode}`,
                    period: exp.period,
                    description: exp.description,
                    bullets: exp.bullets,
                    tags: exp.tags,
                  })
                }
              />
            ))}
        </ContentRow>

        {/* Row 2: The Professional Journey */}
        <ContentRow title="The Professional Journey">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              thumbnail={exp.thumbnail}
              title={exp.role}
              subtitle={exp.company}
              badge={`S${exp.season}`}
              hoverDescription={exp.description}
              onClick={() =>
                openModal({
                  thumbnail: exp.thumbnail,
                  title: exp.role,
                  seasonEpisode: `Season ${exp.season}, Episode ${exp.episode}`,
                  period: exp.period,
                  description: exp.description,
                  bullets: exp.bullets,
                  tags: exp.tags,
                })
              }
            />
          ))}
        </ContentRow>

        {/* Row 3: Top 10 Research */}
        <ContentRow title="Top 10 Research">
          {researchPapers.map((paper) => (
            <Card
              key={paper.id}
              thumbnail={paper.thumbnail}
              title={paper.title}
              subtitle={paper.venue}
              ranked={paper.rank}
              hoverDescription={paper.description}
              onClick={() =>
                openModal({
                  thumbnail: paper.thumbnail,
                  title: paper.title,
                  period: String(paper.year),
                  description: paper.description,
                  detail: paper.venue,
                })
              }
            />
          ))}
        </ContentRow>

        {/* Row 4: Origin Story (Education) */}
        <ContentRow title="Origin Story">
          {education.map((edu) => (
            <Card
              key={edu.id}
              thumbnail={edu.thumbnail}
              title={edu.degree}
              subtitle={edu.institution}
              badge={`Season ${edu.season}`}
              onClick={() =>
                openModal({
                  thumbnail: edu.thumbnail,
                  title: edu.degree,
                  seasonEpisode: `Season ${edu.season}`,
                  period: edu.period,
                  description: edu.institution,
                  detail: edu.detail,
                })
              }
            />
          ))}
        </ContentRow>

        {/* Row 5: Special Features (Certifications) */}
        <ContentRow title="Special Features">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              thumbnail={cert.thumbnail}
              title={cert.name}
              subtitle={cert.issuer}
              badge="BONUS"
              onClick={() =>
                openModal({
                  thumbnail: cert.thumbnail,
                  title: cert.name,
                  description: `Certified by ${cert.issuer}`,
                })
              }
            />
          ))}
        </ContentRow>

        {/* Row 6: The Highlight Reel (Achievements) */}
        <ContentRow title="The Highlight Reel">
          {achievements.map((ach) => (
            <Card
              key={ach.id}
              thumbnail={ach.thumbnail}
              title={ach.title}
              subtitle={ach.description}
              badge="AWARD"
              onClick={() =>
                openModal({
                  thumbnail: ach.thumbnail,
                  title: ach.title,
                  description: ach.description,
                })
              }
            />
          ))}
        </ContentRow>

        {/* Row 7: The Toolkit (Skills) */}
        <ContentRow title="The Toolkit">
          {skillCategories.map((cat) => (
            <Card
              key={cat.id}
              thumbnail={cat.thumbnail}
              title={cat.name}
              hoverDescription={cat.skills.join(" / ")}
              onClick={() =>
                openModal({
                  thumbnail: cat.thumbnail,
                  title: cat.name,
                  tags: cat.skills,
                })
              }
            />
          ))}
        </ContentRow>

        {/* Footer */}
        <footer className="py-12 px-6 md:px-12 border-t border-border-subtle mt-8">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-[var(--font-mono)] text-xs text-text-muted">
              &copy; 2026 Gourab Chatterjee
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:i.gourabchatterjee@gmail.com"
                className="text-sm text-text-secondary hover:text-accent-gold transition-colors"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/gourabchatterjee-9la516287"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-accent-gold transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Global Modal */}
      <Modal
        isOpen={modal !== null}
        onClose={closeModal}
        thumbnail={modal?.thumbnail ?? ""}
        title={modal?.title ?? ""}
        seasonEpisode={modal?.seasonEpisode}
        period={modal?.period}
        description={modal?.description}
        bullets={modal?.bullets}
        tags={modal?.tags}
        detail={modal?.detail}
      />
    </>
  );
}
