import { useSnapshot } from "valtio";
import { state } from "@/store";
import Header from "./_Header"
import Content from "./_Content"
import Footer from "./_Footer"

const _ = () => {
  const snap = useSnapshot(state);
  return (
    <div className="relative flex flex-col pt-12 px-3 w-full">
      <Header ready={snap.animation == "end"} />
      <Content ready={snap.animation == "end"} />
      <Footer />
    </div>
  );
};

export default _;
