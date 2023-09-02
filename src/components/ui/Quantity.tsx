"use client";
import React, { useState } from "react";

const Quantity = () => {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex gap-x-2 items-center  ">
      <button
        className="border h-8 w-8 rounded-full center"
        onClick={() => {
          setQty(qty <= 1 ? 1 : qty - 1);
        }}
      >
        -
      </button>
      <div>
        <span>{qty}</span>
      </div>
      <button
        className="border-2 border-black h-8 w-8 rounded-full center"
        onClick={() => {
          setQty(qty + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
