"use client";

import { useEffect, useState } from "react";
import { Bookmark, Check } from "lucide-react";
import { toast } from "sonner";

import {
  addToWatchlist,
  getMyWatchlist,
} from "@/src/services/watchlist/watchlist";

export default function WatchlistButton({
  movieId,
}: {
  movieId: string;
}) {
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  // ✅ Check when page loads if this movie already saved
  useEffect(() => {
    const checkSavedMovie = async () => {
      try {
        const res = await getMyWatchlist();

        const watchlist = res?.data || [];

        const exists = watchlist.find(
          (item: any) =>
            item.movieId === movieId ||
            item.movie?.id === movieId
        );

        if (exists) {
          setSaved(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setChecking(false);
      }
    };

    checkSavedMovie();
  }, [movieId]);

  // ✅ Save movie
  const handleSave = async () => {
    if (saved || loading) return;

    setLoading(true);

    const res = await addToWatchlist(movieId);

    if (res.success) {
      setSaved(true);
      toast.success("Saved to Watchlist");
    } else {
      toast.error(res.message || "Failed to save");
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleSave}
      disabled={loading || checking}
      className={`h-14 px-8 rounded-xl font-semibold flex items-center gap-2 cursor-pointer transition-all duration-300 border
      ${
        saved
          ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white border-transparent"
          : "border-slate-300 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-white/20"
      }`}
    >
      {saved ? (
        <Check className="w-5 h-5" />
      ) : (
        <Bookmark className="w-5 h-5" />
      )}

      {checking
        ? "Checking..."
        : loading
        ? "Saving..."
        : saved
        ? "Saved"
        : "Save Watchlist"}
    </button>
  );
}