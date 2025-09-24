import { pro } from "@/app/main/data/data";
import Items from "./items";
import Image from "next/image";
import DescBanner from "./descBanner";

const BestSellerComp = () => {
  return (
    <div
      className=" border 
    border-[#EDEEF5] rounded-xl flex  
    items-center justify-center  overflow-hidden"
    >
      <div className="grid grid-cols-2 ">
        <Items
          photo="/bestSeller.png"
          head={pro[0].name}
          pr={pro[0].price_new}
          prDis={pro[0].price_old}
          review={pro[0].reviews}
        />
        <Items
          photo="/bestSeller.png"
          head={pro[1].name}
          pr={pro[1].price_new}
          prDis={pro[1].price_old}
          review={pro[1].reviews}
        />
        <Items
          photo="/bestSeller.png"
          head={pro[2].name}
          pr={pro[2].price_new}
          prDis={pro[2].price_old}
          review={pro[2].reviews}
        />
        <Items
          photo="/bestSeller.png"
          head={pro[3].name}
          pr={pro[3].price_new}
          prDis={pro[3].price_old}
          review={pro[3].reviews}
        />
      </div>
      <div className="border border-[#EDEEF5] relative">
        <Image
          src="/bestSellerBanner.png"
          width={261}
          height={350}
          alt="best seller banner"
          className="z-10"
        />
        <DescBanner />
      </div>
      <div className="grid grid-cols-2 ">
        <Items
          photo="/bestSeller.png"
          head={pro[0].name}
          pr={pro[0].price_new}
          prDis={pro[0].price_old}
          review={pro[0].reviews}
        />
        <Items
          photo="/bestSeller.png"
          head={pro[1].name}
          pr={pro[1].price_new}
          prDis={pro[1].price_old}
          review={pro[1].reviews}
        />
        <Items
          photo="/bestSeller.png"
          head={pro[2].name}
          pr={pro[2].price_new}
          prDis={pro[2].price_old}
          review={pro[2].reviews}
        />
        <Items
          photo="/bestSeller.png"
          head={pro[3].name}
          pr={pro[3].price_new}
          prDis={pro[3].price_old}
          review={pro[3].reviews}
        />
      </div>
    </div>
  );
};

export default BestSellerComp;
