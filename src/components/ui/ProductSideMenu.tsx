"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ShoppingCartIcon from "../ui/ShoppingCartIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ProductSideMenu = () => {
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div onClick={handleNav} className="md:hidden cursor-pointer">
        <Menu size={25} />
      </div>

      <div
        className={
          nav ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500 "
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <X />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
            <div className="py-4 flex flex-col">
              <Link
                href="/cart"
                className="flex items-center justify-between gap-2"
              >
                <div>
                  <ShoppingCartIcon cartValue={cartValue}></ShoppingCartIcon>
                </div>
              </Link>
              <ul className="uppercase">
                <Link href="/female" onClick={handleNav}>
                  <li className="py-4 text-sm">Female</li>
                </Link>
                <Link href="/male" onClick={handleNav}>
                  <li className="py-4 text-sm">Male</li>
                </Link>
                <Link href="/kids" onClick={handleNav}>
                  <li className="py-4 text-sm">Kids</li>
                </Link>
                <Link href="/products" onClick={handleNav}>
                  <li className="py-4 text-sm">All Products</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSideMenu;
