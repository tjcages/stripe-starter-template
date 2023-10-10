import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useSnapshot } from "valtio";
import { state } from "@/store";

interface Props {
  children: React.ReactNode;
}

const _ = ({ children }: Props) => {
  const snap = useSnapshot(state);

  useEffect(() => {
    switch (snap.animation) {
      case "start":
        gsap.fromTo(
          "#macbook",
          {
            y: "100%",
            rotateX: -80,
            filter: "drop-shadow(0px 10px 20px rgba(153, 102, 255, 0))",
          },
          {
            y: "0%",
            rotateX: -35,
            filter: "drop-shadow(0px 10px 30px rgba(153, 102, 255, 0.4))",
            duration: 2,
            ease: "expo.out",
          }
        );
        gsap.fromTo(
          "#macbook-background",
          {
            background: "black",
          },
          {
            background: "white",
            duration: 1.5,
            delay: 0.75,
            ease: "expo.out",
          }
        );
        gsap.fromTo(
          "#browser-container",
          {
            y: "10%",
            opacity: 0,
            scaleX: "40%",
            scaleY: "40%",
            rotateX: -45,
          },
          {
            y: "0%",
            opacity: 1,
            scaleX: "60%",
            scaleY: "60%",
            duration: 1.5,
            delay: 0.5,
            ease: "expo.inOut",
            onComplete: () => {
              if (snap.animation === "start") state.animation = "intro";
            },
          }
        );
        break;
      case "intro":
        gsap.fromTo(
          "#macbook",
          {
            y: "0%",
            rotateX: -35,
            filter: "drop-shadow(0px 10px 30px rgba(153, 102, 255, 0.4))",
          },
          {
            y: "105%",
            rotateX: 60,
            filter: "drop-shadow(0px 10px 30px rgba(153, 102, 255, 0))",
            duration: 3,
            ease: "expo.inOut",
          }
        );
        gsap.fromTo(
          "#browser-container",
          {
            scaleX: "60%",
            scaleY: "60%",
            rotateX: -45,
          },
          {
            scaleX: "100%",
            scaleY: "100%",
            rotateX: 0,
            duration: 3,
            ease: "expo.inOut",
          }
        );
    }
  }, [snap.animation]);

  return (
    <div
      className="relative z-10 w-full h-full  max-w-screen-xl md:max-w-[1200px] max-h-[80%]"
      style={{ perspective: 2000 }}
    >
      <div
        id="macbook"
        className="relative z-10 w-full h-full"
        style={{
          transform: "translateY(100%) rotateX(-80deg)",
          filter: "drop-shadow(0px 10px 20px rgba(153, 102, 255, 0.25))",
        }}
      >
        <div
          id="macbook-background"
          className="absolute top-[1%] p-2 left-[8%] right-[8%] h-[150%] bg-black"
          style={{
            transform: "rotateX(-4deg)",
            transformStyle: "preserve-3d",
          }}
        ></div>
        <Image
          priority
          className="relative w-full h-auto pointer-events-none"
          src="/assets/air.png"
          alt="mac"
          width={1000}
          height={2000}
        />
      </div>
      <div
        id="browser-container"
        className="fixed top-[47.5%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 w-full h-full bg-[#96f] rounded-xl opacity-0"
      >
        {children}
      </div>
    </div>
  );
};

export default _;
