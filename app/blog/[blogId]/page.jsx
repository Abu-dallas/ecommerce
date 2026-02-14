"use client";
import {
  CalendarRange,
  Facebook,
  Instagram,
  Search,
  Twitter,
  User,
  User2,
} from "lucide-react";
import { blogpost } from "../../../utils/blogs";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
function BlogDetailsPage() {
  const { blogId } = useParams();

  const matchBlog = blogpost.find((post) => post.id === Number(blogId));
  return (
    <div className="w-full md:flex gap-2 px-4 mb-20">
      <div className="w-full">
        <div className="w-full md:w-[80%] py-6">
          <span className="text-sm text-slate-500 bg-slate-100 py-1.5 px-3 rounded-lg">
            Fashion
          </span>
          <p className="text-2xl font-semibold text-slate-900 py-4">
            {matchBlog.title}
          </p>
          <div className="flex items-center gap-8 mb-6">
            <span className="flex items-center justify-center gap-1.5 text-sm">
              <CalendarRange className="size-4" />
              Feb 7, 2025
            </span>
            <span className="flex items-center justify-center gap-1.5 text-sm">
              <User className="size-4" />
              <span className="text-xs">by</span>GBstore
            </span>
          </div>
        </div>
        <div className="w-full md:w-[70%]">
          <Image
            src={matchBlog.image}
            alt="blog post image"
            width={2000}
            height={2000}
            className="w-full h-[300px] md:h-[550px] rounded-xl"
          />
          <p className="text-md leading-8 text-justify text-slate-700 mt-8">
            {matchBlog.body}
          </p>
          <h1 className="text-2xl font-semibold text-slate-700 mt-5">
            How to deal with employee quitting
          </h1>
          <p className="text-md leading-8 text-justify text-slate-700 mt-3">
            Donec eu dui condimentum, laoreet nulla vitae, venenatis ipsum.
            Donec luctus sem sit amet varius laoreet. Aliquam fermentum sit amet
            urna fringilla tincidunt. Vestibulum ullamcorper nec lacus ac
            molestie. Curabitur congue neque sed nisi auctor consequat.
            Pellentesque rhoncus tortor vitae ipsum sagittis tempor. Vestibulum
            et pharetra arcu. In porta lobortis turpis. Ut faucibus fermentum
            posuere. Suspendisse potenti. Mauris a metus sed est semper
            vestibulum. Mauris tortor sem, consectetur vehicula vulputate id,
            suscipit vel leo.
          </p>
          <p className="text-md leading-8 text-justify text-slate-700 mt-2">
            {matchBlog.body}
          </p>
          <div className="py-6 mt-5 md:flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-md text-slate-700">Tags:</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 bg-slate-100 hover:bg-black hover:text-white py-1.5 px-3 rounded-lg">
                  Fashion Trends
                </span>
                <span className="text-xs text-slate-500 bg-slate-100 hover:bg-black hover:text-white py-1.5 px-3 rounded-lg">
                  Winter
                </span>
                <span className="text-xs text-slate-500 bg-slate-100 hover:bg-black hover:text-white py-1.5 px-3 rounded-lg">
                  Summer
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 max-md:mt-6">
              <span className="text-md text-slate-700">Share this post:</span>
              <div className="flex items-center gap-2">
                <span className=" text-slate-900 bg-slate-100 hover:bg-black hover:text-white p-2 rounded-full">
                  <Facebook className="size-4" />
                </span>
                <span className=" text-slate-900 bg-slate-100 hover:bg-black hover:text-white p-2 rounded-full">
                  <Twitter className="size-4" />
                </span>
                <span className=" text-slate-900 bg-slate-100 hover:bg-black hover:text-white p-2 rounded-full">
                  <Instagram className="size-4" />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[400px] py-4 border-y border-slate-200 flex items-center divide-x divide-slate-200 gap-4">
            <div className="flex flex-col gap-1 pr-2">
              <span className="text-sm text-red-400 font-semibold">
                PREVIOUS
              </span>
              <p className="text-sm text-slate-900">
                How to incorporate classic...
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-green-400 font-semibold">NEXT</span>
              <p className="text-sm text-slate-900">
                How to incorporate classic...
              </p>
            </div>
          </div>
          <p className="text-lg font-semibold text-slate-900 mt-12">
            {" "}
            04 Comments
          </p>
          <div className="w-full flex flex-col items-center gap-8 mt-8">
            {comments.map((commt, index) => (
              <div key={index} className="w-full ">
                <div className="flex gap-6">
                  <span className="p-2 size-12 rounded-full bg-gray-300">
                    <User2 className="size-8 text-white" fill="white" />
                  </span>
                  <div className="flex flex-col gap-1 justify-center">
                    <p className="text-md">{commt.name}</p>
                    <span className="text-sm text-slate-400">{commt.date}</span>
                    <div className="border-b border-slate-200 pb-2">
                      <p className="text-sm md:text-md text-justify leading-6 text-slate-700 mt-2">
                        {commt.comment}
                      </p>
                      <button className="text-md text-red-400 my-4">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
                {commt.reply && (
                  <div className="mt-4 ml-4 pl-12">
                    <div className="flex gap-6">
                      <span className="p-4 size-16 text-3xl font-bold flex items-center justify-center rounded-full bg-gray-100">
                        G
                      </span>
                      <div className="flex flex-col gap-1 justify-center">
                        <p className="text-md">{commt.reply.name}</p>
                        <span className="text-sm text-slate-400">
                          {commt.reply.date}
                        </span>
                        <div className="border-b border-slate-200 pb-2">
                          <p className="text-sm md:text-md text-justify leading-6 text-slate-700 mt-2">
                            {commt.reply.comment}{" "}
                          </p>
                          <button className="text-md text-red-400 my-4">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full mt-12 px-1">
            <p className="text-lg font-semibold text-slate-900 my-2">
              Leave Your Comment
            </p>
            <p className="text-sm text-slate-600">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form className="flex flex-col gap-5">
              <textarea
                className="p-4 border text-sm border-slate-200 rounded-lg resize-none placeholder:text-slate-400 mt-5"
                placeholder="Comment*"
                rows={8}
              />
              <input
                type="text"
                className=" p-3 border text-sm border-slate-200 rounded-lg placeholder:text-slate-400"
                placeholder="Name*"
              />
              <input
                type="text"
                className=" p-3 border text-sm border-slate-200 rounded-lg placeholder:text-slate-400"
                placeholder="Email*"
              />
              <input
                type="text"
                className=" p-3 border text-sm border-slate-200 rounded-lg placeholder:text-slate-400"
                placeholder="Website"
              />

              <div className="flex items-center gap-2">
                <input type="checkbox" className="size-8" />
                <p className="text-xs text-slate-600">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </p>
              </div>

              <button
                type="submit"
                className="px-4 w-36 py-2 bg-black hover:bg-slate-900 text-white rounded-full text-sm mt-3 font-semibold"
              >
                Post Comment
              </button>
            </form>
          </div>
          <div className="w-full py-5 mt-12">
            <p className="text-center text-lg text-semibold">
              Related Articles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:space-y-8 w-full md:px-6 mt-2 place-item-center">
              {blogpost.slice(0, 3).map((post) => (
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
                      <span className="flex items-center justify-center gap-1.5 text-sm text-nowrap">
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
          </div>
        </div>
      </div>
      {/* <div className="hidden md:flex">
        <div className="border border-slate-200 rounded p-2 flex items-center justify-between">
          <input
            type="text"
            placeholder="Search Article"
            className="text-slate-600 text-sm outline-none"
          />
          <Search className="text-slate-600 size-4" />
        </div>
      </div> */}
      <div className="w-full pt-12 md:hidden">
        <hr className="h-2 text-slate-200" />
      </div>
    </div>
  );
}

export default BlogDetailsPage;

const comments = [
  {
    name: "Aliyu Usman Musa",
    date: "1 days ago",
    comment:
      "Great theme - we were looking for a theme with lots of built in features and flexibility and this was perfect. We expected to need to employ a developer to add a few finishing touches. But we actually managed to do everything ourselves. We did have one small query and the support given was swift and helpful.",
    reply: {
      name: "Blogger Store",
      date: "1 days ago",
      comment:
        "We love to hear it! Part of what we love most about Modave is how much it empowers store owners like yourself to build a beautiful website without having to hire a developer :) Thank you for this fantastic review!",
    },
  },
  {
    name: "Usman Abdurrahman Gadawo",
    date: "1 days ago",
    comment:
      "Great theme - we were looking for a theme with lots of built in features and flexibility and this was perfect. We expected to need to employ a developer to add a few finishing touches. But we actually managed to do everything ourselves. We did have one small query and the support given was swift and helpful.",
  },
];
