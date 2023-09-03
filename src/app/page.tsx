import React from "react";
import Hero from "@/views/Hero";
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
