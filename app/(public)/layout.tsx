"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Clubs", href: "/clubs" },
  { name: "News", href: "/news" },
  { name: "Standings", href: "/standings" },
  { name: "Schedule", href: "/schedule" },
  { name: "Rules", href: "/rules" },
  { name: "About", href: "/about" },
];

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <nav className="bg-primary/85 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-[0_1px_0_0_color-mix(in_srgb,var(--accent)_25%,transparent)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <span className="w-9 h-9 rounded-full bg-white ring-2 ring-accent/70 shadow-glow-accent overflow-hidden flex items-center justify-center">
                <Image src="/assets/logo.png" alt="NST-USA" width={36} height={36} className="object-cover scale-125" priority />
              </span>
              <span className="font-display text-lg tracking-wide text-primary-foreground">
                NST-USA
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wide transition-colors ${
                    pathname === item.href
                      ? "text-primary-foreground bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute left-3 right-3 -bottom-[1px] h-0.5 rounded-full bg-accent" />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/mockups/login"
                className="hidden sm:inline-flex items-center h-9 px-4 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide rounded-md hover:brightness-110 shadow-glow-accent transition-all"
              >
                Sign In
              </Link>
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  {menuOpen ? (
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  ) : (
                    <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-primary/95 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wide transition-colors ${
                    pathname === item.href
                      ? "text-primary-foreground bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/mockups/login"
                className="mt-2 inline-flex items-center justify-center h-10 px-4 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide rounded-md hover:brightness-110 transition-all sm:hidden"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="flex-1">{children}</div>

      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-full bg-white ring-2 ring-accent/70 overflow-hidden flex items-center justify-center">
                <Image src="/assets/logo.png" alt="NST-USA" width={32} height={32} className="object-cover scale-125" />
              </span>
              <span className="font-display text-base tracking-wide text-foreground">
                NST-USA
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A Cameroonian tournament bringing veteran and junior clubs together for one
              open-age competition every year.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-accent mb-3">
              Explore
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-accent mb-3">
              Portal
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/mockups/login" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Sign In
              </Link>
              <Link href="/mockups" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Portal mockups
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground">
              &copy; 2026 NST-USA. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              2027 Columbus, Ohio Edition &middot; July 2&ndash;5
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
