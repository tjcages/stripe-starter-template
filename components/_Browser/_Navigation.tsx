import { state } from "@/store";
import Tab from "./_Tab";
import { useSnapshot } from "valtio";

const _ = () => {
  const snap = useSnapshot(state);

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  return (
    <div className="absolute top-0 flex items-end gap-4 w-full h-8 p-1.5 pb-0 bg-[#fcfeff]/70 backdrop-blur-sm shadow-browser">
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
            icon={createSlug(tab.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default _;
