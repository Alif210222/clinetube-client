// ===============================================
// src/components/dashboard/movie-form-modal.tsx
// ===============================================

"use client";

import {
  useState,
} from "react";

import {
  useForm,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import * as z from "zod";

import { toast } from "sonner";

import {
  createMovie,
} from "@/src/services/movie/adminMovie";

import {
  uploadImageToCloudinary,
} from "@/src/services/cloudinary/uploadImage";

const schema = z.object({
  title: z.string().min(1),
  description:
    z.string().min(5),
  genres: z.string().min(1),
  releaseYear:
    z.string().min(4),
  director:
    z.string().min(1),
  cast: z.string().min(1),
  platform:
    z.string().min(1),
  priceType:
    z.enum([
      "FREE",
      "PREMIUM",
    ]),
  price:
    z.string().min(1),
});

export default function MovieFormModal({
  reload,
}: {
  reload: () => void;
}) {
  const [open, setOpen] =
    useState(false);

  const [file, setFile] =
    useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver:
      zodResolver(schema),
  });

  const onSubmit =
    async (data: any) => {
      if (!file)
        return toast.error(
          "Select poster image"
        );

      setLoading(true);

      const poster =
        await uploadImageToCloudinary(
          file
        );

      const payload = {
        ...data,
        poster,
        genres:
          data.genres.split(","),
        cast:
          data.cast.split(","),
        releaseYear: Number(
          data.releaseYear
        ),
        price: Number(
          data.price
        ),
      };

      const res =
        await createMovie(
          payload
        );

      setLoading(false);

      if (res.success) {
        toast.success(
          "Movie created"
        );
        reload();
        reset();
        setOpen(false);
      } else {
        toast.error(
          res.message
        );
      }
    };

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
        className="h-12 px-6 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white"
      >
        Add Movie
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center p-4">

          <div className="w-full max-w-2xl bg-white dark:bg-slate-950 rounded-3xl p-6 max-h-[90vh] overflow-y-auto">

            <h2 className="text-2xl font-bold mb-6">
              Add Movie
            </h2>

            <form
              onSubmit={handleSubmit(
                onSubmit
              )}
              className="grid md:grid-cols-2 gap-4"
            >
              <input {...register("title")} placeholder="Title" className="input" />
              <input {...register("platform")} placeholder="Platform" className="input" />
              <input {...register("genres")} placeholder="Genres comma separated" className="input" />
              <input {...register("cast")} placeholder="Cast comma separated" className="input" />
              <input {...register("director")} placeholder="Director" className="input" />
              <input {...register("releaseYear")} placeholder="Release Year" className="input" />
              <input {...register("price")} placeholder="Price" className="input" />

              <select {...register("priceType")} className="input">
                <option value="FREE">FREE</option>
                <option value="PREMIUM">PREMIUM</option>
              </select>

              <input
               aria-label="Poster Image"
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

              <textarea
                {...register(
                  "description"
                )}
                placeholder="Description"
                className="input md:col-span-2 min-h-[120px]"
              />

              <div className="md:col-span-2 flex gap-3 mt-2">

                <button className="h-12 px-6 rounded-xl bg-pink-500 text-white">
                  {loading
                    ? "Uploading..."
                    : "Submit"}
                </button>

                <button
                  type="button"
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

            </form>

          </div>
        </div>
      )}
    </>
  );
}