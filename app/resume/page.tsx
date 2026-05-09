import type { Metadata } from "next";
import { projects } from "../lib/projects";
import PrintButton from "./PrintButton";
import Link from "next/link";

const highlights: Record<string, string[]> = {
  "Quiz App": [
    "Fetched questions from the Open Trivia Database API across multiple categories with score tracking and per-answer feedback",
    "Practised React state management and reusable component composition",
  ],
  "Weather App": [
    "Integrated a public weather API to surface real-time forecasts via location search",
    "Applied mobile-first responsive design with dynamic backgrounds per weather condition",
  ],
  "Recipe Finder": [
    "Connected to a food API for ingredient-based search, result browsing, and saved favourites",
    "Reinforced REST API integration and accessible UI layout patterns",
  ],
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "Responsive Design",
];

export const metadata: Metadata = {
  title: "Resume - Yogesh Sherpa",
  robots: { index: false },
};

export default function ResumePage() {
  return (
    <>
      <style>{`
        @media print {
          @page { margin: 1.2cm 1.5cm; size: A4; }
          body {
            background: #fff !important;
            color: #1e293b !important;
            font-size: 11pt;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print { display: none !important; }
          .cv-shell  { background: #fff !important; padding: 0 !important; min-height: unset !important; }
          .cv-card   { background: #fff !important; border: none !important; border-radius: 0 !important; box-shadow: none !important; padding: 0 !important; }
          .cv-header { border-bottom-color: #e2e8f0 !important; }
          .cv-rule   { border-color: #e2e8f0 !important; }
          .cv-name   { color: #0f172a !important; }
          .cv-role   { color: #475569 !important; }
          .cv-contact a { color: #6366f1 !important; }
          .cv-label  { color: #6366f1 !important; border-bottom-color: #6366f1 !important; }
          .cv-body   { color: #334155 !important; }
          .cv-dim    { color: #64748b !important; }
          .cv-tag    { background: #f1f5f9 !important; color: #475569 !important; }
          .cv-proj-name { color: #0f172a !important; }
          .cv-bullet { background: #94a3b8 !important; }
          li { break-inside: avoid; }
        }
      `}</style>

      {/* Page shell */}
      <div className="cv-shell min-h-screen bg-background py-10 px-6">
        {/* Toolbar */}
        <div className="no-print max-w-208 mx-auto mb-8 flex items-center justify-between">
          <Link
            href="/"
            aria-label="Back to home"
            className="text-sm font-mono text-muted hover:text-white transition-colors duration-200"
          >
            <span aria-hidden="true">← </span>Back
          </Link>
          <PrintButton />
        </div>

        {/* Resume card */}
        <article
          className="cv-card max-w-208 mx-auto bg-surface/20 border border-border rounded-2xl p-10 sm:p-14"
          aria-label="Yogesh Sherpa - Resume"
        >
          {/* ── Header ── */}
          <header className="cv-header flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 pb-8 border-b border-border">
            <div>
              <h1 className="cv-name text-[2.25rem] font-bold text-white tracking-tight leading-none mb-2">
                Yogesh Sherpa
              </h1>
              <p className="cv-role text-base text-muted font-light tracking-wide">
                Front-End Developer
              </p>
            </div>
            <div className="cv-contact flex flex-col gap-1.5 text-sm font-mono sm:text-right">
              <a
                href="mailto:ysherpa37@gmail.com"
                className="cv-dim text-dim hover:text-accent transition-colors duration-200"
              >
                ysherpa37@gmail.com
              </a>
              <a
                href="https://github.com/ysherpa3"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-dim text-dim hover:text-accent transition-colors duration-200"
              >
                github.com/ysherpa3
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>
          </header>

          {/* ── Summary ── */}
          <section className="cv-rule pt-8 pb-7 border-b border-border">
            <h2 className="cv-label text-[0.65rem] font-mono tracking-[0.18em] uppercase text-accent border-b border-accent/30 pb-2 mb-4 w-fit pr-4">
              Summary
            </h2>
            <p className="cv-body text-sm text-muted leading-[1.75]">
              Self-taught front-end developer with 5 years of hands-on
              experience. Focused on building responsive, accessible web
              experiences with React, Next.js, and Tailwind CSS. Comfortable
              working independently, debugging real-world problems, and always
              picking up something new along the way.
            </p>
          </section>

          {/* ── Skills ── */}
          <section className="cv-rule pt-8 pb-7 border-b border-border">
            <h2 className="cv-label text-[0.65rem] font-mono tracking-[0.18em] uppercase text-accent border-b border-accent/30 pb-2 mb-5 w-fit pr-4">
              Skills
            </h2>
            <ul aria-label="Technical skills" className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="cv-tag px-2.5 py-1 text-xs font-mono text-muted bg-surface/60 rounded-md"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Projects ── */}
          <section className="pt-8">
            <h2 className="cv-label text-[0.65rem] font-mono tracking-[0.18em] uppercase text-accent border-b border-accent/30 pb-2 mb-7 w-fit pr-4">
              Projects
            </h2>
            <ul className="flex flex-col gap-6">
              {projects.map((project) => (
                <li key={project.name}>
                  {/* Name + links */}
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <h3 className="cv-proj-name text-sm font-semibold text-white">
                      {project.name}
                    </h3>
                    <div
                      className="flex gap-3 shrink-0 text-[0.7rem] font-mono"
                      role="list"
                      aria-label={`${project.name} links`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} source code on GitHub (opens in new tab)`}
                        className="cv-dim text-dim hover:text-accent transition-colors duration-200"
                        role="listitem"
                      >
                        GitHub
                      </a>
                      <span aria-hidden="true" className="cv-dim text-border">
                        ·
                      </span>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live demo (opens in new tab)`}
                        className="cv-dim text-dim hover:text-accent transition-colors duration-200"
                        role="listitem"
                      >
                        Live
                      </a>
                    </div>
                  </div>

                  {/* Stack */}
                  <p className="cv-dim text-[0.7rem] font-mono text-dim mb-2.5">
                    {project.tags.join(" · ")}
                  </p>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-1">
                    {(highlights[project.name] ?? []).map((point) => (
                      <li
                        key={point}
                        className="cv-body flex gap-2.5 text-sm text-muted leading-[1.65]"
                      >
                        <span
                          aria-hidden="true"
                          className="cv-bullet cv-dim mt-[0.45em] shrink-0 w-1 h-1 rounded-full bg-dim"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}
