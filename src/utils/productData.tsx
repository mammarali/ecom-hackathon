import { client } from "../../sanity/lib/client";
import { Product } from "./types";
import { Slug } from "sanity";

export async function getProductsData() {
  const productsQuery = `*[_type == "product"]{
  slug,
  image,
  price,
  tagline->{name},
  category->{name},
  care,
  detail,
  title,
}`;
  const products = await client.fetch(productsQuery);

  return products;
}

export async function getProductData(slug: Slug) {
  const productQuery = `*[_type == "product" && slug.current == $slug][0]{
  _id,
    slug,
  image,
  price,
  tagline->{name},
  category->{name},
  care,
  detail,
  title,
}`;
  const product = await client.fetch(productQuery, { slug });

  return product;
}
// export const data = await getProductsData();
