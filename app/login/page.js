export default function Loign() {
  return (
    <form className="bg-white text-gray-500 w-full max-w-[340px] mx-auto my-24 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Sign In
      </h2>

   
      <input
        id="email"
        className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
        type="email"
        placeholder="Email"
        required
      />
      <input
        id="email"
        className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
        type="text"
        placeholder="Password"
        required
      />

      <button className="w-full mb-3 bg-[#35AFA0] transition-all active:scale-95 py-2.5 rounded text-white font-medium">
        Create Account
      </button>

      <p className="text-center mt-4">
        Already have an account?
        <a href="#" className="text-[#35AFA0] underline">
          Log In
        </a>
      </p>
    </form>
  );
}
