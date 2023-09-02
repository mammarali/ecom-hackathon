"use client";

import Link from "next/link";
import logo from "/public/logo.webp";
import Image from "next/image";
import React, { useState } from "react";

import ProductSideMenu from "../ui/ProductSideMenu";
import ShoppingCartIcon from "../ui/ShoppingCartIcon";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";

const Header = () => {
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  return (
    <div className="mx-8 sm:mx-16 lg:mx-24 xl:mx-32">
      <div className="flex justify-between items-center  my-8 ">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-40" />
        </Link>

        <ul className="hidden md:flex gap-x-10">
          <li className="text-lg">
            <Link href="/female">Female</Link>
          </li>
          <li className="text-lg">
            <Link href="/male">Male</Link>
          </li>
          <li className="text-lg">
            <Link href="/kids">Kids</Link>
          </li>
          <li className="text-lg">
            <Link href="/products">All Products</Link>
          </li>
        </ul>

        <ProductSideMenu></ProductSideMenu>

        <div className="hidden md:flex">
          <ShoppingCartIcon cartValue={cartValue}></ShoppingCartIcon>
        </div>
      </div>
    </div>
  );
};

export default Header;
