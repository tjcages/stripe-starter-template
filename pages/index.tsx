import { useEffect } from "react";
import { useSnapshot } from "valtio";
import styles from "@/styles/main.module.scss";
import { SEO } from "@/seo";
import {
  Nav,
  Header,
  Browser,
  Roman,
  Kevin,
  Walcman,
  Magic,
  Checkout,
  Code,
  Overlay,
} from "@/components";
import { state } from "@/store";

export default function Home() {
  const snap = useSnapshot(state);

  const renderPage = () => {
    switch (snap.selected) {
      case 0:
        return <Roman />;
      case 1:
        return <Kevin />;
      case 2:
        return <Walcman />;
      default:
        return <Magic />;
    }
  };

  useEffect(() => {
    state.checkoutVisible = false;
  }, [snap.selected])

  return (
    <>
      <SEO />

      <main
        className={`flex flex-col justify-center items-center w-screen h-screen bg-[#f6f8fb] ${styles.main}`}
      >
        <Nav />
        <Header />
        <Browser>
          {renderPage()}
          {/* {snap.checkoutVisible && <Checkout />} */}
          <Checkout />
        </Browser>
        <Overlay />
        <Code />
      </main>
    </>
  );
}
