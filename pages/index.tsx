import styles from "@/styles/main.module.scss";
import { SEO } from "@/seo";
import { Nav, Header, Browser, Canvas, Checkout, Code, Overlay } from "@/components";

export default function Home() {
  return (
    <>
      <SEO />

      <main
        className={`flex flex-col justify-center items-center w-screen h-screen bg-[#f6f8fb] ${styles.main}`}
      >
        <Nav />
        <Header />
        <Browser>
          <Canvas />
          <Checkout />
        </Browser>
        <Overlay />
        <Code />
      </main>
    </>
  );
}
