import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import gsap from "gsap";
import { useSnapshot } from "valtio";
import { state } from "@/store";

interface Props {
  selected: boolean;
  index: number;
}

const keys = [
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_ROME,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_KJ,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_VINYL,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_MAGIC8,
] as string[];

const _ = ({ selected, index }: Props) => {
  const snap = useSnapshot(state);
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
      }),
    });
    const { clientSecret } = await response.json();

    set(clientSecret);
  }

  useEffect(() => {
    if (selected) initialize(index);
  }, [index, selected]);

  useEffect(() => {
    if (snap.checkoutVisible) {
      gsap.to(`#checkout-container-${index}`, {
        scale: 1,
        padding: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      });
    } else {
      gsap.to(`#checkout-container-${index}`, {
        scale: 0.9,
        padding: 8,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
    }
  }, [index, snap.checkoutVisible]);

  if (!selected || !client) return null;
  const options = {
    clientSecret: client,
  };
  return (
    <div
      id={`checkout-container-${index}`}
      className="absolute w-full h-auto bg-white/50 rounded-xl backdrop-blur-xl p-2"
    >
      <div
        id={`checkout-content-${index}`}
        className="relative flex flex-col items-center justify-center w-full h-full py-6 rounded-md"
        style={{ backgroundColor: state.tabs[index].background }}
      >
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
