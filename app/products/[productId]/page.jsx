"use client";
import { useParams } from "next/navigation";
import React from "react";
import { Allproducts } from "../../../utils/products";
import {
  ChevronRight,
  Clock,
  Heart,
  Minus,
  Plus,
  RotateCw,
  Share,
  ShieldQuestionMark,
  Star,
  Van,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProductPage() {
  const { productId } = useParams();
  const filterProduct = Allproducts.find(
    (product) => product.id === Number(productId),
  );

  return (
    <div className="w-full p-4">
      <div className="py-4 flex items-center gap-2 text-sm text-slate-700">
        <Link href="/products">Products</Link>
        <ChevronRight className="size-4" />
        <span>{filterProduct.name}</span>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="w-full py-6 flex flex-col md:flex-row-reverse gap-2">
          <Image
            src={filterProduct.image[0]}
            width={2000}
            height={2000}
            alt={filterProduct.name + "image"}
            className="w-full h-[400px] md:h-[500px] rounded-lg"
          />
          <div className="flex md:flex-col items-center gap-2 w-full max-md:overflow-x-auto hide-scroll">
            {filterProduct.image.map((img, index) => (
              <Image
                key={index}
                src={img}
                width={2000}
                height={2000}
                alt="products images"
                className="w-[100px] h-[100px] rounded-md"
              />
            ))}
          </div>
        </div>
        <div className="w-full">
          <p className="text-gray-500 font-semibold text-md mb-4">CLOTHING</p>
          <p className="mt-1 mb-2 text-black font-semibold text-2xl">
            {filterProduct.name}
          </p>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-0.5">
                <Star className="text-black size-4" fill="black" />
                <Star className="text-black size-4" fill="black" />
                <Star className="text-black size-4" fill="black" />
                <Star className="text-black size-4" fill="black" />
                <Star className="text-black size-4" fill="black" />
              </div>
              <p className="text-slate-800 text-sm text-nowrap">
                {"(134 Reviews)"}
              </p>
            </div>
            <div className="flex items-center text-sm gap-1">
              <Zap className="text-red-500 h-6 w-4 animate-pulse" fill="red" />
              <p className="text-nowrap">18 Sold in last 32 hours</p>
            </div>
          </div>
          <p className="text-slate-950 text-xl font-semibold py-3">
            ${filterProduct.price}
          </p>
          <p className="text-sm md:text-md text-slate-700 mb-2 leading-6 text-justify">
            The garments labelled as Committed are products that have been
            produced using sustainable fibres or processes, reducing their
            environmental impact.
          </p>
          <div className="w-full py-3">
            <hr className="text-slate-200 h-1" />
          </div>
          <div className="w-full">
            <p className="text-slate-900 text-md">Colors</p>
            {filterProduct.colors && (
              <div className="flex items-center gap-2 py-2">
                {filterProduct.colors.map((col, index) => (
                  <button
                    key={index}
                    className="px-2 py-1 rounded-lg border-2 border-slate-200 text-slate-800 hover:bg-black hover:text-white"
                  >
                    {col}
                  </button>
                ))}
              </div>
            )}
            <p className="text-slate-900 text-md">Size</p>
            {filterProduct.size && (
              <div className="flex items-center gap-2 py-2">
                {filterProduct.size.map((siz, index) => (
                  <button
                    key={index}
                    className="h-10 w-10 rounded-full flex items-center justify-center border-2 border-slate-200 text-slate-800 text-black hover:bg-black hover:text-white"
                  >
                    {siz}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="w-full py-2">
            <p className="text-slate-900 text-md">Quantity</p>
            <div className="flex items-center justify-between text-slate-800 w-38 mt-2 p-2 border-2 border-slate-200 rounded-2xl">
              <Minus className="size-4" />
              <span className="text-md font-semibold">1</span>
              <Plus className="size-4" />
            </div>
            <div className="w-full flex items-center gap-4 mt-6">
              <button className="w-full bg-black hover:bg-slate-950 p-2 rounded-full text-white text-md">
                Add to Cart
              </button>
              <span className="p-3 rounded-full border border-slate-200 hover:bg-slate-100">
                <Heart className="text-slate-900 size-5" />
              </span>
            </div>
            <button className="w-full bg-red-600 hover:bg-red-500 p-2 mt-2 rounded-full text-white text-md">
              Add to Cart
            </button>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between px-2 mt-2">
              <p className="text-sm text-slate-800 flex items-center">
                <Van className="size-4" />
                <span className="ml-1">Delivery and return</span>
              </p>
              <p className="text-sm text-slate-800 flex items-center">
                <ShieldQuestionMark className="size-4" />
                <span className="ml-1">Ask a question</span>
              </p>
              <p className="text-sm text-slate-800 flex items-center">
                <Share className="size-4" />
                <span className="ml-1">Share</span>
              </p>
            </div>
            <p className="text-xs text-slate-800 flex items-center mt-4 px-2">
              <Clock className="size-4" />
              <span className="ml-1">
                Estimated delivery:{" "}
                <span className="text-black">12-26 days</span>{" "}
                {"(International),"}{" "}
                <span className="text-black">3-6 days</span> {"(Nigeria)"}
              </span>
            </p>
            <p className="text-xs text-slate-800 flex items-center mt-2 px-2">
              <RotateCw className="size-4" />
              <span className="ml-1">
                Return within
                <span className="text-black"> 45 days</span> of purchase, duties
                & taxes are non-refundable
              </span>
            </p>

            <div className="flex flex-col gap-2 justify-center text-xs text-slate-950 mt-4 px-2">
              <p>
                SKU: <span className="text-slate-600">2548598</span>
              </p>
              <p>
                Vendor: <span className="text-slate-600">Blogger GB</span>
              </p>
              <p>
                Available: <span className="text-slate-600">In Stock</span>
              </p>
              <p>
                Categories:{" "}
                <span className="text-slate-600">Cloth, Women, T-shirt</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
