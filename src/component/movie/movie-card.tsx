import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: any }) {
  return (
    <div className="rounded-3xl overflow-hidden border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-xl hover:-translate-y-2 transition duration-300">

      {/* Image */}
      <Link href={`/movies/${movie.slug}`}>
        <div className="relative h-[260px] overflow-hidden cursor-pointer">
          <Image
            src={movie.poster}
            alt={movie.title}
            fill
            className="object-cover hover:scale-110 transition duration-500"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">

        <Link href={`/movies/${movie.slug}`}>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white hover:text-pink-500 transition cursor-pointer line-clamp-1">
            {movie.title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {movie.description}
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

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          {movie.platform}
        </p>

        <p className="mt-4 text-xl font-bold text-cyan-500">
          {movie.priceType === "FREE" ? "Free" : `$${movie.price}`}
        </p>

      </div>
    </div>
  );
}