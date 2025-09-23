"use client";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link href="/" className="text-xl font-bold">
        🛍️ My Store
      </Link>
      <Link href="/shop" className="border">
        {" "}
        Shop{" "}
      </Link>
      <Link href="/blog" className="border">
        {" "}
        blog{" "}
      </Link>
      <Link href="/about" className="border">
        {" "}
        about{" "}
      </Link>
      <Link href="/contact" className="border">
        {" "}
        contact{" "}
      </Link>

      <nav className="flex gap-5 items-center">
        <Link href="/store">Store</Link>

        <Link href="/cart" className="relative">
          🛒
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {totalQuantity}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
