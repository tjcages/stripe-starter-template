import { useSnapshot } from "valtio";
import { state } from "@/store";

const _ = () => {
  const snap = useSnapshot(state);
  return (
    <div className="color-options">
      {snap.colors.map((color) => (
        <div
          key={color}
          className={`relative w-8 h-8 border-2 border-white rounded-full cursor-pointer transition-transform ease-out hover:scale-110`}
          style={{ background: color }}
          onClick={() => (state.color = color)}
        >
          {snap.color === color && (
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-2 h-2 rounded-full bg-white" />
          )}
        </div>
      ))}
    </div>
  );
};

export default _;
