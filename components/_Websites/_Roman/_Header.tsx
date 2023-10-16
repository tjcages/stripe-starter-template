import Image from "next/image";

interface Props {
  mobile: boolean;
}

const _ = ({ mobile }: Props) => {
  return (
    <div className="flex justify-between items-center w-full gap-4 p-2 md:px-4 bg-white border border-[#cccccc]">
      <div className="flex justify-start items-center w-full gap-2">
        <div className="flex gap-2 mr-auto md:m-0">
          <Image
            src="/icons/swords.svg"
            alt="swords"
            width={24}
            height={24}
            style={{ height: "auto" }}
            className="w-4 h-4 md:w-6 md:h-6"
          />
          <div className="text-[16px] md:text-[20px] mr-4 text-[#615cfd]">
            Caesar&apos;s List
          </div>
        </div>
        <p className="px-2 py-1 bg-[#eaeaea] text-[#615cfd]">Colosseum Kits</p>
        <p className="px-2 py-1 bg-[#eaeaea] text-[#615cfd]">
          Aqueducts near me
        </p>
      </div>
      {!mobile && (
        <div className="flex gap-6 items-center pr-4">
          <Image
            src="/icons/rome.svg"
            alt="rome"
            width={30}
            height={30}
            style={{ height: "auto" }}
          />
          {/* <Image
        src="/icons/user.svg"
        alt="user"
        width={20}
        height={20}
        style={{ height: "auto" }}
      /> */}
        </div>
      )}
    </div>
  );
};

export default _;
