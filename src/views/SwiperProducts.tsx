import React from "react";
import { getProductsData } from "@/utils/productData";
import { Product } from "@/utils/types";
import ProductList from "./ProductList";

const SwiperProducts = async () => {
  const products: Product[] = await getProductsData();
  return <ProductList products={products} />;
};

export default SwiperProducts;
