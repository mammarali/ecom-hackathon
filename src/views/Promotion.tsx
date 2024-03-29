import PromotionBannerLeft from "@/components/ui/PromotionBannerLeft";
import PromotionBannerRight from "@/components/ui/PromotionBannerRight";

const Promotion = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center py-16 px-[8rem]">
      <div className="flex flex-col gap-[1rem] mb-[2rem] text-center">
        <p className="text-sm font-semibold text-blue-600 text-center tracking-widest leading-7 [&:not(:first-child)]:mt-6">
          PROMOTIONS
        </p>
        <h2 className="text-center mt-4 pb-2 text-4xl font-semibold tracking-normal ">
          Our Promotions Events
        </h2>
      </div>

      <div className="flex flex-col w-full lg:flex-row gap-8  justify-between items-center  ">
        <PromotionBannerLeft></PromotionBannerLeft>
        <PromotionBannerRight></PromotionBannerRight>
      </div>
    </div>
  );
};

export default Promotion;
