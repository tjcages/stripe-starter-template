import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMedia, mobileBreakpoint } from "@/utils";
import styles from "@/styles/nav.module.scss";
import Arrow from "@/public/icons/arrow.svg";

const _ = () => {
  const mobile = useMedia(mobileBreakpoint);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if (mobile) {
      setTimeout(() => {
        setShowArrow(true);

        setTimeout(() => {
          setShowArrow(false);
        }, 3000);
      }, 1000);
    }
  }, [mobile]);

  return (
    <div className={styles.main}>
      {/* Stripe logo */}
      <Link className={styles.logo} href="https://stripe.com" target="_blank">
        <Image
          src="/icons/stripe.svg"
          alt="stripe logo"
          width={60}
          height={25}
        />
      </Link>

      {/* Docs link */}
      <Link
        className="group flex justify-center items-center gap-1 py-4 px-8 text-[#96f] pointer-events-auto"
        href="https://stripe.com/docs/payment-links/buy-button"
        target="_blank"
      >
        <h5 className="font-bold group-hover:-translate-x-0.5 transition-transform">Read the docs</h5>
        <Arrow className="w-3 h-3 rotate-180 group-hover:translate-x-0.5 transition-transform" />
      </Link>

      {/* Arrow */}
      {mobile && (
        <div className={`${styles.arrow} ${showArrow ? styles.show : ""}`}>
          <Arrow className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};

export default _;
