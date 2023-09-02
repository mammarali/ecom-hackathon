import FeatureLeft from "@/components/ui/FeatureLeft";
import FeatureRight from "@/components/ui/FeatureRight";

const Features = () => {
  return (
    <div className="mb-10 mx-8 sm:mx-16 lg:mx-24 xl:mx-32">
      <div className="flex p-[2rem] sm:px-[4rem] min-[1210px]:px-[6rem] xl:px-[8rem] sm:py-[2rem] min-[1210px]:pb-[2rem] min-[1210px]:pt-0 sm:mt-0 min-[1210px]:mt-36 max-[1210px]:justify-center min-[1210px]:justify-end">
        <h1 className="sm:w-[100%] max-[1210px]:w-[80%] min-[1210px]:w-[45%]  text-[2.0rem] lg:text-[2.5rem] xl:text-[2.5rem] font-bold tracking-wide ">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      <div className="grid grid-cols-1 min-[1210px]:grid-cols-2 gap-y-12  ">
        <FeatureLeft></FeatureLeft>
        <FeatureRight></FeatureRight>
      </div>
    </div>
  );
};

export default Features;
