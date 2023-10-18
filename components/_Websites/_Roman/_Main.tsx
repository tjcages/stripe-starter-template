import { useEffect } from "react";
import Image from "next/image";
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
      <div className="relative top-0 flex flex-col md:flex-row w-full h-auto p-2 pt-5 md:p-8 gap-4 rounded-lg">
        {/* Container */}
        <div className="relative w-full top-6">
          <Header mobile={snap.mobile} />
          <Content mobile={snap.mobile} />
        </div>

        {/* Checkout */}
        {!snap.mobile && (
          <div className="relative w-full max-w-[380px] z-10 mt-6 pt-2 pointer-events-none">
            <div className="absolute top-12 right-16 z-1000 w-60 h-auto -rotate-12">
              <Image
                src="/assets/sold-out.avif"
                alt="sold out sign"
                width={300}
                height={100}
              />
            </div>
            <StripeCheckout index={2} />
          </div>
        )}
      </div>
      <div className="relative flex flex-col md:flex-row justify-between items-center mx-2 md:mx-8 mt-8 md:mt-0 mb-4 md:mb-8 gap-4 p-4 bg-[#eee] border border-[#cccccc]">
        <p className="text-[#615cfd]">
          Sustentatio Perpetua Diurna et Nocturna
        </p>
        {/* <div className="flex gap-8 place-items-center text-[#615cfd]">
          <p>Chat with our Spartans</p>
        </div> */}
        <p>©️709 Ab Urbe Condita</p>
      </div>
    </div>
  );
};

export default _;
