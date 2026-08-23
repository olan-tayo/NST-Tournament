import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-muted">
      <main className="flex flex-1 w-full max-w-2xl flex-col items-center justify-center py-16 px-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-3">
          NST Tournament Portal
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md">
          Manage teams, track players, and coordinate matches all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/mockups"
            className="inline-flex items-center justify-center h-12 px-8 bg-accent text-accent-foreground font-medium rounded-xl hover:bg-accent/90 transition-colors"
          >
            View Design Mockups
          </Link>
          <Link
            href="/mockups/login"
            className="inline-flex items-center justify-center h-12 px-8 border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors"
          >
            Preview Login
          </Link>
        </div>
      </main>
    </div>
  );
}
