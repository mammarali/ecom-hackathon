import { client } from "../../sanity/lib/client";
import { Product, CartProduct } from "./types";
import { Slug } from "sanity";

// export async function getProductsData(): Promise<Product> {
//   const productsQuery = `*[_type == "product"]{
//   slug,
//   image,
//   price,
//   tagline->{name},
//   category->{name},
//   care,
//   detail,
//   title,
// }`;
//   const products = await client.fetch(productsQuery);

//   return products;
// }

export const getProductsData = async (): Promise<Product[]> => {
  return await client.fetch(`*[_type=="product"]{
  title,
    slug,
    price,
     tagline->{name},
    category->{name},
    image,
    detail,
    care
}`);
};

export async function getProductData(slug: Slug): Promise<CartProduct> {
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

export const getFemaleData = async (): Promise<Product[]> => {
  return await client.fetch(
    `*[_type == 'product' && category->name=="Female" ]{
  title,
    slug,
    price,
    tagline->{name},
    category->{name},
    image,
    detail,
    care
}`
  );
};

export const getMaleData = async (): Promise<Product[]> => {
  return await client.fetch(
    `*[_type == 'product' && category->name=="Male" ]{
  title,
    slug,
    price,
    tagline->{name},
    category->{name},
    image,
    detail,
    care
}`
  );
};

export const getKidsData = async (): Promise<Product[]> => {
  return await client.fetch(
    `*[_type == 'product' && category->name=="Kids" ]{
  title,
    slug,
    price,
    tagline->{name},
    category->{name},
    image,
    detail,
    care
}`
  );
};
