import Navigation from "./_Navigation";

interface Props {
  children: React.ReactNode[];
}

const _ = ({ children }: Props) => {
  return (
    <div className="relative w-[90%] max-w-screen-xl md:max-w-[1200px] h-full mb-[2.5%] rounded-xl overflow-scroll bg-white shadow-stripe">
      <div className="relative w-full h-full overflow-scroll">{children}</div>
      <Navigation />
    </div>
  );
};

export default _;
