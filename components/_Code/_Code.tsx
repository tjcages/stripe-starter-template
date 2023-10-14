import { useEffect } from "react";
import gsap from "gsap";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import Header from "./_Header";
import Content from "./_Content";

const _ = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    if (snap.animation == "end") {
      gsap.to("#code-container", {
        x: "0%",
        duration: 2,
        delay: 2,
        ease: "expo.inOut",
      });
    } else {
      gsap.to("#code-container", {
        x: "100%",
        duration: 1,
        ease: "expo.inOut",
      });
    }
    if (snap.codeOpen) {
      gsap.to("#code-container", {
        width: 500,
        height: 500,
        boxShadow:
          "0 -20px 44px rgba(50,50,93,.22), 0 1px 32px rgba(50,50,93,.2), 0 -3px 12px rgba(0,0,0,.08)",
        duration: 0.5,
        ease: "power4.inOut",
      });
    } else {
      gsap.to("#code-container", {
        width: 48,
        height: 48,
        boxShadow: "none",
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [snap.animation, snap.codeOpen]);

  return (
    <div
      id="code-container"
      className="fixed right-0 bottom-3 z-10 flex flex-col gap-1 items-start justify-between w-56 h-12 rounded-l-lg bg-[#2a2f45]/90 backdrop-blur-md text-white uppercase text-sm cursor-pointer translate-x-full"
    >
      <Header />
      <Content />
    </div>
  );
};

export default _;
