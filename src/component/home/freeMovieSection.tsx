"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Gift,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { getFreeMovies } from "@/src/services/movie/movieSection";

export default function FreeMovieSection() {
  const [movies, setMovies] = useState<any[]>([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const res = await getFreeMovies();
      const data = res?.data?.data || [];
      setMovies(data);
    };

    loadData();
  }, []);

 

  const visibleMovies = movies.slice(start, start + 3);

  const nextSlide = () => {
    if (start + 3 < movies.length) {
      setStart(start + 1);
    }
  };

  const prevSlide = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };
 console.log(movies);


  return (
    <section className="py-24 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute left-0 top-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute right-0 bottom-10 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-white/10 dark:bg-white/5 backdrop-blur-md mb-4">
              <Gift className="w-4 h-4 text-cyan-500" />
              <span className="text-sm text-slate-700 dark:text-slate-200">
                Enjoy Without Paying
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Free
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
                {" "}Movies
              </span>
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Watch premium free movies instantly.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-3">

            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={start === 0}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={start + 3 >= movies.length}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 transition-all duration-500">

          {visibleMovies.map((movie) => (
            <div
              key={movie.id}
              className="rounded-3xl overflow-hidden border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-xl hover:-translate-y-2 transition duration-300"
            >

              {/* Poster */}
              <div className="relative h-[360px] overflow-hidden">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />

                <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-black/70 text-white text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {movie.avgRating || "0"}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {movie.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {movie.platform}
                </p>

                <div className="mt-4">
                  <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium">
                    Free Access
                  </span>
                </div>

                <Link href={`/movies/${movie.slug}`}>
                  <Button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90">
                    Watch Now
                  </Button>
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}