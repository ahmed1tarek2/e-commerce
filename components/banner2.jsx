import Image from "next/image";

const Banner2 = () => {
  return (
    <div className="w-[73.125rem] h-[6.5rem] bg-[#f7eee9] flex justify-around items-center rounded-2xl mt-10 mb-10 overflow-hidden relative">
      <p className="font-semibold text-xl text-[#00B853]">
        100% Secure delivery without contacting the courier
      </p>
      <Image
        src="/imgBanner2.png"
        alt="Banner2"
        width={349}
        height={232}
        className="top-5  relative"
      />
      <button className="w-[6.258rem] h-[2.125rem] border-1 rounded-4xl bg-[#00B853] text-white font-medium text-xs">
        Shop Now
      </button>
    </div>
  );
};

export default Banner2;
