interface Props {
  ready: boolean;
}

const _ = ({ ready }: Props) => {
  return (
    <div
      className={`relative flex justify-between items-center w-full px-4 py-2 md:p-4 text-white font-bold bg-gradient-to-b from-[#1b78d5] to-[#3691ee] rounded-t-xl transition-all duration-1000 ${
        ready ? "grayscale-0" : "grayscale"
      }`}
    >
      <div className="flex items-center gap-8">
        <div className="flex flex-col">
          <div>/dev/payments</div>
          <p>Payment processing for developers</p>
        </div>
        <div
          className="items-center gap-8 hidden md:flex transition-opacity duration-1000"
          style={{
            opacity: ready ? 1 : 0,
          }}
        >
          <h4>API</h4>
          <h4>Pricing</h4>
          <h4>About</h4>
          <h4>Contact</h4>
        </div>
      </div>
      <button className="py-1 px-4 bg-gradient-to-t from-[#222] via-[#000] to-[#444] rounded-full border border-gray-400">
        Login
      </button>
    </div>
  );
};

export default _;
