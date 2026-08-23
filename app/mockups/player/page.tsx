"use client";

const playerInfo = {
  name: "Marcus Johnson",
  team: "Houston FC",
  position: "Striker (ST)",
  secondaryPosition: "Center Forward (CF)",
  jersey: 9,
  country: "Nigeria",
  birthDate: "March 15, 1998",
  phone: "+1 (555) 234-5678",
  email: "marcus.j@email.com",
  avatar: "MJ",
};

const stats = {
  matches: 12,
  goals: 8,
  yellowCards: 1,
  redCards: 0,
};

const upcomingMatches = [
  { opponent: "Atlanta FC", date: "Aug 22, 2026", time: "3:00 PM", venue: "Home Stadium", isHome: true },
  { opponent: "Miami Heat", date: "Aug 28, 2026", time: "7:00 PM", venue: "Miami Arena", isHome: false },
  { opponent: "Dallas United", date: "Sep 3, 2026", time: "5:00 PM", venue: "Home Stadium", isHome: true },
];

const recentMatches = [
  { opponent: "Chicago Fire", result: "W", score: "3 - 1", goals: 2, date: "Aug 15, 2026" },
  { opponent: "LA Galaxy", result: "D", score: "1 - 1", goals: 1, date: "Aug 10, 2026" },
  { opponent: "Atlanta FC", result: "W", score: "2 - 0", goals: 0, date: "Aug 5, 2026" },
];

export default function PlayerDashboardMockup() {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-muted">
      {/* Mobile-First Layout */}
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        {/* Profile Header Card */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden mb-6">
          {/* Banner */}
          <div className="h-24 bg-linear-to-r from-primary to-primary/80 relative">
            <div className="absolute -bottom-10 left-6">
              <div className="w-20 h-20 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold border-4 border-card">
                {playerInfo.avatar}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="pt-14 pb-5 px-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-foreground">{playerInfo.name}</h1>
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded">
                    #{playerInfo.jersey}
                  </span>
                </div>
                <p className="text-muted-foreground mt-1">{playerInfo.team}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                    {playerInfo.position}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-muted text-muted-foreground text-sm">
                    {playerInfo.secondaryPosition}
                  </span>
                </div>
              </div>
              <button className="md:self-start px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Matches", value: stats.matches, icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
            { label: "Goals", value: stats.goals, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { label: "Yellow Cards", value: stats.yellowCards, color: "text-warning" },
            { label: "Red Cards", value: stats.redCards, color: "text-error" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl border border-border p-4 text-center">
              <p className={`text-3xl font-bold ${stat.color || "text-foreground"}`}>{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Matches */}
          <div className="bg-card rounded-xl border border-border">
            <div className="p-4 border-b border-border">
              <h2 className="font-semibold text-foreground">Upcoming Matches</h2>
            </div>
            <div className="divide-y divide-border">
              {upcomingMatches.map((match, i) => (
                <div key={i} className="p-4 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold ${
                    match.isHome ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                  }`}>
                    {match.isHome ? "H" : "A"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground">{match.opponent}</p>
                    <p className="text-sm text-muted-foreground">{match.venue}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{match.date}</p>
                    <p className="text-sm text-muted-foreground">{match.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Results */}
          <div className="bg-card rounded-xl border border-border">
            <div className="p-4 border-b border-border">
              <h2 className="font-semibold text-foreground">Recent Results</h2>
            </div>
            <div className="divide-y divide-border">
              {recentMatches.map((match, i) => (
                <div key={i} className="p-4 flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    match.result === "W" ? "bg-success/10 text-success" :
                    match.result === "L" ? "bg-error/10 text-error" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {match.result}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground">{match.opponent}</p>
                    <p className="text-sm text-muted-foreground">{match.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{match.score}</p>
                    {match.goals > 0 && (
                      <p className="text-xs text-success">{match.goals} goal{match.goals > 1 ? "s" : ""}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="mt-6 bg-card rounded-xl border border-border">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-foreground">Personal Information</h2>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Country", value: playerInfo.country },
              { label: "Birth Date", value: playerInfo.birthDate },
              { label: "Phone", value: playerInfo.phone },
              { label: "Email", value: playerInfo.email },
            ].map((item) => (
              <div key={item.label} className="flex justify-between py-2 border-b border-border last:border-0">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
