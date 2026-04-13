"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const movies = [
  "/m1.jpg",
  "/m2.jpg",
  "/m3.jpg",
  "/m4.jpg",
];

export default function Trending() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          🔥 Trending Now
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {movies.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={item}
                  alt={`movie-${i}`}
                  width={400}
                  height={600}
                  className="rounded-2xl hover:scale-105 transition duration-300 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}