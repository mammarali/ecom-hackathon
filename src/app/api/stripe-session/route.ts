import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(key, {
  apiVersion: "2023-08-16",
});

export const POST = async (request: NextRequest) => {
  const { userId } = auth();

  const body = await request.json();

  const customer = await stripe.customers.create({
    metadata: {
      userId: userId,
    },
  });

  try {
    if (body.length > 0 && userId) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          {
            shipping_rate: "shr_1Nom5uIJkun00DmPi6JfGHrI",
          },
          { shipping_rate: "shr_1Nom6wIJkun00DmP5GDvyd5P" },
        ],
        invoice_creation: {
          enabled: true,
        },

        line_items: body.map((item: any) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
                images: [item.image],
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),

        customer: customer.id,
        phone_number_collection: {
          enabled: true,
        },

        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/cart`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({
        message: "Product data is missing  or  no user logged in",
      });
    }
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error.message);
  }
};
