import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

const _ = ({ children }: Props) => {
  return (
    <div className="relative flex w-full h-auto pt-8 rounded-[20px] overflow-hidden bg-gradient-to-br from-[#96f]">
      <div className="w-full h-auto">
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
            Rocket Rides is the world’s leading air travel platform: join our
            team of pilots to help people travel faster.
          </h3>
        </div>
      </div>

      {/* Checkout */}
      <div className="w-full max-w-[412px] min-h-[1020px]">{children}</div>
    </div>
  );
};

export default _;
