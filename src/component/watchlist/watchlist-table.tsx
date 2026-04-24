"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import {
  getMyWatchlist,
  removeFromWatchlist,
} from "@/src/services/watchlist/watchlist";

import { getCurrentUser } from "@/src/services/auth/auth";
import PageLoader from "../shared/page-loader";

export default function WatchlistTable() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  // ✅ Load user + only own watchlist
  const loadData = async () => {
    try {
      setLoading(true);

      const currentUser = await getCurrentUser();
      setUser(currentUser);

      if (!currentUser?.id) {
        setMovies([]);
        return;
      }

      const res = await getMyWatchlist();

      const allWatchlist = res?.data || [];

      // ✅ Extra frontend filter
      const myMovies = allWatchlist.filter(
        (item: any) => item.userId === currentUser.id
      );

      setMovies(myMovies);
    } catch (error) {
      console.log(error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (movieId: string) => {
    const res = await removeFromWatchlist(movieId);

    if (res.success) {
      toast.success("Removed");
      loadData();
    } else {
      toast.error("Failed to remove");
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-xl">
        <PageLoader></PageLoader>
      </div>
    );
  }

  if (!user) {
    return (
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">
          My Watchlist
        </h1>

        <p className="text-slate-500">
          Please login to see your watchlist.
        </p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10 text-slate-900 dark:text-white">
        My Watchlist
      </h1>

      {movies.length === 0 && (
        <p className="text-slate-500">
          No movie saved yet.
        </p>
      )}

      <div className="space-y-6">
        {movies.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 p-5 flex flex-col md:flex-row gap-5"
          >
            {/* Poster */}
            <div className="relative w-full md:w-44 h-60 rounded-2xl overflow-hidden">
              <Image
                src={item.movie.poster}
                alt={item.movie.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <Link
                href={`/movies/${item.movie.slug}`}
                className="text-2xl font-bold text-slate-900 dark:text-white hover:text-pink-500"
              >
                {item.movie.title}
              </Link>

              <p className="mt-3 text-slate-600 dark:text-slate-300 line-clamp-2">
                {item.movie.description}
              </p>

              <div className="mt-4 flex gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-500 text-sm">
                  {item.movie.platform}
                </span>

                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-sm">
                  {item.movie.priceType}
                </span>
              </div>
            </div>

            {/* Delete */}
            <button
              onClick={() =>
                handleDelete(item.movie.id)
              }
              className="h-12 px-5 rounded-xl bg-red-500 text-white flex items-center gap-2 cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              Remove
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}