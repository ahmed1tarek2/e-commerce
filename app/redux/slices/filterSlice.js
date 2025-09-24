// import { createSlice } from "@reduxjs/toolkit";

// const filterCategorySlice = createSlice({
//   name: "filterCategory",
//   initialState: {
//     selectedCategories: [],
//   },
//   reducers: {
//     toggleCategory: (state, action) => {
//       const category = action.payload;
//       if (state.selectedCategories.includes(category)) {
//         state.selectedCategories = state.selectedCategories.filter(
//           (c) => c !== category
//         );
//       } else {
//         state.selectedCategories.push(category);
//       }
//     },
//     clearCategories: (state) => {
//       state.selectedCategories = [];
//     },
//   },
// });

// export const { toggleCategory, clearCategories } = filterCategorySlice.actions;
// export default filterCategorySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    selectedCategories: [],
    selectedbrands: [],
    selectedstock: null,
    togglePriceRange: { min: 0, max: 99999 },
  },
  reducers: {
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(
          (c) => c !== category
        );
      } else {
        state.selectedCategories.push(category);
      }
    },
    toggleBrand: (state, action) => {
      const brand = action.payload;
      if (state.selectedbrands.includes(brand)) {
        state.selectedbrands = state.selectedbrands.filter((b) => b !== brand);
      } else {
        state.selectedbrands.push(brand);
      }
    },
    toggleStock: (state, action) => {
      const stock = action.payload;
      if (state.selectedstock.includes(stock)) {
        state.selectedstock = state.selectedstock.filter((s) => s !== stock);
      } else {
        state.selectedstock.push(stock);
      }
    },
    togglePriceRange: (state, action) => {
      const range = action.payload;
      const isExist = state.priceRange.some(
        (r) => r.min === range.min && r.max === range.max
      );
      state.priceRange = isExist
        ? state.priceRange.filter(
            (r) => !(r.min === range.min && r.max === range.max)
          )
        : [...state.priceRange, range];
    },
  },
});

export const { toggleCategory, toggleBrand, toggleStock, togglePriceRange } =
  filterSlice.actions;
export default filterSlice.reducer;
