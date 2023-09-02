import React from "react";
import { Button } from "@/components/ui/button";
const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[10rem] mx-8 sm:mx-16 lg:mx-24 xl:mx-32 ">
      <div className="flex items-center justify-center absolute">
        <h1 className="text-7xl sm:text-8xl md:text-9xl -z-[1] text-[#f2f3f7] font-extrabold">
          Newsletter
        </h1>
      </div>
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl text-center font-bold">
          Subscribe Our Newsletter
        </h1>
        <p className="text-lg pt-5 text-center">
          Get the latest information and promo offers directly
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row pt-5">
        <input
          className="border py-[10px] pl-[100px] pr-[20px] border-gray-400  h-fit"
          type="email"
          placeholder="Input email address"
        ></input>
        <Button className="ml-[10px] w-fit rounded-none h-[45px] px-[20px] py-[10px] ">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
