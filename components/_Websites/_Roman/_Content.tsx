import Image from "next/image";
import StripeCheckout from "@/components/_Checkout/_StripeCheckout";

interface Props {
  mobile: boolean;
}

const _ = ({ mobile }: Props) => {
  return (
    <div className="flex flex-col w-full h-full py-4 pb-4">
      <h3>Caesar Augustus Desktop Bust</h3>
      <div className="flex w-full gap-4 py-4">
        <Image
          className="max-w-[50%]"
          src="/assets/julias.avif"
          alt="julias bust"
          width={600}
          height={800}
          style={{ height: "auto" }}
        />
        <div className="flex flex-col justify-between min-h-full gap-0">
          <h5>
            Perfect for those that think about the Roman Empire more than they’d
            like to admit.
          </h5>
          <div>
            <h5>More images:</h5>
            <div className="flex gap-0.5">
              <Image
                className="w-12 h-12 md:w-20 md:h-20"
                src="/assets/julias-1.avif"
                alt="julias"
                width={300}
                height={300}
              />
              <Image
                className="w-12 h-12 md:w-20 md:h-20"
                src="/assets/julias-2.avif"
                alt="julias"
                width={300}
                height={300}
              />
              <Image
                className="w-12 h-12 md:w-20 md:h-20"
                src="/assets/julias-3.avif"
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
        <p className="px-2 py-1 bg-[#eeeeee] border border-[#cccccc] text-[#615cfd]">
          Condition: Handsome
        </p>
        <p className="px-2 py-1 bg-[#eeeeee] border border-[#cccccc] text-[#615cfd]">
          Honorable
        </p>
        <p className="px-2 py-1 text-[#615cfd]">See more</p>
      </div>

      <h5>
        Meticulously crafted 3D bust of the renowned Roman Emperor.
        <br />
        <br />
        Condition: Mint. No chargebacks (or backstabs).
        <br />
        Looking for a quick sale before the Ides of March.
        <br />
        Serious inquiries only. <span className="italic">Not you, Brute.</span>
        <br />
        <br />
        Payment via Stripe, denarii not accepted.
        <br />• do NOT contact me with unsolicited services or offers
      </h5>
      <div className="flex gap-8 mt-8 mb-4">
        <p>
          post ID: <span className="text-[#615cfd]">IVCCXLII</span>
        </p>
        <p>Posted 2,067 years ago</p>
        <p>Location: Velletri</p>
      </div>

      {mobile && (
        <div className="relative w-full min-h-[790px] z-10 mb-4 border border-[#cccccc] bg-white pointer-events-none">
          <div className="absolute top-12 right-12 z-1000 w-60 h-auto -rotate-12">
            <Image
              src="/assets/sold-out.avif"
              alt="sold out sign"
              width={300}
              height={100}
            />
          </div>
          <StripeCheckout index={2} />
        </div>
      )}

      {/* Ads */}
      <div className="flex gap-2 mb-4">
        <h5>Community posts</h5>
        <p className="ml-4 px-2 py-1 bg-[#eeeeee] border border-[#cccccc] text-[#615cfd]">
          List
        </p>
        <p className="px-2 py-1 bg-[#eeeeee] border border-[#cccccc] text-[#615cfd]">
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
            <h3>New Calendar: Never Miss Saturnalia Again</h3>
            <p className="opacity-50">Julius</p>
          </div>
        </div>
        <Image
          className="w-24 h-24"
          src="/assets/astronomy.avif"
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
            <h3>Legionnaire Lawn Care: We Mow, You Conquer</h3>
            <p className="opacity-50">Marius</p>
          </div>
        </div>
        <Image
          className="w-24 h-24"
          src="/assets/roman-mow.avif"
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
            <p className="opacity-50">Cassius</p>
          </div>
        </div>
        <Image
          className="w-24 h-24"
          src="/assets/ides.avif"
          alt="ides of march"
          width={200}
          height={200}
          style={{ height: "auto" }}
        />
      </div>
    </div>
  );
};

export default _;
