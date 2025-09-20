import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Productcard = () => {
  return (
    <div className="p-4 border border-gray-200">
              <div className="relative">
                <span className="absolute rounded color2 px-1 text-sm">22%</span>
                <Image
                  src="/assetes/images/Link.png"
                  alt="..."
                  width={175}
                  height={155}
                  className="w-full"
                />
              </div>
              <p className="font-medium text-md">100% Butter French Croissants</p>
              <p className="text-green-600 uppercase text-xs font-medium">
                In stock
              </p>
              <div>
                <FontAwesomeIcon
                  className="text-xs text-yellow-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="text-xs text-yellow-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="text-xs text-yellow-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="text-xs text-yellow-400"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="text-xs text-yellow-400"
                  icon={faStar}
                />
                <span className="text-gray-400 ml-2 text-sm">1review</span>
              </div>
              <span className="text-gray-400 text-md line-through font-medium">
                $1.00
              </span>
              <span className="text-red-600 text-lg font-medium ml-1">$1.44</span>
              <div className="font-bold flex items-center mt-2">
                <button className="bg-gray-300 w-10 h-8 rounded-l-full "> - </button>
                <input
                  type="text"
                  placeholder="0"
                  className="border border-gray-100 w-20 h-8 text-center"
                />
                <button className="bg-yellow-400 w-10 h-8 rounded-r-full cursor-pointer"> + </button>
              </div>
            </div>
  )
}

export default Productcard
