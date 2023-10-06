import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

type Data = {
  clientSecret: string;
};

const keys = [
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_ROME,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_KJ,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_VINYL,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_MAGIC8,
] as string[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const index = req.body.tab;
    const stripe = new Stripe(keys[index], {
      apiVersion: "2023-08-16;embedded_checkout_beta=v2" as any,
    });

    const session = (await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "T-shirt",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      ui_mode: "embedded",
      return_url:
        process.env.NEXT_PUBLIC_URL + "/?session_id={CHECKOUT_SESSION_ID}",
    } as any)) as any;

    res.status(200).json({ clientSecret: session.client_secret });
  } else {
    res.status(400).json({ error: "Wrong request method" } as any);
  }
}
