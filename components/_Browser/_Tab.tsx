import Image from "next/image";
import { state } from "@/store";

interface Props {
  id: number;
  title: string;
  icon: string;
  selected?: boolean;
}

const _ = ({ id, title, icon, selected = false }: Props) => {
  return (
    <div
      className={`flex items-center justify-start gap-1 w-48 h-full p-2 text-xs cursor-pointer ${
        selected
          ? "text-slate-800 backdrop-blur-sm rounded-t-md"
          : "text-slate-500 border-r last-of-type:border-r-0"
      }`}
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
