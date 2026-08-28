"use client";

import Image from "next/image";
import { useState } from "react";

const players = [
  { name: "Marcus Johnson", position: "ST", jersey: 9, status: "active", avatar: "MJ" },
  { name: "David Okonkwo", position: "CAM", jersey: 10, status: "active", avatar: "DO" },
  { name: "Carlos Rodriguez", position: "CM", jersey: 8, status: "active", avatar: "CR" },
  { name: "James Wilson", position: "CB", jersey: 4, status: "active", avatar: "JW" },
  { name: "Emmanuel Addo", position: "GK", jersey: 1, status: "injured", avatar: "EA" },
  { name: "Pierre Dubois", position: "RB", jersey: 2, status: "active", avatar: "PD" },
];

const upcomingMatches = [
  { opponent: "Atlanta Lions FC", date: "Aug 22, 2026", time: "3:00 PM", venue: "Home Stadium" },
  { opponent: "Cincy FC", date: "Aug 28, 2026", time: "7:00 PM", venue: "Away" },
];

export default function CoachDashboardMockup() {
  const [activeTab, setActiveTab] = useState("roster");

  return (
    <div className="min-h-[calc(100vh-56px)] flex bg-muted">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        {/* Team Header */}
        <div className="p-5 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white ring-2 ring-accent/50 overflow-hidden flex items-center justify-center shrink-0">
              <Image src="/assets/teams/hsc.jpg" alt="Houston Sports Club" width={48} height={48} className="object-cover" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Houston Sports Club</h2>
              <p className="text-xs text-muted-foreground">Team Manager</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {[
            { id: "dashboard", label: "Dashboard", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" },
            { id: "roster", label: "Team Roster", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
            { id: "invite", label: "Invite Player", icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" },
            { id: "schedule", label: "Match Schedule", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
            { id: "profile", label: "My Profile", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? "bg-accent/10 text-accent"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Profile */}
        <div className="p-3 border-t border-border">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success text-sm font-semibold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">John Davis</p>
              <p className="text-xs text-muted-foreground">Coach</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-foreground">Team Roster</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Invite Player
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Players", value: "12", color: "bg-accent" },
              { label: "Active", value: "11", color: "bg-success" },
              { label: "Injured", value: "1", color: "bg-warning" },
              { label: "Pending Invites", value: "2", color: "bg-muted-foreground" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl border border-border p-4">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-semibold text-foreground mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Players Table */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="relative">
                <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search players..."
                  className="w-64 h-9 pl-9 pr-4 bg-muted rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <div className="flex items-center gap-2">
                <select className="h-9 px-3 bg-muted rounded-lg text-sm text-foreground focus:outline-none">
                  <option>All Positions</option>
                  <option>Goalkeepers</option>
                  <option>Defenders</option>
                  <option>Midfielders</option>
                  <option>Forwards</option>
                </select>
              </div>
            </div>

            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">#</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Player</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Position</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {players.map((player) => (
                  <tr key={player.name} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-4">
                      <span className="font-semibold text-foreground">{player.jersey}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-semibold">
                          {player.avatar}
                        </div>
                        <span className="font-medium text-foreground">{player.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-xs font-medium text-foreground">
                        {player.position}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        player.status === "active"
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                      }`}>
                        {player.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Upcoming Matches */}
          <div className="mt-6 bg-card rounded-xl border border-border">
            <div className="p-4 border-b border-border">
              <h2 className="font-semibold text-foreground">Upcoming Matches</h2>
            </div>
            <div className="divide-y divide-border">
              {upcomingMatches.map((match, i) => (
                <div key={i} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-semibold">
                      vs
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{match.opponent}</p>
                      <p className="text-sm text-muted-foreground">{match.venue}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{match.date}</p>
                    <p className="text-sm text-muted-foreground">{match.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
