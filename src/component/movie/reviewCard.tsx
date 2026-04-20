"use client";

import { useEffect, useState } from "react";
import {
  toggleLike,
  getLikeCount,
} from "@/src/services/like/like";

import CommentSection from "./comment-section";
import EditReviewModal from "./edit-review-modal";

export default function ReviewCard({
  item,
  user,
  loadReviews,
  handleDelete,
}: any) {
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadLikes = async () => {
    const res = await getLikeCount(item.id);

    setLikes(res?.data || 0);
  };

  useEffect(() => {
    loadLikes();
  }, []);

  const handleLike = async () => {
    setLoading(true);

    const res = await toggleLike(item.id);

    if (res.success) {
      await loadLikes();
    }

    setLoading(false);
  };

  return (
    <div className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6">
      <div className="flex justify-between gap-5">

        <div className="flex-1">

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {item.user?.name}
          </h3>

          <p className="text-yellow-500 mt-1">
            ⭐ {item.rating}/10
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {item.content}
          </p>

          {/* Like */}
          <div className="mt-4 flex items-center gap-4">

            <button
              onClick={handleLike}
              disabled={loading}
              className="px-4 h-10 rounded-xl bg-cyan-500 text-white"
            >
              {loading ? "..." : "Like"}
            </button>

            <span className="text-sm text-slate-500">
              {likes} Likes
            </span>

          </div>

          {/* Comment */}
          <CommentSection reviewId={item.id} />

        </div>

        {(user?.id === item.userId ||
          user?.role === "ADMIN") && (
          <div className="flex gap-2">

            <EditReviewModal
              review={item}
              reload={loadReviews}
            />

            <button
              onClick={() => handleDelete(item.id)}
              className="px-4 h-10 rounded-xl bg-red-500 text-white"
            >
              Delete
            </button>

          </div>
        )}
      </div>
    </div>
  );
}