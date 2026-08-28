import { teams } from "../_lib/data";

const sections = [
  {
    title: "Our Mission",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 14.27l-4.8 2.49.92-5.34-3.88-3.78 5.36-.78L12 2z" />
    ),
  },
  {
    title: "How It's Run",
    icon: <circle cx="12" cy="12" r="9" />,
  },
  {
    title: "Contact",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4zm0 0l8 8 8-8" />
    ),
  },
];

export default function AboutPage() {
  return (
    <div>
      <div className="border-b border-border bg-radial-glow">
        <div className="max-w-3xl mx-auto px-4 pt-10 pb-8">
          <h1 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-foreground mb-1">
            About
          </h1>
          <p className="text-muted-foreground">The story behind NST-USA.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="space-y-5">
          <section className="hover-lift shadow-card bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  {sections[0].icon}
                </svg>
              </span>
              <h2 className="font-display text-lg uppercase tracking-wide text-foreground">
                {sections[0].title}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The National Soccer Tournament (NST-USA) is a Cameroonian tournament that
              brings together {teams.length} clubs from across the country for one
              competitive weekend a year. Uniquely, NST-USA combines both veteran and
              junior players in a single open-age competition format, welcoming
              participants across generations.
            </p>
          </section>

          <section className="hover-lift shadow-card bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  {sections[1].icon}
                </svg>
              </span>
              <h2 className="font-display text-lg uppercase tracking-wide text-foreground">
                {sections[1].title}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Clubs travel in for a long weekend of soccer: arrival on Friday, a full day
              of group stage matches on Saturday, and semi-finals followed by the
              championship final on Sunday. Houston Sports Club (HSC) enters as the
              defending champions, having won the 3rd edition.
            </p>
          </section>

          <section className="hover-lift shadow-card bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  {sections[2].icon}
                </svg>
              </span>
              <h2 className="font-display text-lg uppercase tracking-wide text-foreground">
                {sections[2].title}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Questions about registration, scheduling, or your club&apos;s roster?
              Reach out to your team coach, or get in touch through the contact form on
              the official tournament site at{" "}
              <a
                href="https://nationalsoccertournament.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                nationalsoccertournament.org
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
