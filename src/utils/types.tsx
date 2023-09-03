import { Image as IImage, Slug } from "sanity";

export type Product = {
  title: string;
  detail: string;
  price: number;
  tagline: string;
  category: string;
  care: string[];
  image: IImage[];
  slug: Slug;
};

export type Content = {
  hero_main: string;
  sale_badge: string;
  brands: IImage;
  hero_image: IImage;
  hero_description: string;
  promotion_info: string;
  promotion_desc: string;
  promo_info: string;
  promo_code: string;
  feature_heading: string;
  feature1_title: string;
  feature1_desc: string;
  feature2_title: string;
  feature2_desc: string;
  feature3_title: string;
  feature3_desc: string;
  feature4_title: string;
  feature4_desc: string;
  footer_desc: string;
};

export type Logos = {
  brands: IImage[];
};

export type CartProduct = {
  _id: string;
  title: string;
  name: string;
  price: number;
  slug: Slug;
  detail: string;
  totalPrice: number;
  category: string;
  tagline: string;
  care: string[];
  image: IImage[];
  quantity: number;
  userId: string;
};
