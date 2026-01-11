"use client";
import { useState } from "react";
import NewArrivalTab from "@/components/NewArrivalTab";

function HomeProducts() {
  const [CurrentTab, setCurrentTab] = useState("new");
  return (
    <div className="w-full px-3">
      <div className="w-full flex items-center lg:justify-center gap-4 text-md font-semibold text-slate-700 mt-12">
        <button
          className={`${
            CurrentTab === "new" &&
            "text-slate-900 underline underline-offset-8 decoration-2 transition-all duration-200"
          }`}
          onClick={() => setCurrentTab("new")}
        >
          New Arrivals
        </button>
        <button
          className={`${
            CurrentTab === "best" &&
            "text-slate-900 underline underline-offset-8 decoration-2 transition-all duration-200"
          }`}
          onClick={() => setCurrentTab("best")}
        >
          Best Seller
        </button>
        <button
          className={`${
            CurrentTab === "sale" &&
            "text-slate-900 underline underline-offset-8 decoration-2 transition-all duration-200"
          }`}
          onClick={() => setCurrentTab("sale")}
        >
          On Sale
        </button>
      </div>
      <div className="w-full mt-2">
        {CurrentTab === "new" && <NewArrivalTab />}
        {CurrentTab === "best" && <div>Best Seller</div>}
        {CurrentTab === "sale" && <div>On Sale</div>}
      </div>
    </div>
  );
}

export default HomeProducts;
