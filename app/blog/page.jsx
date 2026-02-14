import {
  CalendarRange,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import { blogpost } from "../../utils/blogs";
import Image from "next/image";

function Blog() {
  return (
    <div className="w-full mb-28">
      <div className="w-full bg-gray-100 flex items-center justify-center h-[150px] md:h-[200px]">
        <div>
          <p className="text-3xl md:text-4xl text-slate-800 font-bold">Blog</p>
          <p className="flex gap-2 items-center mt-2">
            <Link href="/" className="text-slate-800 text-sm">
              Home
            </Link>
            <ChevronRight className="text-slate-400 size-4" />
            <span className="text-slate-400 text-sm">Blog</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:space-y-8 w-full md:px-6 mt-12 place-item-center">
        {blogpost.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="w-full text-slate-800 max-md:p-4 max-sm:flex items-center gap-2"
          >
            <Image
              src={post.image}
              alt={`${post.title + "image"}`}
              width={2000}
              height={2000}
              className="rounded-xl w-[150px] h-[130px] md:w-full md:h-[260px]"
            />
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-8">
                <span className="flex items-center justify-center gap-1.5 text-sm">
                  <CalendarRange className="size-4" />
                  Feb 7, 2025
                </span>
                <span className="flex items-center justify-center gap-1.5 text-sm">
                  <User className="size-4" />
                  <span className="text-xs">by</span>GBstore
                </span>
              </div>
              <p className="text-md font-semibold text-slate-950 ">
                {post.title}
              </p>
              <p className="w-full text-slate-700 text-sm line-clamp-2">
                {post.body}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full flex items-center justify-center pt-8 pb-12 ">
        <div className="flex items-center gap-2 text-slate-800 text-sm">
          <button className="rounded-lg p-2 border border-slate-200 hover:bg-black hover:border-black hover:text-white size-8 flex items-center justify-center">
            <ChevronLeft className="size-4" />
          </button>
          <button className="rounded-lg p-2 border border-slate-200 hover:bg-black hover:border-black hover:text-white size-8 flex items-center justify-center">
            1
          </button>
          <button className="rounded-lg p-2 border border-slate-200 hover:bg-black hover:border-black hover:text-white size-8 flex items-center justify-center">
            2
          </button>
          <button className="rounded-lg p-2 border border-slate-200 hover:bg-black hover:border-black hover:text-white size-8 flex items-center justify-center">
            3
          </button>
          <button className="rounded-lg p-2 border border-slate-200 hover:bg-black hover:border-black hover:text-white size-8 flex items-center justify-center">
            4
          </button>
          <button className="rounded-lg p-2 border border-slate-200 hover:bg-black hover:border-black hover:text-white size-8 flex items-center justify-center">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
