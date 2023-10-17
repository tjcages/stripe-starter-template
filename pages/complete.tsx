import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/main.module.scss";
import { SEO } from "@/seo";
import { Nav } from "@/components";
import Balancer from "react-wrap-balancer";

export default function Home() {
  const [countdown, setCountdown] = useState(10);
  const [note, setNote] = useState("You'll be redirected in 10 seconds");

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0
      );
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      setNote("See ya 👋");
      window.location.href =
        process.env.NEXT_PUBLIC_URL || "https://embedcheckout.com";
    } else {
      if (countdown === 1)
        setNote("You'll be redirected in " + countdown + " second");
      else setNote("You'll be redirected in " + countdown + " seconds");
    }
  }, [countdown]);

  return (
    <>
      <SEO favicon="/favicons/kevin.png" />

      <main
        className={`flex flex-col justify-center items-center w-screen min-h-screen p-4 py-12 md:px-4 lg:px-12 bg-[#f6f8fb] ${styles.main}`}
      >
        <Nav />
        <div className="flex flex-col justify-center items-center gap-4 w-full h-full leading-tight text-center">
          <Image
            src="/assets/kj.avif"
            alt="the man, the myth, the legend"
            width={300}
            height={300}
            style={{
              height: "auto",
            }}
          />
          <h3 className="font-bold leading-tight">Thanks for your payment</h3>
          <div className="flex flex-col gap-2">
            <h5>
              <Balancer>
                A payment to{" "}
                <Link
                  href="https://embedcheckout.com"
                  target="_blank"
                  className="underline"
                >
                  embedcheckout.com
                </Link>{" "}
                will appear on your statement. Items will ship in 2–3 weeks. If
                you have any questions about your order, please reach out to{" "}
                <Link
                  href="mailto:smca@stripe.com"
                  target="_blank"
                  className="underline"
                >
                  smca@stripe.com
                </Link>
                .
              </Balancer>
            </h5>
            <p className="mt-8 opacity-50">{note}</p>
          </div>
        </div>
      </main>
    </>
  );
}
