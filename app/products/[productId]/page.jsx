"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Allproducts } from "../../../utils/products";
import {
  ChevronDown,
  ChevronRight,
  Clock,
  Eye,
  Heart,
  Minus,
  Plus,
  RotateCw,
  Share,
  ShieldQuestionMark,
  Star,
  User2,
  Van,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "../../../redux/slice";
import { useDispatch } from "react-redux";

function ProductPage() {
  const [Tab, setTab] = useState("Reviews");
  const [CurrentImage, setCurrentImage] = useState(0);
  const [Quantity, setQuantity] = useState(1);

  const { productId } = useParams();
  const filterProduct = Allproducts.find(
    (product) => product.id === Number(productId),
  );
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (Quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const dispatch = useDispatch();
  return (
    <div className="w-full p-4">
      <div className="py-4 flex items-center gap-2 text-sm text-slate-700">
        <Link href="/products">Products</Link>
        <ChevronRight className="size-4" />
        <span>{filterProduct.name}</span>
      </div>
      <div className="w-full flex flex-col gap-2 md:flex-row">
        <div className="w-full py-6 flex flex-col md:flex-row-reverse gap-2">
          <Image
            src={filterProduct.image[CurrentImage]}
            width={2000}
            height={2000}
            alt={filterProduct.name + "image"}
            className="w-full md:w-[85%] h-[400px] md:h-[700px] rounded-lg"
          />
          <div className="flex md:flex-col items-center gap-2 w-full max-md:overflow-x-auto hide-scroll">
            {filterProduct.image.map((img, index) => (
              <Image
                onClick={() => setCurrentImage(index)}
                key={index}
                src={img}
                width={2000}
                height={2000}
                alt="products images"
                className="w-[100px] h-[100px] md:h-[100px] rounded-md"
              />
            ))}
          </div>
        </div>
        <div className="w-full md:p-6">
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
              <button onClick={decreaseQuantity}>
                <Minus className="size-4" />
              </button>
              <span className="text-md font-semibold">{Quantity}</span>
              <button onClick={increaseQuantity}>
                {" "}
                <Plus className="size-4" />
              </button>
            </div>
            <div className="w-full flex items-center gap-4 mt-6">
              <button
                onClick={() =>
                  dispatch(addToCart({ ...filterProduct, Quantity }))
                }
                className="w-full bg-black hover:bg-slate-950 p-2 rounded-full text-white text-md"
              >
                Add to Cart
              </button>
              <span className="p-3 rounded-full border border-slate-200 hover:bg-slate-100">
                <Heart className="text-slate-900 size-5" />
              </span>
            </div>
            <button className="w-full bg-red-600 hover:bg-red-500 p-2 mt-2 rounded-full text-white text-md">
              Proceed to payment
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
            <div className="w-full py-3">
              <hr className="text-slate-200 h-1" />
            </div>
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
            <p className="text-slate-900 text-md font-semibold mt-6">
              Guaranteed Safe Checkout
            </p>
            <div className="w-full py-4 flex items-center gap-3 ">
              {paymentMethods.map((method, index) => (
                <Image
                  key={index}
                  src={method}
                  alt="payment gateway image"
                  width={2000}
                  height={2000}
                  className="w-12 h-10 rounded-lg "
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-6 text-slate-800">
        <div className="w-full flex items-center justify-center gap-6">
          <button
            onClick={() => setTab("Reviews")}
            className={`${Tab === "Reviews" ? "text-md font-semibold underline underline-offset-8" : "text-md font-semibold"}`}
          >
            Customers Review
          </button>
          <button
            onClick={() => setTab("Shipping")}
            className={`${Tab === "Shipping" ? "text-md font-semibold underline underline-offset-8" : "text-md font-semibold"}`}
          >
            Shipping & Return
          </button>
        </div>

        {Tab === "Reviews" && (
          <div className="w-full py-6 px-4 mt-4 border border-slate-100  rounded-lg">
            <div className="flex items-center justify-center gap-3">
              <div className="w-[30%] flex flex-col gap-1.5 justify-center ">
                <p className="text-5xl md:text-7xl font-semibold">4.9</p>
                <div className="flex items-center md:ml-2">
                  <Star className="text-black size-4" fill="black" />
                  <Star className="text-black size-4" fill="black" />
                  <Star className="text-black size-4" fill="black" />
                  <Star className="text-black size-4" fill="black" />
                  <Star className="text-black size-4" fill="black" />
                </div>
                <p className="text-sm md:ml-2">{"(168 Ratings)"}</p>
              </div>

              <div className="w-[70%] flex flex-col gap-1 justify-center">
                <div className="w-full flex items-center gap-2 justify-center">
                  <span className="text-sm flex items-center">
                    5 <Star className="text-black size-4 ml-1" fill="black" />
                  </span>
                  <div className="w-full bg-gray-200">
                    <div className="bg-black p-1 w-[90%]"></div>
                  </div>
                  <span className="text-sm">59</span>
                </div>
                <div className="w-full flex items-center gap-2 justify-center">
                  <span className="text-sm flex items-center">
                    4 <Star className="text-black size-4 ml-1" fill="black" />
                  </span>
                  <div className="w-full bg-gray-200">
                    <div className="bg-black p-1 w-[60%]"></div>
                  </div>
                  <span className="text-sm">46</span>
                </div>
                <div className="w-full flex items-center gap-2 justify-center">
                  <span className="text-sm flex items-center">
                    3 <Star className="text-black size-4 ml-1" fill="black" />
                  </span>
                  <div className="w-full bg-gray-200 py-1"></div>
                  <span className="text-sm">0</span>
                </div>
                <div className="w-full flex items-center gap-2 justify-center">
                  <span className="text-sm flex items-center">
                    2 <Star className="text-black size-4 ml-1" fill="black" />
                  </span>
                  <div className="w-full bg-gray-200 py-1"></div>
                  <span className="text-sm">0</span>
                </div>
                <div className="w-full flex items-center gap-2 justify-center">
                  <span className="text-sm flex items-center">
                    1 <Star className="text-black size-4 ml-1" fill="black" />
                  </span>
                  <div className="w-full bg-gray-200 py-1"></div>
                  <span className="text-sm">0</span>
                </div>
              </div>
              <div className="w-full p-4 mt-4 flex items-center justify-center max-md:hidden">
                <button className="w-52 py-2 rounded border border-black hover:bg-black text-black font-semibold hover:text-white">
                  Write a Review
                </button>
              </div>
            </div>
            <div className="w-full p-4 mt-4 flex items-center justify-center md:hidden">
              <button className="w-52 py-2 rounded border border-black hover:bg-black text-black font-semibold hover:text-white">
                Write a Review
              </button>
            </div>
            <div className="w-full mt-3 md:mt-12">
              <div className="w-full flex items-center justify-between">
                <p className="text-xl font-semibold">03 Comments</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort By:</span>
                  <div className="flex items-center justify-between py-1 px-2 w-24 text-sm rounded border border-slate-200">
                    <span>Oldest</span>
                    <ChevronDown className="size-4" />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center gap-8 mt-8">
                {comments.map((commt, index) => (
                  <div key={index} className="w-full ">
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-full bg-gray-100">
                        <User2 className="size-8" />
                      </span>
                      <div className="flex flex-col gap-1 justify-center">
                        <p className="text-md">{commt.name}</p>
                        <span className="text-sm text-slate-400">
                          {commt.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm md:text-md text-justify leading-6 text-slate-700 mt-2">
                      {commt.comment}
                    </p>
                    {commt.reply && (
                      <div className="mt-4 ml-4 border-l-4 border-gray-200 pl-5">
                        <div className="flex items-center gap-3">
                          <span className="p-0.5 h-12 w-12 text-3xl font-bold flex items-center justify-center rounded-full bg-gray-100">
                            G
                          </span>
                          <div className="flex flex-col gap-1 justify-center">
                            <p className="text-md">{commt.reply.name}</p>
                            <span className="text-sm text-slate-400">
                              {commt.reply.date}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm md:text-md text-justify leading-6 text-slate-700 mt-2">
                          {commt.reply.comment}{" "}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {Tab === "Shipping" && (
          <div className="w-full py-6 mt-6 border border-slate-100 px-4 rounded-lg">
            <p className="text-md font-semibold">We've got your back</p>
            <p className="text-sm md:text-md text-justify leading-6 text-slate-700 mt-2">
              One delivery fee to most locations (check our Orders & Delivery
              page) Free returns within 14 days (excludes final sale and
              made-to-order items, face masks and certain products containing
              hazardous or flammable materials, such as fragrances and aerosols)
            </p>
            <p className="text-md font-semibold mt-4">We've got your back</p>
            <p className="text-sm md:text-md text-justify leading-6 text-slate-700 mt-2">
              Let us handle the legwork. Delivery duties are included in the
              item price when shipping to all EU countries (excluding the Canary
              Islands), plus The United Kingdom, USA, Canada, China Mainland,
              Australia, New Zealand, Puerto Rico, Switzerland, Singapore,
              Republic Of Korea, Kuwait, Mexico, Qatar, India, Norway, Saudi
              Arabia, Taiwan Region, Thailand, U.A.E., Japan, Brazil, Isle of
              Man, San Marino, Colombia, Chile, Argentina, Egypt, Lebanon, Hong
              Kong SAR, Bahrain and Turkey. All import duties are included in
              your order – the price you see is the price you pay.
            </p>
            <p className="text-md font-semibold mt-4">Estimated delivery</p>
            <p className="text-md py-2">Express: May 10 - May 17</p>
            <p className="text-md">Sending from USA</p>
            <p className="text-md font-semibold mt-6 mb-2">
              Estimated delivery
            </p>
            <div className="flex gap-2 flex-col">
              <Link href="#" className="text-md underline">
                Orders & delivery
              </Link>
              <Link href="#" className="text-md underline">
                Returns & refunds
              </Link>
              <Link href="#" className="text-md underline">
                Duties & taxes
              </Link>
            </div>
          </div>
        )}
      </div>
      <p className="text-slate-900 text-md font-semibold">Related products</p>
      <div className="w-full flex items-center justify-center gap-3 overflow-x-auto mb-15 max-md:pl-46 hide-scroll">
        {Allproducts.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-col justify-center mt-2 lg:mt-6 relative group "
          >
            <div className="w-full flex items-center justify-between p-2 absolute top-0.5 z-40">
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
                className="w-full p-1.5 rounded-full text-xs font-semibold text-slate-800 bg-white hover:bg-black hover:text-white transition-all duration-300"
                type="button"
              >
                ADD TO CART
              </button>
            </div>
            <div className="w-full h-[220px] md:h-70 overflow-hidden">
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
              <span className="text-md lg:text-sm text-gray-400 line-through">
                {item.oldPrice}
              </span>
              <span className="text-lg lg:text-md font-semibold text-slate-600">
                ${item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full py-3">
        <hr className="text-slate-200 h-1" />
      </div>
    </div>
  );
}

export default ProductPage;

const paymentMethods = [
  "/ecom/img-1.png",
  "/ecom/img-2.png",
  "/ecom/img-3.png",
  "/ecom/img-4.png",
  "/ecom/img-5.png",
  "/ecom/img-6.png",
];

const comments = [
  {
    name: "Aliyu Usman Musa",
    date: "1 days ago",
    comment:
      "Great theme - we were looking for a theme with lots of built in features and flexibility and this was perfect. We expected to need to employ a developer to add a few finishing touches. But we actually managed to do everything ourselves. We did have one small query and the support given was swift and helpful.",
    reply: {
      name: "Blogger Store",
      date: "1 days ago",
      comment:
        "We love to hear it! Part of what we love most about Modave is how much it empowers store owners like yourself to build a beautiful website without having to hire a developer :) Thank you for this fantastic review!",
    },
  },
  {
    name: "Usman Abdurrahman Gadawo",
    date: "1 days ago",
    comment:
      "Great theme - we were looking for a theme with lots of built in features and flexibility and this was perfect. We expected to need to employ a developer to add a few finishing touches. But we actually managed to do everything ourselves. We did have one small query and the support given was swift and helpful.",
  },
];
