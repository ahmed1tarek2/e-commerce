"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ✅ استيراد الأسهم

import "swiper/css";
import "swiper/css/navigation";



export default function CategorySwiper({card}) {
  return (
    <div className="w-full max-w-6xl mx-auto py-6 relative">
      {/* زرار الشمال */}
      <div className="swiper-button-prev !w-10 !h-10 !rounded-full !bg-white !shadow-md !flex !items-center !justify-center absolute -left-5 top-1/2 -translate-y-1/2 z-10 after:!hidden">
        <ChevronLeft className="w-5 h-5 text-black" />
      </div>

      {/* زرار اليمين */}
      <div className="swiper-button-next !w-10 !h-10 !rounded-full !bg-white !shadow-md !flex !items-center !justify-center absolute -right-5 top-1/2 -translate-y-1/2 z-10 after:!hidden">
        <ChevronRight className="w-5 h-5 text-black" />
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={false}
        className="category-swiper"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {card}
      </Swiper>
    </div>
  );
}
