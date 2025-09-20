import { MoveRight } from "lucide-react";
import BestSellerComp from "./uiComp/bestSeller/bestSellerComp";

const BestSeller = () => {
  return (
    <div className="w-[73.125rem]">
      <div className="flex justify-between items-center pb-2">
        <div>
          <h2
            className="font-semibold 
          text-xl text-[#202435] leading-6 uppercase"
          >
            Best Sellers
          </h2>
          <p
            className="font-normal text-xs 
          text-[#9B9BB4] leading-5"
          >
            Do not miss the current offers until the end of month.
          </p>
        </div>
        <button
          className="w-[7.019rem] h-[2.125rem] 
        rounded-4xl border border-[#D9D9E9]
        font-medium text-xs leading-5 text-[#9B9BB4]
        flex justify-center items-center gap-2
        "
        >
          View All
          <MoveRight className="w-3.5 h-3.5" />
        </button>
      </div>
      <BestSellerComp />
    </div>
  );
};

export default BestSeller;
