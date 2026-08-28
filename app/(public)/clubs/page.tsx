"use client";

import { useState } from "react";
import Crest from "../_components/crest";
import { teams } from "../_lib/data";

export default function ClubsPage() {
  const [query, setQuery] = useState("");
  const filtered = teams.filter((t) =>
    t.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="border-b border-border bg-radial-glow">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-8">
          <h1 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-foreground mb-1">
            Clubs
          </h1>
          <p className="text-muted-foreground mb-6">
            Every club in the NST-USA family.
          </p>

          <div className="relative max-w-md">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search clubs..."
              className="w-full h-11 pl-10 pr-4 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-accent/50 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((team) => (
            <div
              key={team.code}
              className={`hover-lift shadow-card relative bg-card border rounded-xl p-6 flex flex-col items-center gap-3 ${
                team.defendingChampion ? "border-accent/40" : "border-border"
              }`}
            >
              {team.defendingChampion && (
                <span className="absolute top-3 right-3 text-accent" title="Defending Champions">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 14.27l-4.8 2.49.92-5.34-3.88-3.78 5.36-.78L12 2z" />
                  </svg>
                </span>
              )}
              <Crest team={team} size="lg" />
              <div className="text-center">
                <p className="font-display text-sm uppercase tracking-wide text-foreground">
                  {team.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {team.code}
                  {team.defendingChampion && (
                    <span className="text-accent"> &middot; Defending Champions</span>
                  )}
                </p>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-12">
              No clubs match &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
