import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Productcard from "@/components/shop/Productcard";
import Pagination from "@/components/shop/Pagination";

const Itemsshop = () => {
  return (
    <div className="grow-10 px-2">
      {/* image div */}
      <div className=" ">
        <Image
          src="/assetes/images/Container.png"
          alt="..."
          width={855}
          height={240}
          className="block w-full"
        />
      </div>
      {/* caption div */}
      <div className="flex justify-between py-4 px-12 mt-4 bg-blue-50 rounded text-xs">
        <div className="text-gray-400">62products</div>
        <div>
          <span className="text-gray-400">Sort by:</span>
          <span className="font-medium">Alphabetically,A-Z</span>
        </div>
      </div>

      {/* product div */}
      <div className="rounded-md mt-2 border gap-4 border-gray-200 grid grid-cols-4">
        {/* product card */}
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
      </div>
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default Itemsshop;
