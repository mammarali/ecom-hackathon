import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import heroImage from "/public/hero_pic.webp";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";
import { Content } from "@/utils/types";

export const getContentData = async () => {
  const contentQuery = `*[_type == "content"]`;
  const res = await client.fetch(contentQuery);
  console.log(res);
  return res;
};
const logos = await client.fetch(`*[_type=="content"]{brands[]
}`);

export default async function Hero() {
  const data: Content[] = await getContentData();

  return (
    <>
      {data.map((item) => (
        <div
          key="content"
          className="flex items-center flex-col gap-y-10 lg:flex-row  my-16 mx-8 sm:mx-16 lg:mx-24 xl:mx-32 "
        >
          <div key="content" className="flex-1 pt-12 pb-4">
            <Badge
              key="badge"
              className="w-[120px] h-[40px] py-1 px-3 rounded-lg bg-[#e1edff] text-[#0000ff] hover:bg-[#e1edff] items-center justify-center text-lg font-sora"
            >
              {item.sale_badge}
            </Badge>

            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl mt-6">
              {item.hero_main}
            </h1>

            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {item.hero_description}
            </p>
            <Link href="./products">
              <Button className="bg-black h-12 px-10 mt-6 rounded-none">
                <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
              </Button>
            </Link>

            <div key="Logos" className="grid grid-cols-4 gap-4 pt-20 ">
              <Image
                src={urlForImage(logos[0].brands[0]).url()}
                alt="featured"
                width={90}
                height={90}
              />
              <Image
                src={urlForImage(logos[0].brands[1]).url()}
                alt="featured"
                width={90}
                height={90}
              />
              <Image
                src={urlForImage(logos[0].brands[2]).url()}
                alt="featured"
                width={90}
                height={90}
              />
              <Image
                src={urlForImage(logos[0].brands[3]).url()}
                alt="featured"
                width={90}
                height={90}
              />
            </div>
          </div>

          <div className="hidden lg:flex">
            <Image src={heroImage} width={650} height={650} alt="hero" />
          </div>
        </div>
      ))}
    </>
  );
}
