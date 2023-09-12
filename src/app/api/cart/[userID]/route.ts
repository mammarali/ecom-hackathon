import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params: { userID } }: { params: { userID: string } }
) => {
  try {
    if (!userID) {
      throw new Error("User Id does not exist");
    } else {
      const res = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.user_id, userID));

      const cartItems = res.map((item) => ({
        _id: item.product_id,
        title: item.product_name,
        price: item.price,
        total_price: item.total_price,
        tagline: item.tagline,
        image: item.image,
        quantity: item.quantity,
        userId: item.user_id,
      }));

      const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      const totalAmount = cartItems.reduce(
        (total, item) => total + item.total_price,
        0
      );
      return NextResponse.json(
        { cartItems, totalQuantity, totalAmount },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ Message: error }, { status: 505 });
  }
};
