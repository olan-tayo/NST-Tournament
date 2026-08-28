"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mockupPages = [
  { name: "Login", href: "/mockups/login" },
  { name: "Sign Up", href: "/mockups/signup" },
  { name: "Admin Dashboard", href: "/mockups/admin" },
  { name: "Coach Dashboard", href: "/mockups/coach" },
  { name: "Player Dashboard", href: "/mockups/player" },
  { name: "Match Delegate", href: "/mockups/delegate" },
  { name: "Player Registration", href: "/mockups/register" },
];

export default function MockupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-muted">
      {/* Top Navigation */}
      <nav className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/mockups" className="flex items-center gap-2 font-semibold text-lg shrink-0">
              <span className="w-8 h-8 rounded-full bg-white ring-2 ring-accent/70 overflow-hidden flex items-center justify-center">
                <Image src="/assets/logo.png" alt="NST-USA" width={32} height={32} className="object-cover scale-125" />
              </span>
              NST Mockups
            </Link>
            <div className="flex items-center gap-1">
              {mockupPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                    pathname === page.href
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      {children}
    </div>
  );
}
