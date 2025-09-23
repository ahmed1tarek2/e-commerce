import React from 'react'

const Pricecomponent = () => {
  return (
    <div className="mb-8">
      <p className="font-medium mb-2">PRICE</p>
      <div className="mb-4 flex justify-between">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-500" id="from">
            From
          </label>
          <input
            htmlFor="from"
            type="number"
            placeholder="0"
            className="bg-blue-100 w-24 rounded mr-2 pl-2 py-2"
          />
        </div>
        <span className="text-gray-700 mt-8">-</span>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-500" id="to">
            To
          </label>
          <input
            htmlFor="to"
            type="number"
            placeholder="65.00"
            className="bg-blue-100 w-24 rounded mr-2 pl-2 py-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Pricecomponent
