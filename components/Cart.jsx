"use client";
import { NotebookPen, PenTool, Van, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/slice";

function Cart({ setIsclosed }) {
  const [isHover, setisHover] = useState(false);
  const [isItem, setisItem] = useState("");
  const [tab, settab] = useState("");

  const CartItems = useSelector((state) => state.cart.cartItems);
  const TotalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();
  return (
    <div className="w-full h-[100vh] flex flex-col sm:flex-row bg-white overflow-y-auto pb-7">
      <div className="py-2 sm:overflow-y-scroll w-full sm:w-[35%] lg:h-full  border-r border-r-slate-200 hide-scroll">
        <div className="flex w-full items-center justify-between">
          <p className="text-slate-800 font-semibold text-lg sm:text-center px-4 py-2">
            You may also like
          </p>
          <button
            onClick={() => setIsclosed(false)}
            className="p-1.5 rounded-full flex sm:hidden items-center justify-center bg-slate-100 mr-2"
          >
            <X className="size-5 text-slate-800" />
          </button>
        </div>
        <div className="w-full hidden md:flex flex-row sm:flex-col sm:items-center gap-3 max-sm:p-3 max-sm:overflow-x-scroll">
          {CartItemsRecommend.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                (setisItem(item.title), setisHover(true));
              }}
              onMouseLeave={() => setisHover(false)}
              className="w-[105px] lg:w-[165px]"
            >
              <Image
                src={item.image}
                alt={`${item.title + "image"}`}
                width={2000}
                height={2000}
                className="w-full h-[130px] lg:h-[195px] rounded-xl"
              />
              <p className="text-sm text-slate-800 truncate">{item.title}</p>
              <div className="w-full overflow-hidden h-8 text-slate-800">
                <div
                  className={`"transition-all duration-500 p-6" ${
                    isHover && isItem === item.title ? "-translate-y-8" : ""
                  }`}
                >
                  <p className="mt-1 text-md font-semibold">${item.price}</p>
                  <p className="mt-2 text-md font-semibold">Add To Cart</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[65%] p-4 overflow-hidden relative">
        {tab && (
          <div className="bg-white border border-slate-200 w-full absolute bottom-0 right-2">
            {tab === "Note" && (
              <div className="w-full">
                <p className="py-4 border-b border-slate-200 flex items-center gap-2">
                  <NotebookPen className="text-slate-800 ml-6 size-5" />
                  <span className="text-lg font-semibold">Note</span>
                </p>
                <div className="py-4 px-6">
                  <textarea
                    rows="5"
                    placeholder="Add special instruction for your order"
                    className="resize-none w-full border-slate-200 border-2 p-3 rounded-xl placeholder:text-gray-400 placeholder:text-sm placeholder:font-semibold"
                  ></textarea>
                  <div className="flex flex-col gap-2 mt-2">
                    <button
                      type="button"
                      className="text-white font-semibold p-2 rounded bg-slate-950 w-full hover:bg-blue-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => settab("")}
                      type="button"
                      className="text-slate-800 font-semibold p-2 rounded w-full hover:bg-red-600 hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
            {tab === "Shipping" && (
              <div className="w-full">
                <p className="py-4 border-b border-slate-200 flex items-center gap-2">
                  <Van className="text-slate-800 ml-6 size-6" />
                  <span className="text-md font-semibold">
                    Estimate shipping rates
                  </span>
                </p>
                <div className="w-full p-6 flex flex-col gap-3">
                  <div className="w-full flex flex-col gap-1.5">
                    <label className="text-slate-500 text-sm font-semibold ">
                      Country/Region
                    </label>
                    <select className="p-2 rounded-2xl w-full border border-slate-200">
                      <option value="Nigeria">Nigeria</option>
                      <option value="South Africa">South Africa</option>
                      <option value="United Stated">United Stated</option>
                      <option value="India">India</option>
                      <option value="United Kindom">United Kindom</option>
                    </select>
                  </div>
                  <div className="w-full flex flex-col gap-1.5">
                    <label className="text-slate-500 text-sm font-semibold ">
                      State
                    </label>
                    <select className="p-2 rounded-2xl w-full border border-slate-200">
                      <option value="Gombe">Gombe</option>
                      <option value="Cape Town">Cape Town</option>
                      <option value="New Jersey">New Jersey</option>
                      <option value="Delhi">Delhi</option>
                      <option value="London">London</option>
                    </select>
                  </div>
                  <div className="w-full flex flex-col gap-1.5">
                    <label className="text-slate-500 text-sm font-semibold ">
                      Postal/Zip code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g 76251"
                      className="p-2 rounded-xl w-full border border-slate-200 placeholder:text-slate-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <button
                      type="button"
                      className="text-white font-semibold p-2 rounded bg-slate-950 w-full hover:bg-blue-600"
                    >
                      Calculate
                    </button>
                    <button
                      onClick={() => settab("")}
                      type="button"
                      className="text-slate-800 font-semibold p-2 rounded w-full hover:bg-red-600 hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
            {tab === "Coupon" && (
              <div className="w-full">
                <p className="py-4 border-b border-slate-200 flex items-center gap-2">
                  <PenTool className="text-slate-800 ml-6 size-6" />
                  <span className="text-md font-semibold">
                    Add A Coupon Code
                  </span>
                </p>
                <div className="p-6">
                  <div className="w-full flex flex-col gap-1.5">
                    <label className="text-slate-500 text-sm font-semibold ">
                      Enter Code
                    </label>
                    <input
                      type="text"
                      placeholder="Disount Code"
                      className="p-2 rounded-xl w-full border border-slate-200 placeholder:text-slate-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <button
                      type="button"
                      className="text-white font-semibold p-2 rounded bg-slate-950 w-full hover:bg-blue-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => settab("")}
                      type="button"
                      className="text-slate-800 font-semibold p-2 rounded w-full hover:bg-red-600 hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex w-full items-center justify-between -mt-2">
          <p className="font-semibold text-xl text-slate-800">Shopping Cart</p>
          <button
            onClick={() => setIsclosed(false)}
            className="p-1.5 rounded-full hidden sm:flex items-center justify-center bg-slate-100 "
          >
            <X className="size-5 text-slate-800" />
          </button>
        </div>
        <div className="bg-gray-100 px-4 py-6 w-full mt-2 rounded-xl">
          <div className="w-full bg-white h-2 flex items-center">
            <div className="w-[60%] h-full green-gradient"></div>
            <span className="p-1 rounded-full flex items-center justify-center border-2 border-green-500">
              <Van className="size-4.5 text-black" strokeWidth={1} />
            </span>
          </div>
          <p className="text-sm text-slate-900 mt-3.5">
            Congratulations! You've got free shipping!
          </p>
        </div>
        <hr className="h-2 text-slate-200 w-full mt-2" />
        <div className="w-full flex flex-col items-center justify-center gap-3 mt-4 h-[350px] overflow-y-scroll py-4">
          {CartItems.length === 0 ? (
            <p className="text-slate-800 text-md">Cart Is Empty</p>
          ) : (
            CartItems.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center gap-4"
              >
                <Image
                  src={item.image[0]}
                  alt={`${item.title + "image"}`}
                  width={2000}
                  height={2000}
                  className="w-[92px] h-[95px] lg:h-[95px] rounded-lg"
                />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="pb-4 text-md font-semibold text-slate-800">
                      {item.name}
                    </p>
                    <p className="text-md text-slate-600 font-semibold text-nowrap">
                      {item.size}/{item.color}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="pb-4 text-sm font-semibold text-red-500 underline"
                  >
                    Remove
                  </button>
                  <p className="text-sm text-slate-800 font-semibold text-nowrap">
                    {item.quantity} X ${item.price}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="w-full flex flex-center justify-between px-5 md:px-8 py-5 border-b border-slate-200 cursor-pointer">
          <div
            onClick={() => settab("Note")}
            className="flex items-center gap-2"
          >
            <NotebookPen className="size-4" />
            <p className="text-sm text-slate-800">Note</p>
          </div>
          <div
            onClick={() => settab("Shipping")}
            className="flex items-center gap-2"
          >
            <Van className="size-4" />
            <p className="text-sm text-slate-800">Shipping</p>
          </div>
          <div
            onClick={() => settab("Coupon")}
            className="flex items-center gap-2"
          >
            <PenTool className="size-4" />
            <p className="text-sm text-slate-800">Coupon</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold text-xl text-slate-800">Subtotal</p>
          <p className="font-semibold text-xl text-slate-800">
            ${TotalPrice.toFixed(2) || 0.0}
          </p>
        </div>
        <div className="w-full flex items-center gap-2 my-2">
          <input type="checkbox" className="size-4" />
          <p className="text-md text-slate-800">
            i agree with{" "}
            <span className="font-semibold underline">Terms & Conditions</span>
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-2 mt-4">
          <button className="w-full p-2 border border-slate-900 text-slate-800 hover:bg-blue-600 hover:border-blue-600 hover:text-white rounded text-md font-semibold transition-colors duration-500">
            View Cart
          </button>
          <button className="w-full p-2 bg-slate-900 text-white hover-slate-800 rounded text-md font-semibold hover:border hover:border-slate-900 hover:bg-slate-700 hover:text-slate-100 transition-colors duration-500">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

const CartItemsRecommend = [
  {
    title: "Belt wrap dress",
    image: "/ecom/cls-circle3.jpg",
    price: 620,
  },
  {
    title: "Belted monteco coat",
    image: "/ecom/cls-circle1.jpg",
    price: 565,
  },
  {
    title: "Double bottom coatt",
    image: "/ecom/cls-circle2.jpg",
    price: 58,
  },
  {
    title: "Double bottom coatt",
    image: "/ecom/cls-circle4.jpg",
    price: 58,
  },
];

{
  /*const CartItems = [
  {
    title: "Belt wrap dress",
    image: "/ecom/cls-circle3.jpg",
    price: 620,
    size: "SM",
    color: "Blue",
    quantity: 2,
  },
  {
    title: "Belted monteco coat",
    image: "/ecom/cls-circle1.jpg",
    price: 565,
    size: "XL",
    color: "Gray",
    quantity: 1,
  },
  {
    title: "Double bottom coatt",
    image: "/ecom/cls-circle2.jpg",
    price: 58,
    size: "LG",
    color: "Pink",
    quantity: 3,
  },
  {
    title: "Double bottom coatt",
    image: "/ecom/cls-circle4.jpg",
    price: 58,
    size: "MD",
    color: "Green",
    quantity: 2,
  },
];
*/
}
