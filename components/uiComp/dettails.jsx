const SwiperDetails = () => {
  return (
    <div className="z-50 py-7 absolute top-16 left-24 flex flex-col gap-2 w-[36.563rem] h-[23.262rem]">
      <div className="flex items-center gap-3 ">
        <p className="font-medium text-xs uppercase leading-[18px] text-[#202435]">
          Exclusive Offer
        </p>
        <div className="w-[5.498rem] h-[1.938rem] rounded-[2.5rem] bg-linear-to-r from-[#00B85333] from-20% to-[#20375800] justify-center items-center flex">
          <p className="font-semibold text-sm leading-5 uppercase text-[#038E42]">
            -20% Off
          </p>
        </div>
      </div>
      <div className="w-[26.563rem] h-[7.199rem]">
        <h1 className="font-bold text-5xl leading-14 text-[#202435]">
          Specialist in the grocery store
        </h1>
      </div>
      <p className="font-normal leading-6 text-[#202435] pt-2">
        Only this week. Don’t miss...
      </p>
      <p className="font-normal leading-6 text-[#202435] pb-2">
        from
        <span className="font-semibold text-4xl leading-14 text-[#D51243]">
          $7.99
        </span>
      </p>
      <button className="bg-[#35AFA0] text-white font-medium text-sm rounded-4xl w-[8.371rem] h-[2.5rem]">
        Shop Now
      </button>
    </div>
  );
};

export default SwiperDetails;
