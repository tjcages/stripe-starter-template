import { useEffect } from "react";
import Image from "next/image";
import { state } from "@/store";
import { useSnapshot } from "valtio";

const _ = () => {
  const snap = useSnapshot(state)
  useEffect(() => {
    if (snap.selected == 0) state.checkoutVisible = true;
    else state.checkoutVisible = false;

    setTimeout(() => {
      state.checkoutVisible = true;
    }, 1000)
  }, [snap.selected]);

  return (
    <div className="absolute top-6 left-0 right-0 bottom-0 flex w-full h-full p-8 gap-4 times">
      {/* Container */}
      <div className="relative w-full">
        {/* Header */}
        <div className="flex justify-between items-center w-full gap-4 p-4 bg-[#eeeeee] border-t border-b border-[#cccccc]">
          <div className="flex justify-start items-center w-full gap-2">
            <div className="flex gap-2">
              <Image
                src="/icons/swords.svg"
                alt="swords"
                width={24}
                height={24}
                style={{ height: "auto" }}
              />
              <h3 className="mr-4 text-blue-600">Caesar&apos;s List</h3>
            </div>
            <p className="px-2 py-1 bg-white text-blue-600">Colosseums</p>
            <p className="px-2 py-1 bg-white text-blue-600">
              Aqueducts near me
            </p>
            <p className="px-2 py-1 bg-white text-blue-600">Trojan horses</p>
          </div>
          <div className="flex gap-6 items-center pr-4">
            <Image
              src="/icons/rome.svg"
              alt="rome"
              width={30}
              height={30}
              style={{ height: "auto" }}
            />
            <Image
              src="/icons/user.svg"
              alt="user"
              width={20}
              height={20}
              style={{ height: "auto" }}
            />
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-col w-full h-full py-4 pb-14">
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
            wedding/funeral...nothing wrong with suit, intact and stain
            free...pants length ( 40-1/2) inseam (30) waist ( 34-36)...jacket
            (m-l )...$30 OBO...no shipping...meet up in Nassau County... <br />
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
        </div>
      </div>

      {/* Spacer */}
      <div className="w-full max-w-[412px]" />
    </div>
  );
};

export default _;
