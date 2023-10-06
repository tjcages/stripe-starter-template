import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import StripeCheckout from "./_StripeCheckout";

const _ = () => {
  const snap = useSnapshot(state);
  const prev = useRef<number | null>(null);

  useEffect(() => {
    state.tabs.forEach((_, i) => {
      if (i === snap.selected) {
        gsap.set(`#checkout-container-${i}`, {
          scale: 0.9,
        });
        gsap.to(`#checkout-container-${i}`, {
          scale: 1,
          padding: 0,
          duration: 1,
          delay: 1.5,
          ease: "power4.out",
        });
        gsap.to(`#checkout-content-${i}`, {
          borderRadius: 12,
          duration: 1,
          delay: 1.5,
          ease: "power4.out",
          overwrite: true,
        });
        return;
      } else {
        gsap.set(`#checkout-container-${i}`, {
          scale: 0.9,
          x: "-100%",
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      snap.selected === -1 ||
      snap.selected == prev.current ||
      prev.current == null
    ) {
      prev.current = snap.selected;
      return;
    } else {
      // hide last container
      gsap.to(`#checkout-container-${prev.current}`, {
        scale: 0.9,
        padding: 8,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
      gsap.to(`#checkout-content-${prev.current}`, {
        borderRadius: 8,
        duration: 1,
        ease: "power4.out",
        overwrite: true,
      });
      gsap.to(`#checkout-container-${prev.current}`, {
        y: "100%",
        duration: 1.5,
        delay: 0.2,
        ease: "power4.inOut",
      });

      // show new container
      if (snap.checkoutVisible) {
        gsap.set(`#checkout-container-${snap.selected}`, {
          y: "10%",
        });
        gsap.to(`#checkout-container-${snap.selected}`, {
          y: "0%",
          zIndex: 2,
          duration: 1.3,
          delay: 0.3,
          ease: "power4.inOut",
          overwrite: true,
          onComplete: () => {
            gsap.to(`#checkout-container-${snap.selected}`, {
              scale: 1,
              padding: 0,
              duration: 1,
              ease: "power4.out",
            });
            gsap.to(`#checkout-content-${snap.selected}`, {
              borderRadius: 12,
              duration: 1,
              ease: "power4.out",
              overwrite: true,
            });
          },
        });
      }

      prev.current = snap.selected;
    }
  }, [snap.selected, snap.checkoutVisible]);

  return (
    <div className="absolute top-14 right-6 flex w-full max-w-[412px]">
      {/* <div
        id={`checkout-border`}
        className="absolute w-full h-full rounded-2xl border-2 border-dashed border-white/20 z-0"
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