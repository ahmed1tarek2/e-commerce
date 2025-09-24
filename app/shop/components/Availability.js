'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleStock } from '@/app/redux/slices/filterSlice';

const Availability = () => {
  const dispatch = useDispatch()
  const selectedStock = useSelector(state=> state.filters.selectedstock);
  const items = useSelector(state => state.products.items) || [];

  const inStockCount = items.filter(
    (p) => p.availabilityStatus === "In Stock"
  ).length;
  const lowStockCount = items.filter(
    (p) => p.availabilityStatus === "Low Stock"
  ).length;


  return (
    <div className="">
      <p className="font-medium">AVAILABILITY</p>
      <ul className="text-gray-500">
        <li className="mb-1 flex justify-between">
          <div className="flex justify-between">
            <input
              type="checkbox"
              id="stock"
              className="mr-2 "
              checked={selectedStock.includes("In Stock")}
              onChange={() => dispatch(toggleStock("In Stock"))}
            />
            <label htmlFor="stock" className="">
              In stock
            </label>
          </div>
          <label className="ml-1">({inStockCount})</label>
        </li>
        <li className="mb-1 flex justify-between">
          <div className="flex justify-between">
            <input
              type="checkbox"
              id="stock1"
              className="mr-2 "
              checked={selectedStock.includes("Low Stock")}
              onChange={() => dispatch(toggleStock("Low Stock"))}
            />
            <label htmlFor="stock1" className="">
              Out of stock
            </label>
          </div>
          <label className="ml-1">({lowStockCount})</label>
        </li>
      </ul>
    </div>
  );
}

export default Availability
