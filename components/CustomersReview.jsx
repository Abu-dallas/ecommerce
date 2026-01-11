import { Eye, Star, Verified } from "lucide-react";
import Image from "next/image";

function CustomersReview() {
  return (
    <div className="w-full px-3 py-12">
      <p className="text-slate-800 text-center font-semibold text-xl lg:text-4xl">
        Customer Say!
      </p>
      <p className="text-md text-slate-600 text-center py-3">
        Our customers adore our products, and we constantly aim to delight them.
      </p>
      <div className="flex items-center justify-center flex-col lg:flex-row gap-8 lg:px-4">
        <div className="w-full flex flex-col md:flex-row border border-slate-200 rounded-2xl group">
          <div className="w-full lg:w-[40%] h-[280px] overflow-hidden relative">
            <span className="p-1 rounded-full bg-slate-50 absolute top-[50%] left-[45%] z-40">
              <Eye className="size-5 text-black" strokeWidth={1} />
            </span>
            <Image
              src="/ecom/cls-circle3.jpg"
              alt="review image"
              width={2000}
              height={2000}
              className="w-full lg:w-full h-full rounded-tl-2xl max-sm:rounded-tr-2xl lg:rounded-bl-2xl group-hover:scale-110 transition-all duration-1000"
            />
          </div>
          <div className="w-full lg:w-[60%] p-6">
            <div className="flex items-center gap-0.5 mb-2">
              <Star fill="yellow" className="size-4 text-amber-300" />
              <Star fill="yellow" className="size-4 text-amber-300" />
              <Star fill="yellow" className="size-4 text-amber-300" />
              <Star fill="yellow" className="size-4 text-amber-300" />
              <Star fill="yellow" className="size-4 text-amber-300" />
            </div>
            <p className="text-md text-slate-600">
              Fantastic shop! Great selection, fair prices, and friendly staff.
              Highly recommended. The quality of the products is exceptional,
              and the prices are very reasonable!
            </p>
            <div className="flex items-center gap-2 py-2 text-slate-600">
              <p className="text-md font-semibold">Naveel</p>
              <Verified className="size-4" />
            </div>
            <div className="px-2">
              <hr className="h-1 text-slate-300" />
            </div>
            <div className="flex gap-3 mt-4">
              <Image
                src="/ecom/user-5.jpg"
                alt="product image"
                width={2000}
                height={2000}
                className="w-14 h-14 rounded-full"
              />
              <div className="flex justify-center gap-1 flex-col">
                <p className="text-sm font-semibold text-slate-800">
                  Contransting sheepskin sweepshirt
                </p>
                <span className="text-slate-600 text-sm font-semibold">
                  $60.00
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row border border-slate-200 rounded-2xl group">
          <div className="w-full lg:w-[40%] h-[280px] overflow-hidden relative">
            <span className="p-1 rounded-full bg-slate-50 absolute top-[50%] left-[45%] z-40">
              <Eye className="size-5 text-black" strokeWidth={1} />
            </span>
            <Image
              src="/ecom/cls-circle1.jpg"
              alt="review image"
              width={2000}
              height={2000}
              className="w-full lg:w-full h-full rounded-tl-2xl max-sm:rounded-tr-2xl lg:rounded-bl-2xl group-hover:scale-110 transition-all duration-1000"
            />
          </div>
          <div className="w-full lg:w-[60%] p-6">
            <div className="flex items-center gap-0.5 mb-2">
              <Star fill="yellow" className="size-4 text-amber-300" />
              <Star fill="yellow" className="size-4 text-amber-300" />
              <Star fill="yellow" className="size-4 text-amber-300" />
              <Star fill="yellow" className="size-4 text-amber-300" />
              <Star fill="yellow" className="size-4 text-amber-300" />
            </div>
            <p className="text-md text-slate-600">
              Fantastic shop! Great selection, fair prices, and friendly staff.
              Highly recommended. The quality of the products is exceptional,
              and the prices are very reasonable!
            </p>
            <div className="flex items-center gap-2 py-2 text-slate-600">
              <p className="text-md font-semibold">Mark G</p>
              <Verified className="size-4" />
            </div>
            <div className="px-2">
              <hr className="h-1 text-slate-300" />
            </div>
            <div className="flex gap-3 mt-4">
              <Image
                src="/ecom/user-4.jpg"
                alt="product image"
                width={2000}
                height={2000}
                className="w-14 h-14 rounded-full"
              />
              <div className="flex justify-center gap-1 flex-col">
                <p className="text-sm font-semibold text-slate-800">
                  Contransting sheepskin sweepshirt
                </p>
                <span className="text-slate-600 text-sm font-semibold">
                  $60.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-2 mt-4">
        <span className="p-1 rounded-full border border-black flex items-center justify-center">
          <span className="rounded-full p-1 bg-black"></span>
        </span>
        <span className="rounded-full p-1 border border-black"></span>
        <span className="rounded-full p-1 border border-black"></span>

        <span className="rounded-full p-1 border border-black"></span>
      </div>
    </div>
  );
}

export default CustomersReview;
