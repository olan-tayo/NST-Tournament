"use client";

import Image from "next/image";
import { useState } from "react";

const match = {
  home: "Houston Sports Club",
  away: "Atlanta Lions FC",
  venue: "NRG Stadium",
  date: "Aug 22, 2026",
  time: "3:00 PM",
  status: "live",
};

const homeRoster = [
  { name: "Marcus Johnson", jersey: 9, position: "ST", checkedIn: true, goals: 1, yellow: 0, red: false },
  { name: "David Okonkwo", jersey: 10, position: "CAM", checkedIn: true, goals: 1, yellow: 1, red: false },
  { name: "Carlos Rodriguez", jersey: 8, position: "CM", checkedIn: true, goals: 0, yellow: 0, red: false },
  { name: "James Wilson", jersey: 4, position: "CB", checkedIn: true, goals: 0, yellow: 0, red: false },
  { name: "Emmanuel Addo", jersey: 1, position: "GK", checkedIn: true, goals: 0, yellow: 0, red: false },
];

const awayRoster = [
  { name: "Kevin Thompson", jersey: 7, position: "LW", checkedIn: true, goals: 1, yellow: 0, red: false },
  { name: "Michael Brown", jersey: 11, position: "ST", checkedIn: true, goals: 0, yellow: 1, red: false },
  { name: "Chris Martinez", jersey: 6, position: "CDM", checkedIn: true, goals: 0, yellow: 0, red: true },
  { name: "Andre Williams", jersey: 3, position: "LB", checkedIn: true, goals: 0, yellow: 0, red: false },
  { name: "Paul Garcia", jersey: 1, position: "GK", checkedIn: true, goals: 0, yellow: 0, red: false },
];

export default function DelegateDashboardMockup() {
  const [activeTab, setActiveTab] = useState<"scoring" | "roster" | "stats">("scoring");
  const [homeScore, setHomeScore] = useState({ half1: 1, half2: 1 });
  const [awayScore, setAwayScore] = useState({ half1: 1, half2: 0 });

  return (
    <div className="min-h-[calc(100vh-56px)] bg-muted">
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        {/* Match Header */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider text-white/60">{match.venue}</span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success text-success-foreground text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              LIVE
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="w-16 h-16 mx-auto rounded-full bg-white overflow-hidden flex items-center justify-center mb-2">
                <Image src="/assets/teams/hsc.jpg" alt={match.home} width={64} height={64} className="object-cover" />
              </div>
              <h2 className="font-semibold text-lg">{match.home}</h2>
            </div>

            <div className="px-8 text-center">
              <div className="text-5xl font-bold tracking-tight">
                {homeScore.half1 + homeScore.half2} - {awayScore.half1 + awayScore.half2}
              </div>
              <p className="text-white/60 text-sm mt-2">
                HT: {homeScore.half1} - {awayScore.half1}
              </p>
            </div>

            <div className="text-center flex-1">
              <div className="w-16 h-16 mx-auto rounded-full bg-white overflow-hidden flex items-center justify-center mb-2">
                <Image src="/assets/teams/atl.jpeg" alt={match.away} width={64} height={64} className="object-cover" />
              </div>
              <h2 className="font-semibold text-lg">{match.away}</h2>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: "scoring", label: "Live Scoring" },
            { id: "roster", label: "Roster Check-in" },
            { id: "stats", label: "Player Stats" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scoring Tab */}
        {activeTab === "scoring" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Home Team Scoring */}
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-4">{match.home}</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">First Half</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setHomeScore(s => ({ ...s, half1: Math.max(0, s.half1 - 1) }))}
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-muted/70 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-2xl font-bold">{homeScore.half1}</span>
                    <button
                      onClick={() => setHomeScore(s => ({ ...s, half1: s.half1 + 1 }))}
                      className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Second Half</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setHomeScore(s => ({ ...s, half2: Math.max(0, s.half2 - 1) }))}
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-muted/70 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-2xl font-bold">{homeScore.half2}</span>
                    <button
                      onClick={() => setHomeScore(s => ({ ...s, half2: s.half2 + 1 }))}
                      className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Away Team Scoring */}
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-4">{match.away}</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">First Half</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setAwayScore(s => ({ ...s, half1: Math.max(0, s.half1 - 1) }))}
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-muted/70 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-2xl font-bold">{awayScore.half1}</span>
                    <button
                      onClick={() => setAwayScore(s => ({ ...s, half1: s.half1 + 1 }))}
                      className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Second Half</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setAwayScore(s => ({ ...s, half2: Math.max(0, s.half2 - 1) }))}
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-muted/70 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-2xl font-bold">{awayScore.half2}</span>
                    <button
                      onClick={() => setAwayScore(s => ({ ...s, half2: s.half2 + 1 }))}
                      className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button className="w-full py-3 bg-success text-white font-semibold rounded-xl hover:bg-success/90 transition-colors">
                Submit & Lock Final Score
              </button>
              <p className="text-center text-xs text-muted-foreground mt-2">
                Once submitted, the score cannot be edited. Only an admin can make changes.
              </p>
            </div>
          </div>
        )}

        {/* Roster Tab */}
        {activeTab === "roster" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Home Roster */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border bg-muted/50">
                <h3 className="font-semibold text-foreground">{match.home} Roster</h3>
              </div>
              <div className="divide-y divide-border">
                {homeRoster.map((player) => (
                  <div key={player.jersey} className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center text-sm font-bold">
                        {player.jersey}
                      </span>
                      <div>
                        <p className="font-medium text-foreground">{player.name}</p>
                        <p className="text-xs text-muted-foreground">{player.position}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={player.checkedIn} className="sr-only peer" />
                      <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Away Roster */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border bg-muted/50">
                <h3 className="font-semibold text-foreground">{match.away} Roster</h3>
              </div>
              <div className="divide-y divide-border">
                {awayRoster.map((player) => (
                  <div key={player.jersey} className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center text-sm font-bold">
                        {player.jersey}
                      </span>
                      <div>
                        <p className="font-medium text-foreground">{player.name}</p>
                        <p className="text-xs text-muted-foreground">{player.position}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={player.checkedIn} className="sr-only peer" />
                      <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Stats Tab */}
        {activeTab === "stats" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Home Stats */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border bg-muted/50">
                <h3 className="font-semibold text-foreground">{match.home}</h3>
              </div>
              <div className="divide-y divide-border">
                {homeRoster.map((player) => (
                  <div key={player.jersey} className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">#{player.jersey} {player.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* Goals */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Goals</span>
                        <div className="flex items-center gap-1">
                          <button className="w-7 h-7 rounded bg-muted text-foreground text-sm hover:bg-muted/70">-</button>
                          <span className="w-6 text-center font-semibold">{player.goals}</span>
                          <button className="w-7 h-7 rounded bg-success text-white text-sm hover:bg-success/90">+</button>
                        </div>
                      </div>
                      {/* Yellow Card */}
                      <button className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        player.yellow > 0 ? "bg-warning text-white" : "bg-muted text-muted-foreground hover:bg-warning/20"
                      }`}>
                        Yellow {player.yellow > 0 && `(${player.yellow})`}
                      </button>
                      {/* Red Card */}
                      <button className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        player.red ? "bg-error text-white" : "bg-muted text-muted-foreground hover:bg-error/20"
                      }`}>
                        Red
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Away Stats */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border bg-muted/50">
                <h3 className="font-semibold text-foreground">{match.away}</h3>
              </div>
              <div className="divide-y divide-border">
                {awayRoster.map((player) => (
                  <div key={player.jersey} className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">#{player.jersey} {player.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* Goals */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Goals</span>
                        <div className="flex items-center gap-1">
                          <button className="w-7 h-7 rounded bg-muted text-foreground text-sm hover:bg-muted/70">-</button>
                          <span className="w-6 text-center font-semibold">{player.goals}</span>
                          <button className="w-7 h-7 rounded bg-success text-white text-sm hover:bg-success/90">+</button>
                        </div>
                      </div>
                      {/* Yellow Card */}
                      <button className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        player.yellow > 0 ? "bg-warning text-white" : "bg-muted text-muted-foreground hover:bg-warning/20"
                      }`}>
                        Yellow {player.yellow > 0 && `(${player.yellow})`}
                      </button>
                      {/* Red Card */}
                      <button className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        player.red ? "bg-error text-white" : "bg-muted text-muted-foreground hover:bg-error/20"
                      }`}>
                        Red
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
