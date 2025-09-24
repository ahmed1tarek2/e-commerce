"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import api from "@/lib/axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/lib/redux/featuers/authSlice";

export default function Loign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Please fill all fields");
    }
    try {
      const res = await dispatch(loginUser({ email, password }));
      if (res.meta.requestStatus === "fulfilled") {
        toast.success("Login successful ");
        router.push("/");
      }
    } catch (err) {
      toast.error(result.payload || "Signup failed");
    }
  };
  return (
    <form
      onSubmit={handleLogin}
      className="bg-white text-gray-500 w-full max-w-[340px] mx-auto my-24 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Sign In
      </h2>

      <input
        id="email"
        className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        id="password"
        className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full mb-3 bg-[#35AFA0] transition-all active:scale-95 py-2.5 rounded text-white font-medium"
      >
        {loading ? "Login..." : "Login"}
      </button>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <p className="text-center mt-4">
        Already have an account?
        <Link href="/signup" className="text-[#35AFA0] underline">
          Create Account
        </Link>
      </p>
    </form>
  );
}
