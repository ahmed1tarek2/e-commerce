import CountdownDesign from "./uiComp/timer";

const OfferTimer = () => {
  return (
    <div className="flex justify-between items-center gap-10 mb-6">
      <div >
        <h3 className="font-light text-[1.625rem] leading-8 text-[#233A95] text-right">
          Special Offers of the week!
        </h3>
        <p className="font-normal text-[0.938rem] leading-[1.406rem] text-[#9B9BB4]">
          Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante.
        </p>
      </div>
      <CountdownDesign />
    </div>
  );
};
export default OfferTimer;
