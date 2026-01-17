import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

function FilterSideBar() {
  return (
    <div className="w-full h-screen hidden">
      <div className="absolute top-0 left-0 h-full w-full md:w-[30%] bg-white">
        <div className="sticky top-0 w-full flex items-center justify-between py-4 px-6 bg-gray-100">
          <p className="text-slate-800 font-semibold text-2xl">Filters</p>
          <span className="p-1.5 rounded-full bg-slate-100 group">
            <X className="text-slate-800 size-6 group-hover:text-red-500" />
          </span>
        </div>
        <div className="w-full h-[90%] overflow-y-scroll">
          <p className="text-slate-800 text-xl py-4 px-6">Product Categories</p>
          <div className="w-full px-6 flex flex-col gap-2">
            {itemsCategories.map((item, index) => (
              <Link href="#" key={index} className="text-slate-800 text-md">
                {item.title} <span className="ml-1">({item.length})</span>
              </Link>
            ))}
          </div>
          <div className="p-6">
            <hr className="text-slate-200 h-1" />
          </div>
          <div className="w-full text-slate-800 px-6">
            <p className="font-semibold text-md my-2">Price</p>
            <input type="range" min="0" max="100" className="w-full" />
            <div className="flex items-center justify-between mt-2">
              <div className="flex flex-col gap-1 justify-center">
                <label className="text-sm text-lsate-700">Min</label>
                <div className="flex items-center justify-between border border-slate-300 rounded-lg px-2 py-1 w-[120px]">
                  <span className="text-md font-semibold">20</span>
                  <span className="text-sm text-slate-600">$</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 justify-center">
                <label className="text-sm text-lsate-700">Max</label>
                <div className="flex items-center justify-between border border-slate-300 rounded-lg px-2 py-1 w-[120px]">
                  <span className="text-md font-semibold">300</span>
                  <span className="text-sm text-slate-600">$</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <hr className="text-slate-200 h-1" />
          </div>
          <div className="w-full px-6">
            <p className="font-semibold text-md my-2 text-slate-800">Size</p>
            <div className="w-full flex items-center gap-3 text-lg">
              <button className="border border-slate-200 p-2 size-8 rounded-full flex items-center justify-center">
                XS
              </button>
              <button className="border border-slate-200 p-2 size-8 rounded-full flex items-center justify-center">
                S
              </button>
              <button className="border border-slate-200 p-2 size-8 rounded-full flex items-center justify-center">
                M
              </button>
              <button className="border border-slate-200 p-2 size-8 rounded-full flex items-center justify-center">
                L
              </button>
              <button className="border border-slate-200 p-2 size-8 rounded-full flex items-center justify-center">
                XL
              </button>
            </div>
            <div className="w-full flex items-center gap-3 text-lg">
              <button className="border border-slate-200 p-2 size-8 rounded-full flex items-center justify-center">
                2XL
              </button>
              <button className="border border-slate-200 p-2 size-8 rounded-full flex items-center justify-center">
                3XL
              </button>
              <button className="border border-slate-200 p-2 rounded-full flex items-center justify-center">
                Free Size
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSideBar;

const itemsCategories = [
  {
    title: "Bags",
    length: 112,
  },
  {
    title: "Booking",
    length: 32,
  },
  {
    title: "Clothing",
    length: 42,
  },
  {
    title: "Women",
    length: 65,
  },
  {
    title: "Men",
    length: 13,
  },
  {
    title: "Shoes",
    length: 52,
  },
];
