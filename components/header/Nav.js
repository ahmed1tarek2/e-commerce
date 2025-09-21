import React from "react";
import Logo from "../Logo";
import UserMenu from "./UserMenu";
import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link"

const Nav = ({ open, setOpen }) => {
  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="flex items-center justify-between lg:px-48 px-6 py-3 mx-auto container">
        {/* Logo */}
        <Logo />

        {/* Search (Desktop only) */}
        <div className="hidden lg:flex flex-1 items-center border pl-3 gap-2 mx-6 bg-gray-200/30 border-gray-200/30 h-[46px] rounded-md overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 30 30"
            fill="#6B7280"
          >
            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
          </svg>
          <input
            type="text"
            placeholder="Search for products"
            className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm bg-transparent"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* User Menu */}
          <div className="hidden lg:block">
            <UserMenu />
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#35AFA0] text-white text-xs flex items-center justify-center">
              0
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-700"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {/* Mobile Search */}
          <div className="flex items-center border pl-3 gap-2 bg-gray-200/30 border-gray-200/30 h-[42px] rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm bg-transparent"
            />
          </div>

          {/* User Menu */}
          <UserMenu />

          <Link href="/" className="block text-left text-gray-600">Home</Link>
          <Link href='/shop' className="block text-left text-gray-600">Shop</Link>
           <Link href="/blog" className="block text-left text-gray-600">Blog</Link>
          <Link href="/about" className="block text-left text-gray-600">About</Link>
          <Link href="/contact" className="block text-left text-gray-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;



// import React from 'react'
// import Logo from '../Logo'
// import UserMenu from "./UserMenu"
// import { ShoppingCart } from "lucide-react";

// const Nav = () => {
//   return (
//     <div className=" flex items-center px-48 py-2 gap-30 border-b border-gray-100">
//       <Logo />
//       <div className="flex-1 flex items-center gap-5 w-full">
//         {/* search */}
//         <div className="flex items-center border pl-3 gap-2 mr-4 bg-gray-200/30 border-gray-200/30 h-[46px] rounded-md overflow-hidden w-full">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="22"
//             height="22"
//             viewBox="0 0 30 30"
//             fill="#6B7280"
//           >
//             <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search for products"
//             className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
//           />
//         </div>

//         {/* user menu */}
//         <UserMenu />
//         {/* cart icon */}
//         <div className="relative cursor-pointer">
//           <ShoppingCart />
//           <span className=" absolute left-[17px] top-[-13px] w-5 h-5 rounded-full bg-[#35AFA0] text-white flex items-center justify-center">
//             0
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Nav



