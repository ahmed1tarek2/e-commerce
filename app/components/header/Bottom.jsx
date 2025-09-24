import Link from "next/link";
import React from "react";

const Bottom = () => {
 

  return (
    <nav className="w-full bg-white border-b border-gray-100 hidden lg:block">
      <div className="flex items-center justify-center gap-10 px-8 py-3">
        <Link
          href="/"
          className="relative px-4 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          href="/shop"
          className="relative px-4 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group"
        >
          Shop
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          href="/about"
          className="relative px-4 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/blog"
          className="relative px-4 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group"
        >
          Blog
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          href="/contact"
          className="relative px-4 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group"
        >
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Bottom;



