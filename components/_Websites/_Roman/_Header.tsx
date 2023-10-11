import Image from "next/image";

const _ = () => {
  return (
    <div className="flex justify-between items-center w-full gap-4 p-4 bg-white border border-[#cccccc]">
    <div className="flex justify-start items-center w-full gap-2">
      <div className="flex gap-2">
        <Image
          src="/icons/swords.svg"
          alt="swords"
          width={24}
          height={24}
          style={{ height: "auto" }}
        />
        <h3 className="mr-4 text-blue-600">Caesar&apos;s List</h3>
      </div>
      <p className="px-2 py-1 bg-[#eaeaea] text-blue-600">Colosseums</p>
      <p className="px-2 py-1 bg-[#eaeaea] text-blue-600">
        Aqueducts near me
      </p>
      <p className="px-2 py-1 bg-[#eaeaea] text-blue-600">
        Trojan horses
      </p>
    </div>
    <div className="flex gap-6 items-center pr-4">
      <Image
        src="/icons/rome.svg"
        alt="rome"
        width={30}
        height={30}
        style={{ height: "auto" }}
      />
      <Image
        src="/icons/user.svg"
        alt="user"
        width={20}
        height={20}
        style={{ height: "auto" }}
      />
    </div>
  </div>
  )
}

export default _;