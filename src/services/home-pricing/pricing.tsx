import { FieldValues } from "react-hook-form";

export const getPricingMovies = async (query?: FieldValues) => {
  try {
    const params = new URLSearchParams();

    params.append("limit", "6");

    if (query?.sortByPrice) {
      params.append("sortByPrice", query.sortByPrice);
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/movie?${params.toString()}`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};