import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import StripeCheckout from "@/components/_Checkout/_StripeCheckout";

const _ = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    if (snap.animation == "intro") {
      gsap.set("#animated-checkout", {
        x: "40vw",
        y: "50vh",
        scale: 0.95,
        visibility: "hidden",
      });
      gsap.to("#animated-checkout", {
        x: 0,
        y: 0,
        visibility: "visible",
        duration: 1.5,
        delay: 1.75,
        ease: "expo.out",
        onComplete: () => {
          state.animation = "end";
        },
      });
      gsap.to("#glowing-checkout", {
        opacity: 1,
      });
    } else if (snap.animation == "end") {
      gsap.to("#glowing-checkout", {
        scaleX: 1.1,
        scaleY: 1,
        autoAlpha: 0,
        height: 800,
        duration: 0.75,
        ease: "power4.inOut",
      });
      gsap.to("#glowing-checkout-inside", {
        scaleX: 0.95,
        scaleY: 0.9,
        duration: 1,
        ease: "expo.inOut",
      });
      gsap.to("#animated-checkout", {
        scale: 1,
        padding: 0,
        height: "auto",
        duration: 1,
        ease: "expo.inOut",
        onComplete: () => {
          gsap.set("#glowing-checkout", {
            display: "none",
          });

          gsap.to("#sold-out", {
            scale: 1,
            rotate: -12,
            opacity: 1,
            duration: 0.5,
            ease: "back.out",
          })
        },
      });
    }
  }, [snap.animation]);

  return (
    <div
      id="animated-checkout"
      className="relative z-100 md:top-[60px] md:right-0 w-full max-w-[412px] md:max-w-[412px] md:pt-[68px]"
    >
      <div
        id="glowing-checkout"
        className="absolute z-10 top-0 left-[50%] -translate-x-[50%] w-full max-w-[412px] min-h-[700px] p-2 rounded-xl card opacity-0"
      >
        <div
          id="glowing-checkout-inside"
          className="absolute z-10 top-1 left-1 right-1 bottom-1 bg-white/80 backdrop-blur-lg rounded-lg"
        ></div>
      </div>
      {/* <div
        id="sold-out"
        className="absolute top-12 md:top-10 left-20 md:left-auto md:right-24 z-1000 w-60 h-auto shadow-stripe rounded-lg scale-150 opacity-0"
      >
        <Image
          src="/assets/sold-out.avif"
          alt="sold out sign"
          width={300}
          height={100}
        />
      </div> */}
      <StripeCheckout index={0} />
    </div>
  );
};

export default _;
