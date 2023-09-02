import React, { lazy } from "react";
import Image from "next/image";
import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import Promotion from "@/views/Promotion";
import Features from "@/views/Features";
import Newsletter from "@/views/Newsletter";
import SwiperProducts from "@/views/SwiperProducts";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Promotion></Promotion>
      <SwiperProducts></SwiperProducts>
      <Features></Features>
      <Newsletter></Newsletter>
    </div>
  );
}
