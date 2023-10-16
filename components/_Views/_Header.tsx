import { useEffect } from "react";
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
    const headerMobile = new SplitText("#header-mobile").words;

    switch (snap.animation) {
      case "start":
        gsap.set("#header-container", {
          scale: 1.2,
          opacity: 0,
          y: "50%",
        });
        gsap.set("#description", {
          opacity: 0,
        });
        gsap.to("#header-container", {
          opacity: 1,
          duration: 2,
          ease: "expo.out",
        });
        if (header)
          gsap.fromTo(
            header,
            {
              y: "100%",
              color: "#ccc",
            },
            {
              color: "#635bff",
              y: "0%",
              duration: 1.5,
              stagger: 0.2,
              delay: 0.75,
              ease: "expo.out",
            }
          );
        if (headerMobile)
          gsap.fromTo(
            headerMobile,
            {
              y: "100%",
              color: "#ccc",
            },
            {
              color: "#635bff",
              y: "0%",
              duration: 1,
              stagger: 0.2,
              delay: 0,
              ease: "expo.out",
            }
          );
        break;
      case "intro":
        if (header)
          gsap.fromTo(
            header,
            {
              color: "#635bff",
            },
            {
              color: "black",
              duration: 3,
              stagger: 0.3,
              ease: "expo.out",
            }
          );
        if (headerMobile)
          gsap.fromTo(
            headerMobile,
            {
              color: "#635bff",
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
          duration: snap.mobile ? 2 : 3,
          ease: "expo.inOut",
        });
        break;
    }
  }, [snap.animation, snap.mobile]);

  return (
    <div
      className={`relative flex w-full max-w-screen-xl md:max-w-screen-lg justify-between items-end mb-8 ${styles.main}`}
    >
      <div className="flex flex-col gap-4 w-full">
        <div
          id="header-container"
          className="flex flex-col justify-center items-center w-full opacity-0"
        >
          {snap.mobile ? (
            <h2 id="header-mobile" className="font-extrabold mt-4">
              Embedded Checkout
            </h2>
          ) : (
            <h2 id="header" className="font-extrabold">
              Stripe Embedded Checkout
            </h2>
          )}
          <h4 id="description" className="text-center opacity-0">
            <Balancer>
              You can now embed our prebuilt payment form directly into your
              site.
              {!snap.mobile ? <br /> : " "}
              Here are a few{" "}
              <span className={styles.shimmer}>fun examples</span> to get you
              started.
            </Balancer>
          </h4>
        </div>
      </div>
      {/* <Customize /> */}
    </div>
  );
};

export default _;
