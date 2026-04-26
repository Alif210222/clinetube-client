"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  getMovieReviews,
  createReview,
  deleteReview,
} from "@/src/services/review/review";

import { getCurrentUser } from "@/src/services/auth/auth";

import ReviewCard from "./reviewCard";

export default function MovieReviewSection({
  movieId,
}: {
  movieId: string;
}) {
  const [reviews, setReviews] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  const [rating, setRating] = useState(10);
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);

  // load reviews
  const loadReviews = async () => {
    const res = await getMovieReviews(movieId);
    setReviews(res?.data || []);
  };

  // load once
  useEffect(() => {
    loadReviews();

    const loadUser = async () => {
      const me = await getCurrentUser();
      setUser(me);
    };

    loadUser();
  }, []);

  const alreadyReviewed = reviews.find(
    (item) => item.userId === user?.id
  );

  // create review
  const handleSubmit = async () => {
    if (!content) return toast.error("Write review");

    setLoading(true);

    const res = await createReview({
      movieId,
      rating,
      content,
      isSpoiler: false,
      tags: [],
    });

    setLoading(false);

    if (res.success) {
      toast.success("Review added successfully !");
      setContent("");
      loadReviews();
    } else {
      toast.error(res.message);
    }
  };

  // delete review
  const handleDelete = async (id: string) => {
    // const ok = confirm("Delete review?");
    // if (!ok) return;

    const res = await deleteReview(id);

    if (res.success) {
      toast.success("Deleted");
      loadReviews();
    }
  };

  return (
    <section className="container mx-auto px-4 mt-24">
      <h2 className="text-3xl font-bold mb-8">
        Reviews
      </h2>

      {/* Add Review */}
      {user?.role === "USER" && !alreadyReviewed && (
        <div className="rounded-3xl border p-6 mb-10 bg-white/80 dark:bg-white/5">
          <div className="grid md:grid-cols-4 gap-4">
            <input
             aria-label="Comment"
              type="number"
              min={1}
              max={10}
              value={rating}
              onChange={(e) =>
                setRating(Number(e.target.value))
              }
              className="h-12 rounded-xl px-4 border bg-transparent"
            />

            <input
              value={content}
              onChange={(e) =>
                setContent(e.target.value)
              }
              className="md:col-span-2 h-12 rounded-xl px-4 border bg-transparent"
              placeholder="Write review..."
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white cursor-pointer"
            >
              {loading ? "Posting..." : "Submit"}
            </button>
          </div>
        </div>
      )}

      {/* Review List */}
      <div className="space-y-6">
        {reviews.map((item) => (
          <ReviewCard
            key={item.id}
            item={item}
            user={user}
            loadReviews={loadReviews}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}