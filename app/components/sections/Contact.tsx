import ContactForm from "../ui/ContactForm";

const socials = [
  { label: "GitHub", href: "https://github.com/ysherpa3" },
  { label: "Email", href: "mailto:ysherpa37@gmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-20 lg:py-32 px-6">
      {/* Hidden form so Netlify detects it at build time */}
      <form name="contact" data-netlify="true" hidden aria-hidden="true">
        <input type="text" name="name" autoComplete="name" />
        <input type="email" name="email" autoComplete="email" />
        <textarea name="message" autoComplete="off" />
      </form>

      <div className="max-w-5xl mx-auto">
        {/* CTA card */}
        <div className="relative overflow-hidden border border-border rounded-3xl bg-surface/30">
          {/* Top accent line — decorative */}
          <div
            aria-hidden="true"
            className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent"
          />
          {/* Glow — decorative */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(129,140,248,0.06),transparent)] pointer-events-none"
          />

          <div className="relative px-6 py-12 sm:px-16 sm:py-20 flex flex-col items-center text-center">
            <p
              className="text-xs font-mono tracking-widest uppercase text-accent mb-6"
              aria-hidden="true"
            >
              Contact
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Still learning,
              <br />
              but eager to help.
            </h2>
            <p className="text-muted max-w-md mx-auto leading-relaxed mb-10">
              I&apos;m not a pro yet, but I work hard and I&apos;m keen to help
              where I can. If you have something you&apos;re working on or just
              want to say hi, feel free to reach out.
            </p>

            <ContactForm />

            {/* Divider — decorative */}
            <div
              aria-hidden="true"
              className="w-full max-w-xs h-px bg-border mt-12 mb-10"
            />

            {/* Social links */}
            <nav aria-label="Social links">
              <ul className="flex items-center justify-center flex-wrap gap-6 sm:gap-10">
                {socials.map(({ label, href }) => {
                  const isExternal = !href.startsWith("mailto");
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="text-xs font-mono tracking-widest uppercase text-dim hover:text-accent transition-colors duration-200"
                      >
                        {label}
                        {isExternal && (
                          <span className="sr-only"> (opens in new tab)</span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-dim">
            © 2026 Yogesh Sherpa
          </span>
          <span className="text-xs font-mono text-dim">
            Built with Next.js &amp; Tailwind CSS
          </span>
        </footer>
      </div>
    </section>
  );
}
