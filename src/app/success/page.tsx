import React from "react";
import { Check, ShoppingCart } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { AiOutlineShopping } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const SuccessPage = () => {
  return (
    <div className="flex flex-col justify-center items-center  w-full h-screen ">
      <div className="flex justify-center relative">
        <span className="absolute mt-20 text-green-700  ">
          <Check color="green" size={50} strokeWidth={5} />
        </span>
        <AiOutlineShopping className=" w-40 h-40 " />
      </div>
      <div className="flex flex-col mt-5 justify-center items-center">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-wide lg:text-4xl">
          Thank you for your order!
        </h1>
        <h3 className="pt-3">Check your email inbox for order receipt</h3>
      </div>
      <div>
        <Link href="./products">
          <Button className="bg-black h-12 px-6 mt-6 rounded-md">
            <ShoppingCart className="mr-2 h-4 w-4" /> Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
