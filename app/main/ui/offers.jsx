import Image from "next/image";
import { pro } from "../data/data";
import ProductRating from "./uiComp/rating";

const Offers = () => {
  return (
    <div className="grid grid-cols-5  gap-4 w-[73.125rem] h-[23.5rem] border-1 border-[#ED174A] rounded-2xl overflow-hidden">
      {pro.map((cat, i) => (
        <div key={i}>
          <div className=" p-4  bg-white hover:shadow-md transition">
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
        </div>
      ))}
    </div>
  );
};

export default Offers;
