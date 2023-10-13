import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useSnapshot } from "valtio";
import useSound from "use-sound";
import { state } from "@/store";
import Scene from "./_Scene";
import StripeCheckout from "@/components/_Checkout/_StripeCheckout";

const _ = () => {
  const snap = useSnapshot(state);
  const [showModal, setShowModal] = useState(false);

  const [backPlay, { stop: backStop }] = useSound("/songs/we-are-so-back.mp3", {
    volume: 0.5,
  });
  const [overPlay, { stop: overStop }] = useSound("/songs/its-so-over.mp3", {
    volume: 0.5,
  });
  const [scratchPlay] = useSound("/songs/scratch.mp3", {
    volume: 0.1,
  });

  const wasPlaying = useRef(false);
  const [canClick, setCanClick] = useState(true);

  useEffect(() => {
    state.musicPlaying = false;
    state.side = "front";

    backStop();
    overStop();

    return () => {
      backStop();
      overStop();
    };
  }, [backStop, overStop]);

  useEffect(() => {
    if (!canClick) {
      setTimeout(() => {
        setCanClick(true);
      }, 1000);
    }
  }, [canClick]);

  useEffect(() => {
    if (snap.musicPlaying) {
      if (wasPlaying.current) scratchPlay();

      if (snap.side == "front") {
        backStop();
        setTimeout(() => {
          overPlay();
        }, 500);
      } else {
        overStop();
        setTimeout(() => {
          backPlay();
        }, 500);
      }
      wasPlaying.current = true;
    } else {
      backStop();
      overStop();

      if (wasPlaying.current) scratchPlay();
      wasPlaying.current = false;
    }
  }, [
    backPlay,
    backStop,
    overPlay,
    overStop,
    scratchPlay,
    snap.musicPlaying,
    snap.side,
  ]);

  useEffect(() => {
    if (snap.side == "front") {
      gsap.to("#vinyl-front-title", {
        opacity: 1,
        y: "0%",
        duration: 1,
        ease: "power4.inOut",
      });
      gsap.to("#vinyl-back-title", {
        opacity: 0,
        y: "100%",
        duration: 1,
        ease: "power4.inOut",
      });
    } else {
      gsap.to("#vinyl-front-title", {
        opacity: 0,
        y: "100%",
        duration: 1,
        ease: "power4.inOut",
      });
      gsap.to("#vinyl-back-title", {
        opacity: 1,
        y: "0%",
        duration: 1,
        ease: "power4.inOut",
      });
    }
  }, [snap.side]);

  useEffect(() => {
    if (showModal) {
      gsap.to("#vinyl-overlay", {
        opacity: 1,
        duration: 1,
        pointerEvents: "auto",
        ease: "power3.inOut",
      });
      gsap.to("#vinyl-checkout", {
        opacity: 1,
        scale: 0.9,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to("#vinyl-overlay", {
        opacity: 0,
        duration: 0.75,
        pointerEvents: "none",
        ease: "power3.inOut",
      });
      gsap.to("#vinyl-checkout", {
        opacity: 0,
        scale: 0.6,
        pointerEvents: "none",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [showModal]);

  return (
    <div className="relative flex flex-col w-full p-5 pb-0 pt-19 bg-[#f0f0f0] rounded-xl overflow-scroll transition-colors duration-500 ease-in-out">
      {/* Scene */}
      <div className="absolute z-100 top-0 left-0 right-0 bottom-0">
        <Scene />
      </div>

      {/* Container */}
      <div className="relative top-0 flex gap-4 w-full h-[750px] pointer-events-none">
        {/* UI */}
        <div className="relative flex flex-col w-full h-full justify-between pointer-events-none">
          <div className="flex flex-col w-full mt-8">
            <div className="flex justify-between w-full">
              <div className="relative flex flex-col items-start text-black text-left leading-none">
                <div className="text-[62px] font-bold">WSB Record</div>
                <h3 className="absolute top-2 -right-14 opacity-20">2023</h3>
                <div className="flex w-full justify-between text-xs uppercase">
                  <div className="flex gap-2">
                    <p>7” Record</p>
                    <p>•</p>
                    <p>Double-sided</p>
                    <p>•</p>
                    <p>Original soundtrack</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-[3vw] leading-none dredd lined-text -scale-x-100">
                  STP
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-2">
            <Image
              className={`${snap.musicPlaying ? "animate-spin" : ""}`}
              src="/three/record.png"
              alt="record"
              width={32}
              height={32}
            />
            <div className="flex flex-col">
              <div className="relative overflow-hidden">
                <h3 id="vinyl-front-title">It&apos;s So Over</h3>
                <h3
                  id="vinyl-back-title"
                  className="absolute top-0 translate-y-[100%]"
                >
                  We Are So Back
                </h3>
              </div>
              <h4 className="uppercase opacity-50">Stripe Rock</h4>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="p-2 -ml-2 cursor-pointer">
                <div
                  className={`wiggle w-10 h-full ${
                    snap.musicPlaying ? "animated" : ""
                  }`}
                >
                  <div className="ball" />
                  <div className="ball" />
                  <div className="ball" />
                  <div className="ball" />
                </div>
              </div>
              <div
                className="flex pb-5"
                style={{
                  pointerEvents: !canClick ? "none" : "auto",
                }}
              >
                <div
                  className="flex justify-center items-center w-22 h-11 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer clicky"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  BUY NOW
                </div>
                <div
                  className={`flex justify-center items-center w-22 h-11 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer clicky ${
                    !snap.musicPlaying ? "clicked" : ""
                  }`}
                  onClick={() => {
                    state.musicPlaying = false;
                    setCanClick(false);
                  }}
                >
                  <Image
                    src="/icons/pause.svg"
                    alt="pause icon"
                    width={12}
                    height={12}
                  />
                </div>
                <div
                  className={`flex justify-center items-center w-22 h-11 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer clicky ${
                    snap.musicPlaying ? "clicked" : ""
                  }`}
                  onClick={() => {
                    state.musicPlaying = true;
                    setCanClick(false);
                  }}
                >
                  <Image
                    src="/icons/play.svg"
                    alt="play icon"
                    width={12}
                    height={12}
                  />
                </div>
                <div
                  className="flex justify-center items-center w-22 h-11 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer clicky"
                  onClick={() => {
                    state.side = snap.side == "front" ? "back" : "front";
                    setCanClick(false);
                  }}
                >
                  <Image
                    src="/icons/forward.svg"
                    alt="forward icon"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout */}
      <div
        id="vinyl-overlay"
        className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm opacity-0"
        onClick={() => setShowModal(false)}
      />
      <div
        id="vinyl-checkout"
        className="absolute top-[52px] left-[50%] -translate-x-[50%] bottom-5 min-w-[995px] py-6 bg-[#e9c45d] scale-50 opacity-0 shadow-stripe overflow-scroll"
      >
        <StripeCheckout index={3} full />
      </div>
    </div>
  );
};

export default _;
