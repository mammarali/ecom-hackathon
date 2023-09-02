import { Product } from "./types";
import P1 from "/public/p1.png";
import P2 from "/public/p2.png";
import P3 from "/public/p3.png";
import P4_Big from "/public/p4_big.png";

export const Products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    tagline: "Dress",
    price: 100,
    category: "female",
    image: P1,
  },

  {
    id: 1,
    name: "Product 1",
    tagline: "Dress",
    price: 100,
    category: "female",
    image: P2,
  },

  {
    id: 2,
    name: "Product 2",
    tagline: "Dress",
    price: 200,
    category: "female",
    image: P2,
  },
  {
    id: 3,
    name: "Product 3",
    tagline: "Dress",
    price: 250,
    category: "female",
    image: P3,
  },
  {
    id: 4,
    name: "Product 4",
    tagline: "Dress",
    price: 260,
    category: "male",
    image: P3,
  },
  {
    id: 5,
    name: "Product 5",
    tagline: "Dress",
    price: 150,
    category: "male",
    image: P3,
  },
  {
    id: 6,
    name: "Product 6",
    tagline: "Dress",
    price: 180,
    category: "kids",
    image: P3,
  },

  {
    id: 7,
    name: "Product 7",
    tagline: "Dress",
    price: 180,
    category: "female",
    image: P4_Big,
  },
];
