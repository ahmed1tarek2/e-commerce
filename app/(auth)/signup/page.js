"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/slices/authSlice";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      toast.error("Please Enter All Data");
      return;
    }
    const result = await dispatch(signupUser(form));
    if (result.meta.requestStatus === "fulfilled") {
      toast.success("Signup successful ");
      router.push("/login");
    } else {
      toast.error(result.payload || "Signup failed");
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="bg-white text-gray-500 w-full max-w-[340px] mx-auto my-24 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Sign Up
      </h2>

      <input
        id="name"
        className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
        type="text"
        placeholder="Username"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        id="email"
        className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        id="password"
        className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
        type="password"
        placeholder="Password"
        required
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full mb-3 bg-[#35AFA0] transition-all active:scale-95 py-2.5 rounded text-white font-medium"
      >
        {loading ? "Creating account..." : "Create Account"}
      </button>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-[#35AFA0] underline">
          Log In
        </Link>
      </p>
    </form>
  );
}
