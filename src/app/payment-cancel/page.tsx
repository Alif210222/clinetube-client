import Link from "next/link"

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">
          Payment Cancelled
        </h1>

        <Link
         href ="/movies"
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-xl"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}