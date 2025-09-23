"use client"
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toggleCategory } from '@/app/redux/slices/filterSlice';

const Productcategory = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters)
  const products = useSelector(state => state.products.items)
  
  const categories = products.category;
  console.log(products)
  // const categoriesCount = products.reduce((acc, product) => {
  //   acc[product.category] = (acc[product.category] || 0) + 1;
  //   return acc;
  // }, {});
// const categories = Object.keys(categoriesCount);
 
  // const selectedCategories = useSelector(
  //   (state) => state.filters.selectedCategories
  // );


  return (
    <div className="mb-4">
      <p className="font-medium">PRODUCT CATEGORIES</p>
      <div>
        <ul className="text-gray-500">
          {categories?.map((cat) => {
            return (
              <li key={cat} className="mb-1">
                <input
                  type="checkbox"
                  id="check1"
                  className="mr-2 "
                  checked={filters.categories.includes(cat)}
                  onChange={() => dispatch(toggleCategory(cat))}
                />
                <label key={cat} htmlFor="check1" className="text-color1">
                  {cat} 
                </label>
              </li>
            );
          })}
          
        </ul>
      </div>
    </div>
  );
}

export default Productcategory
