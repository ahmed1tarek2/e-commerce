import { HandshakeIcon } from "lucide-react";
import React from "react";

const Top = () => {
  return (
    <div className="flex flex-col text-[14px] border-b border-gray-100">
      <p className=" bg-[#35AFA0]  text-white py-1 text-center">
        Due to current circumstances, there may be slight delays in order
        processing
      </p>
      <div className="flex items-center px-48 justify-between py-2">
        <p className="flex items-center">
          <span>
            <HandshakeIcon />
          </span>
          100% Secure delivery without contacting the courier
        </p>
        <p>
          Need Help? Call us : <span className="text-[#35AFA0]">+02228838</span>
        </p>
      </div>
    </div>
  );
};

export default Top;
