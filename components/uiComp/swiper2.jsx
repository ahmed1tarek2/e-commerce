"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ✅ استيراد الأسهم

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { image: "/swiper2.png", title: "Beverages", items: 11 },
  { image: "/swiper2.png", title: "Biscuits & Snacks", items: 6 },
  { image: "/swiper2.png", title: "Breads & Bakery", items: 6 },
  { image: "/swiper2.png", title: "Breakfast & Dairy", items: 8 },
  { image: "/swiper2.png", title: "Frozen Foods", items: 7 },
  { image: "/swiper2.png", title: "Frozen Foods", items: 7 },
  { image: "/swiper2.png", title: "Frozen Foods", items: 7 },
];

export default function CategorySwiper() {
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
        {categories.map((cat, i) => (
          <SwiperSlide key={i}>
            <div className="border border-[#E4E5EE] rounded-lg p-4 text-center bg-white hover:shadow-md transition">
              <div className="w-full h-40 relative ">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-[#202435]">{cat.title}</h3>
              <p className="text-sm text-[#202435] font-light ">{cat.items} Items</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
