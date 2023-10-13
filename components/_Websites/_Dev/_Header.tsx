const _ = () => {
  return (
    <div className="relative flex justify-between items-center w-full p-4 text-white font-bold bg-gradient-to-b from-[#1b78d5] to-[#3691ee] rounded-t-xl">
      <div className="flex items-center gap-8">
        <div className="flex flex-col">
          <div>/dev/payments</div>
          <p>Payment processing for developers</p>
        </div>
        <h4>API</h4>
        <h4>Pricing</h4>
        <h4>About</h4>
        <h4>Contact</h4>
      </div>
      <button className="py-1 px-4 bg-gradient-to-t from-[#222] via-[#000] to-[#444] rounded-full border border-gray-400">
        Login
      </button>
    </div>
  );
};

export default _;
