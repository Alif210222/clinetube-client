"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import {
  Users,
  Film,
  Star,
  DollarSign,
  ShoppingBag,
} from "lucide-react";

export default function AdminStatistics({
  stats,
}: {
  stats: any;
}) {
  const data = [
    {
      name: "Users",
      value: stats.totalUsers,
    },
    {
      name: "Movies",
      value: stats.totalMovies,
    },
    {
      name: "Reviews",
      value: stats.totalReviews,
    },
    {
      name: "Purchase",
      value: stats.totalPurchases,
    },
    {
      name: "Revenue",
      value: stats.totalRevenue,
    },
  ];

  return (
    <main className="p-6 md:p-10">

      <h1 className="text-3xl font-bold mb-8">
        Admin Statistics
      </h1>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-5 mb-10">

        <Card
          title="Users"
          value={stats.totalUsers}
          icon={<Users />}
          color="from-cyan-500 to-blue-600"
        />

        <Card
          title="Movies"
          value={stats.totalMovies}
          icon={<Film />}
          color="from-pink-500 to-purple-600"
        />

        <Card
          title="Reviews"
          value={stats.totalReviews}
          icon={<Star />}
          color="from-yellow-400 to-orange-500"
        />

        <Card
          title="Purchases"
          value={stats.totalPurchases}
          icon={<ShoppingBag />}
          color="from-green-500 to-emerald-600"
        />

        <Card
          title="Revenue"
          value={`$${stats.totalRevenue}`}
          icon={<DollarSign />}
          color="from-indigo-500 to-violet-600"
        />

      </div>

      {/* Chart */}
      <div className="rounded-3xl bg-white dark:bg-slate-950 border p-6 shadow-xl">

        <h2 className="text-xl font-bold mb-6">
          Platform Overview
        </h2>

        <div className="h-[420px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="name" />
              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                radius={[
                  10, 10, 0, 0,
                ]}
                fill="#8b5cf6"
              />
            </BarChart>
          </ResponsiveContainer>

        </div>
      </div>
    </main>
  );
}

function Card({
  title,
  value,
  icon,
  color,
}: any) {
  return (
    <div
      className={`rounded-3xl p-5 text-white bg-gradient-to-r ${color} shadow-lg`}
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm opacity-80">
            {title}
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {value}
          </h3>

        </div>

        <div className="opacity-80">
          {icon}
        </div>

      </div>
    </div>
  );
}