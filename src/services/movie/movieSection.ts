import { FieldValues } from "react-hook-form";


// home page top rated movie section 
export const getAllMovies = async (query?: FieldValues) => {
  try {
    const params = new URLSearchParams();

    if (query?.search) params.append("search", query.search);
    if (query?.genre) params.append("genre", query.genre);
    if (query?.platform) params.append("platform", query.platform);
    if (query?.minRating) params.append("minRating", query.minRating);
    if (query?.sortBy) params.append("sortBy", query.sortBy);
    if (query?.page) params.append("page", query.page);
    if (query?.limit) params.append("limit", query.limit);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/movie?${params.toString()}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// free movies section in home page
export const getFreeMovies = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/movie?priceType=FREE&price=0&limit=20`,
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