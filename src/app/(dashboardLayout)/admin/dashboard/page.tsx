export default function AdminDashboardPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Welcome Admin 👋
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <p className="text-slate-400">
            Total Movies
          </p>

          <h2 className="text-4xl font-bold mt-3">
            120
          </h2>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <p className="text-slate-400">
            Total Users
          </p>

          <h2 className="text-4xl font-bold mt-3">
            3,420
          </h2>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <p className="text-slate-400">
            Revenue
          </p>

          <h2 className="text-4xl font-bold mt-3">
            $12K
          </h2>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <p className="text-slate-400">
            Reviews
          </p>

          <h2 className="text-4xl font-bold mt-3">
            540
          </h2>
        </div>

      </div>

    </div>
  );
}