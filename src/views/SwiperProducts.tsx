import React from "react";
import { getProductsData } from "@/utils/productData";
import { Product } from "@/utils/types";
import { client } from "../../sanity/lib/client";
import ProductList from "./ProductList";

const SwiperProducts = async () => {
  const products: Product[] = await getProductsData();
  return <ProductList products={products} />;
};

export default SwiperProducts;
