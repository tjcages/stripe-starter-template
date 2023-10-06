import { useSnapshot } from "valtio";
import { state } from "@/store";
import Navigation from "./_Navigation";

interface Props {
  children: React.ReactNode[];
}

const _ = ({ children }: Props) => {
  const snap = useSnapshot(state);
  return (
    <div
      id="browser-window"
      className="relative w-[90%] max-w-screen-xl md:max-w-[1200px] h-full mb-[2.5%] rounded-xl overflow-scroll shadow-stripe"
      style={{ backgroundColor: state.tabs[snap.selected].background }}
    >
      <div className="relative w-full h-full overflow-scroll">{children}</div>
      <Navigation />
    </div>
  );
};

export default _;
