import { cookies } from "next/headers";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL;

export const getAdminStats =
  async () => {
    const token =
      (await cookies()).get(
        "accessToken"
      )?.value;

    const res = await fetch(
      `${BASE_URL}/admin/statistics`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    return await res.json();
  };