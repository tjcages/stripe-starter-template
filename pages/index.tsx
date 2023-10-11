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
  WSBTV,
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
        return <Dev />;
      case 1:
        return <Magic />;
      case 2:
        return <Roman />;
      case 3:
        return <WSBTV />;
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
        className={`flex flex-col justify-start items-center w-screen min-h-screen p-12 bg-[#f6f8fb] ${styles.main}`}
      >
        <Nav />
        <Header />
        <Monitor>
          <Browser>
            {renderPage()}
            {snap.selected === 0 && (
              <div className="absolute top-12 right-0 bottom-0 w-[472px]">
                <Checkout selected index={0} />
              </div>
            )}
          </Browser>
        </Monitor>
        <Overlay />
        <Code />
      </main>
    </>
  );
}
