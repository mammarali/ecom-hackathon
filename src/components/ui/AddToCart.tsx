"use client";
import { Button } from "./button";
import { ShoppingCart } from "lucide-react";
import { cartActions } from "@/store/slice/cartSlice";
import { useAppDispatch } from "@/store/store";
import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { CartProduct } from "@/utils/types";
import { urlForImage } from "../../../sanity/lib/image";
import { Cart } from "@/lib/drizzle";

type IProps = {
  product: CartProduct;
  qty: number;
  userId: string;
};

type CartData = {
  cartItems: Cart[];
  totalQuantity: number;
  totalPrice: number;
};

const AddToCart = (props: IProps) => {
  const getDataFromDB = async () => {
    const res = await fetch(`/api/cart/${props.userId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  };

  const handleAddToCart = async () => {
    const res = await fetch(`/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        product_id: props.product._id,
        product_name: props.product.title,
        quantity: qty,
        price: props.product.price,
        image: urlForImage(props.product.image[0]).url(),
        tagline: props.product.tagline,
        total_price: props.product.price * props.qty,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to add Data to Cart");
    }
  };

  const handleCart = async () => {
    try {
      const cartData = await getDataFromDB();
      const existingItem = cartData.cartItems.find(
        (item: any) => item._id === props.product._id
      );
      if (existingItem) {
        const newQauntity = existingItem.quantity + qty;
        const newTotalPrice = props.product.price * newQauntity;
        const res = await fetch(`/api/cart`, {
          method: "PUT",
          body: JSON.stringify({
            product_id: props.product._id,
            quantity: newQauntity,
            total_price: newTotalPrice,
          }),
        });
        if (!res.ok) {
          throw new Error("Failed to update Data");
        }
      } else {
        await handleAddToCart();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [qty, setQty] = useState(1);
  const dispatch = useAppDispatch();
  const addItem = () => {
    toast.promise(handleCart(), {
      loading: "Adding Data to Cart",
      success: "Data Added to Cart",
      error: "Failed to Add Data",
    });
    dispatch(cartActions.addToCart({ product: props.product, quantity: qty }));
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
