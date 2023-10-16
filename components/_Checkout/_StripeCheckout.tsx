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
  index: number;
  full?: boolean;
}

const keys = [
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_VINYL,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_ROME,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_MAGIC8,
  process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_KJ,
] as string[];

const _ = ({ index, full = false }: Props) => {
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
        itemName: state.tabs[selected].itemName,
        price: state.tabs[selected].price,
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

  // useEffect(() => {
  //   if (snap.animation == "intro") {
  //     gsap.set("#checkout-container-0", {
  //       x: "40vw",
  //       y: "50vh",
  //       scale: 0.95,
  //       visibility: "hidden",
  //     });
  //     gsap.to("#checkout-container-0", {
  //       x: 0,
  //       y: 0,
  //       visibility: "visible",
  //       duration: 2,
  //       delay: 1.75,
  //       ease: "expo.out",
  //       onComplete: () => {
  //         state.animation = "end";
  //       },
  //     });
  //   } else if (snap.animation == "end") {
  //     gsap.to(`#checkout-container-${index}`, {
  //       scale: 1,
  //       padding: 0,
  //       height: "auto",
  //       duration: 1.5,
  //       ease: "expo.inOut",
  //     });
  //   }
  // }, [index, snap.animation]);

  if (!client) return null;
  const options = {
    clientSecret: client,
  };
  return (
    <div
      id={`checkout-container-${index}`}
      className="w-full h-auto"
      // style={{ backgroundColor: state.tabs[index].background }}
    >
      <div
        id={`checkout-content-${index}`}
        className={`relative ${
          !full ? "flex flex-col items-center justify-start" : ""
        } w-full`}
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
