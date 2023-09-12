import { client } from "../../sanity/lib/client";
import { Product, CartProduct, ProductDetails } from "./types";
import { Slug } from "sanity";

export const getProductsData = async (): Promise<Product[]> => {
  return await client.fetch(`*[_type=="product"]{
  title,
    slug,
    price,
     tagline,
    category->{name},
    image,
    detail,
    care
}`);
};

export async function getProductData(slug: Slug): Promise<ProductDetails> {
  const productQuery = `*[_type == "product" && slug.current == $slug][0]{
  _id,
    slug,
  image,
  price,
  tagline,
  category->{name},
  care,
  detail,
  title,
}`;
  const product = await client.fetch(productQuery, { slug });

  return product;
}

export const getFemaleData = async (): Promise<Product[]> => {
  return await client.fetch(
    `*[_type == 'product' && category->name=="Female" ]{
  title,
    slug,
    price,
    tagline,
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
    tagline,
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
    tagline,
    category->{name},
    image,
    detail,
    care
}`
  );
};
