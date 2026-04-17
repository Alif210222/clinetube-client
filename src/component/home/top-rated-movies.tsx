import Image from "next/image";
import Link from "next/link";
import { Star, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllMovies } from "@/src/services/movie/movieSection";

export default async function TopRatedMovies() {
  const moviesData = await getAllMovies({
    sortBy: "rating",
    limit: 6,
  });

  console.log(moviesData);

  const movies = moviesData?.data.data || [];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-white/10 dark:bg-white/5 backdrop-blur-md mb-4">
              <Flame className="w-4 h-4 text-pink-500" />
              <span className="text-sm text-slate-700 dark:text-slate-200">
                Best Rated Collection
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Top Rated
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
                {" "}Movies
              </span>
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Explore the highest rated movies loved by users.
            </p>
          </div>

          <Link href="/movies" className="no-underline">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90">
              See More
            </Button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {movies.map((movie: any) => (
            <Link
              key={movie.id}
              href={`/movies/${movie.slug}`}
              className="group no-underline"
            >
              <div className="rounded-3xl overflow-hidden border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-xl hover:-translate-y-2 transition duration-300">

                {/* Poster */}
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={movie.poster}
                    alt={movie.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-black/70 text-white text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {movie.avgRating || "0"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-1">
                    {movie.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {movie.releaseYear} • {movie.platform}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {movie.genres?.slice(0, 2).map((genre: string) => (
                      <span
                        key={genre}
                        className="px-3 py-1 text-xs rounded-full bg-pink-500/10 text-pink-500"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}