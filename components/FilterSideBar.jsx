"use client";
import { DollarSign, X } from "lucide-react";
import Link from "next/link";

function FilterSideBar({ isFilterOpen, setisFilterOpen }) {
  return (
    <div className="max-md:flex items-center justify-center w-full h-screen">
      <div className="absolute max-md:bottom-0 md:top-0 md:left-0 h-[95%] md:h-full w-[95%] md:w-[30%] bg-white max-md:rounded-2xl">
        <div className="sticky top-0 w-full flex items-center justify-between py-4 px-6 bg-gray-100 max-md:rounded-t-2xl">
          <p className="text-slate-800 font-semibold text-2xl">Filters</p>
          <span
            className="p-1.5 rounded-full bg-slate-100 group"
            onClick={() => setisFilterOpen(false)}
          >
            <X className="text-slate-800 size-6 group-hover:text-red-500" />
          </span>
        </div>
        <div className="w-full h-[90%] overflow-y-scroll relative max-md:px-4">
          <p className="text-slate-800 text-xl py-4 px-6">Product Categories</p>
          <div className="w-full px-6 flex flex-col gap-2">
            {itemsCategories.map((item, index) => (
              <Link href="#" key={index} className="text-slate-800 text-md">
                {item.title} <span className="ml-6">({item.length})</span>
              </Link>
            ))}
          </div>
          <div className="p-6">
            <hr className="text-slate-200 h-1" />
          </div>
          <div className="w-full text-slate-800 px-4">
            <p className="font-semibold text-md my-2">Price</p>
            <input type="range" min="0" max="100" className="w-full" />
            <div className="flex items-center justify-between mt-2">
              <div className="flex flex-col gap-1 justify-center">
                <label className="text-sm text-lsate-700">Min</label>
                <div className="flex items-center justify-between border border-slate-300 rounded-lg px-2 py-1 w-[120px]">
                  <span className="text-md font-semibold">20</span>
                  <span className="text-sm text-slate-600">
                    <DollarSign className="size-5" />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 justify-center">
                <label className="text-sm text-lsate-700">Max</label>
                <div className="flex items-center justify-between border border-slate-300 rounded-lg px-2 py-1 w-[120px]">
                  <span className="text-md font-semibold">300</span>
                  <span className="text-sm text-slate-600">
                    <DollarSign className="size-5" />{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <hr className="text-slate-200 h-1" />
          </div>
          <div className="w-full px-6">
            <p className="font-semibold text-md my-2 text-slate-800">Size</p>
            <div className="w-full flex items-center gap-6 text-lg">
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
            <div className="w-full flex items-center gap-3 text-lg mt-2">
              <button className="border border-slate-200 p-2 size-10 rounded-full flex items-center justify-center">
                2XL
              </button>
              <button className="border border-slate-200 p-2 size-10 rounded-full flex items-center justify-center">
                3XL
              </button>
              <button className="border border-slate-200 px-2 py-1 rounded-full flex items-center justify-center">
                Free Size
              </button>
            </div>
          </div>
          <div className="pt-6">
            <hr className="text-slate-200 h-1" />
          </div>
          <div className="w-full py-4 px-6">
            <p className="text-xl font-semibold text-slate-800">Colors</p>
            <div className="w-full py-4 flex flex-col gap-2">
              <div className="w-full flex items-center gap-3">
                <button className="py-2 px-3 flex items-center gap-2 border border-slate-200 rounded-full">
                  <span className="p-2.5 rounded-full bg-red-500"></span>
                  <span className="text-slate-800 text-md">Red</span>
                </button>
                <button className="py-2 px-3 flex items-center gap-2 border border-slate-200 rounded-full">
                  <span className="p-2.5 rounded-full bg-blue-500"></span>
                  <span className="text-slate-800 text-md">Blue</span>
                </button>
                <button className="py-2 px-3 flex items-center gap-2 border border-slate-200 rounded-full">
                  <span className="p-2.5 rounded-full bg-gray-500"></span>
                  <span className="text-slate-800 text-md">Gray</span>
                </button>
              </div>
              <div className="w-full flex items-center gap-3">
                <button className="py-2 px-3 flex items-center gap-2 border border-slate-200 rounded-full">
                  <span className="p-2.5 rounded-full bg-green-500"></span>
                  <span className="text-slate-800 text-md">Green</span>
                </button>
                <button className="py-2 px-3 flex items-center gap-2 border border-slate-200 rounded-full">
                  <span className="p-2.5 rounded-full bg-orange-500"></span>
                  <span className="text-slate-800 text-md">Orange</span>
                </button>
                <button className="py-2 px-3 flex items-center gap-2 border border-slate-200 rounded-full">
                  <span className="p-2.5 rounded-full bg-black"></span>
                  <span className="text-slate-800 text-md">Black</span>
                </button>
              </div>
              <div className="w-full flex items-center gap-3">
                <button className="py-2 px-3 flex items-center gap-2 border border-slate-200 rounded-full">
                  <span className="p-2.5 rounded-full border border-slate-200 bg-white"></span>
                  <span className="text-slate-800 text-md">White</span>
                </button>
                <button className="py-2 px-3 flex items-center gap-2 border border-slate-200 rounded-full">
                  <span className="p-2.5 rounded-full bg-purple-500"></span>
                  <span className="text-slate-800 text-md">Purple</span>
                </button>
                <button className="py-2 px-3 flex items-center gap-2 border border-slate-200 rounded-full">
                  <span className="p-2.5 rounded-full bg-pink-500"></span>
                  <span className="text-slate-800 text-md">Pink</span>
                </button>
              </div>
              <div className="w-full flex items-center gap-3">
                <button className="py-2 px-3 flex items-center gap-2 border border-slate-200 rounded-full">
                  <span className="p-2.5 rounded-full bg-blue-200"></span>
                  <span className="text-slate-800 text-md">Light Blue</span>
                </button>
                <button className="py-2 px-3 flex items-center gap-2 border border-slate-200 rounded-full">
                  <span className="p-2.5 rounded-full bg-blue-900"></span>
                  <span className="text-slate-800 text-md">Dark Blue</span>
                </button>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <hr className="text-slate-200 h-1" />
          </div>
          <div className="w-full px-6 py-4">
            <p className="text-slate-800 font-semibold text-lg">Availability</p>
            <div className="flex flex-col gap-3 justify-center pt-4">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="size-5" />
                <span className="text-md text-slate-700">In Stock</span>
                <span className="text-md text-slate-700">{"(13)"}</span>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" className="size-5" />
                <span className="text-md text-slate-700">Out of Stock</span>
                <span className="text-md text-slate-700">{"(2)"}</span>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <hr className="text-slate-200 h-1" />
          </div>
          <div className="w-full px-6 py-4">
            <p className="text-slate-800 font-semibold text-lg">Brand</p>
            <div className="flex flex-col gap-3 justify-center py-4">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="size-5" />
                <span className="text-md text-slate-700">Nike</span>
                <span className="text-md text-slate-700">{"(13)"}</span>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" className="size-5" />
                <span className="text-md text-slate-700">Adidas</span>
                <span className="text-md text-slate-700">{"(2)"}</span>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" className="size-5" />
                <span className="text-md text-slate-700">Gucci</span>
                <span className="text-md text-slate-700">{"(2)"}</span>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" className="size-5" />
                <span className="text-md text-slate-700">Zalando</span>
                <span className="text-md text-slate-700">{"(2)"}</span>
              </div>
              <div className="flex items-center gap-4">
                <input type="checkbox" className="size-5" />
                <span className="text-md text-slate-700">Hermes</span>
                <span className="text-md text-slate-700">{"(2)"}</span>
              </div>
            </div>
          </div>
          <div className="w-full py-6 px-4 sticky bottom-0 bg-white">
            <button className="p-2.5 rounded-full w-full bg-black text-white hover:bg-slate-950 font-semibold text-md">
              Filter Product
            </button>
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
