import Image from "next/image";

interface Props {
  ready: boolean;
  title: string;
  description: string;
  image: string;
  borderTop?: boolean;
  borderRight?: boolean;
}

const _ = ({
  ready,
  title,
  description,
  image,
  borderTop = false,
  borderRight = false,
}: Props) => {
  return (
    <div
      className={`flex flex-col w-full p-6 border-[#e8e8e8] ${
        borderTop ? "border-t pt-6" : ""
      } ${borderRight ? "border-r" : ""}`}
    >
      <div className="relative mb-4">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-[#eee] bg-opacity-80 backdrop-blur-lg transition-opacity duration-1000"
          style={{
            opacity: ready ? 0 : 1,
          }}
        />
        <Image src={image} alt="example image" width={600} height={200} />
      </div>
      <div className="relative w-auto mr-auto">
        <div
          className="absolute top-1 left-0 right-0 bottom-0 bg-[#eee] bg-opacity-80 backdrop-blur-lg transition-opacity duration-1000"
          style={{
            opacity: ready ? 0 : 1,
          }}
        />
        <h3 className="font-bold">{title}</h3>
      </div>
      <h4
        className="transition-opacity duration-1000"
        style={{
          opacity: ready ? 0.5 : 0,
        }}
      >
        {description}
      </h4>
    </div>
  );
};

export default _;
