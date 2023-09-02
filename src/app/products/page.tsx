import ProductCard from "@/components/ui/ProductCard";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";
import { client } from "../../../sanity/lib/client";
import { Product } from "@/utils/types";
import AllProductCard from "@/components/ui/AllProductCard";
// Products Data Fetching from Sanity
export const getProductsData = async () => {
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

const data: Product[] = await getProductsData();

export default function AllProducts() {
  return (
    <div className="grid grid-cols-1 gap-[2rem] mx-[2rem] my-[4rem] sm:grid-cols-2  lg:grid-cols-3 lg:mx-[4rem] xl:grid-cols-4 xl:mx-[6rem]  ">
      {data.map((product) => (
        <AllProductCard
          key={product.title}
          title={product.title}
          price={product.price}
          tagline={product.tagline}
          img={product.image}
          category={product.category}
          detail={product.detail}
          care={product.care}
          slug={product.slug}
        ></AllProductCard>
      ))}
    </div>
  );
}
