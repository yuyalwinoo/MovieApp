"use client";

import { useEffect, useState } from "react";
import Thumbnail from "../ui/thumbnail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";
import Link from "next/link";
import { FlameIcon } from 'lucide-react';

interface TrendingMovie {
  id: number;
  name?: string;
  title?: string;
  backdrop_path: string;
  overview: string;
}

export default function Trending() {
  const [trending, setTrending] = useState<TrendingMovie[]>([]);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    try {
      const api = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=3c04cbec57fe01f7ea7a4477879112ac`
      );
      const data = await api.json();
      const slicedResults = data.results.slice(0, 10);
      setTrending(slicedResults);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <>
      <Link
        href="#"
        title="See more trending movies"
        className="uppercase text-3xl flex gap-2 items-baseline"
      >
        Trending
        <FlameIcon size={28} fill="#EF233C"/>
      </Link>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1025: {
            slidesPerView: 3,
          },
        }}
        direction="horizontal"
        mousewheel={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel]}
        className="mySwiper h-[300px] mt-5 mb-20"
      >
        {trending.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="movie-card">
              <Thumbnail
                key={movie.id}
                name={movie.name || ""}
                title={movie.title || ""}
                backdrop_path={movie.backdrop_path}
                overview={movie.overview}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
