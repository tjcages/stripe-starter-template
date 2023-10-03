import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMedia, mobileBreakpoint } from "@/utils";
import styles from "@/styles/nav.module.scss";

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
        className={styles.action}
        href="https://stripe.com/docs/payment-links/buy-button"
        target="_blank"
      >
        <h5>Read the docs</h5>
        <Image src="/icons/arrow.svg" alt="arrow icon" width={12} height={12} />
      </Link>

      {/* Arrow */}
      {mobile && (
        <div className={`${styles.arrow} ${showArrow ? styles.show : ""}`}>
          <Image
            src="/icons/arrow.svg"
            alt="arrow icon"
            width={50}
            height={50}
          />
        </div>
      )}
    </div>
  );
};

export default _;
