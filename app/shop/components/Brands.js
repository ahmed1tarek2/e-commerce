"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleBrand } from "@/app/redux/slices/filterSlice";

const Brands = () => {
  const dispatch = useDispatch();
  const { selectedbrands } = useSelector((state) => state.filters);
  const items = useSelector((state) => state.products.items);

  const allbrands = [...new Set(items.map((p) => p.brand || "..."))];
  return (
    <div className="mb-8">
      <p className="font-medium">BRANDS</p>
      <ul className="text-gray-500">
        {allbrands.map((br, i) => {
          const count = items.filter((p) => p.brand === br).length;
          return (
            <li key={i} className="mb-1 flex justify-between">
              <div className="flex justify-between">
                <input
                  type="checkbox"
                  id="filter1"
                  className="mr-2 "
                  checked={selectedbrands.includes(br)}
                  onChange={() => dispatch(toggleBrand(br))}
                />
                <label htmlFor="filter1" className="">
                  {br}
                </label>
              </div>
              <label className="ml-1">({count})</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Brands;
