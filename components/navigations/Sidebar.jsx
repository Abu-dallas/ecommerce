"use client";
import {
  ArrowUpRight,
  ChevronDown,
  DollarSign,
  Heart,
  Mail,
  Phone,
  Search,
  User,
  X,
} from "lucide-react";
import Link from "next/link";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div
      className={`${
        isOpen
          ? "w-full h-screen translate-x-0 bg-black/20 lg:hidden z-50"
          : "w-full h-screen hidden bg-black/20 lg:hidden"
      }`}
    >
      <div className="bg-white w-[80%] h-full z-50">
        <div className="px-4 py-6">
          <X
            onClick={() => setIsOpen(false)}
            className="text-slate-800 size-6 hover:text-red-500"
          />
        </div>
        <div className=" overflow-y-scroll">
          <div className="w-[90%] hover:ring-1 mt-2 ring-black px-2 mx-auto flex items-center gap-1 border border-slate-200 rounded-lg">
            <Search className="text-slate-700 size-4" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="text-sm text-slate-600 w-full px-2 py-3 rounded outline-none"
            />
          </div>

          <div className="w-full flex flex-col text-slate-900 divide-y divide-slate-200 text-lg font-semibold p-4">
            {MobileNavs.map((link, index) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={index}
                href={link.href}
                className="py-3"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex px-4 py-1 items-center gap-3 w-[70%] mt-25">
            <div className="flex gap-1 items-center justify-between bg-gray-200 transition-all duration-300 hover:bg-slate-900 hover:text-slate-50 p-2 rounded-lg">
              <Heart className="size-5" />
              <p className="text-sm">Wishlist</p>
            </div>
            <div className="flex gap-1 items-center justify-between bg-gray-200 hover:bg-slate-900 transition-all duration-300 hover:text-white p-2 rounded-lg">
              <User className="size-5" />
              <p className="text-sm">Login</p>
            </div>
          </div>
          <div className="px-4 text-slate-800">
            <p className="text-lg font-semibold py-4">Need Help?</p>
            <p className="text-sm">549 Oak St.Crystal Lake, IL 60014</p>
            <Link
              href="/contact"
              className="flex items-center gap-1.5 mt-4 text-md font-semibold"
            >
              GET DIRECTION{" "}
              <span>
                <ArrowUpRight className="size-4" />
              </span>
            </Link>

            <div className="text-sm">
              <div className="flex items-center gap-3 py-4">
                <Mail className="size-4" />
                <p>gyakubu14@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Phone className="size-4" />
                <p>08030420079</p>
              </div>
            </div>
          </div>
          {/*
             <div className=" mt-4 w-full flex items-center justify-center border-t border-slate-200">
            <div className="flex gap-1 w-full items-center justify-center p-2 rounded-lg">
              <DollarSign className="size-5" />
              <p className="text-sm">USD</p>
            </div>
            <div className="flex gap-1 w-full items-center justify-center p-2 rounded-lg">
              <p className="text-sm">English</p>
              <ChevronDown className="size-4" />
            </div>
          </div>
            */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

const MobileNavs = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Categories",
    href: "/categories",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
