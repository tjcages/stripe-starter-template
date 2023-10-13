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
      className={`flex items-center justify-start gap-1 w-48 h-full p-2 text-xs cursor-pointer ${
        selected
          ? "rounded-t-md shadow-stripe border border-b-0"
          : "border-r last-of-type:border-r-0"
      } ${id !== 0 ? "opacity-0" : "opacity-100"}`}
      style={{
        background: selected
          ? `linear-gradient(to top, ${background}, ${backgroundDark} 100%)`
          : "transparent",
        color: selected ? color : "rgba(0,0,0,0.5)",
      }}
      onClick={() => (state.selected = id)}
    >
      {id == 0 ? (
        <h5>{icon}</h5>
      ) : (
        <Image
          src={`/favicons/${icon}.png`}
          alt={title + " icon"}
          width={22}
          height={22}
        />
      )}
      {title}
    </div>
  );
};

export default _;
