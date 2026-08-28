import Crest from "../_components/crest";
import { standings, teamByCode } from "../_lib/data";

export default function StandingsPage() {
  return (
    <div>
      <div className="border-b border-border bg-radial-glow">
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-8">
          <h1 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-foreground mb-1">
            Standings
          </h1>
          <p className="text-muted-foreground">
            Group draw and results are announced on-site during the tournament weekend.
            Every club starts level.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] text-muted-foreground uppercase tracking-wide border-b border-border bg-white/[0.02]">
                  <th className="text-left font-medium px-4 py-3">#</th>
                  <th className="text-left font-medium px-2 py-3">Club</th>
                  <th className="text-right font-medium px-2 py-3">MP</th>
                  <th className="text-right font-medium px-2 py-3">W</th>
                  <th className="text-right font-medium px-2 py-3">D</th>
                  <th className="text-right font-medium px-2 py-3">L</th>
                  <th className="text-right font-medium px-2 py-3">GF</th>
                  <th className="text-right font-medium px-2 py-3">GA</th>
                  <th className="text-right font-medium px-2 py-3">GD</th>
                  <th className="text-right font-medium px-4 py-3">Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((row, i) => {
                  const t = teamByCode(row.team);
                  const gd = row.gf - row.ga;
                  return (
                    <tr
                      key={row.team}
                      className={`border-t border-border hover:bg-white/[0.03] transition-colors ${
                        i % 2 === 1 ? "bg-white/[0.015]" : ""
                      }`}
                    >
                      <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                      <td className="px-2 py-3">
                        <div className="flex items-center gap-2">
                          <Crest team={t} size="sm" />
                          <span className="font-medium text-foreground">{t.name}</span>
                        </div>
                      </td>
                      <td className="text-right px-2 py-3 text-muted-foreground">{row.mp}</td>
                      <td className="text-right px-2 py-3 text-muted-foreground">{row.w}</td>
                      <td className="text-right px-2 py-3 text-muted-foreground">{row.d}</td>
                      <td className="text-right px-2 py-3 text-muted-foreground">{row.l}</td>
                      <td className="text-right px-2 py-3 text-muted-foreground">{row.gf}</td>
                      <td className="text-right px-2 py-3 text-muted-foreground">{row.ga}</td>
                      <td className="text-right px-2 py-3 text-muted-foreground">
                        {gd > 0 ? `+${gd}` : gd}
                      </td>
                      <td className="text-right px-4 py-3 font-bold text-accent">{row.pts}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-[11px] text-muted-foreground mt-3 uppercase tracking-wide">
          Tiebreakers: Pts &middot; Head-to-head &middot; GD &middot; GF
        </p>
      </div>
    </div>
  );
}
