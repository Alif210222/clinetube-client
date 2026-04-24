"use client";

import { Menu, Bell, Search } from "lucide-react";

export default function DashboardNavbar({
  onMenu,
}: {
  onMenu: () => void;
}) {
  return (
    <header className="h-16 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl flex items-center justify-between px-4 md:px-6 sticky top-0 z-40">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenu}
          aria-label="Open menu"
          className="md:hidden text-white"
        >
          <Menu className="w-6 h-6" />
        </button>

        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 text-transparent bg-clip-text">
          Admin Dashboard
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <div className="hidden md:flex items-center gap-2 px-3 h-10 rounded-xl bg-white/5 border border-white/10">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-white"
          />
        </div>

        <button aria-label="Notifications" className="relative h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Bell className="w-5 h-5 text-white" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-pink-500" />
        </button>

        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center font-bold">
          A
        </div>

      </div>
    </header>
  );
}