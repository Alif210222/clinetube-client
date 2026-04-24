// ===============================================
// src/services/movie/adminMovie.ts
// ===============================================

"use server";

import { cookies } from "next/headers";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL;

const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("accessToken")
    ?.value;
};

export const getAllMoviesAdmin =
  async () => {
    const res = await fetch(
      `${BASE_URL}/movie`,
      {
        cache: "no-store",
      }
    );

    return res.json();
  };

export const createMovie =
  async (payload: any) => {
    const token = await getToken();

    const res = await fetch(
      `${BASE_URL}/movie`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    return res.json();
  };

export const updateMovie =
  async (
    id: string,
    payload: any
  ) => {
    const token = await getToken();

    const res = await fetch(
      `${BASE_URL}/movie/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type":
            "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    return res.json();
  };

export const deleteMovie =
  async (id: string) => {
    const token = await getToken();

    const res = await fetch(
      `${BASE_URL}/movie/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.json();
  };