import { useSnapshot } from "valtio";
import { state } from "@/store";
import Header from "./_Header";
import Content from "./_Content";
import Footer from "./_Footer";

const _ = () => {
  const snap = useSnapshot(state);
  return (
    <div
      className={`relative flex flex-col pt-12 px-3 w-full h-full ${
        snap.animation == "end" ? "max-h-auto" : "max-h-screen"
      }`}
    >
      <Header ready={snap.animation == "end"} />
      <Content ready={snap.animation == "end"} mobile={snap.mobile} />
      <Footer />
    </div>
  );
};

export default _;
