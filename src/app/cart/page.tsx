"use client";
import React, { use } from "react";
import CartProductCard from "@/components/ui/CartProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAppSelector } from "@/store/store";
import { ShoppingBag } from "lucide-react";
import StripeCheckoutButton from "@/components/ui/CheckOut";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = useAppSelector((state) => state.cart.totalQuantity);
  const totalPrice = useAppSelector((state) => state.cart.totalAmount);

  if (cartItems.length > 0) {
    return (
      <div className="m-[4rem] min-[1000px]:p-[3rem] min-[1210px]:my-[4rem] min-[1210px]:mx-[6rem] min-[1290px]:mx-[8rem]">
        <div>
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-[4rem] justify-between">
          <div className="flex flex-[3_1_0%] flex-col  gap-y-[2rem]  mt-[2rem] ">
            {cartItems.map((element) => (
              <CartProductCard key={element._id} cartItem={element} />
            ))}
          </div>
          <div className="flex-1 p-[1rem]   ">
            <div className="flex flex-col p-[2rem]  gap-[2rem] bg-slate-200 rounded-2xl ">
              <h1 className=" text-xl font-bold">Order Summary</h1>

              <div className="flex justify-between gap-[4rem]">
                <h2 className="text-xl ">Quantity</h2>
                <h2 className="text-xl">{totalItems}</h2>
              </div>

              <div className="flex justify-between gap-[4rem]">
                <h2 className="text-xl ">Sub Total</h2>
                <h2 className="text-xl">${totalPrice}</h2>
              </div>

              <div className="flex items-center justify-center">
                <StripeCheckoutButton products={cartItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="my-[4rem] mx-[8rem] lg:p-[3rem]">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>

        <div className="flex flex-col w-full gap-10 h-full justify-center items-center">
          <ShoppingBag size={200} />
          <h1 className="text-2xl font-bold">Your shopping bag is empty</h1>
        </div>
      </div>
    );
  }
};

export default Cart;
