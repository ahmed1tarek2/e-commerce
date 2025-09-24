"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import Items from "./uiComp/bestSeller/items";
import Header from "./uiComp/header";
import { categories } from "../data/catgory"; // ✅ تأكد من المسار
import ProductRating from "./uiComp/rating";
import { pro } from "../data/data";

const FeaturedPro = () => {
  return (
    <div className="w-[73.188rem] py-9">
      <Header
        head="Featured Products"
        par="Do not miss the current offers until the end of March."
      />

      <Swiper spaceBetween={20} slidesPerView={4} loop={true}>
        {pro.map((cat, i) => (
          <SwiperSlide key={i}>
            <div className="border border-[#E4E5EE] rounded-lg p-4  bg-white hover:shadow-md transition">
              <div className="w-full h-40 relative">
                <Image
                  src="/swiper2.png"
                  alt={pro[i].name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-[#202435] text-center">
                {pro[i].name}
              </h3>
              <p className="text-sm text-[#00B853] font-semibold my-2">
                {pro[i].stock}
              </p>
              <div className="flex gap-1 items-center">
                <ProductRating />
                <span className="font-semibold text-[#71778E] text-xs leading-4">
                  {pro[i].reviews} review
                </span>
              </div>
              <p className="text-[#D51243] font-semibold leading-7 text-lg py-2">
                <span className="px-2 text-[#C2C2D3] font-semibold text-sm leading-6 line-through">
                  ${pro[i].price_old}
                </span>
                ${pro[i].price_new}
              </p>
              <div className="w-full justify-center">
                <button className="w-48 h-8 rounded-4xl bg-[#FFCD00] font-medium text-xs leading-5 text-[#202435] capitalize border border-[#FFCD00] cursor-pointer">
                  add to cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedPro;
