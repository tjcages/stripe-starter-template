import { useEffect } from "react";
import gsap from "gsap";
import { useSnapshot } from "valtio";
import { state } from "@/store";

const _ = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    if (snap.codeOpen) {
      gsap.to("#code-overlay", {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power4.inOut",
      });
    } else {
      gsap.to("#code-overlay", {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [snap.codeOpen]);

  return (
    <div
      id="code-overlay"
      className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-[#2a2f45] bg-opacity-50 backdrop-blur-sm cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        state.codeOpen && (state.codeOpen = false);
      }}
    />
  );
};

export default _;
