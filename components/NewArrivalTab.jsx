import Image from "next/image";
import { Allproducts } from "../utils/products";
import Link from "next/link";
import { Eye } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slice";

function NewArrivalTab() {
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <div className="w-full lg:px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 items-start">
        {Allproducts.slice(0, 8).map((item) => (
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
              <Link
                href={`/products/${item.id}`}
                className="p-1 rounded-full bg-slate-50 ml-auto"
              >
                <Eye className="size-5 text-black" strokeWidth={1} />
              </Link>
            </div>
            <div className="w-full absolute bottom-15 px-2 z-40">
              <button
                onClick={() => dispatch(addToCart(item))}
                className="w-full p-1.5 rounded-full text-xs font-semibold text-slate-800 bg-white hover:bg-black hover:text-white transition-all duration-300"
                type="button"
              >
                ADD TO CART
              </button>
            </div>
            <div className="w-full h-[220px] md:h-85 overflow-hidden">
              <Image
                src={item.image[0]}
                alt={`${item.title + "image"}`}
                width={2000}
                height={2000}
                className="w-full h-full md:h-85 rounded-lg group-hover:scale-110 transition-all duration-800"
              />
            </div>
            <span className="text-sm lg:text-sm font-semibold text-slate-800 truncate">
              {item.name}
            </span>
            <div className="flex items-center gap-1.5">
              {item.oldPrice && (
                <span className="text-sm lg:text-sm text-gray-400 line-through">
                  {item.oldPrice}
                </span>
              )}
              <span className="text-md lg:text-md font-semibold text-slate-600">
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
      <div className="w-full flex items-center justify-center py-6">
        <Link
          href="/products"
          className="underline underline-offset-8 decoration-2 hover:text-red-500 transition-colors duration-300 text-slate-800 font-semibold"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}

export default NewArrivalTab;
