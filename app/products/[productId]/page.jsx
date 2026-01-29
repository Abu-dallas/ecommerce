"use client";
import { useParams } from "next/navigation";
import React from "react";
import { Allproducts } from "../../../utils/products";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

function ProductPage() {
  const { productId } = useParams();
  const filterProduct = Allproducts.find(
    (product) => product.id === Number(productId)
  );

  return (
    <div className="w-full p-4">
      <div className="py-4 flex items-center gap-2 text-sm text-slate-700">
        <span>Products</span>
        <ChevronRight className="size-4" />
        <span>{filterProduct.name}</span>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="py-6 flex flex-col gap-2 md:flex-row">
          <Image
            src={filterProduct.image[0]}
            width={2000}
            height={2000}
            alt={filterProduct.name + "image"}
            className="w-full has-[250px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
