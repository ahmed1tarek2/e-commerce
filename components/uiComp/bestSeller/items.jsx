import Image from "next/image";
import ProductRating from "../rating";

const Items = ({ photo, head,prDis,pr }) => {
  return (
    <div className="flex flex-col items-center w-[13.875rem]">
      <Image
        src={photo}
        width={181}
        height={162.66000366210938}
        alt="item photo"
      />
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-medium leading-5 text-[#202435] text-center">{head}</h2>
        <p className="font-semibold text-xs">In stock</p>
        <ProductRating/>
        <p
        className="text-[#D51243] font-semibold leading-7 text-lg"
        >
          <span 
          className="px-2 text-[#C2C2D3] font-semibold text-sm leading-6 line-through">
            {prDis}
            </span>
          {pr}</p>
      </div>
    </div>
  );
};

export default Items;
