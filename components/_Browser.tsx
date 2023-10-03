interface Props {
  children: React.ReactNode[];
}

const _ = ({ children }: Props) => {
  return (
    <div className="relative w-[90%] max-w-screen-xl md:max-w-screen-lg h-full mb-[2.5%] rounded-xl overflow-scroll bg-white shadow-stripe">
      <div className="relative w-full h-full">{children}</div>
      <Bar />
    </div>
  );
};

const Bar = () => {
  return (
    <div className="absolute top-0 flex items-center w-full h-8 p-1.5 bg-[#fcfeff]/70 backdrop-blur-sm shadow-browser">
      <div className="flex gap-1.5 ml-1 p-3">
        <div className="w-2 h-2 rounded-full bg-[#ecf2f7]" />
        <div className="w-2 h-2 rounded-full bg-[#ecf2f7]" />
        <div className="w-2 h-2 rounded-full bg-[#ecf2f7]" />
      </div>
      <div className="flex justify-center items-center w-full max-w-[60%] h-full m-auto gap-2.5 backdrop-blur-sm rounded-full text-xs text-[#0a2540]">
        rocketrides.com
      </div>
    </div>
  );
};

export default _;
