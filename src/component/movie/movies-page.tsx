
import { getMovies } from "@/src/services/movie/movieSection";
import MovieCard from "./movie-card";
import MoviePagination from "./movie-pagination";

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const page = Number(searchParams?.page || 1);

  const data = await getMovies({
    search: searchParams?.search || "",
    genre: searchParams?.genre || "",
    platform: searchParams?.platform || "",
    page,
    limit: 10,
  });

  const movies = data?.data?.data || [];
  const meta = data?.data?.meta;

  return (
    <main className="py-16 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
            Explore
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              {" "}Movies
            </span>
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Search your favorite titles and discover new gems.
          </p>
        </div>

        {/* Search */}
        <form method="GET" className="grid md:grid-cols-4 gap-4 mb-12">

          <input
            type="text"
            name="search"
            placeholder="Search movie..."
            defaultValue={searchParams?.search}
            className="h-12 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 px-4 outline-none"
          />

          <input
            type="text"
            name="genre"
            placeholder="Genre"
            defaultValue={searchParams?.genre}
            className="h-12 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 px-4 outline-none"
          />

          <input
            type="text"
            name="platform"
            placeholder="Platform"
            defaultValue={searchParams?.platform}
            className="h-12 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 px-4 outline-none"
          />

          <button className="h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold">
            Search
          </button>

        </form>

        {/* Movies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {movies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}

        </div>

        {/* Pagination */}
        <MoviePagination
          total={meta?.total || 0}
          page={page}
          limit={10}
          searchParams={searchParams}
        />

      </div>
    </main>
  );
}