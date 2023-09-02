import React from "react";
import { ShoppingCart } from "lucide-react";

const ShoppingCartIcon = ({ cartValue }: { cartValue: number }) => {
  return (
    <div>
      <div className=" h-14 w-14 rounded-full bg-gray-200 flex relative justify-center items-center ">
        <span className="absolute flex right-1 top-0 h-5 w-5 bg-red-500 text-white text-md rounded-full justify-center items-center ">
          {cartValue}
        </span>
        <ShoppingCart className="absolute right-3 h-8 w-8" />
      </div>
    </div>
  );
};

export default ShoppingCartIcon;
