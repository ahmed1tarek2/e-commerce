"use client";

import { ShoppingCart } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex flex-col items-center ">
      {/* Circle + Icon */}
      <div className="relative flex items-center justify-center w-14 h-14">
        {/* Half Circle Border */}
        <div className="absolute w-full h-full rounded-full border-4 border-[#35AFA0] border-r-transparent" />

        {/* Shop Icon */}
        <ShoppingCart className="w-8 h-8 text-[#F4A261] z-10" />
        
      </div>

      {/* Text */}
      <p className=" text-lg font-bold text-[#35AFA0]">Shop Now</p>
    </div>
  );
}
