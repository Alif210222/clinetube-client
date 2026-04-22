import Image from "next/image";
import Link from "next/link";
import {
  Star,
  PlayCircle,
  Bookmark,
  ShoppingBag,
  User,
  Clapperboard,
} from "lucide-react";
import { getSingleMovie } from "@/src/services/movie/movieSection";
import MovieReviewSection from "./movie-review-section";
import WatchlistButton from "../watchlist/watchlist-button";



export default async function MovieDetailsPage({
  slug,
}: {
  slug: string;
}) {
  const data = await getSingleMovie(slug);
  const movie = data?.data;


 // console.log("from movie details:", movie);

//   const relatedData = await getRelatedMovies(
//     movie?.genres?.[0] || ""
//   );

//   const relatedMovies = relatedData?.data?.data || [];

  return (
    <main className="relative overflow-hidden pb-24">

      {/* Glow */}
      <div className="absolute left-0 top-20 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />
      <div className="absolute right-0 top-40 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 relative z-10">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Poster */}
          <div className="relative h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">

            <Image
              src={movie.poster}
              alt={movie.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* Content */}
          <div>

            <div className="inline-flex px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium">
              {movie.platform}
            </div>

            <h1 className="mt-5 text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              {movie.title}
            </h1>

            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-8 text-lg">
              {movie.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-6">

              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />

              <span className="text-xl font-bold text-slate-900 dark:text-white">
                {movie.avgRating || 0}/10
              </span>

              <span className="text-slate-500">
                ({movie.totalReviews} reviews)
              </span>
            </div>

            {/* Meta */}
            <div className="mt-8 space-y-4">

              <div className="flex gap-3 items-start">
                <Clapperboard className="w-5 h-5 mt-1 text-pink-500" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-semibold">Director:</span>{" "}
                  {movie.director}
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <User className="w-5 h-5 mt-1 text-cyan-500" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-semibold">Cast:</span>{" "}
                  {movie.cast?.join(", ")}
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <Bookmark className="w-5 h-5 mt-1 text-purple-500" />
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-semibold">Genres:</span>{" "}
                  {movie.genres?.join(", ")}
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              {movie.priceType === "FREE" ? (
                <button className="h-14 px-8 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transition">
                  <PlayCircle className="w-5 h-5" />
                  Watch Now
                </button>
              ) : (
                <button className="h-14 px-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transition">
                  <ShoppingBag className="w-5 h-5" />
                  Buy Now ${movie.price}
                </button>
              )}

              {/* <button className="h-14 px-8 rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-900 dark:text-white font-semibold flex items-center gap-2 hover:bg-white/20 transition">
                <Bookmark className="w-5 h-5" />
                Save Watchlist
              </button> */}

               {/* // waychlist button component */}
              <WatchlistButton movieId={movie.id}></WatchlistButton>

            </div>

          </div>

        </div>
      </section>

      {/* Trailer */}
      {movie.trailerUrl && (
        <section className="container mx-auto px-4 mt-24 relative z-10">

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Official Trailer
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              src={movie.trailerUrl}
              className="w-full h-full"
              allowFullScreen
            />
          </div>

        </section>
      )}

      
      

      {/* Related Movies */}
      {/* <section className="container mx-auto px-4 mt-24 relative z-10">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
          Related Movies
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {relatedMovies
            .filter((item: any) => item.slug !== movie.slug)
            .slice(0, 4)
            .map((item: any) => (
              <Link
                key={item.id}
                href={`/movies/${item.slug}`}
                className="rounded-3xl overflow-hidden border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-xl hover:-translate-y-2 transition"
              >
                <div className="relative h-[320px]">

                  <Image
                    src={item.poster}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-5">

                  <h3 className="font-bold text-slate-900 dark:text-white line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.platform}
                  </p>

                </div>
              </Link>
            ))}

        </div>
      </section> */}

      {/* review section  */}
        <MovieReviewSection movieId={movie.id} />
    </main>
  );
}