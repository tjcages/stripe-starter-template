import Image from "next/image";
import { state } from "@/store";

interface Props {
  id: number;
  title: string;
  icon: string;
  color: string;
  background: string;
  backgroundDark: string;
  selected?: boolean;
}

const _ = ({
  id,
  title,
  icon,
  color,
  background,
  backgroundDark,
  selected = false,
}: Props) => {
  return (
    <div
      id={`tab-${id}`}
      className={`flex items-center justify-start gap-1 min-w-[40px] md:w-[17.5vw] h-full p-2 text-xs cursor-pointer ${
        selected
          ? "rounded-t-md shadow-stripe border border-b-0"
          : "border-r border-[#ccc] last-of-type:border-r-0"
      } ${id !== 0 ? "opacity-0" : "opacity-100"} ${
        selected ? "w-full" : "w-auto"
      }`}
      style={{
        background: selected
          ? `linear-gradient(to top, ${background}, ${backgroundDark} 100%)`
          : "transparent",
        color: selected ? color : "rgba(0,0,0,0.5)",
        boxSizing: "border-box",
      }}
      onClick={() => (state.selected = id)}
    >
      {!icon.includes("/") ? (
        <h5>{icon}</h5>
      ) : (
        <Image
          src={`/favicons${icon}.png`}
          alt={title + " icon"}
          width={22}
          height={22}
        />
      )}
      {state.mobile ? (selected ? title : "") : title}
    </div>
  );
};

export default _;
