"use client";

import Image from "next/image";
import Link from "next/link";

export default function MyPurchaseHistory({
  payments,
}: {
  payments: any[];
}) {
  return (
    <main className="container mx-auto px-4 py-16">

      <h1 className="text-4xl font-bold mb-10 text-slate-900 dark:text-white">
        My Purchase History
      </h1>

      {payments.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          No purchases yet.
        </div>
      )}

      <div className="space-y-6">

        {payments.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 p-5 flex flex-col md:flex-row gap-5"
          >

            {/* Poster */}
            <div className="relative w-full md:w-44 h-60 rounded-2xl overflow-hidden">

              <Image
                src={item.movie?.poster}
                alt="movie"
                fill
                className="object-cover"
              />

            </div>

            {/* Info */}
            <div className="flex-1">

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {item.movie?.title}
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">

                <span className="px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-sm">
                  ${item.amount}
                </span>

                <span className="px-4 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  {item.status}
                </span>

                <span className="px-4 py-1 rounded-full bg-pink-500/10 text-pink-500 text-sm">
                  {item.type}
                </span>

              </div>

              <p className="mt-4 text-slate-500 text-sm">
                Purchased on{" "}
                {new Date(
                  item.createdAt
                ).toLocaleDateString()}
              </p>

              <button className="px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold mt-4">
                    <Link href={`/movies/${item.movie?.slug}`} className=" inline-block text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400">
                     View movie details  
              </Link>
              </button>
             

            </div>

          </div>
        ))}

      </div>
    </main>
  );
}