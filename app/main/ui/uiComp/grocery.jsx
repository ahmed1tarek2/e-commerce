import Image from "next/image";

const Grocery = (props) => {
  const { photo, gro, head, date } = props;
  return (
    <div className="w-full relative">
      <Image
        src={photo}
        alr="photo name"
        width={370}
        height={259}
        className="rounded-2xl py-3"
      />
      <div>
        <p className="font-semibold text-sm leading-5 text-[#9B9BB4]">{gro}</p>
        <h2 className="font-semibold text-xl leading-6 text-[#202435] py-3">
          {head}
        </h2>
        <p className="text-[#71778E] font-medium leading-5">
          {date}
          <span className="font-medium leading-5 px-2 text-[#202435]">
            Sinan ISIK
          </span>
        </p>
      </div>
    </div>
  );
};
export default Grocery;
