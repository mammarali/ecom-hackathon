import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { CartProduct, Product } from "@/utils/types";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/store/store";
import { cartActions } from "@/store/slice/cartSlice";
interface Props {
  cartItem: CartProduct;
}
const CartProductCard = ({ cartItem }: Props) => {
  const [qty, setQty] = useState(cartItem.quantity);
  const dispatch = useAppDispatch();
  const handleCartQuantity = async (newQty: number) => {
    const newPrice = cartItem.price * newQty;
    try {
      if (newQty) {
        const res = await fetch(`api/cart`, {
          method: "PUT",
          body: JSON.stringify({
            product_id: cartItem._id,
            quantity: newQty,
            price: cartItem.price,
          }),
        });
        if (!res.ok) {
          throw new Error("Failed to update data");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCartItemDelete = async () => {
    await fetch(`/api/cart?product_id=${cartItem._id}`, {
      method: "DELETE",
    });
  };

  const increment = () => {
    toast.promise(handleCartQuantity(qty + 1), {
      loading: "Increasing Quantity",
      success: "Quantity Increased",
      error: "Failed to increase quantity",
    });
    setQty(qty + 1);
    dispatch(cartActions.addToCart({ product: cartItem, quantity: 1 }));
  };

  const decrement = () => {
    if (cartItem.quantity > 1) {
      toast.promise(handleCartQuantity(qty - 1), {
        loading: "Decreasing Quantity",
        success: "Quantity Decreased",
        error: "Failed to decrease quantity",
      });
      setQty(qty - 1);
      dispatch(cartActions.decrementCartProduct(cartItem._id));
    }
  };

  const removeItem = () => {
    toast.promise(handleCartItemDelete(), {
      loading: "Removing Product",
      success: "Product Removed",
      error: "Failed to remove product",
    });
    dispatch(cartActions.removeFromCart(cartItem._id));
  };
  return (
    <div
      className="flex flex-col gap-[2rem]  sm:flex-row 
    "
    >
      <div className=" w-4/5 h-1/5 sm:w-3/5 sm:h-1/3 md:w-1/2 md:h-2/5 lg:w-1/2 lg:h-full ">
        <Image
          className="w-full h-full rounded-lg"
          src={urlForImage(cartItem.image[0]).url()}
          alt={cartItem.title}
          width={280}
          height={350}
        />
      </div>

      <div className="flex flex-col justify-between py-4 w-full  ">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold tracking-wider">
            {cartItem.title}
          </h3>

          <Trash2 onClick={removeItem} className="cursor-pointer" />
        </div>
        {Object.entries(cartItem.tagline).map(([key, value]) => (
          <p key={key} className="text-lg text-gray-500 font-semibold">
            {value}
          </p>
        ))}
        <p className="text-lg font-bold text-gray-700">Delivery Estimation</p>
        <p className="font-bold text-[#ffc700]">5 Working Days</p>
        <div className="flex justify-between">
          <p className="text-lg font-bold">${cartItem.price}</p>
          <div className="flex gap-x-3  items-center">
            <div className="flex gap-x-2 items-center  ">
              <button
                className="border h-10 w-10 rounded-full center"
                onClick={decrement}
              >
                -
              </button>
              <div>
                <span className="text-xl">{qty}</span>
              </div>
              <button
                className="border-2 border-black h-10 w-10 rounded-full center"
                onClick={increment}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
