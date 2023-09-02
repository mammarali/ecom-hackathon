import Image from "next/image";
import PromoImage1 from "/public/promo_image1.webp";
import { client } from "../../../sanity/lib/client";
import { Content } from "@/utils/types";

export const getContentData = async () => {
  const res = await client.fetch(`*[_type=="content"]`);

  return res;
};

export default async function PromotionBannerLeft() {
  const contentData: Content[] = await getContentData();

  return (
    <>
      {contentData.map((item) => (
        <div key="bannerleft" className="flex flex-col w-screen gap-2 ">
          <div className="flex flex-col  sm:flex-row items-center justify-between px-8 bg-[#d6d6d8]">
            <section className="flex flex-col">
              <h3 className="font-bold text-3xl mt-3 ">
                {item.promotion_info}
              </h3>
              <p className=" text-lg ">{item.promotion_desc}</p>
            </section>
            <Image
              src={PromoImage1}
              alt="Promotion"
              width={282}
              height={218}
            ></Image>
          </div>

          <div className="flex flex-col  px-8 pb-8 pt-12 items-center  bg-[#212121] ">
            <h3 className="text-[#fff] text-center font-bold text-3xl mb-4 ">
              {item.promo_info}
            </h3>
            <p className="text-[#fff] text-center  text-sm ">USE PROMO CODE</p>
            <button className="text-[#fff] bg-[#474747] rounded-md text-center text-lg font-semibold  px-10 mt-[5px] py-2 tracking-widest ">
              {item.promo_code}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
