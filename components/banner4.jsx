import Image from "next/image";

const Banner4 = (props) => {
  const { photo, head, offer, desc } = props;
  return (
    <div
      className="w-full h-[13.664rem] rounded-lg 
    overflow-hidden relative"
    >
      <Image src={photo} fill alt="img name" />
      <div
        className="absolute top-[1.374rem] 
      z-50 w-[16.008rem] h-[12.488rem] p-7"
      >
        <h4
          className="font-semibold leading-5 
        text-[#00B853]"
        >
          {offer}
        </h4>
        <div>
          <h2
            className="font-semibold text-2xl 
          text-[#3E445A] "
          >
            {head}
          </h2>
        </div>
        <p
          className="font-normal 
        text-xs py-4 text-[#9B9BB4]"
        >
          {desc}
        </p>
        <button
          className="font-medium 
        text-xs leading-5 text-white w-[6.258rem] 
        h-[2.125rem] border border-[#C2C2D3] rounded-4xl
         bg-[#C2C2D3]"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner4;
