"use server";

import { cookies } from "next/headers";

const BASE = process.env.NEXT_PUBLIC_BASE_URL;

// GET MOVIE REVIEWS
export const getMovieReviews = async (movieId: string) => {
  const res = await fetch(`${BASE}/review?movieId=${movieId}`, {
    cache: "no-store",
  });

  return res.json();
};


// CREATE REVIEW
export const createReview = async (payload: any) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${BASE}/review`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  return res.json();
};


// UPDATE REVIEW
export const updateReview = async (
  id: string,
  payload: any
) => {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${BASE}/review/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
};


// DELETE REVIEW
export const deleteReview = async (id: string) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${BASE}/review/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};