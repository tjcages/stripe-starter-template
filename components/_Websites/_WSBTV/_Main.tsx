import { useEffect } from "react";
import Image from "next/image";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import Scene from "./_Scene";
import StripeCheckout from "@/components/_Checkout/_StripeCheckout";

const _ = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    state.musicPlaying = false;
  }, []);

  return (
    <div className="relative flex w-full h-[720px] bg-[#f0f0f0] rounded-xl overflow-hidden">
      {/* Marquee */}
      <div className="flex flex-col gap-4 items-center justify-start h-full py-5 pl-5 rotate-180 bg-[#313131] text-white text-[7vw] leading-none">
        <div
          className="flex justify-between h-full mb-8 mr-1"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span>2020</span>
          <span>–</span>
          <span>2023</span>
        </div>
      </div>

      {/* Container */}
      <div className="relative flex gap-4 w-full h-full">
        {/* Background */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0 flex flex-col cubes">
          <div className="relative w-full h-full bg-[#91BBE3] mix-blend-multiply" />
          <div className="relative z-10 w-full h-full bg-[#E5BE53]" />
        </div>

        {/* UI */}
        <div className="relative flex flex-col w-full h-full justify-between pointer-events-none">
          <div className="flex flex-col w-full p-5 mt-8">
            <div className="flex justify-between w-full">
              <div className="relative flex flex-col items-start text-black text-left leading-tight">
                <h2>
                  Tischsuper
                  <br />
                  RT 20 Radio
                </h2>
                <h3 className="absolute top-0 -right-9 opacity-20">1963</h3>
                <div className="flex w-full justify-between text-xs uppercase">
                  <div className="flex gap-2">
                    <p>24hrs</p>
                    <p>•</p>
                    <p>7 Days</p>
                    <p>•</p>
                    <p>All Year</p>
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

          {/* Scene */}
          <div className="absolute z-100 top-0 left-0 right-0 bottom-0">
            <Scene />
          </div>

          <div className="relative flex flex-col gap-2 p-5">
            <Image
              className={`${snap.musicPlaying ? "animate-spin" : ""}`}
              src="/three/record.png"
              alt="record"
              width={32}
              height={32}
            />
            <div className="flex flex-col">
              <h3>Name of Video</h3>
              <h4 className="uppercase opacity-50">By Creator</h4>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-2 items-center">
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
                <h4>02:03</h4>
                <h4>/</h4>
                <h4>03:30</h4>
              </div>
              <div className="flex">
                <div
                  className="flex justify-center items-center w-22 h-11 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer pointer-events-auto"
                  onClick={() => {
                    state.side = snap.side == "front" ? "back" : "front";
                  }}
                >
                  <Image
                    src="/icons/rewind.svg"
                    alt="rewind icon"
                    width={16}
                    height={16}
                  />
                </div>
                <div
                  className="flex justify-center items-center w-22 h-11 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer pointer-events-auto"
                  onClick={() => (state.musicPlaying = true)}
                >
                  <Image
                    src="/icons/play.svg"
                    alt="play icon"
                    width={12}
                    height={12}
                  />
                </div>
                <div
                  className="flex justify-center items-center w-22 h-11 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer pointer-events-auto"
                  onClick={() => (state.musicPlaying = false)}
                >
                  <Image
                    src="/icons/pause.svg"
                    alt="pause icon"
                    width={12}
                    height={12}
                  />
                </div>
                <div
                  className="flex justify-center items-center w-22 h-11 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer pointer-events-auto"
                  onClick={() => {
                    state.side = snap.side == "front" ? "back" : "front";
                  }}
                >
                  <Image
                    src="/icons/forward.svg"
                    alt="forward icon"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="relative flex justify-center items-center w-22 h-11 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer pointer-events-auto">
                  <div className="w-3 h-3 bg-[#ff611b] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout */}
      <div className="relative w-full max-w-[380px] h-full z-10 mt-6 pt-2 pb-10 bg-white overflow-scroll">
        <StripeCheckout selected index={2} />
      </div>
    </div>
  );
};

export default _;
