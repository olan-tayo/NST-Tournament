"use client";

import { Icon } from "./icons";
import { useSidebar } from "./sidebar-context";

const stats = [
  { label: "Total Teams", value: "8", change: "+2 this month", icon: "users", color: "bg-accent" },
  { label: "Active Players", value: "96", change: "+12 this week", icon: "user", color: "bg-success" },
  { label: "Upcoming Matches", value: "6", change: "Next: Tomorrow", icon: "calendar", color: "bg-warning" },
  { label: "Matches Played", value: "18", change: "This season", icon: "check", color: "bg-primary" },
];

const recentMatches = [
  { home: "Houston Sports Club", away: "Atlanta Lions FC", score: "2 - 1", date: "Aug 18, 2026", status: "completed" },
  { home: "Houston United FC", away: "Cincy FC", score: "0 - 0", date: "Aug 20, 2026", status: "live" },
  { home: "FC Spartan", away: "Team Opopo", score: "- vs -", date: "Aug 22, 2026", status: "upcoming" },
];

const topScorers = [
  { name: "Marcus Johnson", team: "Houston Sports Club", goals: 8, avatar: "MJ" },
  { name: "David Okonkwo", team: "Atlanta Lions FC", goals: 6, avatar: "DO" },
  { name: "Carlos Rodriguez", team: "Houston United FC", goals: 5, avatar: "CR" },
  { name: "James Wilson", team: "Cincy FC", goals: 5, avatar: "JW" },
];

export default function AdminDashboardMockup() {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <>
      {/* Top Header */}
      <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search teams, players, matches..."
              className="w-80 h-10 pl-10 pr-4 bg-muted rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Icon name="search" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
            <Icon name="bell" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
            <Icon name="plus" />
            <span>New Match</span>
          </button>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here&apos;s what&apos;s happening.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  <p className="text-3xl font-semibold text-foreground mt-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-2">{stat.change}</p>
                </div>
                <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-white`}>
                  <Icon name={stat.icon} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Matches */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="font-semibold text-foreground">Recent Matches</h2>
              <button className="text-sm text-accent hover:underline">View all</button>
            </div>
            <div className="divide-y divide-border">
              {recentMatches.map((match, i) => (
                <div key={i} className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-4">
                    <div className="text-right w-28">
                      <p className="font-medium text-foreground">{match.home}</p>
                    </div>
                    <div className={`px-4 py-1.5 rounded-lg text-sm font-semibold ${
                      match.status === "completed" ? "bg-muted text-foreground" :
                      match.status === "live" ? "bg-success/10 text-success" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {match.score}
                    </div>
                    <div className="w-28">
                      <p className="font-medium text-foreground">{match.away}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{match.date}</span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      match.status === "completed" ? "bg-muted text-muted-foreground" :
                      match.status === "live" ? "bg-success/10 text-success" :
                      "bg-warning/10 text-warning"
                    }`}>
                      {match.status === "live" ? "LIVE" : match.status === "completed" ? "Final" : "Upcoming"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Scorers */}
          <div className="bg-card rounded-xl border border-border">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="font-semibold text-foreground">Top Scorers</h2>
              <button className="text-sm text-accent hover:underline">View all</button>
            </div>
            <div className="divide-y divide-border">
              {topScorers.map((player, i) => (
                <div key={i} className="flex items-center gap-4 p-4">
                  <span className="w-6 text-sm font-medium text-muted-foreground">{i + 1}</span>
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-semibold">
                    {player.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{player.name}</p>
                    <p className="text-xs text-muted-foreground">{player.team}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{player.goals}</p>
                    <p className="text-xs text-muted-foreground">goals</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
