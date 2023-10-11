import { useEffect } from "react";
import { state } from "@/store";
import { useSnapshot } from "valtio";
import Header from "./_Header";
import Content from "./_Content";
import StripeCheckout from "@/components/_Checkout/_StripeCheckout";

const _ = () => {
  const snap = useSnapshot(state);
  useEffect(() => {
    if (snap.selected == 0) state.checkoutVisible = true;
    else state.checkoutVisible = false;

    setTimeout(() => {
      state.checkoutVisible = true;
    }, 1000);
  }, [snap.selected]);

  return (
    <div className="relative top-0 flex w-full h-auto p-8 gap-4 times rounded-lg">
      {/* Container */}
      <div className="relative w-full top-6">
        <Header />
        <Content />
      </div>

      {/* Checkout */}
      <div className="relative w-full max-w-[460px] min-h-[790px] z-10 mt-6 pt-2 border border-[#cccccc] bg-white">
        <StripeCheckout selected index={2} />
      </div>
    </div>
  );
};

export default _;
