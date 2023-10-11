import Scene from "./_Scene";
import Walcman from "../_Walcman"

const _ = () => {
  return (
    <div className="relative w-full h-auto min-h-[920px] p-8 gap-4 bg-[#f1d2f5] rounded-xl overflow-hidden">
      <Scene />
      {/* <Walcman /> */}

      {/* Container */}
      <div className="relative flex gap-4 w-full">
        {/* Left */}
        <div className="flex flex-col items-center text-[#35c19f]">
          <div className="text-[7vw] dredd leading-none mt-8">WSB.TV</div>
          <div className="flex w-full justify-between text-xs uppercase">
            <p>WSB.TV</p>
            <div className="flex gap-2">
              <p>24hrs</p>
              <p>•</p>
              <p>7 Days a Week</p>
              <p>•</p>
              <p>All Year</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full mt-2">
            <div className="w-full h-[2px] bg-[#35c19f]" />
            <div className="w-full h-[2px] bg-[#35c19f] opacity-80" />
            <div className="w-full h-[2px] bg-[#35c19f] opacity-60" />
            <div className="w-full h-[2px] bg-[#35c19f] opacity-40" />
            <div className="w-full h-[2px] bg-[#35c19f] opacity-20" />
            <div className="w-full h-[2px] bg-[#35c19f] opacity-5" />
          </div>
        </div>

        {/* Right */}
      </div>
    </div>
  );
};

export default _;
