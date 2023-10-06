import { state } from "@/store";
import Tab from "./_Tab";
import { useSnapshot } from "valtio";

const _ = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute top-0 z-10 flex items-end gap-4 w-full h-8 p-1.5 pb-0 bg-[#fcfeff]/70 backdrop-blur-lg shadow-browser">
      <div className="flex gap-1.5 ml-1 p-3">
        <div className="w-2 h-2 rounded-full bg-[#ecf2f7]" />
        <div className="w-2 h-2 rounded-full bg-[#ecf2f7]" />
        <div className="w-2 h-2 rounded-full bg-[#ecf2f7]" />
      </div>
      <div className="flex items-end justify-start gap-2 h-full">
        {state.tabs.map((tab, index) => (
          <Tab
            key={index}
            id={tab.id}
            selected={snap.selected == tab.id}
            title={tab.title}
            icon={tab.icon}
            color={tab.color}
            background={tab.background}
          />
        ))}
      </div>
    </div>
  );
};

export default _;
