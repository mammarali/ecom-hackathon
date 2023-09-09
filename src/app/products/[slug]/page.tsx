import { Product, CartProduct, ProductDetails } from "@/utils/types";
import { Slug } from "sanity";

import { client } from "../../../../sanity/lib/client";
import { getProductData } from "@/utils/productData";
import ProductDetail from "@/views/ProductDetail";
import { auth } from "@clerk/nextjs";

interface Props {
  params: { slug: Slug };
}
export default async function getProduct({ params }: Props) {
  const slug = params.slug;
  const { userId } = auth();
  const product: ProductDetails = await getProductData(slug);

  return <ProductDetail product={product} userId={userId as string} />;
}

// export async function generateStaticParams() {
//   const query = `*[_type == "product"]{
//     slug{
//       current
//     }
//   }`;
//   const res: Product[] = await client.fetch(query);
//   return res.map((product) => ({
//     slug: product.slug.current,
//   }));
// }
