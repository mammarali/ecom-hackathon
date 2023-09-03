import AllProductCard from "@/components/ui/AllProductCard";
import { getProductsData } from "@/utils/productData";

export default async function AllProducts() {
  const data = await getProductsData();
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
