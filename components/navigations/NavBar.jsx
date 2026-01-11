"use client";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

function NavBar({ isOpen, setIsOpen }) {
  return (
    <div>
      <div className="py-3 md:py-4 px-4 md:px-6 flex items-center justify-between border-b border-slate-100 shadow-sm">
        <Menu
          onClick={() => setIsOpen(true)}
          className="text-slate-800 size-6 lg:hidden"
        />
        <p className="text-3xl font-bold text-slate-800">Modeve</p>
        <div className="hidden lg:flex items-center justify-center gap-4 text-slate-800">
          {DesktopNavs.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-md font-semibold"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <Search className="text-slate-800 size-5" />
          <User className="text-slate-800 size-5 hidden md:block" />
          <Heart className="text-slate-800 size-5 hidden md:block" />
          <div className="relative">
            <span className="bg-red-500  px-1 flex items-center justify-center text-xs rounded-full text-white absolute bottom-2 -right-2">
              2
            </span>
            <ShoppingCart className="text-slate-800 size-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

const DesktopNavs = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shops",
    href: "/shops",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];
