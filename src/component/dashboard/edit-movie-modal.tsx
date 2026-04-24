// ===============================================
// src/components/dashboard/edit-movie-modal.tsx
// ===============================================

"use client";

import {
  useState,
} from "react";

import { toast } from "sonner";

import {
  updateMovie,
} from "@/src/services/movie/adminMovie";

import {
  uploadImageToCloudinary,
} from "@/src/services/cloudinary/uploadImage";

export default function EditMovieModal({
  movie,
  reload,
}: {
  movie: any;
  reload: () => void;
}) {
  const [open, setOpen] =
    useState(false);

  const [file, setFile] =
    useState<File | null>(null);

  const [form, setForm] =
    useState({
      title: movie.title,
      description:
        movie.description,
      director:
        movie.director,
      platform:
        movie.platform,
    });

  const handleUpdate =
    async () => {
      let poster =
        movie.poster;

      if (file) {
        poster =
          await uploadImageToCloudinary(
            file
          );
      }

      const payload = {
        ...form,
        poster,
      };

      const res =
        await updateMovie(
          movie.id,
          payload
        );

      if (res.success) {
        toast.success(
          "Updated"
        );
        reload();
        setOpen(false);
      }
    };

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
        className="h-11 px-4 rounded-xl bg-cyan-500 text-white"
      >
        Edit
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center p-4">

          <div className="w-full max-w-xl bg-white dark:bg-slate-950 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              Edit Movie
            </h2>

            <div className="space-y-4">

              <input
                aria-label="Movie Title"
                value={
                  form.title
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    title:
                      e.target
                        .value,
                  })
                }
                className="input"
              />

              <input
                aria-label="Director Name"
                value={
                  form.director
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    director:
                      e.target
                        .value,
                  })
                }
                className="input"
              />

              <input
                aria-label="Platform"
                value={
                  form.platform
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    platform:
                      e.target
                        .value,
                  })
                }
                className="input"
              />

              <textarea
                aria-label="Movie Description"
                value={
                  form.description
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    description:
                      e.target
                        .value,
                  })
                }
                className="input min-h-[120px]"
              />

              <input
                aria-label="Genres"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFile(
                    e.target
                      .files?.[0] ||
                      null
                  )
                }
                className="input"
              />

              <div className="flex gap-3">

                <button
                  onClick={
                    handleUpdate
                  }
                  className="h-12 px-6 rounded-xl bg-cyan-500 text-white"
                >
                  Update
                </button>

                <button
                  onClick={() =>
                    setOpen(
                      false
                    )
                  }
                  className="h-12 px-6 rounded-xl border"
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}