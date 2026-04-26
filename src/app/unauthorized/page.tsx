"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import Link from "next/link";

export default function UnauthorizedPage() {
  useEffect(() => {
    toast.error(
      "Unauthorized Access"
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold text-red-500">
        Unauthorized
      </h1>

      <p>
        You do not have permission
        to access this page.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-black text-white"
      >
        Go Home
      </Link>
    </div>
  );
}