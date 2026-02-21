import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="w-full mt-12">
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
      <div className="w-full p-4 grid grid-cols-2 md:grid-cols-3 place-items-center gap-2 space-y-2 mb-20">
        {categoryItems.map((cat, index) => (
          <Link
            key={index}
            href={cat.href}
            className="w-full h-60 md:h-80 relative rounded-xl overflow-hidden"
          >
            <p className="absolute top-[50%] left-[35%] z-30 text-xl font-semibold text-slate-100">
              {cat.title}
            </p>
            <Image
              src={cat.image}
              alt="category image"
              width={2000}
              height={2000}
              className="w-full h-full"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;

const categoryItems = [
  {
    image: "/ecom/cls-circle1.jpg",
    title: "Shirts",
    href: "#",
  },
  {
    image: "/ecom/men-14.jpg",
    title: "Accessories",
    href: "#",
  },
  {
    image: "/ecom/men-12.jpg",
    title: "Trousers",
    href: "#",
  },
  {
    image: "/ecom/cls-circle4.jpg",
    title: "Shoes",
    href: "#",
  },
  {
    image: "/ecom/men-3.jpg",
    title: "Bags",
    href: "#",
  },
];
