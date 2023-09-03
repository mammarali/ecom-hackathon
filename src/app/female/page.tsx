import AllProductCard from "@/components/ui/AllProductCard";
import { getFemaleData } from "@/utils/productData";
// Products Data Fetching from Sanity

const Page = async () => {
  const data = await getFemaleData();
  return (
    <div>
      <div className="grid grid-cols-1 gap-[2rem] mx-[2rem] my-[4rem] sm:grid-cols-2  lg:grid-cols-3 lg:mx-[4rem] xl:grid-cols-4 xl:mx-[6rem] ">
        {data.length > 0 ? (
          data.map((product) => (
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
          ))
        ) : (
          <p>No Product Found</p>
        )}
      </div>
    </div>
  );
};

export default Page;
