import React from "react";
import Image from "next/image";
import Productcategory from "./Productcategory";
import Brands from "./Brands";
import Pricecomponent from "./Pricecomponent";
import Availability from "./Availability";

const Sideshop = () => {
  return (
    <div className="grow-1 px-2 max-w-xl">
      {/* PRODUCT div */}
      <Productcategory />

      {/* BRANDS div */}
      <Brands />

      {/* price div */}
      <Pricecomponent />

      {/* AVAILABILITY div */}
      <Availability />

      {/* image div */}
      <div className="mt-20 bg-amber-800">
        <Image
          src="/assetes/images/sidebar-banner.gif.jpg"
          alt="..."
          width={270}
          height={370}
          className="block w-full"
        />
      </div>
    </div>
  );
};

export default Sideshop;
