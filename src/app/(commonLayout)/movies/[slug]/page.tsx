import MovieDetailsPage from "@/src/component/movie/movie-details-page";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <MovieDetailsPage slug={slug} />;
}