"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Items from "./uiComp/bestSeller/items";
import Header from "./uiComp/header";
import { categories } from "../data/catgory"; // ✅ تأكد من المسار

const FeaturedPro = () => {
  return (
    <div className="w-[73.188rem] py-9">
      <Header
        head="Featured Products"
        par="Do not miss the current offers until the end of March."
      />

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
    </div>
  );
};

export default FeaturedPro;
