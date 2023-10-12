import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { state } from "@/store";
import Scene from "./_Scene";
import StripeCheckout from "@/components/_Checkout/_StripeCheckout";

const array = new Array(10).fill(0);

const _ = () => {
  const [ready, set] = useState(false);

  useEffect(() => {
    if (ready) return;
    state.checkoutVisible = true;
    gsap.set("#stripe-magic-fade", { opacity: 0, filter: "blur(5px)" });
    array.forEach((_, i) => {
      gsap.set(`#stripe-magic-${i}`, { opacity: 0 });
      gsap.to(`#stripe-magic-${i}`, {
        opacity: 1,
        duration: 0,
        delay: 0.9 + 0.05 * i,
        onComplete: () => {
          gsap.to(`#stripe-magic-${i}`, {
            opacity: 0,
            duration: 0,
            delay: 1 + 0.1 * i,
            onComplete: () => {
              if (!ready) set(true);

              gsap.to("#stripe-magic-fade", {
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                delay: 1,
                ease: "expo.out",
              });
            },
          });
        },
      });
    });
  }, [ready]);

  return (
    <div className="relative flex w-full h-auto pt-9 rounded-xl overflow-hidden bg-[#0A0A0A] noise cursor-grab">
      {/* Container */}
      <div className="relative w-full">
        {/* Underlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center overflow-hidden">
          {array.map((_, i) => (
            <div
              key={`stripe-magic-${i}`}
              id={`stripe-magic-${i}`}
              className="text-white opacity-0 text-center text-[6vw] whitespace-nowrap leading-none"
            >
              GIVE IT A SHAKE
            </div>
          ))}
        </div>

        <div
          id="stripe-magic-fade"
          className="absolute left-12 right-12 bottom-12 flex flex-col items-center justify-center gap-2 text-white text-center"
        >
          <h2>
            <span className="opacity-40 leading-none">No batteries?</span>
            <br />
            Use your inner hustle.
            <br />
          </h2>
          <p className="mt-2 text-sm uppercase opacity-40">PMF not guaranteed.</p>
        </div>

        {/* ThreeJS */}
        <Scene />

        {/* Overlay */}
        <div
          id="stripe-magic-fade"
          className="absolute left-0 top-0 z-10 w-full py-2 pl-4 flex items-start justify-between"
        >
          <div className="flex justify-start items-start gap-12">
            <h2 className="text-white rotate-90 -translate-y-2">8</h2>
            <div className="text-white opacity-50">
              Stripe Fore$ight
              <br />
              Limited Edition
            </div>
            <div className="text-white opacity-50">
              Money moves. <br />
              Pose a question, shake, and unveil your forecast.
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white z-10 opacity-5 pointer-events-none" />
      </div>

      {/* Checkout */}
      <div className="relative w-full max-w-[460px] min-h-[960px] z-10 rounded-lg m-2 overflow-hidden bg-white">
        <StripeCheckout selected index={1} />
      </div>
    </div>
  );
};

export default _;
