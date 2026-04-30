export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
    >
      {/* Warm vignette — decorative */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(129,140,248,0.05),transparent)] pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Available badge */}
        <div className="fade-up delay-1 mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface text-xs font-mono tracking-widest text-muted">
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
            Not taking on projects right now
          </span>
        </div>

        {/* Name */}
        <h1 className="fade-up delay-2 text-[clamp(2.5rem,9vw,7rem)] font-bold tracking-tight leading-[0.95] mb-5 sm:mb-6">
          <span className="text-white/60 font-light">Hello, I&apos;m</span>
          <br />
          <span className="text-white">Yogesh Sherpa</span>
          <span aria-hidden="true" className="text-accent">
            .
          </span>
        </h1>

        {/* Role */}
        <p className="fade-up delay-3 text-lg sm:text-2xl text-muted font-light tracking-wide mb-4 sm:mb-5">
          Beginner Front-End Developer
        </p>

        {/* Tagline */}
        <p className="fade-up delay-4 text-sm text-muted max-w-sm sm:max-w-100 leading-loose mb-8 sm:mb-10">
          I&apos;m still figuring things out, but I genuinely love building for
          the web. HTML, CSS, a bit of React — I&apos;m learning every day and
          actually enjoying it.
        </p>

        {/* CTAs */}
        <div className="fade-up delay-5 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="px-7 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-accent hover:text-background transition-colors duration-500"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 text-muted text-sm border border-border rounded-full hover:border-white/15 hover:text-white transition-all duration-500"
          >
            Get in Touch
          </a>
          <a
            href="/resume"
            className="px-7 py-3 text-muted text-sm border border-border rounded-full hover:border-white/15 hover:text-white transition-all duration-500"
          >
            Resume <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator — decorative */}
      <div
        aria-hidden="true"
        className="fade-in delay-6 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono tracking-[0.3em] text-dim uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-linear-to-b from-dim to-transparent" />
      </div>
    </section>
  );
}
