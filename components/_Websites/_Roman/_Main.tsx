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
    <div className="flex flex-col times">
      <div className="relative top-0 flex w-full h-auto p-8 gap-4 rounded-lg">
        {/* Container */}
        <div className="relative w-full top-6">
          <Header />
          <Content />
        </div>

        {/* Checkout */}
        <div className="relative w-full max-w-[380px] min-h-[790px] z-10 mt-6 pt-2 border border-[#cccccc] bg-white">
          <StripeCheckout selected index={2} />
        </div>
      </div>
      <div className="flex justify-between items-center mx-8 mb-8 gap-4 p-4 bg-[#eee] bg-white border border-[#cccccc]">
        <p>Payments are Veni</p>
        <div className="flex gap-8 place-items-center text-blue-600">
          <p>Support</p>
          <p>Chat with our Spartans</p>
          <p>Feedback</p>
        </div>
        <p>XXIV/VII support</p>
      </div>
    </div>
  );
};

export default _;
