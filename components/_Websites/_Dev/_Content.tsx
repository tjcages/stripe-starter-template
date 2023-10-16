import Image from "next/image";
import Section from "./_Section";
import Checkout from "./_Checkout";

interface Props {
  ready: boolean;
  mobile: boolean;
}

const _ = ({ ready, mobile }: Props) => {
  const sections = [
    mobile
      ? {
          title: "Get a Stripe t-shirt",
          description:
            "Get your very own blurple Stripe t-shirt. Made from 100% combed ringspun cotton with a screen-printed Stripe wordmark on the chest and custom 12° tag sewn onto the hem.",
          image: "/assets/tshirt.png",
        }
      : {
          title: "Sane, simple, open-source APIs.",
          description:
            "We support Ruby, PHP, Python, C#, and Java. Want to use something else? The code lives at github, and our REST-ful interface makes new bindings easy.",
          image: "/assets/terminal.png",
        },
    mobile
      ? {
          title: "Sane, simple, open-source APIs.",
          description:
            "We support Ruby, PHP, Python, C#, and Java. Want to use something else? The code lives at github, and our REST-ful interface makes new bindings easy.",
          image: "/assets/terminal.png",
        }
      : {
          title: "Get a Stripe t-shirt",
          description:
            "Get your very own blurple Stripe t-shirt. Made from 100% combed ringspun cotton with a screen-printed Stripe wordmark on the chest and custom 12° tag sewn onto the hem.",
          image: "/assets/tshirt.png",
        },
    {
      title: "Immediate sign-up",
      description:
        "Start processing payments today, No sales-rep phone calls or endiess forms. Get your code working with our APIs, test everything, and flick the switch to live mode.",
      image: "/assets/stopwatch.png",
    },
    {
      title: "Powerful analytics",
      description:
        "Analyze your payments, conversion rate, retention rate, and other key metrics. Or import your data with our JSON-based API, and integrate it into your existing systems.",
      image: "/assets/merchant.png",
    },
  ];
  return (
    <div className="relative flex w-full h-full">
      <div className="flex flex-col w-full h-full bg-white">
        {/* Header */}
        <div
          className={`absolute top-0 right-0 w-[40%] h-[168px] bg-[#fada74] transition-all duration-1000 ${
            ready ? "grayscale-0" : "grayscale"
          }`}
        />
        <div
          className={`relative w-full p-4 md:px-8 md:py-6 bg-[#fada74] transition-all duration-1000 ${
            ready ? "grayscale-0" : "grayscale"
          }`}
        >
          <div className="w-full">
            <div className="text-[24px] md:text-[48px] font-bold leading-tight">
              Payment Processing
              <br />
              Done Right.
            </div>
          </div>
        </div>
        {mobile && (
          <>
            <div className="relative h-full min-h-[500px]">
              <Image
                className={`transition-all duration-1000 ${
                  ready ? "grayscale-0" : "grayscale"
                }`}
                src="/assets/array-dev-tshirt.png"
                alt="stripe shirts"
                width={400}
                height={100}
              />
              <div
                className="absolute top-0 left-0 right-0 bottom-0 bg-[#eee] bg-opacity-80 backdrop-blur-lg transition-opacity duration-1000"
                style={{
                  opacity: ready ? 0 : 1,
                }}
              />
              <Checkout />
            </div>
          </>
        )}
        {/* Main */}
        <div className="flex w-full h-full bg-white border border-[#e8e8e8] border-r-0">
          <div className="flex flex-col md:grid md:grid-cols-2 w-full">
            {sections.map((section, index) => (
              <Section
                ready={ready}
                key={index}
                title={section.title}
                description={section.description}
                image={section.image}
                borderTop={mobile || index > 1}
                borderRight={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
      {!mobile && <Checkout />}

      <div
        className={`absolute z-10 top-0 left-0 w-full h-[290px] md:h-[168px] flex flex-col justify-end overflow-hidden mask mix-blend-multiply transition-opacity duration-1000 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="-ml-10 whitespace-nowrap opacity-5 leading-none">
          4242 4242 4242 4242 4242 4242 4242 4242 4242 4242 4242
        </h1>
        <h1 className="-ml-10 whitespace-nowrap opacity-5 leading-none">
          4242 4242 4242 4242 4242 4242 4242 4242 4242 4242 4242
        </h1>
        <h1 className="-ml-10 whitespace-nowrap opacity-5 leading-none">
          4242 4242 4242 4242 4242 4242 4242 4242 4242 4242 4242
        </h1>
        <h1 className="-ml-10 whitespace-nowrap opacity-5 leading-none">
          4242 4242 4242 4242 4242 4242 4242 4242 4242 4242 4242
        </h1>
        {mobile && (
          <>
            <h1 className="-ml-10 whitespace-nowrap opacity-5 leading-none">
              4242 4242 4242 4242 4242 4242 4242 4242 4242 4242 4242
            </h1>
            <h1 className="-ml-10 whitespace-nowrap opacity-5 leading-none">
              4242 4242 4242 4242 4242 4242 4242 4242 4242 4242 4242
            </h1>
            <h1 className="-ml-10 whitespace-nowrap opacity-5 leading-none">
              4242 4242 4242 4242 4242 4242 4242 4242 4242 4242 4242
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default _;
