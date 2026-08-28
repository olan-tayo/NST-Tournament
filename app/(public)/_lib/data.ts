export type Team = {
  code: string;
  name: string;
  color: string;
  logo?: string;
  defendingChampion?: boolean;
};

// Clubs and crests as listed on nationalsoccertournament.org/teams.
export const teams: Team[] = [
  { code: "HSC", name: "Houston Sports Club", color: "#f5b942", logo: "/assets/teams/hsc.jpg", defendingChampion: true },
  { code: "HEN", name: "Hennessy FC", color: "#2ba9e0", logo: "/assets/teams/hen.png" },
  { code: "GBT", name: "Greenbelt FC", color: "#3b6fd6", logo: "/assets/teams/gbt.jpeg" },
  { code: "LIO", name: "Lions Indomptables", color: "#10254d", logo: "/assets/teams/lio.jpeg" },
  { code: "FOC", name: "Faces of Champions", color: "#5b8def", logo: "/assets/teams/foc.jpeg" },
  { code: "NSB", name: "Northside Boys", color: "#7aa9e8", logo: "/assets/teams/nsb.jpeg" },
  { code: "ATL", name: "Atlanta Lions FC", color: "#22447a", logo: "/assets/teams/atl.jpeg" },
  { code: "HU2", name: "Houston United FC", color: "#1d3a68", logo: "/assets/teams/hu2.png" },
  { code: "SPT", name: "FC Spartan", color: "#2f5a9e", logo: "/assets/teams/spt.png" },
  { code: "OPO", name: "Team Opopo", color: "#4477b8", logo: "/assets/teams/opo.jpeg" },
  { code: "CIN", name: "Cincy FC", color: "#345f8c", logo: "/assets/teams/cin.jpeg" },
  { code: "BFC", name: "Baltimore Veteran FC", color: "#274b7d", logo: "/assets/teams/bfc.jpeg" },
];

export function teamByCode(code: string): Team {
  const team = teams.find((t) => t.code === code);
  if (!team) throw new Error(`Unknown team code: ${code}`);
  return team;
}

export type StandingRow = {
  team: string;
  mp: number;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  pts: number;
};

// Group draw and results are announced on-site closer to the tournament date,
// so every club starts level until fixtures are published.
export const standings: StandingRow[] = teams.map((t) => ({
  team: t.code,
  mp: 0,
  w: 0,
  d: 0,
  l: 0,
  gf: 0,
  ga: 0,
  pts: 0,
}));

export type ScheduleEvent = {
  id: string;
  day: string;
  date: string;
  time?: string;
  title: string;
  description: string;
};

// NST-USA runs as a single long weekend, not a multi-week season — this
// mirrors the itinerary published on nationalsoccertournament.org.
export const scheduleEvents: ScheduleEvent[] = [
  {
    id: "arrival",
    day: "Friday",
    date: "July 2, 2027",
    title: "Arrival",
    description: "Teams and supporters arrive in Columbus, Ohio. Player check-in with valid ID begins Thursday evening or before 9:00 AM Friday.",
  },
  {
    id: "group-stage",
    day: "Saturday",
    date: "July 3, 2027",
    title: "Group Stage",
    description: "All-day group stage matches across all clubs. Kickoff times and pitch assignments are posted on-site.",
  },
  {
    id: "knockouts",
    day: "Sunday",
    date: "July 4, 2027",
    title: "Semi-Finals & Final",
    description: "Top clubs from the group stage advance to the semi-finals, followed by the championship final and trophy presentation.",
  },
  {
    id: "departure",
    day: "Monday",
    date: "July 5, 2027",
    title: "Departure",
    description: "Teams and supporters depart Columbus.",
  },
];

export type NewsArticle = {
  slug: string;
  tag: "News" | "Announcement";
  title: string;
  excerpt: string;
  date: string;
  color: string;
};

export const news: NewsArticle[] = [
  {
    slug: "2027-columbus-edition-announced",
    tag: "Announcement",
    title: "NST-USA Heads to Columbus, Ohio for 2027",
    excerpt: "16 teams, one goal. The next edition runs July 2–5, 2027, with arrival Friday and the final on Sunday.",
    date: "2027 Edition",
    color: "#f5b942",
  },
  {
    slug: "hsc-3rd-edition-champions",
    tag: "News",
    title: "Houston Sports Club Crowned Champions",
    excerpt: "Houston Sports Club (HSC) took home the trophy at the 3rd edition of the National Soccer Tournament.",
    date: "3rd Edition",
    color: "#2ba9e0",
  },
  {
    slug: "open-age-format",
    tag: "News",
    title: "One Tournament, Every Generation",
    excerpt: "NST-USA is a Cameroonian tournament that combines both veteran and junior teams in an open-age competition format — a rare setup among community soccer tournaments.",
    date: "About NST-USA",
    color: "#3b6fd6",
  },
];
