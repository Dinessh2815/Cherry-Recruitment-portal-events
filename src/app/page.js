import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-full">
      {/* Left Section with SVG */}
      <div className="relative flex items-center justify-center w-full md:w-1/2 h-[70vh] md:h-[100vh] overflow-hidden">
        {/* SVG Image */}
        <img
          src="/eventsleft.svg"
          alt="Events Left"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section with Full Background */}
      <div className="relative flex items-center justify-center w-full md:w-1/2 h-[70vh] md:h-[100vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/eventsbg.png')",
          }}
        />

        {/* Apply Now Button */}
        <button className="relative z-10 border rounded-full border-white bg-black text-white px-10 md:px-20 py-2 md:py-4">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Page;
