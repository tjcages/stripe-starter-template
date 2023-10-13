import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  borderTop?: boolean;
  borderRight?: boolean;
}

const _ = ({ title, description, image, borderTop= false, borderRight = false }: Props) => {
  return (
    <div
      className={`flex flex-col w-full p-6 border-[#e8e8e8] ${
        borderTop ? "border-t pt-6" : ""
      } ${
        borderRight ? "border-r" : ""
      }`}
    >
      <Image
        className="mb-4"
        src={image}
        alt="example image"
        width={600}
        height={200}
      />
      <h3 className="font-bold">{title}</h3>
      <h4 className="opacity-50">{description}</h4>
    </div>
  );
};

export default _;
