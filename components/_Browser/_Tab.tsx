import Image from "next/image";
import { state } from "@/store";

interface Props {
  id: number;
  title: string;
  icon: string;
  color: string;
  background: string;
  selected?: boolean;
}

const _ = ({ id, title, icon, color, background, selected = false }: Props) => {
  return (
    <div
      className={`flex items-center justify-start gap-1 w-48 h-full p-2 text-xs cursor-pointer ${
        selected ? "rounded-t-md" : "border-r last-of-type:border-r-0"
      }`}
      style={{
        backgroundColor: selected ? background : "transparent",
        color: selected ? color : "rgba(0,0,0,0.5)",
      }}
      onClick={() => (state.selected = id)}
    >
      <Image
        src={`/icons/${icon}.png`}
        alt={title + " icon"}
        width={22}
        height={22}
      />
      {title}
    </div>
  );
};

export default _;
