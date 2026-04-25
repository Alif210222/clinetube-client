"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Film,
  Users,
  Tag,
  Star,
  Settings,
  X,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Movies",
    href: "/admin/dashboard/movies",
    icon: Film,
  },
{
    title: "Movie Management",
    href: "/admin/dashboard/moviesManagement",
    icon: Settings,
  },
  {
    title: "Users Management",
    href: "/admin/dashboard/userManagement",
    icon: Users,
  },
 
  {
    title: "Purchase History",
    href: "/admin/dashboard/purchase-history",
    icon: Star,
  }
  
];

export default function DashboardSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 z-50 h-screen w-72 bg-slate-950 border-r border-white/10 transform transition-transform duration-300
        ${
          open
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/10">
          <h2 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 text-transparent bg-clip-text">
            <Link href="/">
                CineVerse
            </Link>
           
          </h2>

          <button
            aria-label="Close menu"
            onClick={onClose}
            className="md:hidden text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menus */}
        <div className="p-4 space-y-2">
          {menus.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 px-4 h-12 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition"
              >
                <Icon className="w-5 h-5" />
                {item.title}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}