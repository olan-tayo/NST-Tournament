"use client";

import { createContext, useContext } from "react";

type SidebarContextValue = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within the admin layout");
  return ctx;
}
