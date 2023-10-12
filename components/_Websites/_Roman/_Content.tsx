import Image from "next/image";

const _ = () => {
  return (
    <div className="flex flex-col w-full h-full py-4 pb-4">
      <h3>Gaius Julius Caesar Roman Emperor Desktop Bust - $42 (Suburra)</h3>
      <div className="flex w-full gap-4 py-4">
        <Image
          className="max-w-[50%]"
          src="/assets/julias.png"
          alt="julias bust"
          width={600}
          height={800}
          style={{ height: "auto" }}
        />
        <div className="flex flex-col justify-between h-full gap-0">
          <div className="flex flex-col h-full justify-end">
            <h4>
              Perfect for those that think about the Roman Empire more than
              they’d like to admit.
              <br />
              <br />
            </h4>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-0.5">
              <Image
                className="w-20 h-20"
                src="/assets/julias-1.png"
                alt="julias"
                width={300}
                height={300}
              />
              <Image
                className="w-20 h-20"
                src="/assets/julias-2.png"
                alt="julias"
                width={300}
                height={300}
              />
              <Image
                className="w-20 h-20"
                src="/assets/julias-3.png"
                alt="julias"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="flex gap-2 mb-4">
        <p className="px-2 py-1 bg-[#eeeeee] border border-[#cccccc] text-blue-600">
          Condition: Handsome
        </p>
        <p className="px-2 py-1 bg-[#eeeeee] border border-[#cccccc] text-blue-600">
          Honorable
        </p>
        <p className="px-2 py-1 text-blue-600">See more</p>
      </div>
      <h4>
        Meticulously crafted 3D bust of the renowned Roman Emperor.
        <br />
        Condition: Mint, with no backstabs (or chargebacks).
        <br />
        Looking for a quick sale before the Ides of March.
        <br />
        Serious inquiries only.
        <br />
        <span className="italic">Not you, Brute.</span>
        <br />
        <br />
        Payment via Stripe, denarii not accepted.
        <br />
        The bust measures 8&quot;/20cm in height.
        <br />
        Made from PLA, an eco friendly, biodegradable plastic derived from
        plants.
        <br />
        Due to the 3D printing process, small imperfections may occur.
      </h4>
      <div className="flex gap-8 mt-8">
        <p>
          post id: <span className="text-blue-600">MMCCXLII</span>
        </p>
        <p>Posted 1,547 years ago</p>
        <p>Updated 2 days ago</p>
      </div>

      {/* Ads */}
      <div className="flex gap-2 mt-14 mb-4">
        <h4>Community posts</h4>
        <p className="ml-4 px-2 py-1 bg-[#eeeeee] border border-[#cccccc] text-blue-600">
          List
        </p>
        <p className="px-2 py-1 bg-[#eeeeee] border border-[#cccccc] text-blue-600">
          Filter
        </p>
      </div>
      <div className="flex justify-between items-start w-full mb-2">
        <div className="flex items-start gap-2">
          <Image
            className="mt-2"
            src="/icons/star.svg"
            alt="star"
            width={16}
            height={16}
          />
          <div className="flex flex-col">
            <h3>Looking to sack a city</h3>
            <p className="opacity-50">Troy • 5 hours ago</p>
          </div>
        </div>
        <Image
          className="w-24 h-24"
          src="/assets/trojan.jpg"
          alt="trojan"
          width={200}
          height={200}
          style={{ height: "auto" }}
        />
      </div>
      <div className="flex justify-between items-start w-full mb-4">
        <div className="flex items-start gap-2">
          <Image
            className="mt-2"
            src="/icons/star.svg"
            alt="star"
            width={16}
            height={16}
          />
          <div className="flex flex-col">
            <h3>Earth: flatter than you&apos;d expect</h3>
            <p className="opacity-50">Plato • 2 moons ago</p>
          </div>
        </div>
        <Image
          className="w-24 h-24"
          src="/assets/astronomy.jpg"
          alt="astronomy"
          width={200}
          height={200}
          style={{ height: "auto" }}
        />
      </div>
      <div className="flex justify-between items-start w-full">
        <div className="flex items-start gap-2">
          <Image
            className="mt-2"
            src="/icons/star.svg"
            alt="star"
            width={16}
            height={16}
          />
          <div className="flex flex-col">
            <h3>The Ides of March: Now also a Stripe billing cycle</h3>
            <p className="opacity-50">Latin • 74th day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default _;
