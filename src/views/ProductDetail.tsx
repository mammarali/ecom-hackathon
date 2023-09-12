"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CartProduct, Product, ProductDetails } from "@/utils/types";
import { urlForImage } from "../../sanity/lib/image";
import AddToCart from "@/components/ui/AddToCart";
import { auth } from "@clerk/nextjs";

//

// Type definition for Component Props
interface ProductProps {
  product: ProductDetails;
  userId: string;
}

// This is the Component function for rendering details of a Single Product (fetched from Sanity)
// using props parameter when we click on Single Product
const ProductDetail: React.FC<ProductProps> = ({ product, userId }) => {
  // "product" is the return of data fetching from Sanity

  const cartPorduct: CartProduct = {
    _id: product._id,
    title: product.title,
    price: product.price,
    totalPrice: product.totalPrice,
    tagline: product.tagline,
    image: product.image,
    quantity: product.quantity,
    userId: product.userId,
  };

  const sizes = ["XS", "S", "M", "L", "XL"];

  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="py-[2rem] md:py-[4rem] px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-[2_1_0%] gap-[2rem]">
            <div className="flex flex-col gap-[1rem]">
              {product.image.map((item, ind) => (
                <Image
                  className="w-[100px] h-[100px] cursor-pointer "
                  key="index"
                  src={urlForImage(item).url()}
                  width={100}
                  height={100}
                  onMouseEnter={() => setIndex(ind)}
                  alt="Product"
                />
              ))}
            </div>
            <div className="w-3/4 lg:w-4/5 h-full">
              <Image
                className="w-full h-full"
                src={urlForImage(
                  product.image[0] && product.image[index]
                ).url()}
                width={600}
                height={700}
                alt="Product"
              ></Image>
            </div>
          </div>

          <div className="flex-1 flex-col gap-[2rem] mt-[4rem] ">
            <div key="title" className="flex gap-6 ">
              <div>
                <div>
                  <h1 className="text-2xl">{product.title}</h1>

                  <h2 className="text-base text-gray-400 font-semibold ">
                    {product.tagline}
                  </h2>
                </div>

                <div>
                  <h3 className="text-xs font-semibold mt-6">SELECT SIZE</h3>
                </div>

                {/* Sizes */}
                <div className="flex gap-x-3 ">
                  {sizes.map((size) => {
                    return (
                      <button
                        key="item"
                        className="flex items-center justify-center mt-2 h-7 w-7 rounded-full hover:shadow duration-300"
                      >
                        <span className="text-sm font-semibold text-center text-gray-600">
                          {size}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* <div className="flex gap-x-3 mt-6 items-center">
                  <h3 className="text-sm font-semibold">Quantity:</h3>
                  <Quantity></Quantity>
                </div> */}
                <div className="flex items-end mt-6 gap-x-3">
                  <div>
                    <AddToCart
                      product={cartPorduct}
                      qty={1}
                      userId={userId as string}
                    />
                  </div>
                  <div className="text-xl font-bold">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[2rem] py-[2rem] md:py-[4rem] px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]">
        <div>
          <h1 className="text-2xl font-bold">Product Information</h1>
        </div>

        <div className="border-t-2 border-gray-400  w-full"></div>

        <div className="flex max-[450px]:flex-col max-[450px]:gap-[2rem] ">
          <h3 className="flex-1 text-lg font-bold text-gray-500">
            PRODUCT DETAILS
          </h3>
          <p className="flex-[2_1_0%] text-justify text-lg text-gray-500 tracking-wider">
            {product.detail}
          </p>
        </div>

        <div className="flex max-[450px]:flex-col max-[450px]:gap-[2rem]">
          <h3 className="flex-1 text-lg font-bold text-gray-500">
            PRODUCT CARE
          </h3>

          <ul className="flex-[2_1_0%] text-justify text-lg text-black tracking-wider list-disc ml-[24px] ">
            {product.care.map((careItem) => (
              <li key="category">{careItem} </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}; // End of Component
export default ProductDetail;
