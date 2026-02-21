"use client";
import { Allproducts } from "@/utils/products";
import {
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Filter,
  Grid2X2Icon,
  Grip,
  Heart,
  LayoutList,
} from "lucide-react";
import Image from "next/image";
import FilterSideBar from "../../components/FilterSideBar";
import { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice";

function Products() {
  const [isFilterOpen, setisFilterOpen] = useState(false);
  const [IsLayout, setIsLayout] = useState("View2");
  const [OpenSort, setOpenSort] = useState(false);

  const CartItems = useSelector((state) => state.cart.cartItems);
  const TotalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const [currentPage, setcurrentPage] = useState(1);

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = Allproducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(Allproducts.length / itemsPerPage);
  return (
    <div className="w-full">
      <div
        className={`transition-all duration-150 ${
          isFilterOpen
            ? "fixed top-0 w-full h-screen bg-black/15 z-50"
            : "hidden md:block fixed top-0 w-full h-screen bg-black/15 z-50 md:-translate-x-full"
        }`}
      >
        <FilterSideBar
          isFilterOpen={isFilterOpen}
          setisFilterOpen={setisFilterOpen}
        />
      </div>
      <div className="w-full bg-gray-100 flex items-center justify-center h-[150px] md:h-[200px] mt-12">
        <div>
          <p className="text-3xl md:text-4xl text-slate-800 font-bold">
            Products
          </p>
          <p className="flex gap-2 items-center mt-2">
            <Link href="/" className="text-slate-800 text-sm">
              Home
            </Link>
            <ChevronRight className="text-slate-400 size-4" />
            <span className="text-slate-400 text-sm">Product</span>
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between mt-12 px-4 md:px-6">
        <div className="flex items-center gap-3">
          <button
            className="flex items-center p-1.5 border border-slate-200 gap-2 rounded-lg"
            onClick={() => setisFilterOpen(true)}
          >
            <Filter className="text-slate-800 size-4" />
            <span>Filters</span>
          </button>
          <button className="hidden md:flex items-center p-1.5 gap-2 text-sm">
            <CheckCircle className="text-slate-800 size-4" />
            <span>Shop sale items only</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <LayoutList
            onClick={() => setIsLayout("View1")}
            className="text-slate-800 size-5"
          />
          <Grid2X2Icon
            onClick={() => setIsLayout("View2")}
            className="text-slate-800 size-5"
          />
          <Grip className="text-slate-800 size-5 hidden md:flex" />
        </div>
        <div className="flex items-center gap-2 relative">
          <div
            className={`${OpenSort ? "absolute top-9 right-2 text-slate-800 flex flex-col gap-1 justify-center  p-4 border border-slate-300 bg-white rounded-lg z-40" : "hidden"}`}
          >
            <p
              onClick={() => setOpenSort(false)}
              className="text-xs text-nowrap"
            >
              Newest to Oldest
            </p>
            <p
              onClick={() => setOpenSort(false)}
              className="text-xs text-nowrap"
            >
              Oldest to Newest
            </p>
            <p
              onClick={() => setOpenSort(false)}
              className="text-xs text-nowrap"
            >
              Price {">"} 100
            </p>
            <p
              onClick={() => setOpenSort(false)}
              className="text-xs text-nowrap"
            >
              Price {"<"} 100
            </p>
          </div>
          <span className="hidden md:flex">Sort by:</span>
          <button
            onClick={() => setOpenSort(true)}
            className="flex items-center p-1.5 border border-slate-200 rounded gap-2 text-sm"
          >
            <span>Sort by (Default)</span>
            <ChevronDown className="text-slate-800 size-4" />
          </button>
        </div>
      </div>
      <div className="w-full py-6 px-4">
        <p className=" text-slate-600 text-sm">
          <span className="text-black">{Allproducts.length}</span> products
          found
        </p>
        <div
          className={`${IsLayout === "View1" ? "w-full lg:px-4 grid grid-cols-1  gap-3 lg:gap-6 items-start" : "w-full lg:px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 items-start"}`}
        >
          {currentProducts.map((item) => (
            <div
              key={item.id}
              className="flex w-full flex-col justify-center mt-2 lg:mt-6 relative group "
            >
              <div className="w-full flex items-center justify-between p-2 absolute top-0.5 z-30">
                {item.discountPercent && (
                  <span className="py-0.5 px-2 bg-red-400 text-white text-xs rounded-full">
                    {item.discountPercent}
                  </span>
                )}
                <div className="flex flex-col gap-0.5 justify-center ml-auto">
                  <Link
                    href={`/products/${item.id}`}
                    className="p-1 rounded-full bg-slate-50"
                  >
                    <Eye className="size-5 text-black" strokeWidth={1} />
                  </Link>
                  <span className="p-1 rounded-full bg-slate-50">
                    <Heart className="size-5 text-black" strokeWidth={1} />
                  </span>
                </div>
              </div>
              <div className="w-full absolute bottom-14 px-2 z-40">
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="w-full p-1.5 rounded-full text-xs font-semibold text-slate-800 bg-white hover:bg-black hover:text-white transition-all duration-300"
                  type="button"
                >
                  ADD TO CART
                </button>
              </div>
              <div
                className={`${IsLayout === "View1" ? "w-full h-[400px] md:h-70 overflow-hidden" : "w-full h-[220px] md:h-70 overflow-hidden"}`}
              >
                <Image
                  src={item.image[0]}
                  alt={`${item.title + "image"}`}
                  width={2000}
                  height={2000}
                  className="w-full h-full md:h-70 rounded-lg group-hover:scale-110 transition-all duration-800"
                />
              </div>
              <span className="text-md lg:text-sm font-semibold text-slate-800 truncate">
                {item.name}
              </span>
              <div className="flex items-center gap-1.5">
                {item.oldPrice && (
                  <span className="text-md lg:text-sm text-gray-400 line-through">
                    {item.oldPrice}
                  </span>
                )}

                <span className="text-lg lg:text-md font-semibold text-slate-600">
                  ${item.price}
                </span>
              </div>
              {/* <div className="w-full flex items-center gap-2">
              <span className="p-1.5 rounded-full w-3.5 h-3.5 ring ring-black ring-offset-2 bg-gray-400"></span>
              <span className="w-4.5 h-4.5 p-1 rounded-full bg-blue-400"></span>
              <span className="w-4.5 h-4.5 p-1 rounded-full bg-amber-950"></span>
            </div>*/}
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center pt-8 pb-12 ">
          <div className="flex items-center gap-2 text-slate-800 text-sm">
            <button
              disabled={currentPage === 1}
              onClick={() => setcurrentPage((prev) => prev - 1)}
              className="rounded-lg p-2 border border-slate-200 size-8 flex items-center justify-center"
            >
              <ChevronLeft className="size-4" />
            </button>

            <div className="w-full flex items-center justify-center gap-3">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  onClick={() => setcurrentPage(index + 1)}
                  key={index}
                  className={` transition-all duration-300 ease-in-out ${currentPage === index + 1 ? "rounded-lg p-2 border border-slate-200 bg-black border-black text-white size-8 flex items-center justify-center" : "rounded-lg p-2 border border-slate-200 size-8 flex items-center justify-center"}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              disabled={totalPages === currentPage}
              onClick={() => setcurrentPage((prev) => prev + 1)}
              className="rounded-lg p-2 border border-slate-200 size-8 flex items-center justify-center"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
