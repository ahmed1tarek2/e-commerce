"use client";

import {React , useEffect} from "react";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/app/redux/slices/cartSlice";
import { fetchProducts } from "@/app/redux/slices/productsSlice";

const Productcard = () => {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart.items);

  // const products = useSelector(state => state.products.items)

    useEffect(() => {
      dispatch(fetchProducts()); // ← هنا بيجيب المنتجات
    }, [dispatch]);
    if (loading) return <p>جاري تحميل المنتجات...</p>;
  if (error) return <p>خطأ: {error}</p>;
  if (!items || items.length === 0) return <p>لا يوجد منتجات</p>;
  // const selectedCategories = useSelector(
  //   (state) => state.filterCategory.selectedCategories
  // );

  // const filteredProducts = products.filter((p) =>
  //   selectedCategories.length === 0
  //     ? true
  //     : selectedCategories.includes(p.category)
  // );

  
  
  return (
    <div className="rounded-md mt-2 border border-gray-200 grid grid-cols-4">
      {items.map((pro , i) => {
        const inCart = cart.find((item) => item.id === pro.id);
        
          <div key={i} className="p-8 border border-gray-200">
            <div className="relative">
              <span className="absolute rounded color2 px-1 text-sm">
                {pro.discount}
              </span>
              <Image
                src={pro.img}
                alt="..."
                width={175}
                height={155}
                className="w-full"
              />
            </div>
            <p className="font-medium text-md">{pro.title}</p>
            <p className="text-green-600 uppercase text-xs font-medium">
              {pro.stock}
            </p>
            <div>
              {/* <Ratingpro rating={pro.rating} /> */}
              <Rating
                name="rating"
                value={pro.rating ?? 0}
                precision={0.5}
                readOnly
              />
              <span className="text-gray-400 ml-2 text-sm">
                {pro.review}review
              </span>
            </div>
            <span className="text-gray-400 text-md line-through font-medium">
              ${pro.price}
            </span>
            <span className="text-red-600 text-lg font-medium ml-1">
              ${pro.price}
            </span>
            <div className="font-bold flex items-center mt-2">
              <button
                className="bg-gray-300 w-10 h-8 rounded-l-full "
                onClick={() => dispatch(removeFromCart(pro.id))}
              >
                {" "}
                -{" "}
              </button>
              <span className="border border-gray-100 w-20 h-8 text-center">
                {inCart ? inCart.quantity : 0}
              </span>
              <button
                className="bg-yellow-400 w-10 h-8 rounded-r-full "
                onClick={() => dispatch(addToCart(pro))}
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>
        
      })}
    </div>
  );
};

export default Productcard;
