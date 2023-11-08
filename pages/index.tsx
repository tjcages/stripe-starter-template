import { useEffect } from "react";
import { useSnapshot } from "valtio";
import styles from "@/styles/_main.module.scss";
import { SEO } from "@/seo";
import {
  Main
} from "@/components";
import { isMobile } from "@/utils";
import { state } from "@/store";

export default function Home() {
  const snap = useSnapshot(state);

  useEffect(() => {
    window.scrollTo(0, 0);

    state.mobile = isMobile;
    state.ready = true;
  }, []);

  return (
    <>
      <SEO />

      <main
        className={`flex flex-col justify-start items-center w-screen min-h-screen p-2 py-12 md:px-4 lg:px-12 bg-[#f6f8fb] ${
          styles.main
        } ${
          snap.animation == "end"
            ? "overflow-auto h-auto"
            : "overflow-hidden h-screen"
        }`}
      >
       <Main />
      </main>
    </>
  );
}
