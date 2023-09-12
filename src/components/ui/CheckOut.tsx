"use client";
import React from "react";
import { CartProduct } from "@/utils/types";
import getStripePromise from "@/lib/stripe";

interface IProps {
  products: CartProduct[];
}
const StripeCheckoutButton = (props: IProps) => {
  const handleStripeCheckout = async () => {
    const stripe = await getStripePromise();

    const res = await fetch("/api/stripe-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(props.products),
    });

    const data = await res.json();

    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };
  return (
    <div className="py-5">
      <button
        className="bg-[#212121] text-white py-3 px-3 rounded-md  "
        onClick={handleStripeCheckout}
      >
        Process to Checkout
      </button>
    </div>
  );
};

export default StripeCheckoutButton;
