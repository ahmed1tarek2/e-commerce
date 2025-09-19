import React from 'react'

const Brands = () => {
  return (
    <div className="mb-8">
      <p className="font-medium">BRANDS</p>
      <ul className="text-gray-500">
        <li className="mb-1 flex justify-between">
          <div className="flex justify-between">
            <input type="checkbox" id="filter1" className="mr-2 " />
            <label htmlFor="filter1" className="">
              Frito Lay
            </label>
          </div>
          <label className="ml-1">(8)</label>
        </li>
        <li className="mb-1 flex justify-between">
          <div className="flex justify-between">
            <input type="checkbox" id="filter2" className="mr-2 " />
            <label htmlFor="filter2" className="">
              Quaker
            </label>
          </div>
          <label className="ml-1">(36)</label>
        </li>
        <li className="mb-1 flex justify-between">
          <div className="flex justify-between">
            <input type="checkbox" id="filter3" className="mr-2 " />
            <label htmlFor="filter3" className="">
              Cola
            </label>
          </div>
          <label className="ml-1">(1)</label>
        </li>
        <li className="mb-1 flex justify-between">
          <div className="flex justify-between">
            <input type="checkbox" id="filter4" className="mr-2 " />
            <label htmlFor="filter4" className="">
              Welch's
            </label>
          </div>
          <label className="ml-1">(1)</label>
        </li>
        <li className="mb-1 flex justify-between">
          <div className="flex justify-between">
            <input type="checkbox" id="filter5" className="mr-2 " />
            <label htmlFor="filter5" className="">
              Oreo
            </label>
          </div>
          <label className="ml-1">(16)</label>
        </li>
      </ul>
    </div>
  );
}

export default Brands
