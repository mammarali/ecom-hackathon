import React from "react";

const FooterBottom = () => {
  return (
    <div>
      <div className="border-t-2 border-black mt-[6rem] w-screen"></div>
      <div className="flex flex-wrap justify-around w-screen  ">
        <p className="text-sm my-3 lg:my-[1.5rem] text-gray-600 ">
          Copyright © 2022 Dine Market
        </p>
        <p className="text-sm my-3 lg:my-[1.5rem] text-gray-600 ">
          Design by.{" "}
          <span className="text-black font-bold">Weird Design Studio</span>
        </p>
        <p className="text-sm my-3 lg:my-[1.5rem] text-gray-600 ">
          Code by.{" "}
          <span className="text-black font-bold">mammarali on github</span>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
