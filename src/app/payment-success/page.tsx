"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccessPage() {
  const params = useSearchParams();

  const slug =
    params.get("title");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6">

      <h1 className="text-4xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>

      <Link
        href={`/movies/${slug}`}
        className="px-8 h-12 rounded-xl bg-pink-600 text-white flex items-center"
      >
        Go To Movie
      </Link>

    </div>
  );
}