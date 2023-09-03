"use client";

import React from "react";
import { Product } from "@/utils/types";
import ProductCard from "@/components/ui/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface ProductProps {
  products: Product[];
}

const ProductList = ({ products }: ProductProps) => {
  return (
    <div className="mx-8 sm:mx-16 lg:mx-24 xl:mx-32">
      <div className="w-full mt-6">
        <p className="text-sm font-semibold text-blue-600 text-center tracking-widest leading-7 [&:not(:first-child)]:mt-6">
          PRODUCTS
        </p>
        <h2 className="text-center mt-4 scroll-m-20  pb-2 text-4xl font-semibold tracking-normal transition-colors first:mt-0">
          Check What We Have
        </h2>
      </div>
      <Swiper
        breakpoints={{
          // width >= 300
          300: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          // width >= 1000
          1000: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          // width >= 1260
          1260: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        spaceBetween={0}
        slidesPerView={3}
      >
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <SwiperSlide key={product.title}>
              <ProductCard
                tagline={product.tagline}
                care={product.care}
                detail={product.detail}
                title={product.title}
                price={product.price}
                img={product.image}
                category={product.category}
                slug={product.slug}
              ></ProductCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default ProductList;
