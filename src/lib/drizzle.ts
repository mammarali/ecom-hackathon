import { InferModel } from "drizzle-orm";
import { pgTable, integer, varchar, serial, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { createPool, sql } from "@vercel/postgres";
import pg from "pg";

export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey().notNull(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  product_name: varchar("product_name", { length: 255 }).notNull(),
  tagline: varchar("tagline", { length: 255 }).notNull(),
  image: text("image").notNull(),
  price: integer("price").notNull(),
  quantity: integer("quantity").notNull(),
  total_price: integer("total_price").notNull(),
});

export type Cart = InferModel<typeof cartTable>;
export type addToCart = InferModel<typeof cartTable, "insert">;

// const { Pool } = pg;

// export const db = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// });

export const db = drizzle(sql);
