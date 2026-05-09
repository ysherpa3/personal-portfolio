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

export default function About() {
  return (
    <section id="about" aria-label="About me" className="py-20 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <div>
            <p
              className="text-xs font-mono tracking-widest uppercase text-accent mb-6"
              aria-hidden="true"
            >
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Curious by nature,
              <br />
              building my way forward.
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Hey, I&apos;m Yogesh. I started learning web development about 5
              years ago and honestly, I&apos;m still learning, but that&apos;s
              kind of the point. I went from copying HTML tutorials to actually
              understanding what I&apos;m writing, and that feels pretty good.
            </p>
            <p className="text-muted leading-relaxed">
              Right now I&apos;m focused on getting better at React and building
              things that actually work well on any device. I break stuff, fix
              it, and learn a lot along the way.
            </p>
          </div>

          {/* Skills */}
          <div>
            <p
              className="text-xs font-mono tracking-widest uppercase text-accent mb-6"
              aria-hidden="true"
            >
              Tech Stack
            </p>
            <ul aria-label="Tech stack" className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1.5 text-xs font-mono text-muted border border-border rounded-full hover:border-accent/40 hover:text-accent transition-all duration-300"
                >
                  {skill}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <dl className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-border">
              {[
                { value: "5yrs", label: "Years coding" },
                { value: "5+", label: "Projects built" },
                { value: "100%", label: "Self-taught" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <dt className="text-xs text-dim font-mono">{label}</dt>
                  <dd className="text-3xl font-bold text-white mt-1">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
