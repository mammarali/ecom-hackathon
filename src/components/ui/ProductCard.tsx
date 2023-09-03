import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { Image as IImage, Slug } from "sanity";

const ProductCard = (props: {
  title: string;
  price: number;
  detail: string;
  care: string[];
  tagline: string;
  img: IImage[];
  category: string;
  slug: Slug;
}) => {
  // const productArray = Object.entries(props.tagline).map(([key, value]) =>

  // );

  return (
    <div>
      <Link href={`/products/${props.slug.current}`}>
        <div className="hover:scale-110 ease-in-out duration-500 pt-[2rem] pb-[2rem] pl-[1.3rem] ">
          <Image
            key="Image"
            src={urlForImage(props.img[0]).url()}
            alt="Product1"
            width={380}
            height={400}
          ></Image>
          <h3 className="font-bold text-lg mt-3 ">{props.title}</h3>
          {Object.entries(props.tagline).map(([key, value]) => (
            <p key={key} className="font-bold text-lg text-gray-500 ">
              {value}
            </p>
          ))}
          {/* <p className="font-bold text-lg text-gray-500 ">{props.tagline}</p>; */}
          <p className="font-bold text-lg ">${props.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
