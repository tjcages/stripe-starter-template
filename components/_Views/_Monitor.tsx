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
        if (snap.mobile) {
          state.animation = "intro";
        } else {
          gsap.fromTo(
            "#macbook",
            {
              y: "100%",
              rotateX: -80,
              filter: "drop-shadow(0px 10px 20px rgba(153, 102, 255, 0))",
            },
            {
              y: "2%",
              rotateX: -35,
              filter: "drop-shadow(0px 10px 30px rgba(153, 102, 255, 0.4))",
              duration: 2,
              ease: "expo.out",
            }
          );
          gsap.fromTo(
            "#macbook-background",
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 1.5,
              delay: 0.75,
              ease: "expo.out",
            }
          );
          gsap.fromTo(
            "#browser-container",
            {
              y: "-10%",
              opacity: 0,
              scaleX: "30%",
              scaleY: "20%",
              rotateX: -45,
            },
            {
              y: "-25%",
              opacity: 1,
              scaleX: "50%",
              scaleY: "30%",
              duration: 1.5,
              delay: 0.5,
              ease: "expo.inOut",
              onComplete: () => {
                if (snap.animation === "start") state.animation = "intro";
              },
            }
          );
        }
        break;
      case "intro":
        gsap.fromTo(
          "#macbook",
          {
            y: "2%",
            rotateX: -35,
            filter: "drop-shadow(0px 10px 30px rgba(153, 102, 255, 0.4))",
          },
          {
            y: "105%",
            rotateX: 60,
            filter: "drop-shadow(0px 10px 30px rgba(153, 102, 255, 0))",
            duration: 3,
            ease: "expo.inOut",
            onComplete: () => {
              gsap.set("#macbook", {
                display: "none",
              });
            },
          }
        );
        gsap.fromTo(
          "#browser-container",
          {
            y: "-25%",
            scaleX: "50%",
            scaleY: "30%",
            rotateX: -45,
          },
          {
            y: "0%",
            scaleX: "100%",
            scaleY: "100%",
            rotateX: 0,
            duration: 3,
            ease: "expo.inOut",
          }
        );
    }
  }, [snap.animation, snap.mobile]);

  return snap.mobile ? (
    children
  ) : (
    <div
      className="relative flex flex-col justify-center items-center z-10 w-full h-auto max-w-screen-xl md:max-w-[1200px]"
      style={{ perspective: 2000 }}
    >
      <div
        id="macbook"
        className="absolute z-10 w-full h-full max-w-[1100px]"
        style={{
          transform: "translateY(100%) rotateX(-80deg)",
          filter: "drop-shadow(0px 10px 20px rgba(153, 102, 255, 0.25))",
        }}
      >
        <div
          className="absolute top-[1.2%] p-2 left-[8%] right-[8%] h-[150%] bg-black"
          style={{
            transform: "rotateX(-4deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            id="macbook-background"
            priority
            className="absolute top-0 left-0 right-0 bottom-0 object-cover pointer-events-none opacity-0"
            src="/assets/background.avif"
            alt="mac background"
            width={2000}
            height={1000}
          />
        </div>
        <Image
          priority
          className="relative w-full h-auto pointer-events-none"
          src="/assets/air.avif"
          alt="mac"
          width={1000}
          height={2000}
        />
      </div>
      <div
        id="browser-container"
        className="relative z-10 w-full h-auto bg-[#96f] rounded-xl opacity-0"
      >
        {children}
      </div>
    </div>
  );
};

export default _;
