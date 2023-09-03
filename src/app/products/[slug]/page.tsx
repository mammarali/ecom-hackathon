import { Product, CartProduct } from "@/utils/types";
import { Slug } from "sanity";

import { client } from "../../../../sanity/lib/client";
import { getProductData } from "@/utils/productData";
import ProductDetail from "@/views/ProductDetail";
//

// export const getContentData = async () => {
//   const res =
//     await client.fetch(`*[_type == "product" && slug.current == ${slug}]{
//  title,
//     slug,
//     price,
//     category,
//     image,
//     detail,
//     care
//   }`);

//   return res;
// };
interface Props {
  params: { slug: Slug };
}
export default async function getProduct({ params }: Props) {
  const slug = params.slug;

  const product: CartProduct = await getProductData(slug);

  return <ProductDetail product={product} />;
}

export async function generateStaticParams() {
  const query = `*[_type == "product"]{
    slug{
      current
    }
  }`;
  const res: Product[] = await client.fetch(query);
  return res.map((product) => ({
    slug: product.slug.current,
  }));
}
//------------------------------------------------------------------------------------------
// fetch particular data of product using slug
// async function fetchPreviewData(slug: Slug) {
//   let res = await fetch(`*[_type == "product" && slug.current == ${slug}]{
//  title,
//     slug,
//     price,
//     category,
//     image,
//     detail,
//     care
//   }`);
//   return res.json();
// }

// export const productData = async ({ params }: { params: { slug: Slug } }) => {
//   const product: Product[] = await fetchPreviewData(params.slug);
//   return {
//     props: {
//       product,
//     },
//   };
// };

// -------------------------------------------------Fetching Data from Sanity using getStaticProps-------------------------------------------------------------------------
// export async function getStaticProps({ params }: { params: { slug: Slug } }) {
//   console.log(params.slug);
//   const res = await fetch(
//     `*[_type == "product" && slug.current == ${params.slug}][0]`
//     // `*[_type == "product" && slug.current == "brushed-bomber"]`
//   );

//   const product = await res.json();

//   return {
//     props: {
//       product,
//     },
//   };
// }

// import { Image as IImage, Slug } from "sanity";
// import { client } from "../../../../sanity/lib/client";
// import ProductCard from "@/components/ui/ProductCard";

// export const getProductData = async () => {
//   return await client.fetch(`*[_type=="product"]{
//   title,
//     slug,
//     price,
//     category,
//     image,
//     detail,
//     care
// }`);
// };

// export const getStaticProps = async ({
//   params,
// }: {
//   params: { slug: Slug };
// }) => {
//   const query = `*[_type == "product" && slug.current == ${params.slug}]`;
//   const productsQuery = '*[_type == "product"]';
//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   return {
//     props: { products, product },
//   };
// };
