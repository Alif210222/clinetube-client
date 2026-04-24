"use client";

import { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* Sidebar */}
      <DashboardSidebar
        open={open}
        onClose={() => setOpen(false)}
      />

      {/* Content */}
      <div className="flex-1 flex flex-col">

        <DashboardNavbar
          onMenu={() => setOpen(true)}
        />

        <main className="p-4 md:p-6">
          {children}
        </main>

      </div>
    </div>
  );
}