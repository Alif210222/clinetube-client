// ===============================================
// src/services/payment/payment.ts
// ===============================================

"use server";

import { cookies } from "next/headers";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Create Stripe checkout session
 * and return checkout url
 */
export const buyMovie = async (
  movieId: string
) => {
  try {
    const token =
      (await cookies()).get(
        "accessToken"
      )?.value;

    const res = await fetch(
      `${BASE_URL}/payment/buy-movie/${movieId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":
            "application/json",
        },
        cache: "no-store",
      }
    );

    return await res.json();
  } catch (error) {
    return {
      success: false,
      message:
        "Payment request failed",
    };
  }

  
};

// Check if user has access to the movie (already buy or not)
export const checkMovieAccess = async (
  movieId: string
) => {
  const token =
    (await cookies()).get("accessToken")
      ?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/payment/check-access/${movieId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return res.json();
};