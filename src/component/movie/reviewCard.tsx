"use client";

import CommentSection from "./comment-section";
import EditReviewModal from "./edit-review-modal";

export default function ReviewCard({
  item,
  user,
  loadReviews,
  handleDelete,
}: any) {
  return (
    <div className="rounded-3xl border p-6 bg-white/80 dark:bg-white/5">
      <div className="flex justify-between gap-5">
        <div className="flex-1">
          <h3 className="text-xl font-bold">
            {item.user?.name}
          </h3>

          <p className="text-yellow-500 mt-1">
            ⭐ {item.rating}/10
          </p>

          <p className="mt-4">
            {item.content}
          </p>

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
              onClick={() =>
                handleDelete(item.id)
              }
              className="px-4 h-10 rounded-xl bg-red-500 text-white cursor-pointer"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}