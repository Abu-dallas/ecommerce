import { ChevronRight } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 flex items-center justify-center h-[150px] md:h-[200px]">
        <div>
          <p className="text-3xl md:text-4xl text-slate-800 font-bold">
            Categories
          </p>
          <p className="flex gap-2 items-center mt-2">
            <Link href="/" className="text-slate-800 text-sm">
              Home
            </Link>
            <ChevronRight className="text-slate-400 size-4" />
            <span className="text-slate-400 text-sm">Categories</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
