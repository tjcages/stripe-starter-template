import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import StripeCheckout from "./_StripeCheckout";

const _ = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute top-14 right-6 flex w-full max-w-[412px]">
      <div
        id={`checkout-border`}
        className="absolute w-full h-full min-h-[60vh] rounded-2xl border-2 border-dashed border-white/70 z-0"
      />
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
