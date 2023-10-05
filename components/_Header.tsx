import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { useMedia, mobileBreakpoint } from "@/utils";
import styles from "@/styles/header.module.scss";
// import Customize from "./_Customize";

const _ = () => {
  const mobile = useMedia(mobileBreakpoint);
  return (
    <div
      className={`relative flex w-full max-w-screen-xl md:max-w-screen-lg justify-between items-end mt-12 mb-8 ${styles.main}`}
    >
      <div className="flex flex-col gap-4 w-full">
        {/* <div className="flex items-center gap-4 text-md font-semibold text-[#96f]">
          <Image
            src="/icons/checkout-icon.svg"
            alt="stripe checkout logo"
            width={40}
            height={40}
          />
          Stripe Checkout
        </div> */}
        <div className="flex flex-col justify-center items-center w-full">
          <h2>Embedded Checkout</h2>
          <h4 className="text-center">
            <Balancer>
              We built checkout so you don’t have to—embed{" "}
              <Link
                href="https://stripe.com/docs/payment-links/buy-button"
                target="_blank"
              >
                Checkout
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                />
              </Link>{" "}
              into your website to easily and securely accept one-time payments
              or subscriptions.{" "}
              <span className={styles.shimmer}>
                Here’s a few ideas to get started
              </span>
              .
            </Balancer>
          </h4>
        </div>
      </div>
      {/* <Customize /> */}
    </div>
  );
};

export default _;
