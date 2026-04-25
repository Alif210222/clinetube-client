"use client";

import Image from "next/image";

export default function PurchaseHistory({
  payments,
}: {
  payments: any[];
}) {
  return (
    <main className="p-6 md:p-10">

      <h1 className="text-3xl font-bold mb-8">
        Purchase History
      </h1>

      <div className="overflow-x-auto rounded-2xl border bg-white dark:bg-slate-950">

        <table className="w-full text-sm">

          <thead className="bg-slate-100 dark:bg-slate-900">

            <tr>
              <th className="p-4 text-left">
                User
              </th>

              <th className="p-4 text-left">
                Movie
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Date
              </th>
            </tr>

          </thead>

          <tbody>

            {payments.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >
                {/* User */}
                <td className="p-4">

                  <p className="font-semibold">
                    {item.user?.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    {item.user?.email}
                  </p>

                </td>

                {/* Movie */}
                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <div className="relative w-14 h-16 rounded overflow-hidden">

                      <Image
                        src={
                          item.movie?.poster
                        }
                        alt="movie"
                        fill
                        className="object-cover"
                      />

                    </div>

                    <p className="font-medium">
                      {
                        item.movie?.title
                      }
                    </p>

                  </div>

                </td>

                {/* Amount */}
                <td className="p-4 font-semibold text-cyan-500">
                  $
                  {item.amount}
                </td>

                {/* Status */}
                <td className="p-4">

                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-semibold">
                    {item.status}
                  </span>

                </td>

                {/* Date */}
                <td className="p-4 text-slate-500">

                  {new Date(
                    item.createdAt
                  ).toLocaleDateString()}

                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </main>
  );
}