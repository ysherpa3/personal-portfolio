import { projects } from "../../lib/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="py-20 lg:py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-10 lg:mb-16">
          <div>
            <p
              className="text-xs font-mono tracking-widest uppercase text-accent mb-4"
              aria-hidden="true"
            >
              Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Selected Projects
            </h2>
          </div>
          <a
            href="https://github.com/ysherpa3"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors duration-200"
          >
            View all on GitHub
            <span aria-hidden="true" className="text-accent">
              →
            </span>
            <span className="sr-only">(opens in new tab)</span>
          </a>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <li key={project.name}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
