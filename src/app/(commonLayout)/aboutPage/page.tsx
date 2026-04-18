import {
  Film,
  ShieldCheck,
  Star,
  Users,
  MonitorPlay,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />
      <div className="absolute right-0 top-60 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute left-1/3 bottom-20 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      {/* Hero */}
      <section className="container mx-auto px-4 pt-20 pb-16 relative z-10">

        <div className="max-w-4xl mx-auto text-center">

          <p className="inline-flex px-4 py-2 rounded-full border border-pink-500/30 bg-white/10 dark:bg-white/5 backdrop-blur-md text-sm text-slate-700 dark:text-slate-200">
            About CineVerse
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            Entertainment Beyond
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              {" "}Streaming
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            CineVerse is a modern movie and series portal where users can
            discover trending content, read trusted reviews, rate titles,
            create watchlists and enjoy premium entertainment in one place.
          </p>

        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-14 relative z-10">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md p-8 shadow-xl">

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Our Mission
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-8">
              We built CineVerse to make discovering entertainment simple,
              enjoyable and trustworthy. Instead of wasting time searching
              across multiple platforms, users can explore ratings, reviews,
              trailers and streaming options in one clean experience.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-8">
              Whether you love action blockbusters, emotional dramas,
              binge-worthy series or hidden gems, CineVerse helps you
              find what to watch next.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 gap-6">

            <div className="rounded-3xl p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl">
              <Film className="w-10 h-10" />
              <h3 className="mt-5 text-xl font-bold">Huge Library</h3>
              <p className="mt-2 text-white/80">
                Movies and series across genres and platforms.
              </p>
            </div>

            <div className="rounded-3xl p-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl">
              <Star className="w-10 h-10" />
              <h3 className="mt-5 text-xl font-bold">Trusted Ratings</h3>
              <p className="mt-2 text-white/80">
                Community powered ratings and real reviews.
              </p>
            </div>

            <div className="rounded-3xl p-6 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white shadow-xl">
              <MonitorPlay className="w-10 h-10" />
              <h3 className="mt-5 text-xl font-bold">Streaming Ready</h3>
              <p className="mt-2 text-white/80">
                Access trailers and supported streaming links.
              </p>
            </div>

            <div className="rounded-3xl p-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-xl">
              <ShieldCheck className="w-10 h-10" />
              <h3 className="mt-5 text-xl font-bold">Safe & Secure</h3>
              <p className="mt-2 text-white/80">
                Protected accounts and secure payments.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-14">

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Why Users Love
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              {" "}CineVerse
            </span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Designed for modern viewers who want speed, trust and simplicity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              icon: Users,
              title: "Community Reviews",
              desc: "Read honest opinions before watching.",
            },
            {
              icon: Sparkles,
              title: "Curated Picks",
              desc: "Discover editor-selected weekly favorites.",
            },
            {
              icon: Film,
              title: "Easy Discovery",
              desc: "Filter by genre, year, rating or platform.",
            },
            {
              icon: Star,
              title: "Personal Ratings",
              desc: "Rate titles and track your favorites.",
            },
            {
              icon: MonitorPlay,
              title: "Watchlist",
              desc: "Save titles to enjoy later anytime.",
            },
            {
              icon: ShieldCheck,
              title: "Reliable Experience",
              desc: "Fast, secure and responsive on every device.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md p-6 shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-400 leading-7">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-24 relative z-10">

        <div className="rounded-3xl p-10 md:p-14 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white text-center shadow-2xl">

          <h2 className="text-4xl font-bold">
            Join the CineVerse Community
          </h2>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-8">
            Start discovering better movies, smarter recommendations and
            trusted reviews today.
          </p>

         <Link href="/movies" className="cursor-pointer">
           <button className="mt-8 px-8 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:scale-105 transition">
              Explore Movies
          </button>
          </Link>

        </div>
      </section>
    </main>
  );
}