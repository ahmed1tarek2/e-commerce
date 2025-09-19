import { pro } from "@/app/main/data/data";
import Items from "./items";
import Image from "next/image";

const BestSellerComp = () => {
  return (
    <div className="px-2 border 
    border-[#EDEEF5] rounded-xl grid grid-cols-[2fr_1fr_2fr]  
    items-center justify-center">
      <div className="grid grid-cols-2 gap-10 py-6">
        <Items
          photo="/bestSeller.png"
          head={pro[0].name}
          pr={pro[0].price_new}
          prDis={pro[0].price_old}
        />
        <Items
          photo="/bestSeller.png"
          head={pro[1].name}
          pr={pro[1].price_new}
          prDis={pro[1].price_old}
        />
        <Items
          photo="/bestSeller.png"
          head={pro[2].name}
          pr={pro[2].price_new}
          prDis={pro[2].price_old}
        />
        <Items
          photo="/bestSeller.png"
          head={pro[3].name}
          pr={pro[3].price_new}
          prDis={pro[3].price_old}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="/bestSellerBanner.png"
          width={278}
          height={730}
          alt="best seller banner"
        />
      </div>
      <div className="grid grid-cols-2 gap-10  ">
        <Items
          photo="/bestSeller.png"
          head={pro[0].name}
          pr={pro[0].price_new}
          prDis={pro[0].price_old}
        />
        <Items
          photo="/bestSeller.png"
          head={pro[1].name}
          pr={pro[1].price_new}
          prDis={pro[1].price_old}
        />
        <Items
          photo="/bestSeller.png"
          head={pro[2].name}
          pr={pro[2].price_new}
          prDis={pro[2].price_old}
        />
        <Items
          photo="/bestSeller.png"
          head={pro[3].name}
          pr={pro[3].price_new}
          prDis={pro[3].price_old}
        />
      </div>
    </div>
  );
};

export default BestSellerComp;
