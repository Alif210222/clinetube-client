"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";



// ================= LOGIN =================
export const loginUser = async (payload: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "include",
    }
  );

  const data = await res.json();

  if (data?.accessToken) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", data.accessToken, {
      httpOnly: true,
      path: "/",
    });
  }

  return data;
};


// ================= REGISTER =================
export const registerUser = async (payload: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
};


// ================= GET CURRENT USER =================
export const getCurrentUser = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  if (!token) return null;

  try {
    const decoded: any = jwtDecode(token);

    return {
      name: decoded.name || decoded.email?.split("@")[0],
      email: decoded.email,
      role: decoded.role,
    };
  } catch {
    return null;
  }
};


// ================= LOGOUT =================
export const logoutUser = async () => {
  const cookieStore = await cookies();

  cookieStore.delete("accessToken");
};