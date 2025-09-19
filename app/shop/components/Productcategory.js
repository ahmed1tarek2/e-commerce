import React from 'react'

const Productcategory = () => {
  return (
    <div className="mb-4">
      <p className="font-medium">PRODUCT CATEGORIES</p>
      <div>
        <ul className="text-gray-500">
          <li className="mb-1">
            <input type="checkbox" id="check1" className="mr-2 " />
            <label htmlFor="check1" className="text-color1">
              Beverages
            </label>
          </li>
          <li className="mb-1">
            <input type="checkbox" id="check2" className="mr-2 " />
            <label htmlFor="check2" className="text-color1">
              Biscuits & Snacks
            </label>
          </li>
          <li className="mb-1">
            <input type="checkbox" id="check3" className="mr-2 " />
            <label htmlFor="check3" className="text-color1">
              Breads & Bakery
            </label>
          </li>
          <li className="mb-1">
            <input type="checkbox" id="check4" className="mr-2 " />
            <label htmlFor="check4" className="text-color1">
              Breakfast & Dairy
            </label>
          </li>
          <li className="mb-1">
            <input type="checkbox" id="check5" className="mr-2 " />
            <label htmlFor="check5" className="text-color1">
              Frozen Foods
            </label>
          </li>
          <li className="mb-1">
            <input type="checkbox" id="check6" className="mr-2 " />
            <label htmlFor="check6" className="text-color1">
              Fruits & Vegetables
            </label>
          </li>
          <li className="mb-1">
            <input type="checkbox" id="check7" className="mr-2 " />
            <label htmlFor="check7" className="text-color1">
              Grocery & Staples
            </label>
          </li>
          <li className="mb-1">
            <input type="checkbox" id="check8" className="mr-2 " />
            <label htmlFor="check8" className="text-color1">
              Household Needs
            </label>
          </li>
          <li className="mb-1">
            <input type="checkbox" id="check9" className="mr-2 " />
            <label htmlFor="check9" className="text-color1">
              Meats & Seafood
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Productcategory
