import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import StripeCheckout from "./_StripeCheckout";

interface Props {
  absolute?: boolean;
}

const _ = ({ absolute = false }: Props) => {
  const snap = useSnapshot(state);

  return (
    <div
      className={`z-10 flex w-full max-w-[412px] h-auto ${
        absolute ? "absolute" : "relative"
      }`}
    >
      {/* <div
        id={`checkout-border`}
        className="absolute w-full h-auto rounded-2xl border-2 border-dashed border-white/70 z-0 scale-[0.99]"
      /> */}
      {state.tabs.map((_, i) => (
        <StripeCheckout
          key={`checkout-container-${i}`}
          index={i}
          selected={snap.selected == i}
        />
      ))}
    </div>
  );
};

export default _;
