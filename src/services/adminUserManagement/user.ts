"use server";

import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllUsers = async () => {
  try {
    const token =
      (await cookies()).get("accessToken")
        ?.value;

    const res = await fetch(
      `${BASE_URL}/user`,
      {
        method: "GET",
        headers: {
         Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    return await res.json();
  } catch (error) {
    return {
      success: false,
      data: [],
    };
  }
};