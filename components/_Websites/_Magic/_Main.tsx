import { useEffect, useState } from "react";
import Image from "next/image";
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
        delay: 0.6 + 0.05 * i,
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
    <div className="relative flex flex-col md:flex-row w-full h-auto pt-9 rounded-xl overflow-hidden noise-bg cursor-grab">
      {/* Container */}
      <div className="relative w-full h-[600px] md:h-auto">
        {/* Underlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center overflow-hidden">
          {array.map((_, i) => (
            <div
              key={`stripe-magic-${i}`}
              id={`stripe-magic-${i}`}
              className="text-white opacity-0 text-center text-[48px]  md:text-[6vw] whitespace-nowrap leading-none"
            >
              GIVE IT A SHAKE
            </div>
          ))}
        </div>

        {/* ThreeJS */}
        <Scene />

        <div
          id="stripe-magic-fade"
          className="absolute left-12 right-12 bottom-12 flex flex-col items-center justify-center gap-2 text-white text-center"
        >
          <h2 className="leading-tight">
            <span className="text-white opacity-40">No batteries?</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-35% from-white">
              Use your inner hustle.
            </span>
            <br />
          </h2>
          <p className="mt-2 text-sm uppercase opacity-40">
            PMF not guaranteed.
          </p>
        </div>

        {/* Overlay */}
        <div
          id="stripe-magic-fade"
          className="absolute left-0 top-0 z-10 w-full py-2 pl-4 flex items-start justify-between"
        >
          <div className="grid grid-cols-[20px_1fr] md:flex justify-start items-center gap-x-4 md:gap-12 text-[12px] md:text-[18px]">
            <Image
              src="/icons/8.png"
              alt="8"
              width={20}
              height={20}
              className="w-5 md:w-7 h-auto"
            />
            <div className="flex md:flex-col gap-4 md:gap-0 text-white">
              <div>Stripe Fore$ight</div>
              <div className="opacity-50 uppercase italic">Limited Edition</div>
            </div>
            <div className="absolute md:relative left-[50%] -translate-x-[50%] md:translate-x-0 md:left-auto top-12 md:top-auto text-center md:text-left text-[16px] md:text-[18px] whitespace-nowrap text-white opacity-50 col-span-2">
              Money moves. <br />
              Pose a question, shake, and unveil your forecast.
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white z-10 opacity-5 pointer-events-none" />
      </div>

      {/* Checkout */}
      <div className="relative md:w-full md:max-w-[340px] md:min-h-[1070px] md:p-0 mx-3 mb-3 md:m-2 rounded-lg overflow-hidden md:bg-white">
        <StripeCheckout index={3} />
      </div>
    </div>
  );
};

export default _;
