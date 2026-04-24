"use client";

import {
  useState,
} from "react";

import {
  ShoppingBag,
  Loader2,
} from "lucide-react";

import { toast } from "sonner";

import { buyMovie } from "@/src/services/payment/payment";

export default function BuyNowButton({
  movieId,
  price,
}: {
  movieId: string;
  price: number;
}) {
  const [loading, setLoading] =
    useState(false);

  const handleBuy =
    async () => {
      try {
        setLoading(true);

        const res =
          await buyMovie(
            movieId
          );

        if (
          res?.success ===
          false
        ) {
          toast.error(
            res.message ||
              "Failed to start payment"
          );

          setLoading(false);
          return;
        }

        if (res?.url) {
          window.location.href =
            res.url;
          return;
        }

        toast.error(
          "Checkout url not found"
        );
      } catch (error) {
        toast.error(
          "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="h-14 px-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transition disabled:opacity-70"
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <ShoppingBag className="w-5 h-5" />
          Buy Now ${price}
        </>
      )}
    </button>
  );
}