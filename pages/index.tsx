import { useEffect } from "react";
import { useSnapshot } from "valtio";
import styles from "@/styles/main.module.scss";
import { SEO } from "@/seo";
import {
  Nav,
  Header,
  Browser,
  Rocket,
  Roman,
  Kevin,
  Walcman,
  Magic,
  Checkout,
  Code,
  Overlay,
  Monitor,
} from "@/components";
import { state } from "@/store";

export default function Home() {
  const snap = useSnapshot(state);

  const renderPage = () => {
    switch (snap.selected) {
      case 0:
        return <Rocket />;
      case 1:
        return <Roman />;
      case 2:
        return <Kevin />;
      case 3:
        return <Walcman />;
      default:
        return <Magic />;
    }
  };

  useEffect(() => {
    state.checkoutVisible = false;
  }, [snap.selected]);

  return (
    <>
      <SEO />

      <main
        className={`flex flex-col justify-start items-center w-screen h-screen p-12 bg-[#f6f8fb] ${styles.main}`}
      >
        <Nav />
        <Header />
        <Monitor>
          <Browser>
            {renderPage()}
            <Checkout />
          </Browser>
        </Monitor>
        <Overlay />
        <Code />
      </main>
    </>
  );
}
