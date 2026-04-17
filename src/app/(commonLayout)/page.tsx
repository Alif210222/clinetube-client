import FreeMovieSection from "@/src/component/home/freeMovieSection";
import HeroSection from "@/src/component/home/hero-section";
import PricingSection from "@/src/component/home/pricing";

import TopRatedMovies from "@/src/component/home/top-rated-movies";
import WhyChooseSection from "@/src/component/home/whyChooseUs";

import SectionLoader from "@/src/component/shared/section-loader";
import { Suspense } from "react";

export default function Home() {
  return (
    <h1 className=" ">
          <HeroSection></HeroSection>

          <Suspense fallback={<SectionLoader />}>
        <TopRatedMovies />
        <PricingSection></PricingSection>
        <FreeMovieSection></FreeMovieSection>
      </Suspense>

      <WhyChooseSection></WhyChooseSection>

      
         
    </h1>
  )
}