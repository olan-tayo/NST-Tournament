import Image from "next/image";
import Link from "next/link";
import Crest from "./_components/crest";
import { news, scheduleEvents, standings, teamByCode, teams } from "./_lib/data";

const scheduleIcons: Record<string, React.ReactNode> = {
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

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden bg-radial-glow border-b border-border">
        <div className="absolute inset-0 bg-grid-lines pointer-events-none" />
        <Image
          src="/assets/logo.png"
          alt=""
          width={900}
          height={1000}
          className="pointer-events-none select-none absolute -right-32 -top-24 w-140 h-auto opacity-[0.06] rotate-6 hidden sm:block"
        />
        <div className="relative max-w-6xl mx-auto px-4 pt-14 pb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 mb-5 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <p className="text-accent text-[11px] font-bold uppercase tracking-widest">
              2027 Columbus, Ohio Edition &middot; July 2&ndash;5
            </p>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl uppercase tracking-tight text-foreground mb-4 animate-fade-up [animation-delay:60ms]">
            <span className="text-gradient-gold">NST-USA</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-8 animate-fade-up [animation-delay:120ms]">
            16 Teams. One Goal. A Cameroonian tournament that brings veteran and junior
            clubs together in one open-age competition, culminating in a championship
            final in Columbus, Ohio.
          </p>
          <div className="flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:180ms]">
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 h-11 px-5 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide rounded-lg hover:brightness-110 shadow-glow-accent transition-all"
            >
              View Schedule
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/clubs"
              className="inline-flex items-center gap-2 h-11 px-5 bg-white/5 border border-border text-foreground text-xs font-bold uppercase tracking-wide rounded-lg hover:bg-white/10 hover:border-accent/40 transition-all"
            >
              Browse Clubs
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Tournament weekend */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg uppercase tracking-wide text-foreground">
              Tournament Weekend
            </h2>
            <Link href="/schedule" className="text-xs font-semibold uppercase text-accent hover:underline">
              Full Schedule &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {scheduleEvents.map((event) => (
              <div
                key={event.id}
                className="hover-lift shadow-card relative bg-card border border-border rounded-xl p-4 overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-accent via-secondary to-accent" />
                <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    {scheduleIcons[event.id]}
                  </svg>
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">
                  {event.day} &middot; {event.date}
                </div>
                <h3 className="font-display text-sm uppercase tracking-wide text-foreground mb-1">
                  {event.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: clubs + news */}
          <div className="lg:col-span-2 space-y-10">
            {/* Clubs */}
            <section className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-lg uppercase tracking-wide text-foreground">
                  Clubs
                </h2>
                <Link href="/clubs" className="text-xs font-semibold uppercase text-accent hover:underline">
                  All Clubs &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {teams.map((team) => (
                  <Link
                    key={team.code}
                    href="/clubs"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="transition-transform group-hover:-translate-y-1">
                      <Crest team={team} size="lg" />
                    </div>
                    <span className="font-display text-xs uppercase tracking-wide text-foreground text-center group-hover:text-accent transition-colors">
                      {team.code}
                    </span>
                    {team.defendingChampion && (
                      <span className="text-[9px] font-bold uppercase tracking-wide text-accent">
                        Champions
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </section>

            {/* Discover news */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg uppercase tracking-wide text-foreground">
                  Discover
                </h2>
                <Link href="/news" className="text-xs font-semibold uppercase text-accent hover:underline">
                  All News &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {news.map((article) => (
                  <Link
                    key={article.slug}
                    href="/news"
                    className="hover-lift group bg-card border border-border rounded-xl overflow-hidden shadow-card"
                  >
                    <div
                      className="h-24 border-b-2 relative overflow-hidden"
                      style={{ backgroundColor: `${article.color}18`, borderColor: article.color }}
                    >
                      <div
                        className="absolute -right-6 -top-6 w-24 h-24 rounded-full blur-xl opacity-40"
                        style={{ backgroundColor: article.color }}
                      />
                    </div>
                    <div className="p-4">
                      <span
                        className={`inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded mb-2 ${
                          article.tag === "News" ? "bg-secondary/20 text-secondary" : "bg-accent/20 text-accent"
                        }`}
                      >
                        {article.tag}
                      </span>
                      <h3 className="font-display text-base uppercase tracking-wide text-foreground group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{article.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Right: standings preview */}
          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
              <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                <h3 className="font-display text-sm uppercase tracking-wide text-foreground">
                  Standings
                </h3>
                <Link href="/standings" className="text-[10px] font-semibold uppercase text-accent hover:underline">
                  Full &rarr;
                </Link>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    <th className="text-left font-medium px-4 py-2">Club</th>
                    <th className="text-right font-medium px-2 py-2">MP</th>
                    <th className="text-right font-medium px-4 py-2">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.slice(0, 6).map((row) => {
                    const t = teamByCode(row.team);
                    return (
                      <tr key={row.team} className="border-t border-border hover:bg-white/3 transition-colors">
                        <td className="px-4 py-2">
                          <div className="flex items-center gap-2">
                            <Crest team={t} size="sm" />
                            <span className="font-medium text-foreground">{t.code}</span>
                          </div>
                        </td>
                        <td className="text-right px-2 py-2 text-muted-foreground">{row.mp}</td>
                        <td className="text-right px-4 py-2 font-bold text-foreground">{row.pts}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="text-[10px] text-muted-foreground px-4 py-2 border-t border-border uppercase tracking-wide">
                Group draw announced on-site
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 shadow-card">
              <h3 className="font-display text-sm uppercase tracking-wide text-foreground mb-3">
                Format
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Group stage, top 2 advance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Semi-finals &amp; final on Sunday
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  35-min halves &middot; 40-min final
                </li>
              </ul>
              <Link href="/rules" className="inline-flex items-center gap-1 mt-4 text-xs font-semibold uppercase text-accent hover:underline">
                Full Rules &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
