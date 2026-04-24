"use client";

import { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    // refetch user profile here
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-bold text-green-600">
          Payment Successful 🎉
        </h1>

        <p className="mt-4">
          Your premium membership is active.
        </p>

        <a
          href="/dashboard"
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-xl"
        >
          Go Dashboard
        </a>
      </div>
    </div>
  );
}