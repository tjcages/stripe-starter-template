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
          delay: 3 + index * 0.25,
          ease: "expo.inOut",
        });
      });
    }
  }, [snap.animation]);

  return (
    <div className="absolute top-0 z-10 flex items-end gap-4 w-full h-9 p-1.5 pb-0 bg-[#dfe1e5]/70 backdrop-blur-lg overflow-hidden rounded-t-xl">
      <div className="flex gap-1.5 ml-1 p-3">
        <div className="w-2 h-2 rounded-full bg-[#ecf2f7]" />
        <div className="w-2 h-2 rounded-full bg-[#ecf2f7]" />
        <div className="w-2 h-2 rounded-full bg-[#ecf2f7]" />
      </div>
      <div className="absolute left-20 -bottom-10 w-60 h-12 bg-[#96f] rounded-full blur-lg" />
      <div className="relative flex items-end justify-start gap-2 h-full">
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
