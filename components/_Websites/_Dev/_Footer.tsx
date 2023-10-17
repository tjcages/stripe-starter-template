import Link from "next/link";

const _ = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full md:max-w-dev p-8 pt-4">
      <div className="flex gap-2">
        <Link href="https://twitter.com/stripe" target="_blank">
          <h5 className="text-[#3f64ef] underline">Twitter</h5>
        </Link>
        <h5 className="opacity-50">•</h5>
        <h5 className="text-[#3f64ef] font-semibold underline">GitHub</h5>
        <h5 className="opacity-50">•</h5>
        <h5 className="text-[#3f64ef] font-semibold underline">Security</h5>
        <h5 className="opacity-50">•</h5>
        <h5 className="text-[#3f64ef] font-semibold underline">Blog</h5>
        <h5 className="opacity-50">•</h5>
        <h5 className="text-[#3f64ef] font-semibold underline">Legal</h5>
      </div>
      <div className="flex gap-2">
        <h5 className="opacity-50">©2010</h5>
        <h5 className="text-[#3f64ef] font-semibold underline">/dev/finance inc</h5>
      </div>
    </div>
  );
};

export default _;
