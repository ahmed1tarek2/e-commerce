import React from "react";
import { MapPin, PhoneCall,Mail } from "lucide-react";
const page = () => {
  return (
    <div className="px-48  mx-auto mt-10">
      {/* text */}
      <div className="text-center">
        <h3 className=" text-4xl font-normal mb-4">Get In Touch </h3>
        <p className="w-[460px] text-[14px] leading-[24px] text-gray-900 mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
          veniam vel.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center flex-wrap gap-8 mt-7">
        <Box
          title={"102 Street 2714 Donovan"}
          text={"Lorem ipsum dolar site amet discont"}
          icon={
            <MapPin className="text-[#35AFA0] text-xl text-center ml-[100px]" />
          }
        />
        <Box
          title={"+02 1234 567 88"}
          text={"Lorem ipsum dolar site amet discont"}
          icon={
            <PhoneCall className="text-[#35AFA0] text-xl text-center ml-[100px]" />
          }
        />
        <Box
          title={"info@example.com"}
          text={"Lorem ipsum dolar site amet discont"}
          icon={
            <Mail className="text-[#35AFA0] text-xl text-center ml-[100px]" />
          }
        />
      </div>

      <form className="flex flex-col items-center text-sm mt-20 shadow-[2px_-1px_13px_#dbdada] p-6">
        <p className="text-2xl text-gray-900 font-medium pb-2">Send Us</p>
        <p className="text-sm text-gray-500 text-center pb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br />
          Lorem Ipsum has been the industry's standard dummy text.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:w-[400px] w-[200px]  lg:w-[700px]">
          <div className="w-full">
            <label className="text-black/70" htmlFor="name">
              Your Name
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-black/70" htmlFor="name">
              Your Email
            </label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="email"
              required
            />
          </div>
        </div>

        <div className="mt-6 md:w-[400px] w-[200px]  lg:w-[700px]">
          <label className="text-black/70" htmlFor="name">
            Message
          </label>
          <textarea
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-5 bg-[#35AFA0] text-white h-12 w-56 px-4 rounded active:scale-95 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default page;

const Box = ({ icon, title, text }) => {
  return (
    <div className="bg-gray-300/10 py-6 px-10 text-center">
      {icon}
      <p className=" font-semibold my-2">{title}</p>
      <p className="text-[14px]">{text}</p>
    </div>
  );
};
