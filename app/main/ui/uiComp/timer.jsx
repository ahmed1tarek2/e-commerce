export default function CountdownDesign() {
  return (
    <div className="flex justify-center items-center gap-2">
      {/* Days */}
      <div className="bg-[#ED174A] text-white rounded-lg flex items-center justify-center w-[3.5rem] h-[3.75rem]">
        <p className="font-semibold text-2xl leading-9">12</p>
      </div>
      <span className="text-[#202435] font-semibold leading-7 text-lg">:</span>

      {/* Hours */}
      <div className="bg-[#ED174A] text-white rounded-lg flex items-center justify-center w-[3.5rem] h-[3.75rem]">
        <p className="font-semibold text-2xl leading-9">08</p>
      </div>
      <span className="text-[#202435] font-semibold leading-7 text-lg">:</span>

      {/* Minutes */}
      <div className="bg-[#ED174A] text-white rounded-lg flex items-center justify-center w-[3.5rem] h-[3.75rem]">
        <p className="font-semibold text-2xl leading-9">45</p>
      </div>
      <span className="text-[#202435] font-semibold leading-7 text-lg">:</span>

      {/* Seconds */}
      <div className="bg-[#ED174A] text-white rounded-lg flex items-center justify-center w-[3.5rem] h-[3.75rem]">
        <p className="font-semibold text-2xl leading-9">20</p>
      </div>
    </div>
  );
}
