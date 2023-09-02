import PromoImage2 from "/public/promo_image2.webp";
import PromoImage3 from "/public/promo_image3.webp";
import Image from "next/image";

export default async function PromotionBannerRight() {
  return (
    <div className="flex flex-col sm:flex-row lg:w-fit gap-4 ">
      <div className="flex flex-col items-center justify-between w-full bg-[#efe1c7] pt-6 ">
        <div className=" w-full ml-6 ">
          <p>Flex Sweatshirt</p>
          <p>
            <s>$100.00</s>
            <span className="pl-3 font-bold">$75.00</span>
          </p>
        </div>
        <div className="relative  pt-4 w-[280px] h-[340px] sm:h-[324px] sm:w-[280px] ">
          <Image src={PromoImage2} alt="Promotion" fill></Image>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center w-full  bg-[#d7d7d9]  pt-6">
        <div className=" w-full ml-6">
          <p>Flex Push Button Bomber</p>
          <p>
            <s>$225.00</s>
            <span className="pl-3 font-bold">$190.00</span>
          </p>
        </div>
        <div className="relative pt-4 w-[240px] h-[284px] sm:h-[324px] lg:w-[280px] ">
          <Image
            src={PromoImage3}
            alt="Promotion"
            fill
            sizes="(max-width: 650px) 85vw, 100vw"
          ></Image>
        </div>
      </div>
    </div>
  );
}
