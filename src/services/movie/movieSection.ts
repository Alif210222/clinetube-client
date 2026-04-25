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
        cache: "no-store",
        // next: {
        //   revalidate: 60,
        // },
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


// movie page  services

export const getMovies = async (query?: Record<string, any>) => {
  try {
    const params = new URLSearchParams();

    if (query?.search) params.append("search", query.search);
    if (query?.genre) params.append("genre", query.genre);
    if (query?.platform) params.append("platform", query.platform);
    if (query?.page) params.append("page", query.page);
    if (query?.limit) params.append("limit", query.limit);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/movie?${params.toString()}`,
      {
        cache: "no-store",
      }
    );

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getSingleMovie = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${slug}`,
      {
        cache: "no-store",
        //credentials: "include",
      }
    );

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getRelatedMovies = async (genre: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/movie?genre=${genre}&limit=4`,
      {
        cache: "no-store",
         //credentials: "include",
         
      }
    );

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};