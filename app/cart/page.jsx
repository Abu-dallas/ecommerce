"use client";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";

const CartItems = [
  {
    id: 1,
    name: "V-neck cotton T-shirt",
    price: 59.99,
    image: ["/ecom/women-2.jpg"],
    size: ["S", "M", "L", "XL"],
    colors: ["red", "blue", "green"],
  },
  {
    id: 2,
    name: "Polarized sunglasses",
    price: 79.54,
    image: ["/ecom/women-9.jpg"],
    discountPercent: "-25%",
    oldPrice: "98",
  },
  {
    id: 3,
    name: "Ramie shirt with pockets",
    price: 82.05,
    image: ["/ecom/women-20.jpg"],
    size: ["S", "M", "L", "XL"],
    colors: ["brown"],
    discountPercent: "-25%",
    oldPrice: "120",
  },
  {
    id: 4,
    name: "Ribbed cotton-blend top",
    price: 69.99,
    image: ["/ecom/women-30.jpg"],
    size: ["L", "XL"],
    colors: ["brown"],
  },
  {
    id: 5,
    name: "Ribbed cotton-blend top",
    price: 54.25,
    image: ["/ecom/women-84.jpg"],
    size: ["M", "L", "XL"],
    colors: ["white"],
  },
];

export default function DesktopCart() {
  const items = CartItems;

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="w-full py-12 mt-12 px-0.5">
      <div className="hidden lg:flex min-h-screen gap-8 bg-gray-100 px-8 py-10 mt-14">
        {/* Left Table */}
        <div className="w-4/6 bg-white rounded-2xl shadow-sm p-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 text-gray-500">Product</th>
                <th className="text-left py-3 text-gray-500">Price</th>
                <th className="text-left py-3 text-gray-500">Quantity</th>
                <th className="text-left py-3 text-gray-500">Subtotal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {items.map((item) => (
                <tr key={item.id} className="text-gray-800">
                  {/* Product */}
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.image[0]}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <span>{item.name}</span>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="py-4">${item.price.toFixed(2)}</td>

                  {/* Quantity */}
                  <td className="py-4">
                    <div className="flex items-center border rounded-xl overflow-hidden w-max">
                      <button className="px-3 py-1 hover:bg-gray-100 transition">
                        <Minus size={16} />
                      </button>
                      <span className="px-4">{item.quantity || 1}</span>
                      <button className="px-3 py-1 hover:bg-gray-100 transition">
                        <Plus size={16} />
                      </button>
                    </div>
                  </td>

                  {/* Subtotal */}
                  <td className="py-4">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Order Summary */}
        <div className="w-2/6 bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-6">
          <p className="text-xl font-semibold py-2 text-slate-500">
            Order Summary
          </p>
          {/* Subtotal */}
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-semibold text-gray-800">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          {/* Shipping Info */}
          <div className="flex items-start justify-between">
            <span className="text-gray-500">Shipping</span>
            <div className="flex flex-col gap-1 text-sm">
              <span>Free Shipping</span>
              <span>Shipping to CA</span>
              <span className="text-blue-600 cursor-pointer hover:underline">
                Change Address
              </span>
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between text-lg font-bold">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
            <ShoppingCart size={18} />
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div className="lg:hidden bg-gray-100 min-h-screen px-2 py-4 space-y-2 mt-12">
        {/* Cart Items */}
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-4 flex gap-4">
            {/* Left - Image */}
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-xl"
            />

            {/* Right - Details */}
            <div className="flex-1 space-y-3">
              {/* 1 - Name + Remove */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <button className="text-gray-400 hover:text-red-500 transition">
                  <X size={18} />
                </button>
              </div>

              {/* 2 - Price */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Price</span>
                <span>${item.price.toFixed(2)}</span>
              </div>

              {/* 3 - Quantity */}
              <div className="flex items-center justify-between text-sm">
                <span>Quantity</span>
                <div className="flex items-center border rounded-xl overflow-hidden">
                  <button className="px-3 py-1 hover:bg-gray-100 transition">
                    <Minus size={14} />
                  </button>
                  <span className="px-4">{item.quantity || 1}</span>
                  <button className="px-3 py-1 hover:bg-gray-100 transition">
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* 4 - Subtotal */}
              <div className="flex items-center justify-between font-medium">
                <span>Subtotal</span>
                <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-sm p-5 space-y-5 mt-16">
          {/* Subtotal */}
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>

          {/* Shipping */}
          <div className="flex items-start justify-between">
            <span className="text-gray-500">Shipping</span>
            <div className="flex flex-col text-sm">
              <span>Free Shipping</span>
              <span>Shipping to CA</span>
              <span className="text-blue-600 hover:underline cursor-pointer">
                Change Address
              </span>
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between text-lg font-bold">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          {/* Checkout */}
          <button className="w-full bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
            <ShoppingCart size={18} />
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
