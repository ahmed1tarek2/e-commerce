"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { User } from "lucide-react";
import api from "@/lib/axios"; 
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Fetch logged-in user
  useEffect(() => {
    api
      .get("/auth/user")
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      setUser(null);
      toast.success("Logged out");
      router.push('/login')
    } catch (err) {
      toast.error("Logout failed ");
    }
    setOpen(false);
  };

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
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border z-[1000]">
          {!user ? (
            <>
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
            </>
          ) : (
            <>
              <p className="px-4 py-2 text-gray-700">Hi, {user.email}</p>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// "use client";

// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { User } from "lucide-react";

// export default function UserMenu() {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef(null);

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target )) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative" ref={menuRef}>
//       {/* User Icon */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="p-2 rounded-full bg-gray-100 transition cursor-pointer"
//       >
//         <User className="w-6 h-6 text-gray-700" />
//       </button>

//       {/* Dropdown Menu */}
//       {open && (
//         <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border z-[1000]">
//           <Link
//             href="/login"
//             className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//             onClick={() => setOpen(false)}
//           >
//             Login
//           </Link>
//           <Link
//             href="/signup"
//             className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//             onClick={() => setOpen(false)}
//           >
//             Create Account
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }
