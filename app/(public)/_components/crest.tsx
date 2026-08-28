import Image from "next/image";
import type { Team } from "../_lib/data";

const sizes = {
  sm: "w-6 h-6 text-[10px]",
  md: "w-9 h-9 text-xs",
  lg: "w-16 h-16 text-lg",
};

const pixels = {
  sm: 24,
  md: 36,
  lg: 64,
};

export default function Crest({
  team,
  size = "md",
}: {
  team: Team;
  size?: keyof typeof sizes;
}) {
  const ringClass = team.defendingChampion ? "ring-accent shadow-glow-accent" : "ring-white/15";

  if (team.logo) {
    return (
      <div
        className={`${sizes[size]} shrink-0 rounded-full bg-white overflow-hidden ring-1 ${ringClass}`}
      >
        <Image
          src={team.logo}
          alt={team.name}
          width={pixels[size]}
          height={pixels[size]}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`${sizes[size]} shrink-0 rounded-full flex items-center justify-center font-display font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-2px_4px_rgba(0,0,0,0.35)] ring-1 ${ringClass}`}
      style={{
        backgroundImage: `linear-gradient(155deg, color-mix(in srgb, ${team.color} 85%, white) 0%, ${team.color} 45%, color-mix(in srgb, ${team.color} 80%, black) 100%)`,
      }}
    >
      {team.code.slice(0, 3)}
    </div>
  );
}
