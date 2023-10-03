import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { useMedia, mobileBreakpoint } from "@/utils";
import styles from "@/styles/header.module.scss";
import Customize from "./_Customize";

const _ = () => {
  const mobile = useMedia(mobileBreakpoint);
  return (
    <div
      className={`relative flex w-full max-w-screen-xl md:max-w-screen-lg justify-between items-end mt-10 mb-6 ${styles.main}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 text-md font-semibold text-[#96f]">
          <Image
            src="/icons/checkout-icon.svg"
            alt="stripe checkout logo"
            width={40}
            height={40}
          />
          Stripe Checkout
        </div>
        <div className="flex flex-col">
          <h2>Embedded Checkout</h2>
          <h4>
            <Balancer>
              The fastest way to add Stripe to your site. {mobile && <br />}Turn
              a payment link into a{" "}
              <Link
                href="https://stripe.com/docs/payment-links/buy-button"
                target="_blank"
              >
                buy button
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                />
              </Link>
              , customize it to match your brand, and accept payments in
              seconds.
              {mobile && (
                <>
                  <br />
                  <br />
                </>
              )}{" "}
              Here are a few ideas to get you started—try using a{" "}
              <Link
                href="https://stripe.com/docs/testing#cards"
                target="_blank"
              >
                test card
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                />
              </Link>{" "}
              like <span className={styles.shimmer}>4242 4242 4242 4242</span>.
            </Balancer>
          </h4>
        </div>
      </div>
      <Customize />
    </div>
  );
};

export default _;
