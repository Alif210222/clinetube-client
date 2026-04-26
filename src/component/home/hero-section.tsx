"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute top-40 right-1/3 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 pt-16 pb-24 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div className="relative z-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-white/10 dark:bg-white/5 backdrop-blur-md mb-6 no-underline">
            <TrendingUp className="w-4 h-4 text-pink-500 dark:text-pink-400" />
            <span className="text-sm text-slate-700 dark:text-slate-200">
              #1 Movie & Series Portal
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl xl:text-6xl font-bold leading-tight no-underline text-slate-900 dark:text-white">
            Stream.
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Review.
            </span>
            Discover Greatness.
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-lg leading-8 max-w-xl text-slate-700 dark:text-slate-300 no-underline">
            Explore trending movies, binge top-rated series,
            leave reviews, build your watchlist and enjoy
            premium streaming experiences in one place.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <Link href="/movies" className="no-underline">
              <Button className="h-12 px-7 text-base bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 shadow-lg shadow-pink-500/20">
                Explore Now
              </Button>
            </Link>

            {/* <Link href="" className="no-underline">
              <Button
                variant="outline"
                className="h-12 px-7 border-cyan-400/40 text-cyan-600 dark:text-cyan-300 hover:bg-cyan-400/10"
              >
                Plans
              </Button>
            </Link> */}

          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">

            <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md p-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                10K+
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Movies
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md p-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                25K+
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Reviews
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md p-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                99%
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Happy Users
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative z-10 flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-cyan-500/20 blur-2xl rounded-[30px]" />

            <Image
              src="/hero-poster.jpg"
              alt="Hero Movie"
              width={500}
              height={600}
              priority
              className="relative rounded-[28px] border border-slate-300 dark:border-white/10 shadow-2xl object-cover"
            />

            {/* Rating Card */}
            <div className="absolute -left-10 top-10 hidden md:flex items-center gap-3 rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md px-4 py-3 shadow-xl">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />

              <div>
                <p className="text-slate-900 dark:text-white text-sm font-semibold">
                  Top Rated
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  9.8 / 10 Score
                </p>
              </div>
            </div>

            {/* Trailer Card */}
            <div className="absolute -right-8 bottom-12 hidden md:flex items-center gap-3 rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md px-4 py-3 shadow-xl">

              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </div>

              <div>
                <p className="text-slate-900 dark:text-white text-sm font-semibold">
                  Watch Trailer
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  HD Streaming
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}