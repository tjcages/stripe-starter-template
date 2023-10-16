import Section from "./_Section";
import Checkout from "./_Checkout";

interface Props {
  ready: boolean;
  mobile: boolean;
}

const _ = ({ ready, mobile }: Props) => {
  const sections = [
    {
      title: "Sane, simple, open-source APIs.",
      description:
        "We support Ruby, PHP, Python, C#, and Java. Want to use something else? The code lives at github, and our REST-ful interface makes new bindings easy.",
      image: "/assets/array-dev-tshirt.png",
    },
    {
      title: "Join the Stripe mafia",
      description:
        "We're a small, tightly-knit team that's worked at Google, Yahoo, Microsoft, and MIT. We're backed by Y Combinator and Sequoia Capital.",
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
        "Analyze your payments, conversion rate, retention rate, and other key metrics. Or import your data with our ISON-based API, and integrate it into your existing systems.",
      image: "/assets/merchant.png",
    },
  ];
  return (
    <div className="relative flex w-full min-h-[1150px] gap-4 rounded-[20px]">
      <div
        className={`flex flex-col w-full min-h-[956px] bg-white transition-all duration-1000 ${
          ready ? "grayscale-0" : "grayscale"
        }`}
      >
        {/* Header */}
        <div className="relative w-full p-4 md:px-8 md:py-6 bg-[#fada74]">
          <div className="absolute z-10 top-0 left-0 right-0 bottom-0 flex flex-col justify-end overflow-hidden mask">
            <h1 className="-ml-10 whitespace-nowrap opacity-5">
              4242 4242 4242 4242 4242 4242 4242 4242 4242 4242 4242
            </h1>
            <h1 className="-ml-10 whitespace-nowrap opacity-5">
              4242 4242 4242 4242 4242 4242 4242 4242 4242 4242 4242
            </h1>
            <h1 className="-ml-10 whitespace-nowrap opacity-5">
              4242 4242 4242 4242 4242 4242 4242 4242 4242 4242 4242
            </h1>
          </div>
          <div className="w-full">
            <div className="text-[24px] md:text-[48px] font-bold leading-tight">
              Payment Processing
              <br />
              Done Right.
            </div>
          </div>
        </div>
        {mobile && (
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-[107px] bg-[#fada74]" />
            <Checkout />
          </div>
        )}
        {/* Main */}
        <div className="flex w-full h-full bg-white border border-[#e8e8e8]">
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
          {/* Spacer */}
          {!mobile && <div className="w-full max-w-[320px]" />}
        </div>
      </div>
      {!mobile && <Checkout />}
    </div>
  );
};

export default _;
