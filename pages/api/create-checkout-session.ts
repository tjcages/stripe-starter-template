import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

type Data = {
  clientSecret: string;
};

const keys = [
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_VINYL,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_ROME,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_MAGIC8,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_KJ,
] as string[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const index = req.body.tab;
    const mode = req.body.mode || "embedded";
    const itemName = req.body.itemName || "";
    const price = req.body.price || 2000;
    const priceObj = req.body.priceObj;
    const size = req.body.size || false;

    const stripe = new Stripe(keys[index], {
      apiVersion: "2023-08-16;embedded_checkout_beta=v2" as any,
    });
    stripe.applePayDomains.create({
      domain_name: "embedcheckout.com",
    });

    const session = (await stripe.checkout.sessions.create({
      line_items: [
        priceObj
          ? {
              price: priceObj,
              quantity: 1,
            }
          : {
              price_data: {
                currency: "usd",
                product_data: {
                  name: itemName,
                },
                unit_amount: price,
              },
              quantity: 1,
            },
      ],
      custom_fields: size
        ? [
            {
              key: "size",
              label: {
                type: "custom",
                custom: "Size",
              },
              optional: false,
              type: "dropdown",
              dropdown: {
                options: [
                  // { label: "Extra Small", value: "XS" },
                  { label: "Small", value: "S" },
                  { label: "Medium", value: "M" },
                  { label: "Large", value: "L" },
                  { label: "Extra Large", value: "XL" },
                  { label: "Extra Extra Large", value: "XXL" },
                ],
              },
            },
          ]
        : [],
      shipping_address_collection: {
        allowed_countries: [
          "CA",
          "MX",
          "US",
          "AX",
          "AL",
          "AD",
          "AT",
          "BY",
          "BE",
          "BA",
          "BG",
          "HR",
          "CZ",
          "DK",
          "EE",
          "FO",
          "FI",
          "FR",
          "DE",
          "GI",
          "GR",
          "GG",
          "HU",
          "IS",
          "IE",
          "IM",
          "IT",
          "JE",
          "XK",
          "LV",
          "LI",
          "LT",
          "LU",
          "MT",
          "MD",
          "MC",
          "ME",
          "NL",
          "MK",
          "NO",
          "PL",
          "PT",
          "RO",
          "RU",
          "SM",
          "RS",
          "SK",
          "SI",
          "ES",
          "SJ",
          "SE",
          "CH",
          "UA",
          "GB",
          "VA",
        ],
      },
      mode: "payment",
      ui_mode: mode,
      return_url:
        process.env.NEXT_PUBLIC_URL + "/complete?session_id={CHECKOUT_SESSION_ID}",
    } as any)) as any;

    res.status(200).json({ clientSecret: session.client_secret });
  } else {
    res.status(400).json({ error: "Wrong request method" } as any);
  }
}
