import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

function NewsInsight() {
  return (
    <div className="w-full px-4 lg:px-6">
      <p className="text-3xl text-slate-800 font-semibold mt-4 text-center">
        News insight
      </p>
      <p className="text-md text-slate-600 text-center pt-1">
        Browse our Top Trending: the hottest picks loved by all.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
        {News.map((item, index) => (
          <div key={index} className="w-full mt-12 group relative">
            <div className="w-full h-[280px] lg:h-[350px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={2000}
                height={2000}
                className="w-full h-full lg:h-full rounded-tl-2xl rounded-2xl mb-6 group-hover:scale-110 transition-all duration-1000"
              />
            </div>
            <p className="text-slate-500 font-semibold text-md mt-2">
              {item.date}
            </p>
            <p className="text-slate-800 font-semibold text-md py-1">
              {item.title}
            </p>
            <p className="text-slate-600 text-md">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-2 mt-4">
        <span className="p-1 rounded-full border border-black flex items-center justify-center">
          <span className="rounded-full p-1 bg-black"></span>
        </span>
        <span className="rounded-full p-1 border border-black"></span>
        <span className="rounded-full p-1 border border-black"></span>

        <span className="rounded-full p-1 border border-black"></span>
      </div>
    </div>
  );
}

export default NewsInsight;

const News = [
  {
    image: "/ecom/blog-grid-1.jpg",
    date: "12 August",
    title: "Top 10 Summer Fashion Trends You Can't Miss in 2024",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed vulputate",
  },
  {
    image: "/ecom/blog-grid-6.jpg",
    date: "12 August",
    title: "Top 10 Summer Fashion Trends You Can't Miss in 2024",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed vulputate",
  },
  {
    image: "/ecom/blog-grid-8.jpg",
    date: "12 August",
    title: "Top 10 Summer Fashion Trends You Can't Miss in 2024",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed vulputate",
  },
];
