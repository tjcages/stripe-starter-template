import { useEffect } from "react";
import gsap from "gsap";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import Navigation from "./_Navigation";

interface Props {
  children: React.ReactNode[] | React.ReactNode;
}

const _ = ({ children }: Props) => {
  const snap = useSnapshot(state);

  useEffect(() => {
    if (snap.animation == "intro") {
      gsap.to("#browser-content", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "expo.inOut",
      });
    }
  }, [snap.animation]);

  return (
    <div
      id="browser-window"
      className="relative z-10 w-full h-auto rounded-xl shadow-stripe"
      style={{
        backgroundColor: state.tabs[snap.selected].background,
      }}
    >
      <div id="browser-content" className="relative w-full h-auto opacity-0">
        {children}
      </div>
      <Navigation />
    </div>
  );
};

export default _;
