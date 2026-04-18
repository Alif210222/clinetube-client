import Link from "next/link";

export default function MoviePagination({
  total,
  page,
  limit,
  searchParams,
}: any) {
  const totalPage = Math.ceil(total / limit);

  if (totalPage <= 1) return null;

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-14">

      {Array.from({ length: totalPage }, (_, i) => i + 1).map((item) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", item.toString());

        return (
          <Link
            key={item}
            href={`/movies?${params.toString()}`}
            className={`w-11 h-11 rounded-xl flex items-center justify-center font-semibold transition
              ${
                page === item
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  : "border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white hover:bg-white/10"
              }`}
          >
            {item}
          </Link>
        );
      })}

    </div>
  );
}