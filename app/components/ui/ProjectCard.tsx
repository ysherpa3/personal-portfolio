import { type Project } from "../../lib/projects";
import { IconGitHub, IconExternal } from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-label={project.name}
      className="group relative flex flex-col h-full p-6 border border-border rounded-2xl bg-surface/40 hover:bg-surface hover:border-white/10 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-5">
        <div
          aria-hidden="true"
          className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center"
        >
          <div className="w-3.5 h-3.5 rounded-sm bg-accent opacity-80" />
        </div>
        <div className="flex items-center gap-3 sm:opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
              aria-label={`${project.name} on GitHub (opens in new tab)`}
            >
              <IconGitHub />
            </a>
          )}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors"
            aria-label={`${project.name} live site (opens in new tab)`}
          >
            <IconExternal />
          </a>
        </div>
      </div>

      <h3 className="text-white font-semibold mb-2.5 group-hover:text-accent transition-colors duration-300">
        {project.name}
      </h3>
      <p className="text-muted text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      <ul
        aria-label="Technologies used"
        className="flex flex-wrap gap-x-3 gap-y-1 mt-5 pt-5 border-t border-border"
      >
        {project.tags.map((tag) => (
          <li key={tag} className="text-xs font-mono text-dim">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
