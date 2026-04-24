import MoviesPage from "@/src/component/movie/movies-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    genre?: string;
    platform?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;

  return <MoviesPage searchParams={params} />;
}