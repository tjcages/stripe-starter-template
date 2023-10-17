import { useEffect } from "react";
import { useSnapshot } from "valtio";
import gsap from "gsap";
import { state } from "@/store";
import Tab from "./_Tab";

const _ = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    if (snap.animation == "intro") {
      state.tabs.forEach((tab, index) => {
        gsap.to(`#tab-${tab.id}`, {
          opacity: 1,
          duration: 1,
          delay: 2.5 + index * 0.25,
          ease: "expo.inOut",
        });
      });
    } else if (snap.animation == "end") {
      gsap.to("#glow-move", {
        opacity: 0.4,
        duration: 1,
        ease: "power4.out",
        onComplete: () => {
          gsap.to("#glow-move", {
            x: "100vw",
            duration: 3,
            ease: "power4.inOut",
          });
          gsap.to("#glow-move", {
            opacity: 0,
            duration: 1.5,
            delay: 1,
            ease: "power4.inOut",
          });
        },
      });
    }
  }, [snap.animation]);

  return (
    <div className="absolute top-0 z-10 flex items-end gap-1 md:gap-4 w-full h-9 p-1.5 pb-0 bg-[#dfe1e5]/70 backdrop-blur-lg overflow-hidden rounded-t-xl">
      <div className="flex gap-1.5 ml-1 p-3">
        <div className="w-2 h-2 rounded-full bg-[#ecf2f7]" />
        <div className="w-2 h-2 rounded-full bg-[#ecf2f7]" />
        <div className="w-2 h-2 rounded-full bg-[#ecf2f7]" />
      </div>
      <div
        id="glow-move"
        className="absolute left-20 -bottom-14 w-60 h-10 bg-[#645CFF] rounded-full blur-xl opacity-0 shadow-stripeReverse"
      />
      <div className="relative flex items-end justify-start gap-2 w-full h-full">
        {state.tabs.map((tab, index) => (
          <Tab
            key={index}
            id={tab.id}
            selected={snap.selected == tab.id}
            title={tab.title}
            icon={tab.icon}
            color={tab.color}
            background={tab.background}
            backgroundDark={tab.backgroundDark}
          />
        ))}
      </div>
    </div>
  );
};

export default _;
