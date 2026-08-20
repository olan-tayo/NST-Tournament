import Link from "next/link";

const mockups = [
  {
    title: "Login Page",
    description: "Phone + password authentication with OTP verification",
    href: "/mockups/login",
    color: "bg-primary",
  },
  {
    title: "Admin Dashboard",
    description: "Full control panel for managing teams, coaches, players, and matches",
    href: "/mockups/admin",
    color: "bg-accent",
  },
  {
    title: "Coach Dashboard",
    description: "Team roster management and player invitations",
    href: "/mockups/coach",
    color: "bg-success",
  },
  {
    title: "Player Dashboard",
    description: "Profile view and upcoming match schedule",
    href: "/mockups/player",
    color: "bg-warning",
  },
  {
    title: "Match Delegate",
    description: "Live scoring, roster check-in, and card tracking",
    href: "/mockups/delegate",
    color: "bg-error",
  },
  {
    title: "Player Registration",
    description: "Full registration form with position selection",
    href: "/mockups/register",
    color: "bg-primary",
  },
];

export default function MockupsIndex() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-3">
          NST Tournament Portal
        </h1>
        <p className="text-muted-foreground text-lg">
          Design mockups for all user interfaces
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockups.map((mockup) => (
          <Link
            key={mockup.href}
            href={mockup.href}
            className="group block bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
          >
            <div className={`h-32 ${mockup.color}`} />
            <div className="p-5">
              <h2 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                {mockup.title}
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                {mockup.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
