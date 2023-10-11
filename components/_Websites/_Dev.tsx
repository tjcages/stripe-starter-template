const _ = () => {
  return (
    <div className="relative flex w-full h-auto gap-4 pt-8 rounded-[20px] overflow-hidden bg-white">
      {/* Content */}
      <div className="relative top-8 left-0 w-full h-full">
        {/* Header */}
        <div className="relative flex justify-between items-center w-full m-4 mb-0 p-4 text-white font-bold bg-gradient-to-b from-[#1b78d5] to-[#3691ee] rounded-t-xl">
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

        {/* Main */}
        <div className="w-full m-4 my-0 p-8 bg-[#fada74]">
          <h1>
            Payment Processing
            <br />
            Done Right.
          </h1>
        </div>

        {/* Spacer */}
        <div className="w-full h-full m-4 mt-0 p-8 bg-[#fff]" />
      </div>

      {/* Checkout */}
      <div className="relative w-full max-w-[472px] min-h-[1020px]">
        
      </div>
    </div>
  );
};

export default _;
