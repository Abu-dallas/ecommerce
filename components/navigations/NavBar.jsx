"use client";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import Cart from "@/components/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";

function NavBar({ isOpen, setIsOpen }) {
  const [isClosed, setIsclosed] = useState(false);
  const CartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="fixed top-0 w-full z-50 bg-white">
      <div className="py-3 md:py-4 px-4 md:px-6 flex items-center justify-between border-b border-slate-100 shadow-sm relative">
        <div
          className={`transition-all duration-300 ${
            isClosed
              ? "w-full z-50 h-screen fixed bg-black/15 top-0 right-0"
              : "w-full z-50 h-screen fixed bg-black/15 top-0 right-0 max-md:translate-x-full lg:hidden"
          }`}
        >
          <div className="w-full h-full relative">
            <div className="w-[90%] lg:w-[50%] bg-white absolute top-0 right-0">
              <Cart setIsclosed={setIsclosed} />
            </div>
          </div>
        </div>
        <Menu
          onClick={() => setIsOpen(true)}
          className="text-slate-800 size-6 lg:hidden"
        />
        <p className="text-3xl font-bold text-slate-800">Blogger</p>
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
          <Link href="/authpage/login">
            <User className="text-slate-800 size-5 hidden md:block" />
          </Link>
          <Heart className="text-slate-800 size-5 hidden md:block" />
          <div onClick={() => setIsclosed(true)} className="relative">
            <span className="bg-red-500  px-1 flex items-center justify-center text-xs rounded-full text-white absolute bottom-2 -right-2">
              {CartItems.length}
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
    title: "Products",
    href: "/products",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Categories",
    href: "/categories",
  },
];
