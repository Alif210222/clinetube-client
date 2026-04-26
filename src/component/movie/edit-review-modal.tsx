"use client";

import { useState } from "react";
import { toast } from "sonner";

import { updateReview } from "@/src/services/review/review";

export default function EditReviewModal({
  review,
  reload,
}: any) {
  const [open, setOpen] = useState(false);

  const [rating, setRating] = useState(review.rating);
  const [content, setContent] = useState(review.content);

  const handleSave = async () => {
    const res = await updateReview(review.id, {
      rating,
      content,
    });

    if (res.success) {
      toast.success("Updated");
      reload();
      setOpen(false);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 h-10 rounded-xl bg-cyan-500 text-white cursor-pointer"
      >
        Edit
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">

          <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 p-6">

            <h2 className="text-2xl font-bold mb-6">
              Update Review
            </h2>

            <input
             aria-label="Review rating"
              type="number"
              min={1}
              max={10}
              value={rating}
              onChange={(e) =>
                setRating(Number(e.target.value))
              }
              className="w-full h-12 rounded-xl border px-4 mb-4"
            />
            
            
            <textarea
            aria-label="Review content"
              rows={5}
              value={content}
              onChange={(e) =>
                setContent(e.target.value)
              }
              className="w-full rounded-xl border px-4 py-3"
            />

            <div className="flex gap-3 mt-6">

              <button
                onClick={handleSave}
                className="flex-1 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white"
              >
                Save
              </button>

              <button
                onClick={() => setOpen(false)}
                className="flex-1 h-12 rounded-xl border"
              >
                Cancel
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}