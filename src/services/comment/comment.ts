
"use server";

import { cookies } from "next/headers";

const BASE = process.env.NEXT_PUBLIC_BASE_URL;


// ADD COMMENT
export const createComment = async (payload: any) => {
  const token =
    (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${BASE}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  return res.json();
};


// GET COMMENTS
export const getComments = async (
  reviewId: string
) => {
  const res = await fetch(
    `${BASE}/comment/${reviewId}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};


// DELETE COMMENT
export const deleteComment = async (
  id: string
) => {
  const token =
    (await cookies()).get("accessToken")?.value;

  const res = await fetch(
    `${BASE}/comment/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.json();
};