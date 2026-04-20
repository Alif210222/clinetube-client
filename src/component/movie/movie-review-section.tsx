"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  getMovieReviews,
  createReview,
  deleteReview,
} from "@/src/services/review/review";


import { getCurrentUser } from "@/src/services/auth/auth";

// like and comment 
import {
  toggleLike,
  getLikeCount,
} from "@/src/services/like/like";

import CommentSection from "./comment-section";
import EditReviewModal from "./edit-review-modal";
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

  const loadReviews = async () => {
    const res = await getMovieReviews(movieId);
    setReviews(res?.data || []);
  };

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
      toast.success("Submitted for approval");
      setContent("");
      loadReviews();
    } else {
      toast.error(res.message);
    }
  };

  const handleDelete = async (id: string) => {
    const ok = confirm("Delete review?");
    if (!ok) return;

    const res = await deleteReview(id);

    if (res.success) {
      toast.success("Deleted");
      loadReviews();
    }
  };

  return (
    <section className="container mx-auto px-4 mt-24">

      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
        Reviews
      </h2>

      {/* Add Review */}
      {user?.role === "USER" && !alreadyReviewed && (
        <div className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 mb-10">

          <div className="grid md:grid-cols-4 gap-4">

            <input
              type="number"
              min={1}
              max={10}
              value={rating}
              onChange={(e) =>
                setRating(Number(e.target.value))
              }
              className="h-12 rounded-xl px-4 bg-transparent border"
              placeholder="Rating"
            />

            <input
              value={content}
              onChange={(e) =>
                setContent(e.target.value)
              }
              className="md:col-span-2 h-12 rounded-xl px-4 bg-transparent border"
              placeholder="Write review..."
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white"
            >
              {loading ? "Posting..." : "Submit"}
            </button>

          </div>
        </div>
      )}

      {/* Review & comment list  List */}

       <div className="space-y-6">

{reviews.map((item) => {
  const ReviewCard =
    function () {
      const [likes,
        setLikes] =
        useState(0);

      const loadLikes =
        async () => {
          const res =
            await getLikeCount(
              item.id
            );

          setLikes(
            res?.data || 0
          );
        };

      useEffect(() => {
        loadLikes();
      }, []);

      const handleLike =
        async () => {
          const res =
            await toggleLike(
              item.id
            );

          if (
            res.success
          ) {
            loadLikes();
          }
        };

      return (
        <div
          key={item.id}
          className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6"
        >
          <div className="flex justify-between gap-5">

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {
                  item.user
                    ?.name
                }
              </h3>

              <p className="text-yellow-500 mt-1">
                ⭐ {
                  item.rating
                }
                /10
              </p>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                {
                  item.content
                }
              </p>

              {/* Like */}
              {/* <div className="mt-4 flex items-center gap-4">

                <button
                  onClick={
                    handleLike
                  }
                  className="px-4 h-10 rounded-xl bg-cyan-500 text-white"
                >
                  Like
                </button>

                <span className="text-sm text-slate-500">
                  {likes} Likes
                </span>

              </div> */}

              {/* Comments */}
              <CommentSection
                reviewId={
                  item.id
                }
              />
            </div>

            {(user?.id ===
              item.userId ||
              user?.role ===
                "ADMIN") && (
              <div className="flex gap-2">

                <EditReviewModal
                  review={
                    item
                  }
                  reload={
                    loadReviews
                  }
                />

                <button
                  onClick={() =>
                    handleDelete(
                      item.id
                    )
                  }
                  className="px-4 h-10 rounded-xl bg-red-500 text-white"
                >
                  Delete
                </button>

              </div>
            )}

          </div>
        </div>
      );
    };

  return (
    <ReviewCard
      key={item.id}
    />
  );
})
}




      </div> 






      {/* <div className="space-y-6">
  {reviews.map((item) => (
    <ReviewCard
      key={item.id}
      item={item}
      user={user}
      loadReviews={loadReviews}
      handleDelete={handleDelete}
    />
  ))}
</div> */}
      


    </section>
  );
}