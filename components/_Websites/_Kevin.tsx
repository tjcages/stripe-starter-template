import Image from "next/image";

const _ = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-6 w-full h-full p-12">
      <h1 className="font-extrabold">Steal His Look</h1>
      <div className="flex w-full gap-6">
        <Image
          src="/assets/kevin.png"
          alt="kevin"
          width={400}
          height={400}
          className="max-h-[400px] w-auto"
        />
        <div className="flex flex-col w-full gap-6">
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/shirt.png"
              alt="shirt"
              width={200}
              height={200}
              className="max-h-[150px] w-auto"
            />
            <h3>
              Striped Button<br/>Up Shirt<br />
              $19.99
            </h3>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/pants.png"
              alt="pants"
              width={200}
              height={200}
              className="max-h-[150px] w-auto"
            />
            <h3>
              Blue Bottom Jeans<br />
              $33.50
            </h3>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/stripeshirt.png"
              alt="stripe shirt"
              width={200}
              height={200}
              className="max-h-[150px] w-auto"
            />
            <h3>
              Purple T-Shirt<br />
              $12.50
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default _;
