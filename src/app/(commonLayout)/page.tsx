import HeroSection from "@/src/component/home/hero-section";
import TopRatedMovies from "@/src/component/home/top-rated-movies";

import SectionLoader from "@/src/component/shared/section-loader";
import { Suspense } from "react";

export default function Home() {
  return (
    <h1 className=" ">
          <HeroSection></HeroSection>

          <Suspense fallback={<SectionLoader />}>
        <TopRatedMovies />
      </Suspense>
         
    </h1>
  )
}