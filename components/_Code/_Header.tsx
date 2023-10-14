import Image from "next/image";
import { useSnapshot } from "valtio";
import { state } from "@/store";

const _ = () => {
  const snap = useSnapshot(state);

  return (
    <div
      className="flex items-center justify-between w-full px-4 py-3"
      onClick={(e) => {
        e.stopPropagation();
        state.codeOpen = !state.codeOpen;
      }}
    >
      <div className="relative flex items-center gap-2">
        <Image
          className="absolute top-1"
          src={"/icons/code.svg"}
          alt="codce icon"
          width={16}
          height={16}
        />
        <div
          className={`ml-7 pt-[1px] opacity-0 transition-opacity duration-500 ${
            snap.codeOpen ? "opacity-100 whitespace-nowrap" : "opacity-0"
          }`}
        >
          Example Code
        </div>
      </div>
      <svg
        width="12"
        height="12"
        viewBox="0 0 6 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        className={`transform transition-transform duration-300 ${
          snap.codeOpen ? "rotate-180" : ""
        }`}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.09694 0.984937C5.24352 0.838354 5.48118 0.838354 5.62776 0.984937C5.77434 1.13152 5.77434 1.36918 5.62776 1.51576L3.26536 3.87816C3.11891 4.0246 2.88148 4.0246 2.73503 3.87816L0.372632 1.51576C0.22605 1.36918 0.22605 1.13152 0.372632 0.984937C0.519214 0.838354 0.756871 0.838354 0.903453 0.984937L3.0002 3.08168L5.09694 0.984937Z"
          fill="currentColor"
          fill-opacity="1"
        ></path>
      </svg>
    </div>
  );
};

export default _;
