import React from "react";
import featurePic from "/public/feature.webp";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

const FeatureRight = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-[2rem] ">
      <div className="flex-none ">
        <Image src={featurePic} alt="Feature" width={300} height={350} />
      </div>

      <div className="flex flex-col gap-[2rem]">
        <div className="flex justify-center items-center gap-[2.5rem] ">
          <p className="text-lg text-justify">
            This piece is ethically crafted in our small family-owned workshop
            in Peru with unmatched attention to detail and care. The Natural
            color is the actual natural color of the fiber, undyed and 100%
            traceable.
          </p>
        </div>

        <div>
          <Link href="/products">
            <Button className="bg-gray-900 h-14 w-[50%] px-2 mt-2 rounded-none text-lg text-center  ">
              <span className="line-clamp-2">See All Products</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureRight;
