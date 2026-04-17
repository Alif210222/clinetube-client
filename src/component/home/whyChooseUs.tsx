import {
  ShieldCheck,
  Sparkles,
  MonitorPlay,
  Star,
  Zap,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: MonitorPlay,
    title: "Unlimited Streaming",
    desc: "Watch movies and series anytime in HD quality.",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    icon: Star,
    title: "Trusted Ratings",
    desc: "Real users share honest reviews and ratings.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Premium subscriptions with safe checkout.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Optimized streaming with fast loading speed.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "Comment, like reviews and engage with fans.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Sparkles,
    title: "Curated Picks",
    desc: "Editors handpick the best weekly content.",
    gradient: "from-rose-500 to-pink-500",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute left-0 top-10 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />
      <div className="absolute right-0 bottom-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Why Choose
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              {" "}CineVerse
            </span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Experience the future of streaming, reviews and entertainment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md p-6 shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg`}
                >
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
      </div>
    </section>
  );
}