"use client";

import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Shield,
  Crown,
  Calendar,
  BadgeCheck,
} from "lucide-react";

import { getCurrentUser } from "@/src/services/auth/auth";
import PageLoader from "@/src/component/shared/page-loader";

export default function ProfileSection() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const res = await getCurrentUser();
      setUser(res);
      setLoading(false);
    };

    loadUser();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl animate-pulse">
          <PageLoader></PageLoader>
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-500">
          Please login first.
        </p>
      </main>
    );
  }

  const roleColor =
    user.role === "ADMIN"
      ? "from-red-500 to-pink-500"
      : "from-cyan-500 to-blue-500";

  return (
    <main className="relative overflow-hidden min-h-screen py-16 px-4">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <section className="container mx-auto relative z-10 max-w-5xl">

        {/* Header Card */}
        <div className="rounded-3xl overflow-hidden border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-2xl">

          {/* Top Banner */}
          <div className={`h-40 bg-gradient-to-r ${roleColor}`} />

          {/* Avatar + Info */}
          <div className="px-8 pb-8 -mt-16">

            <div className="w-32 h-32 rounded-full bg-white dark:bg-slate-950 border-4 border-white shadow-xl flex items-center justify-center text-5xl font-bold text-pink-500">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <div className="mt-6">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
                {user.name}
              </h1>

              <p className="mt-2 text-slate-500">
                Welcome back to CineVerse
              </p>
            </div>

          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* Email */}
          <div className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 shadow-xl">
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-cyan-500" />

              <div>
                <p className="text-sm text-slate-500">
                  Email Address
                </p>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {user.email}
                </h3>
              </div>
            </div>
          </div>

          {/* Role */}
          <div className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 shadow-xl">
            <div className="flex items-center gap-4">
              <Shield className="w-8 h-8 text-pink-500" />

              <div>
                <p className="text-sm text-slate-500">
                  Account Role
                </p>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {user.role}
                </h3>
              </div>
            </div>
          </div>

          {/* Membership */}
          <div className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 shadow-xl">
            <div className="flex items-center gap-4">
              <Crown className="w-8 h-8 text-yellow-500" />

              <div>
                <p className="text-sm text-slate-500">
                  Membership
                </p>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {user.membershipStatus || "FREE"}
                </h3>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 shadow-xl">
            <div className="flex items-center gap-4">
              <BadgeCheck className="w-8 h-8 text-green-500" />

              <div>
                <p className="text-sm text-slate-500">
                  Account Status
                </p>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Active
                </h3>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Card */}
        <div className="mt-10 rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            CineVerse Account Summary
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-8">
            This is your personal CineVerse profile dashboard.
            Here you can view your account role, membership,
            email, and activity status. Future updates can include
            purchase history, watch progress, saved favorites,
            billing details, and more.
          </p>
        </div>

      </section>
    </main>
  );
}