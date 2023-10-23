import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { state } from "@/store";

interface Props {
  index: number;
}

const keys = [
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_VINYL,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_ROME,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_MAGIC8,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_KJ,
] as string[];

const _ = ({ index }: Props) => {
  const [client, set] = useState<string | null>(null);
  async function initialize(selected: number) {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // pass a body to the request
      body: JSON.stringify({
        tab: selected,
        priceObj: state.tabs[selected].priceObj,
        size: index == 0,
      }),
    });
    const { clientSecret } = await response.json();

    set(clientSecret);
  }

  useEffect(() => {
    initialize(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!client) return null;
  const options = {
    clientSecret: client,
  };
  return (
    <div
      id={`checkout-container-${index}`}
      className="w-full h-auto"
    >
      <div id={`checkout-content-${index}`}>
        <EmbeddedCheckoutProvider
          stripe={loadStripe(keys[index], {
            betas: ["embedded_checkout_beta_1"],
          })}
          options={options}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
};

export default _;
