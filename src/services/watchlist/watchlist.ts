"use server";

import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getToken() {
  const cookieStore = await cookies();
  return cookieStore.get("accessToken")?.value;
}

/* Add */
export const addToWatchlist = async (movieId: string) => {
  const token = await getToken();

  const res = await fetch(
    `${BASE_URL}/watchlist/${movieId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return res.json();
};

/* Get Mine */
export const getMyWatchlist = async () => {
  const token = await getToken();

  const res = await fetch(
    `${BASE_URL}/watchlist/my-watchlist`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return res.json();
};

/* Remove */
export const removeFromWatchlist = async (
  movieId: string
) => {
  const token = await getToken();

  const res = await fetch(
    `${BASE_URL}/watchlist/${movieId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.json();
};