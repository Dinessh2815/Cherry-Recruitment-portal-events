import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center h-1/2 md:h-full">
        <img
          src="/eventsdetails.png"
          alt="eventsdetails"
          className="w-full h-auto"
        />
      </div>

      {/* Right Section with Full Background */}
      <div className="relative flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
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
