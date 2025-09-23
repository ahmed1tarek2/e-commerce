import React from 'react'

const Availability = () => {
  return (
    <div className="">
      <p className="font-medium">AVAILABILITY</p>
      <ul className="text-gray-500">
        <li className="mb-1 flex justify-between">
          <div className="flex justify-between">
            <input type="checkbox" id="stock" className="mr-2 " />
            <label htmlFor="stock" className="">
              In stock
            </label>
          </div>
          <label className="ml-1">(62)</label>
        </li>
        <li className="mb-1 flex justify-between">
          <div className="flex justify-between">
            <input type="checkbox" id="stock1" className="mr-2 " />
            <label htmlFor="stock1" className="">
              Out of stock
            </label>
          </div>
          <label className="ml-1">(0)</label>
        </li>
      </ul>
    </div>
  );
}

export default Availability
