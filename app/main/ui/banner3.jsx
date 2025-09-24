import Image from "next/image";

const Banner3 = (props) => {
  const { photo, head, desc } = props;
  return (
    <div className="w-full h-[15.698rem] rounded-xl overflow-hidden relative">
      <Image src={photo} fill alt="img name" />
      <div className="absolute top-[1.374rem] z-50 w-[15.841rem] h-[12.949rem] p-7">
        <div>
          <h2 className="font-semibold text-3xl text-[#3E445A] ">
            {head}
          </h2>
        </div>
        <p className="font-normal text-xs py-4 text-[#9B9BB4]">{desc}</p>
        <button className="font-medium text-xs leading-5 text-white w-[6.258rem] h-[2.125rem] border border-[#ED174A] rounded-4xl bg-[#ED174A] cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner3;
