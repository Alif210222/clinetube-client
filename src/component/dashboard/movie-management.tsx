// ===============================================
// src/components/dashboard/movie-management.tsx
// ===============================================

"use client";

import {
  useEffect,
  useState,
} from "react";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import {
  getAllMoviesAdmin,
  deleteMovie,
} from "@/src/services/movie/adminMovie";
import MovieFormModal from "./movie-form-modal";
import EditMovieModal from "./edit-movie-modal";
import PageLoader from "../shared/page-loader";



export default function MovieManagement() {
  const [movies, setMovies] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const loadMovies = async () => {
    const res =
      await getAllMoviesAdmin();

    setMovies(res?.data.data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const handleDelete =
    async (id: string) => {
      // const ok =
      //   confirm("Delete movie?");
      // if (!ok) return;

      const res =
        await deleteMovie(id);

      if (res.success) {
        toast.success(
          "Movie deleted"
        );
        loadMovies();
      }
    };

  if (loading)
    return (
      <div className="p-10">
        <PageLoader></PageLoader>
      </div>
    );

  return (
    <main className="p-6 md:p-10">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Movie Management
        </h1>

        <MovieFormModal
          reload={loadMovies}
        />

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {movies.map((movie) => (
          <div
            key={movie.id}
            className="rounded-3xl border p-5 bg-white dark:bg-slate-950"
          >
            <div className="relative h-72 rounded-2xl overflow-hidden">

              <Image
                src={movie.poster}
                alt={movie.title}
                fill
                className="object-cover"
              />

            </div>

            <h2 className="text-xl font-bold mt-4">
              {movie.title}
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              {movie.platform}
            </p>

            <div className="flex gap-2 mt-5">

              <EditMovieModal
                movie={movie}
                reload={loadMovies}
              />

              <button
                onClick={() =>
                  handleDelete(
                    movie.id
                  )
                }
                className="h-11 px-4 rounded-xl bg-red-500 text-white flex items-center gap-2 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>
    </main>
  );
}