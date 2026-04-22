"use client";

import {
    useCallback,
  useEffect,
  useState,
} from "react";

import { toast } from "sonner";

import {
  createComment,
  deleteComment,
  getComments,
} from "@/src/services/comment/comment";
import { getCurrentUser } from "@/src/services/auth/auth";



export default function CommentSection({
  reviewId,
}: {
  reviewId: string;
}) {
  const [comments, setComments] =
    useState<any[]>([]);

  const [text, setText] =
    useState("");

  const [user, setUser] =
    useState<any>(null);

//   const loadComments = async () => {
//     const res =
//       await getComments(reviewId);

//     setComments(res?.data || []);
//   };

const loadComments = useCallback(async () => {
   const res = await getComments(reviewId);
   setComments(res.data || []);
}, [reviewId]);

useEffect(() => {
 loadComments();
}, []);

useEffect(() => {
 const loadUser = async () => {
   const me = await getCurrentUser();
   setUser(me);
 };
 loadUser();
}, []);



  const handleAdd =
    async () => {
      if (!text)
        return toast.error(
          "Write comment"
        );

      const res =
        await createComment({
          reviewId,
          content: text,
        });

      if (res.success) {
        toast.success(
          "Comment added"
        );

        setText("");
        loadComments();
      }
    };

  const handleDelete =
    async (id: string) => {
      const res =
        await deleteComment(id);

      if (res.success) {
        toast.success(
          "Deleted"
        );

        loadComments();
      }
    };

  return (
    <div className="mt-5 border-t border-white/10 pt-5">

      <div className="flex gap-3">

        <input
          value={text}
          onChange={(e) =>
            setText(
              e.target.value
            )
          }
          placeholder="Write comment..."
          className="flex-1 h-11 rounded-xl px-4 border bg-transparent"
        />

        <button
          onClick={handleAdd}
          className="px-5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white"
        >
          Post
        </button>

      </div>

      <div className="space-y-3 mt-5">

        {comments.map(
          (item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-black/5 dark:bg-white/5 p-4"
            >
              <div className="flex justify-between gap-4">

                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {
                      item.user
                        ?.name
                    }
                  </p>

                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    {
                      item.content
                    }
                  </p>
                </div>

                {(user?.id ===
                  item.userId ||
                  user?.role ===
                    "ADMIN") && (
                  <button
                    onClick={() =>
                      handleDelete(
                        item.id
                      )
                    }
                    className="text-red-500 text-sm"
                  >
                    Delete
                  </button>
                )}

              </div>
            </div>
          )
        )}

      </div>
    </div>
  );
}
