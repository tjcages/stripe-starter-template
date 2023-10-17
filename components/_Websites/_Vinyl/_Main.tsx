import { Suspense, useState, useEffect, useRef } from "react";
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
      }, 500);
    }
  }, [canClick]);

  useEffect(() => {
    if (snap.musicPlaying) {
      if (wasPlaying.current) scratchPlay();

      if (snap.side == "front") {
        overStop();
        setTimeout(() => {
          backPlay();
        }, 500);
      } else {
        backStop();
        setTimeout(() => {
          overPlay();
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
    if (snap.mobile) return;
    if (showModal) {
      gsap.to("#vinyl-overlay", {
        opacity: 1,
        duration: 1,
        pointerEvents: "auto",
        ease: "power3.inOut",
      });
      gsap.to("#vinyl-checkout", {
        opacity: 1,
        y: "0%",
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
        y: "100%",
        pointerEvents: "none",
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [showModal, snap.mobile]);

  return (
    <div
      className="relative flex flex-col w-full min-h-[750px] md:min-h-[700px] p-5 pb-0 pt-19 rounded-xl overflow-scroll transition-colors duration-500 ease-out"
      style={{
        backgroundColor: snap.side == "front" ? "#f3df9a" : "#c3daee",
      }}
    >
      {/* Scene */}
      <div className="absolute md:fixed z-100 top-0 left-0 right-0 h-[500px] md:h-auto md:bottom-0 md:rounded-xl md:overflow-hidden">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>

      {/* Container */}
      <div className="relative h-[500px] md:h-auto md:fixed md:top-0 md:left-0 md:right-0 md:bottom-0 flex gap-4 md:p-5 w-full pointer-events-none md:rounded-xl md:overflow-hidden">
        {/* UI */}
        <div className="relative flex flex-col w-full h-full justify-between pointer-events-none">
          <div className="flex flex-col w-full mt-8">
            <div className="flex justify-between w-full">
              <div className="relative flex flex-col items-start text-black text-left leading-none">
                <div className="text-[32px] md:text-[62px] font-bold">
                  WSB Records
                </div>
                <div className="absolute top-0 md:top-2 -right-10 md:-right-14 opacity-20 text-[16px] md:text-[20px]">
                  2023
                </div>
                <div className="flex w-full justify-between text-xs uppercase">
                  <div className="flex flex-col md:w-full mt-2 md:ml-3 md:mt-0 md:flex-row md:gap-2 md:justify-between">
                    <p>7” Record</p>
                    {!snap.mobile && <p>•</p>}
                    <p>Double-sided</p>
                    {!snap.mobile && <p>•</p>}
                    <p>Hand-cut</p>
                    {!snap.mobile && <p>•</p>}
                    <p>$24.24</p>
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
            <div className="flex flex-col">
              <div className="relative overflow-hidden">
                <h3 id="vinyl-front-title">We Are So Back</h3>
                <h3
                  id="vinyl-back-title"
                  className="absolute top-0 translate-y-[100%]"
                >
                  It&apos;s So Over
                </h3>
              </div>
              <div className="flex w-full justify-between items-center">
                <h4 className="uppercase text-sm opacity-50">
                  {snap.musicPlaying ? "Now Playing" : "Not Playing"}
                </h4>
                {snap.mobile && (
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
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row justify-stretch md:justify-between md:items-center w-full">
              {!snap.mobile && (
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
              )}
              <div
                className="flex pb-5"
                style={{
                  pointerEvents: !canClick ? "none" : "auto",
                }}
              >
                <div
                  className={`flex justify-center items-center w-32 gap-1 h-12 md:h-13 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer clicky ${
                    snap.musicPlaying ? "clicked" : ""
                  }`}
                  onClick={() => {
                    if (snap.musicPlaying) state.musicPlaying = false;
                    else state.musicPlaying = true;

                    setCanClick(false);
                  }}
                >
                  <Image
                    src="/icons/play.svg"
                    alt="play icon"
                    width={12}
                    height={12}
                    className="min-w-3 min-h-3"
                  />
                  <Image
                    src="/icons/pause.svg"
                    alt="pause icon"
                    width={12}
                    height={12}
                    className="min-w-3 min-h-3"
                  />
                </div>
                <div
                  className="flex justify-center items-center w-28 md:w-26 h-12 md:h-13 py-3 px-6 md:px-7 border border-black text-xs text-black uppercase cursor-pointer clicky"
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
                    className="min-w-4 min-h-4"
                  />
                </div>
                <div
                  className="flex justify-center items-center w-full md:w-22 h-12 md:h-13 py-3 px-8 md:px-4 border border-black text-sm text-black font-bold uppercase cursor-pointer clicky"
                  onClick={() => {
                    if (snap.mobile) {
                      // scroll to #vinyl-checkout
                      const checkout =
                        document.getElementById("vinyl-checkout");
                      if (checkout) {
                        window.scrollTo({
                          top: checkout.offsetTop,
                          behavior: "smooth",
                        });
                      }
                    } else setShowModal(true);
                  }}
                >
                  BUY NOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout */}
      {!snap.mobile && (
        <div
          id="vinyl-overlay"
          className={`fixed top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm opacity-0 rounded-xl overflow-hidden cursor-pointer ${
            showModal ? "pointer-events-auto" : "pointer-events-none"
          }`}
          onClick={() => setShowModal(false)}
        />
      )}
      <div
        id="vinyl-checkout"
        className="relative md:absolute md:top-[52px] md:left-[50%] md:-translate-x-[50%] md:min-w-[995px] md:min-h-[750px] pb-6 md:py-6 md:bg-[#000] md:translate-y-[100%] md:opacity-0 md:shadow-stripe md:overflow-scroll"
      >
        {snap.mobile ? (
          <StripeCheckout index={1} />
        ) : (
          showModal && <StripeCheckout index={1} full />
        )}
      </div>
    </div>
  );
};

export default _;
