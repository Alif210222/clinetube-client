"use server";

import { cookies } from "next/headers";

const BASE = process.env.NEXT_PUBLIC_BASE_URL;


// TOGGLE LIKE
export const toggleLike = async (
  reviewId: string
) => {
  const token =
    (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${BASE}/like/${reviewId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.json();
};


// GET LIKE COUNT
export const getLikeCount = async (
  reviewId: string
) => {
  const res = await fetch(
    `${BASE}/like/${reviewId}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};

