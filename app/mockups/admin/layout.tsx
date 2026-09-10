"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "./icons";
import { SidebarContext } from "./sidebar-context";

const sidebarItems = [
  { name: "Dashboard", icon: "grid", active: true },
  { name: "Teams", icon: "users", count: 8 },
  { name: "Coaches", icon: "user-check", count: 12 },
  { name: "Players", icon: "user", count: 96 },
  { name: "Matches", icon: "calendar", count: 24 },
  { name: "Users", icon: "shield" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <div className="dash-light min-h-screen flex bg-background">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? "w-64" : "w-20"} bg-[#0a1834] border-r border-white/10 text-white flex flex-col transition-all duration-200`}>
          {/* Logo */}
          <div className="h-16 flex items-center px-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-full bg-white ring-2 ring-accent/70 overflow-hidden flex items-center justify-center shrink-0">
              <Image src="/assets/logo.png" alt="NST-USA" width={40} height={40} className="object-cover scale-125" />
            </div>
            {sidebarOpen && <span className="ml-3 font-semibold text-lg text-white">NST Admin</span>}
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6 px-3 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.name}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  item.active
                    ? "bg-accent text-white"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon name={item.icon} />
                {sidebarOpen && (
                  <>
                    <span className="flex-1 text-left text-sm font-medium">{item.name}</span>
                    {item.count && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        item.active ? "bg-white/20 text-white" : "bg-white/10 text-white/70"
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </>
                )}
              </button>
            ))}
          </nav>

          {/* User */}
          <div className="p-3 border-t border-white/10">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-9 h-9 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-medium">
                AD
              </div>
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-white">Admin User</p>
                  <p className="text-xs text-white/50 truncate">admin@nst.com</p>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">{children}</div>
      </div>
    </SidebarContext.Provider>
  );
}
