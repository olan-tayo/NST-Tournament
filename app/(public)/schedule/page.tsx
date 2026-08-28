import { scheduleEvents } from "../_lib/data";

const icons: Record<string, React.ReactNode> = {
  arrival: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 16l20-8-8 20-2.5-7.5L2 16z" />
  ),
  "group-stage": <circle cx="12" cy="12" r="9" />,
  knockouts: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M6 3h12v4a6 6 0 01-12 0V3zM6 5H3v2a3 3 0 003 3M18 5h3v2a3 3 0 01-3 3" />
  ),
  departure: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 8l20-8-8 20-2.5-7.5L2 8z" transform="rotate(180 12 12)" />
  ),
};

export default function SchedulePage() {
  return (
    <div>
      <div className="border-b border-border bg-radial-glow">
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-8">
          <h1 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-foreground mb-1">
            Schedule
          </h1>
          <p className="text-muted-foreground">
            2027 Columbus, Ohio Edition &middot; July 2&ndash;5
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="relative">
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-linear-to-b from-accent via-border to-transparent hidden sm:block" />
          <div className="space-y-4">
            {scheduleEvents.map((event) => (
              <div key={event.id} className="relative flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="hidden sm:flex w-10 h-10 rounded-full bg-card border-2 border-accent text-accent items-center justify-center shrink-0 z-10 shadow-glow-accent">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    {icons[event.id]}
                  </svg>
                </div>
                <div className="hover-lift shadow-card flex-1 bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="sm:w-36 shrink-0">
                    <p className="font-display text-sm uppercase tracking-wide text-accent">
                      {event.day}
                    </p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                  </div>
                  <div>
                    <h2 className="font-display text-base uppercase tracking-wide text-foreground">
                      {event.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[11px] text-muted-foreground mt-6 uppercase tracking-wide">
          Exact kickoff times and pitch assignments are posted on-site.
        </p>
      </div>
    </div>
  );
}
