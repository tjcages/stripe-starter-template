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
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE,
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
        // mode: selected == 1 ? "modal" : "embedded",
      }),
    });
    const { clientSecret } = await response.json();

    set(clientSecret);
  }

  useEffect(() => {
    if (selected) initialize(index);
  }, [index, selected]);

  useEffect(() => {
    if (snap.animation == "intro") {
      gsap.set("#checkout-container-0", {
        x: "40vw",
        y: "50vh",
        scale: 0.95,
        visibility: "hidden",
      });
      gsap.to("#checkout-container-0", {
        x: 0,
        y: 0,
        visibility: "visible",
        duration: 2,
        delay: 1.75,
        ease: "expo.out",
        onComplete: () => {
          state.animation = "end";

          gsap.to("#checkout-container-0", {
            scale: 1,
            padding: 0,
            borderRadius: 16,
            height: "auto",
            duration: 1.5,
            ease: "expo.inOut",
          });
          gsap.to("#checkout-content-0", {
            borderRadius: 16,
            duration: 2,
            ease: "expo.inOut",
          });
        },
      });
    }
  }, [snap.animation]);

  if (!selected || !client) return null;
  const options = {
    clientSecret: client,
  };
  return (
    <div
      id={`checkout-container-${index}`}
      className="absolute w-full h-auto bg-white/50 rounded-xl backdrop-blur-xl p-2"
      style={{
        visibility: snap.animation == "end" || index !== 0 ? "visible" : "hidden",
      }}
    >
      <div
        id={`checkout-content-${index}`}
        className="relative flex flex-col items-center justify-center w-full min-h-[60vh] py-6 rounded-md"
        style={{ backgroundColor: state.tabs[index].background }}
      >
        {snap.animation == "end" && (
          <EmbeddedCheckoutProvider
            stripe={loadStripe(keys[index], {
              betas: ["embedded_checkout_beta_1"],
            })}
            options={options}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
    </div>
  );
};

export default _;
