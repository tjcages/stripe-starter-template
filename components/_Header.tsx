import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import SplitText from "split-type";
import Balancer from "react-wrap-balancer";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import styles from "@/styles/header.module.scss";

const _ = () => {
  const snap = useSnapshot(state);
  useEffect(() => {
    const header = new SplitText("#header").words;

    switch (snap.animation) {
      case "start":
        gsap.set("#header-container", {
          scale: 1.2,
          opacity: 0,
          y: "100%",
        });
        gsap.set("#description", {
          opacity: 0,
        });
        gsap.to("#header-container", {
          opacity: 1,
          duration: 2,
          ease: "expo.out",
        });
        gsap.fromTo(
          header,
          {
            y: "100%",
            color: "#ccc",
          },
          {
            color: "#96f",
            y: "0%",
            duration: 1.5,
            stagger: 0.2,
            delay: 0.75,
            ease: "expo.out",
          }
        );
        break;
      case "intro":
        gsap.fromTo(
          header,
          {
            color: "#96f",
          },
          {
            color: "black",
            duration: 3,
            stagger: 0.3,
            ease: "expo.out",
          }
        );
        gsap.to("#description", {
          opacity: 1,
          duration: 1,
          delay: 2,
          ease: "expo.out",
        });
        gsap.to("#header-container", {
          scale: 1,
          y: "0%",
          duration: 3,
          ease: "expo.inOut",
        });
        break;
    }
  }, [snap.animation]);

  return (
    <div
      className={`relative flex w-full max-w-screen-xl md:max-w-screen-lg justify-between items-end mt-6 mb-12 ${styles.main}`}
    >
      <div className="flex flex-col gap-4 w-full">
        <div
          id="header-container"
          className="flex flex-col justify-center items-center w-full opacity-0"
        >
          <h2 id="header">Stripe Embedded Checkout</h2>
          <h4 id="description" className="text-center opacity-0">
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
