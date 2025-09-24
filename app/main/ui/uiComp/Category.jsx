"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { categories } from "../../data/catgory";

const Category = () => {
  return (
    <Swiper spaceBetween={20} slidesPerView={4} loop={true}>
      {categories.map((cat, i) => (
        <SwiperSlide key={i}>
          <div className="border border-[#E4E5EE] rounded-lg p-4 text-center bg-white hover:shadow-md transition">
            <div className="w-full h-40 relative">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-[#202435]">{cat.title}</h3>
            <p className="text-sm text-[#202435] font-light">
              {cat.items} Items
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Category;
