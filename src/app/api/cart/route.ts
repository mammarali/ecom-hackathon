import { addToCart, cartTable, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const userId = "12345abc";
  const req: addToCart = await request.json();
  try {
    if (req) {
      await db
        .insert(cartTable)
        .values({
          user_id: userId,
          product_id: req.product_id,
          product_name: req.product_name,
          quantity: req.quantity,
          image: req.image,
          price: req.price,
          tagline: req.tagline,
          total_price: req.total_price,
        })
        .returning();
      return NextResponse.json(
        { Message: "Data Added to DB" },
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
