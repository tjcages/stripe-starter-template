import { useEffect } from "react";
import { useSnapshot } from "valtio";
import styles from "@/styles/main.module.scss";
import { SEO } from "@/seo";
import {
  Nav,
  Header,
  Browser,
  Dev,
  Roman,
  Kevin,
  Vinyl,
  Magic,
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
        return <Dev />;
      case 1:
        return <Magic />;
      case 2:
        return <Roman />;
      case 3:
        return <Vinyl />;
      default:
        return <Kevin />;
    }
  };

  useEffect(() => {
    state.checkoutVisible = false;
  }, [snap.selected]);

  return (
    <>
      <SEO />

      <main
        className={`flex flex-col justify-start items-center w-screen min-h-screen p-12 bg-[#f6f8fb] ${
          styles.main
        } ${snap.animation == "end" ? "overflow-auto h-auto" : "overflow-hidden h-screen"}`}
      >
        <Nav />
        <Header />
        <Monitor>
          <Browser>{renderPage()}</Browser>
        </Monitor>
        <Overlay />
        <Code />
      </main>
    </>
  );
}
