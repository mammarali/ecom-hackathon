import { addToCart, cartTable, db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const userId = "abc123";
  const req: addToCart = await request.json();

  try {
    if (req && userId) {
      const res = await db
        .insert(cartTable)
        .values({
          user_id: userId,
          product_id: req.product_id,
          product_name: req.product_name,
          quantity: req.quantity,
          price: req.price,
          image: req.image,
          tagline: req.tagline,
          total_price: req.total_price,
        })
        .returning();
      return NextResponse.json(
        { Message: "Data added to DB" },
        { status: 200 }
      );
    } else {
      throw new Error("Failed to add data to DB");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ Message: error }, { status: 400 });
  }
};

export const PUT = async (request: NextRequest) => {
  const userId = "abc123";
  const data: addToCart = await request.json();

  try {
    if (data && userId) {
      await db
        .update(cartTable)
        .set({
          quantity: data.quantity,
          total_price: data.price * data.quantity,
        })
        .where(
          and(
            eq(cartTable.user_id, userId),
            eq(cartTable.product_id, data.product_id)
          )
        )
        .returning();
      return NextResponse.json({ Message: "Data Updated" }, { status: 200 });
    } else {
      throw new Error("Failed to Update Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ Message: error }, { status: 500 });
  }
};

export const DELETE = async (request: NextRequest) => {
  const userId = "abc123";
  const Url = request.nextUrl;

  try {
    if (Url.searchParams.has("product_id") && userId) {
      const product_id = Url.searchParams.get("product_id");
      console.log(product_id);
      const res = await db
        .delete(cartTable)
        .where(
          and(
            eq(cartTable.user_id, userId),
            eq(cartTable.product_id, product_id as string)
          )
        )
        .returning();
      return NextResponse.json({ Message: "Data deleted" }, { status: 200 });
    } else {
      if (Url.searchParams.has("product_id")) {
        throw new Error("Login Required");
      } else {
        throw new Error("Product ID Required");
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ Message: error }, { status: 405 });
  }
};
