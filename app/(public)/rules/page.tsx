const sections = [
  {
    title: "Format",
    body: "Twelve clubs compete in a group stage, with 12 games played across the day. The top two finishers from each group advance to the knockout stage, followed by the semi-finals and a single final.",
  },
  {
    title: "Match Length",
    body: "Group stage and semi-final matches are 35 minutes per half with a 10-minute halftime break. The final is 40 minutes per half. Semi-finals tied after regulation go straight to penalty kicks (best of five, then sudden death). A final tied after regulation gets 15 minutes of extra time before penalties.",
  },
  {
    title: "Registration & Roster",
    body: "Rosters are capped at 25 players — only 25 championship medals are awarded. Once a player joins a club roster for the tournament, they cannot play for another club.",
  },
  {
    title: "Check-In",
    body: "Players must check in with a valid ID Thursday evening or before 9:00 AM Friday. A wristband must be worn securely at all times during the tournament. A team must field players within 15 minutes of its scheduled kickoff or forfeit the match 3-0. A minimum of 7 players is required to start.",
  },
  {
    title: "Discipline",
    body: "A red card carries an automatic one-match suspension, which can be waived with a $100 payment. Fighting or assault results in expulsion from the tournament, reviewed case by case. Wearing the wrong jersey number results in an immediate red card.",
  },
  {
    title: "Equipment & Substitutions",
    body: "Shin guards and soccer cleats are mandatory. All players must wear matching uniforms, except the goalkeeper. Substitutions are unlimited, but an ejected player cannot be replaced.",
  },
  {
    title: "Registration Violations",
    body: "Violating registration rules (e.g. fielding an ineligible player) carries a $300 fine and may result in a tournament ban.",
  },
];

export default function RulesPage() {
  return (
    <div>
      <div className="border-b border-border bg-radial-glow">
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-8">
          <h1 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-foreground mb-1">
            Rules
          </h1>
          <p className="text-muted-foreground">
            Everything you need to know about how NST-USA is played.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {sections.map((section, i) => (
            <section
              key={section.title}
              className={`hover-lift shadow-card bg-card border border-border rounded-xl p-6 ${
                i === sections.length - 1 && sections.length % 2 === 1 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-accent/10 text-accent font-display text-xs flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <h2 className="font-display text-lg uppercase tracking-wide text-foreground">
                  {section.title}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
