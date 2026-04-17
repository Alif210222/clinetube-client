"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Crown, ArrowUpDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPricingMovies } from "@/src/services/home-pricing/pricing";


export default function PricingSection() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("asc");

  const loadData = async (sortType: string) => {
    setLoading(true);

    const res = await getPricingMovies({
      sortByPrice: sortType,
    });

    const data = res?.data?.data || [];
    setMovies(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData(order);
  }, [order]);

  const handleToggle = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  return (
    <section className="py-24 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute left-0 top-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />
      <div className="absolute right-0 bottom-10 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-white/10 dark:bg-white/5 backdrop-blur-md mb-4">
              <Crown className="w-4 h-4 text-pink-500" />
              <span className="text-sm text-slate-700 dark:text-slate-200">
                Premium Access Plans
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Pricing
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
                {" "}Collection
              </span>
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Choose movies by price and enjoy premium streaming.
            </p>
          </div>

          <Button
            onClick={handleToggle}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90"
          >
            <ArrowUpDown className="w-4 h-4 mr-2" />
            {order === "asc"
              ? "Low to High"
              : "High to Low"}
          </Button>
        </div>

        {/* Cards */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-[520px] rounded-3xl bg-slate-200 dark:bg-slate-800 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {movies.map((movie) => (
              <div
                key={movie.id}
                className="rounded-3xl overflow-hidden border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-xl hover:-translate-y-2 transition duration-300"
              >

                {/* Poster */}
                <div className="relative h-[340px] overflow-hidden">
                  <Image
                    src={movie.poster}
                    alt={movie.title}
                    fill
                    className="object-cover"
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

                  <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
                    {movie.platform}
                  </p>

                  <div className="mt-5">
                    <span className="text-4xl font-bold text-pink-500">
                      ${movie.price}
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
        )}
      </div>
    </section>
  );
}