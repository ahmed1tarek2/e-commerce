"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperDetails from "./dettails";

export default function MySwiper() {
  return (
    <div className="w-full h-full mx-auto rounded-2xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[31.25rem]">
            <Image
              src="/slide1.png"
              alt="Burger"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <SwiperDetails />
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[31.25rem]">
            <Image
              src="/slide2.png"
              alt="Pizza"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <SwiperDetails />
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[31.25rem]">
            <Image
              src="/slide3.png"
              alt="Pasta"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <SwiperDetails />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
