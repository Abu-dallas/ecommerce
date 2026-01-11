import {
  ArrowUpLeftSquareIcon,
  Eye,
  Headphones,
  Van,
  Verified,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function ShopInstagram() {
  return (
    <div className="w-full px-4 lg:px-6">
      <p className="text-3xl text-slate-800 font-semibold text-center mt-12">
        Shop Instagram
      </p>
      <p className="text-md text-slate-600 text-center py-3">
        Elevate your wardrobe with fresh finds today!
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 place-items-center">
        {InstaImages.map((image, index) => (
          <div key={index} className="w-full relative ">
            <span className="p-1 rounded-full bg-slate-50 absolute top-[50%] left-[45%] z-40">
              <Eye className="size-5 text-black" strokeWidth={1} />
            </span>
            <div className="w-full h-[220px] group overflow-hidden">
              <Image
                src={image}
                alt={`${image}`}
                width={2000}
                height={2000}
                className="w-full h-full rounded-tl-2xl rounded-2xl mt-3 mb-5 group-hover:scale-110 transition-all duration-1000"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 mb-5">
        {aboutUs.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col gap-3 items-center justify-center max-sm:mb-4"
          >
            <span>{item.icon}</span>
            <p className="text-slate-800 text-md font-semibold">{item.title}</p>
            <p className="text-slate-600 text-md">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="w-full py-24">
        <hr className="h-1 text-slate-300" />
      </div>
    </div>
  );
}

export default ShopInstagram;

const InstaImages = [
  "/ecom/cls-circle2.jpg",
  "/ecom/cls-circle3.jpg",
  "/ecom/cls-circle2.jpg",
  "/ecom/cls-circle3.jpg",
  "/ecom/cls-circle2.jpg",
];

const aboutUs = [
  {
    title: "14-Day Returns",
    desc: "Risk free shopping with easy returns.",
    icon: <ArrowUpLeftSquareIcon className="text-slate-800 size-9" />,
  },
  {
    title: "Free Shipping",
    desc: "No extra cost, just the price you see.",
    icon: <Van className="text-slate-800 size-9" />,
  },
  {
    title: "24/7 Supports",
    desc: "24/7 support, always here just for you.",
    icon: <Headphones className="text-slate-800 size-9" />,
  },
  {
    title: "Member Discounts",
    desc: "Special prices for our loyal customers.",
    icon: <Verified className="text-slate-800 size-9" />,
  },
];
