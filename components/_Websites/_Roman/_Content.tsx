import Image from "next/image";

const _ = () => {
  return (
    <div className="flex flex-col w-full h-full py-4 pb-4">
      <h3>Lightly used suit of armor from Rome</h3>
      <div className="flex w-full gap-8 py-4">
        <Image
          className="max-w-[50%]"
          src="/assets/armor.png"
          alt="armor"
          width={600}
          height={800}
          style={{ height: "auto" }}
        />
        <div className="flex flex-col justify-between h-full gap-0">
          <div className="flex flex-col">
            <h4>
              How often do you think about the roman empire? <br />
              <br />
            </h4>
            <ul className="list-disc">
              <li>Every day</li>
              <li>Once a week</li>
              <li>Once a month</li>
              <li>Never</li>
            </ul>
            <h4>
              <br />
              Roman Empire Emporium, Font Hahmlet, Rectangular corners.
            </h4>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Related items:</h4>
            <div className="flex gap-2">
              <Image
                className="w-20 h-20"
                src="/assets/armor.png"
                alt="armor"
                width={300}
                height={300}
              />
              <Image
                className="w-20 h-20"
                src="/assets/armor.png"
                alt="armor"
                width={300}
                height={300}
              />
              <Image
                className="w-20 h-20"
                src="/assets/armor.png"
                alt="armor"
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
          Condition: Lightly used
        </p>
        <p className="px-2 py-1 bg-[#eeeeee] border border-[#cccccc] text-blue-600">
          Minor dents & holes
        </p>
        <p className="px-2 py-1 text-blue-600">See more</p>
      </div>
      <h4>
        Mens Jacket and Pants Suit - used a hand full of times -
        wedding/funeral...nothing wrong with suit, intact and stain free...pants
        length ( 40-1/2) inseam (30) waist ( 34-36)...jacket (m-l )...$30
        OBO...no shipping...meet up in Nassau County... <br />
        <br />
      </h4>
      <ul className="list-disc">
        <li>do NOT contact me with unsolicited services or offers</li>
      </ul>
      <div className="flex gap-8 mt-8">
        <p>
          post id: <span className="text-blue-600">735 735 735</span>
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
      <div className="flex justify-between items-start w-full mb-4">
        <div className="flex items-center gap-2">
          <Image src="/icons/star.svg" alt="star" width={16} height={16} />
          <h3>Looking to sack a city</h3>
          <p className="mt-1 opacity-50">• Troy • 5 hours ago</p>
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
        <div className="flex items-center gap-2">
          <Image src="/icons/star.svg" alt="star" width={16} height={16} />
          <h3>Earth: flatter than you&apos;d expect</h3>
          <p className="mt-1 opacity-50">• Plato • 2 moons ago</p>
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
      <div className="flex justify-between items-start w-full mb-4">
        <div className="flex items-center gap-2">
          <Image src="/icons/star.svg" alt="star" width={16} height={16} />
          <h3>Looking to sack a city</h3>
          <p className="mt-1 opacity-50">• Troy • 5 hours ago</p>
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
    </div>
  );
};

export default _;
