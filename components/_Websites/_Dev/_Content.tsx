import Section from "./_Section";
import StripeCheckout from "@/components/_Checkout/_StripeCheckout";

const _ = () => {
  const sections = [
    {
      title: "Sane, simple, open-source APIs.",
      description:
        "We support Ruby, PHP, Python, C#, and Java. Want to use something else? The code lives at github, and our REST-ful interface makes new bindings easy.",
      image: "/assets/tshirt.png",
    },
    {
      title: "Immediate sign-up",
      description:
        "Analyze your payments, conversion rate, retention rate, and other key metrics. Or import your data with our ISON-based API, and integrate it into your existing systems.",
      image: "/assets/stopwatch.png",
    },
    {
      title: "Sane, simple, open-source APIs.",
      description:
        "We support Ruby, PHP, Python, C#, and Java. Want to use something else? The code lives at github, and our REST-ful interface makes new bindings easy.",
      image: "/assets/terminal.png",
    },
    {
      title: "Immediate sign-up",
      description:
        "Analyze your payments, conversion rate, retention rate, and other key metrics. Or import your data with our ISON-based API, and integrate it into your existing systems.",
      image: "/assets/merchant.png",
    },
  ];
  return (
    <div className="relative flex w-full min-h-[1150px] gap-4 rounded-[20px]">
      <div className="flex flex-col w-full min-h-[956px] bg-white">
        {/* Header */}
        <div className="relative w-full px-8 py-6 bg-[#fada74]">
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
            <div className="text-[4vw] font-bold leading-tight">
              Payment Processing
              <br />
              Done Right.
            </div>
          </div>
        </div>
        {/* Main */}
        <div className="flex w-full h-full bg-white border border-[#e8e8e8]">
          <div className="grid grid-cols-2 w-full">
            {sections.map((section, index) => (
              <Section
                key={index}
                title={section.title}
                description={section.description}
                image={section.image}
                borderTop={index > 1}
                borderRight={index % 2 === 0}
              />
            ))}
          </div>
          {/* Spacer */}
          <div className="w-full max-w-[320px]" />
        </div>
      </div>

      {/* Checkout */}
      <div className="absolute top-0 right-0 w-full -mr-8 max-w-[412px] pt-[68px]">
        <StripeCheckout selected index={0} />
      </div>
    </div>
  );
};

export default _;
