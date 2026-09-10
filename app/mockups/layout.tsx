"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const mockupPages = [
  { name: "Login", href: "/mockups/login" },
  { name: "Sign Up", href: "/mockups/signup" },
  { name: "Admin Dashboard", href: "/mockups/admin" },
  { name: "Coach Dashboard", href: "/mockups/coach" },
  { name: "Player Dashboard", href: "/mockups/player" },
  { name: "Match Delegate", href: "/mockups/delegate" },
  { name: "Player Registration", href: "/mockups/register" },
];

// These mockups render their own sidebar layout, so the top mockups nav is skipped for them.
const sidebarPages = ["/mockups/admin", "/mockups/coach"];

export default function MockupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (sidebarPages.includes(pathname)) {
    return <div className="bg-background">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Top Navigation */}
      <nav className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/mockups" className="flex items-center gap-2 font-semibold text-background text-lg shrink-0">
              <span className="w-8 h-8 rounded-full bg-background ring-2 ring-accent/70 overflow-hidden flex items-center justify-center">
                <Image src="/assets/logo.png" alt="NST-USA" width={32} height={32} className="object-cover scale-125" />
              </span>
              NST Mockups
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {mockupPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors whitespace-nowrap ${pathname === page.href
                    ? "bg-background text-white"
                    : "text-background hover:bg-white/10"
                    }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md text-background hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile nav */}
          {open && (
            <div className="lg:hidden flex flex-col gap-1 pb-3">
              {mockupPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${pathname === page.href
                    ? "bg-background text-white"
                    : "text-background hover:bg-white/10"
                    }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Content */}
      <div className="bg-background">
        {children}
      </div>
    </div>
  );
}
