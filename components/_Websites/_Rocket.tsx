import Image from "next/image";

const _ = () => {
  return (
    <div className="relative w-full h-full max-h-full pt-8 rounded-b-xl overflow-hidden">
      <div className="absolute z-0 top-[35%] -left-[50%] w-[200%] h-full bg-white -rotate-[9deg]" />

      {/* Header */}
      <div className="relative flex justify-between items-center w-full py-8 px-16">
        <Image
          src="/icons/rocket-rides.svg"
          alt="rocket rides logo"
          width={200}
          height={32}
        />
      </div>

      {/* Main */}
      <div className="relative flex flex-col gap-4 py-8 px-16">
        <div className="absolute">
          <div className="font-black text-[#ccc] opacity-50 text-[8vw] leading-none">
            Get Ready <br />
            for Take Off
          </div>
        </div>
        <div className="font-black text-[#0B5B3E] text-[8vw] leading-none mix-blend-color-burn	">
          Get Ready <br />
          for Take Off
        </div>
        <h3 className="max-w-[400px] opacity-50">
          Rocket Rides is the world’s leading air travel platform: join our team
          of pilots to help people travel faster.
        </h3>
      </div>
    </div>
  );
};

export default _;
