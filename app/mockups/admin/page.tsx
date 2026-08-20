"use client";

import { useState } from "react";

const sidebarItems = [
  { name: "Dashboard", icon: "grid", active: true },
  { name: "Teams", icon: "users", count: 8 },
  { name: "Coaches", icon: "user-check", count: 12 },
  { name: "Players", icon: "user", count: 96 },
  { name: "Matches", icon: "calendar", count: 24 },
  { name: "Users", icon: "shield" },
];

const stats = [
  { label: "Total Teams", value: "8", change: "+2 this month", icon: "users", color: "bg-accent" },
  { label: "Active Players", value: "96", change: "+12 this week", icon: "user", color: "bg-success" },
  { label: "Upcoming Matches", value: "6", change: "Next: Tomorrow", icon: "calendar", color: "bg-warning" },
  { label: "Matches Played", value: "18", change: "This season", icon: "check", color: "bg-primary" },
];

const recentMatches = [
  { home: "Houston FC", away: "Atlanta FC", score: "2 - 1", date: "Aug 18, 2026", status: "completed" },
  { home: "Dallas United", away: "Miami Heat", score: "0 - 0", date: "Aug 20, 2026", status: "live" },
  { home: "Chicago Fire", away: "LA Galaxy", score: "- vs -", date: "Aug 22, 2026", status: "upcoming" },
];

const topScorers = [
  { name: "Marcus Johnson", team: "Houston FC", goals: 8, avatar: "MJ" },
  { name: "David Okonkwo", team: "Atlanta FC", goals: 6, avatar: "DO" },
  { name: "Carlos Rodriguez", team: "Dallas United", goals: 5, avatar: "CR" },
  { name: "James Wilson", team: "Miami Heat", goals: 5, avatar: "JW" },
];

function Icon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    grid: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />,
    users: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
    "user-check": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    user: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    calendar: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    check: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />,
    plus: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />,
    bell: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />,
    search: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
    logout: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />,
  };
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  );
}

export default function AdminDashboardMockup() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-[calc(100vh-56px)] flex bg-muted">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-20"} bg-primary text-primary-foreground flex flex-col transition-all duration-200`}>
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-white/10">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-bold text-lg">
            N
          </div>
          {sidebarOpen && <span className="ml-3 font-semibold text-lg">NST Admin</span>}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                item.active
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon name={item.icon} />
              {sidebarOpen && (
                <>
                  <span className="flex-1 text-left text-sm font-medium">{item.name}</span>
                  {item.count && (
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                      {item.count}
                    </span>
                  )}
                </>
              )}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="p-3 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-sm font-medium">
              AD
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Admin User</p>
                <p className="text-xs text-white/60 truncate">admin@nst.com</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
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
              <Icon name="search" />
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
            <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening.</p>
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
      </div>
    </div>
  );
}
