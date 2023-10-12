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
    state.side = "front";
  }, []);

  return (
    <div
      className="relative flex w-full h-[720px] p-5 pb-0 pt-19 bg-[#f0f0f0] rounded-xl overflow-scroll transition-colors duration-500 ease-in-out"
      style={{
        backgroundColor: snap.side == "front" ? "#E5BE53" : "#91BBE3",
      }}
    >
      {/* Container */}
      <div className="sticky top-0 flex gap-4 w-full h-full">
        {/* UI */}
        <div className="relative flex flex-col w-full h-full justify-between pointer-events-none">
          <div className="flex flex-col w-full pr-5 mt-8">
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

          <div className="relative flex flex-col gap-2">
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
              <div className="flex pb-5 pr-5">
                <div
                  className={`flex justify-center items-center w-22 h-11 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer pointer-events-auto clicky ${
                    !snap.musicPlaying ? "clicked" : ""
                  }`}
                  style={{
                    backgroundColor:
                      snap.side == "front" ? "#E5BE53" : "#91BBE3",
                  }}
                  onClick={() => {
                    state.musicPlaying = false;
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
                  className={`flex justify-center items-center w-22 h-11 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer pointer-events-auto clicky ${
                    snap.musicPlaying ? "clicked" : ""
                  }`}
                  style={{
                    backgroundColor:
                      snap.side == "front" ? "#E5BE53" : "#91BBE3",
                  }}
                  onClick={() => {
                    state.musicPlaying = true;
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
                  className="flex justify-center items-center w-22 h-11 py-3 px-8 border border-black text-xs text-black uppercase cursor-pointer pointer-events-auto clicky"
                  style={{
                    backgroundColor:
                      snap.side == "front" ? "#E5BE53" : "#91BBE3",
                  }}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout */}
      <div className="relative w-full max-w-[380px] h-auto my-9 z-10">
        <div className="rounded-lg overflow-hidden">
          <StripeCheckout selected index={2} />
        </div>
      </div>
    </div>
  );
};

export default _;
