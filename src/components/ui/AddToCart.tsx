"use client";
import { Button } from "./button";
import { ShoppingCart } from "lucide-react";
import { cartActions } from "@/store/slice/cartSlice";
import { useAppDispatch } from "@/store/store";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CartProduct } from "@/utils/types";

type IProps = {
  product: CartProduct;
  qty: number;
};
const AddToCart = (props: IProps) => {
  const [qty, setQty] = useState(1);
  const dispatch = useAppDispatch();
  const addItem = () => {
    dispatch(cartActions.addToCart({ product: props.product, quantity: qty }));
    toast.success("Product Added Successfully");
  };

  return (
    <div>
      <div className="flex gap-x-3 mb-6 items-center">
        <h3 className="text-sm font-semibold">Quantity:</h3>
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
      </div>
      <Button onClick={addItem} className="bg-black h-10 px-6  rounded-none">
        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
