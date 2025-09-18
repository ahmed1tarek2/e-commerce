"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { User } from "lucide-react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target )) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* User Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-gray-100 transition cursor-pointer"
      >
        <User className="w-6 h-6 text-gray-700" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border">
          <Link
            href="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Create Account
          </Link>
        </div>
      )}
    </div>
  );
}
