import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HomeProduct from "@/components/HomeProducts";
import CustomersReview from "@/components/CustomersReview";
import NewsInsight from "@/components/NewsInsight";
import ShopInstagram from "@/components/ShopInstagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full relative">
        <div className="absolute bottom-14 lg:bottom-22 px-6 lg:px-12">
          <p className="text-md font-semibold text-white">BIKINI & SWIMSUITS</p>
          <p className="text-3xl md:text-5xl lg:text-7xl  font-semibold text-white py-3">
            Flash Sales Madness
          </p>
          <button
            type="submit"
            className="text-black bg-white hover:bg-red-600 hover:text-white text-sm font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-2"
          >
            Explore Collections{" "}
            <span>
              <ArrowUpRight className="size-4 " />
            </span>
          </button>
        </div>
        <div className="w-full flex items-center justify-center gap-2 absolute bottom-4">
          <span className="p-1 rounded-full border border-white flex items-center justify-center">
            <span className="rounded-full p-1 bg-white"></span>
          </span>
          <span className="rounded-full p-1 bg-white"></span>
        </div>
        <Image
          src="/ecom/slider-women1.jpg"
          alt="women image"
          width={2000}
          height={2000}
          className="w-full h-96 lg:h-screen object-cover"
        />
      </div>
      <div className="w-full py-6 flex flex-col items-center justify-center gap-2">
        <p className="text-center text-xl font-semibold text-slate-800">
          Categories you might like
        </p>
        <Link
          href="#"
          className="text-sm font-semibold underline decoration-2 underline-offset-4 text-slate-800 mt-2"
        >
          View All collections
        </Link>

        <div className="w-full mt-8 flex items-center justify-center gap-4 overflow-x-auto hide-scroll">
          <div className="shrink-0 w-137 h-42 rounded-full lg:hidden" />
          {categories.map((item, index) => (
            <Link
              href="#"
              key={index}
              className="flex flex-col items-center justify-center shrink-0"
            >
              <Image
                src={item.image}
                alt={`${item.title + "image"}`}
                width={2000}
                height={2000}
                className="w-42 h-42 lg:w-48 lg:h-48 rounded-full"
              />
              <span className="text-lg text-slate-800">{item.title}</span>
              <span className="text-md text-slate-600">{item.length}</span>
            </Link>
          ))}
          <div className="shrink-0 w-1 h-42 rounded-full" />
        </div>
        <div className="w-full flex items-center justify-center gap-2 mt-4">
          <span className="p-1 rounded-full border border-black flex items-center justify-center">
            <span className="rounded-full p-1 bg-black"></span>
          </span>
          <span className="rounded-full p-1 border border-black"></span>
          <span className="rounded-full p-1 border border-black"></span>

          <span className="rounded-full p-1 border border-black"></span>
          <span className="rounded-full p-1 border border-black"></span>
        </div>
        <HomeProduct />
        <div className="w-full px-3 lg:px-8 mt-8 flex max-sm:items-center flex-col lg:flex-row justify-center gap-8">
          <div className="w-full group">
            <div className="w-full h-[330px] overflow-hidden">
              <Image
                src="/ecom/banner-cls1.jpg"
                alt="dress image"
                width={2000}
                height={2000}
                className="w-full h-full lg:h-[400px] rounded-lg group-hover:scale-110 transition-all duration-1000"
              />
            </div>
            <p className="text-2xl lg:text-4xl text-slate-800 font-semibold mt-2">
              Crossbody bag
            </p>
            <p className="text-sm text-slate-800 pt-2 pb-4">
              From beach to party: Perfect styles for every occasion.
            </p>
            <Link
              href="#"
              className="underline underline-offset-4 decoration-2 hover:text-red-500 transition-colors duration-300 text-slate-800 font-semibold"
            >
              Shop Now
            </Link>
          </div>
          <div className="w-full relative group">
            <div className="absolute top-[40%] left-[25%] z-40">
              <p className="text-2xl lg:text-4xl font-semibold text-white">
                Capsule Collection
              </p>
              <p className="text-white text-md text-center py-3">
                Reserved for special occasions
              </p>
              <p className="text-center">
                <Link
                  href="#"
                  className="underline underline-offset-4 decoration-2 hover:text-red-500 transition-colors duration-300 text-white font-semibold"
                >
                  Shop Now
                </Link>
              </p>
            </div>
            <div className="w-full h-[330px] overflow-hidden">
              <Image
                src="/ecom/banner-cls2.jpg"
                alt="dress image"
                width={2000}
                height={2000}
                className="w-full h-full lg:h-[400px] rounded-lg group-hover:scale-110 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:px-6 max-sm:flex items-center justify-center md:grid grid-cols-3 bg-gray-100 mt-8 h-[300px]">
          <div>
            <p className="text-2xl lg:text-4xl text-slate-800 font-semibold">
              Limited-Time Deals On!
            </p>
            <p className="text-slate-800 text-sm py-3">
              Up to 50% Off Selected Styles. Don't Miss Out.
            </p>
            <Link
              href="#"
              type="button"
              className="flex items-center justify-center text-white bg-slate-800 gap-3 p-3 w-52 rounded-full"
            >
              Shop Now <ArrowUpRight className="size-4" />{" "}
            </Link>
          </div>
          <div className=" w-full flex items-center ml-12">
            <Image
              src="/ecom/img-countdown1.png"
              alt="promo image"
              width={2000}
              height={2000}
              className="w-55 h-full hidden md:block"
            />
            <p className="text-sm text-slate-800 hidden md:blok">Time's up!</p>
          </div>
        </div>
        <CustomersReview />
        <NewsInsight />
        <ShopInstagram />
        <Footer />
      </div>
    </div>
  );
}

const categories = [
  {
    image: "/ecom/cls-circle1.jpg",
    title: "New in",
    length: "12 items",
  },
  {
    image: "/ecom/cls-circle2.jpg",
    title: "Promotion",
    length: "6 items",
  },

  {
    image: "/ecom/cls-circle3.jpg",
    title: "Clothing",
    length: "12 items",
  },
  {
    image: "/ecom/cls-circle4.jpg",
    title: "Shoes",
    length: "56 items",
  },
  {
    image: "/ecom/cls-circle5.jpg",
    title: "Bags",
    length: "12 items",
  },
];
