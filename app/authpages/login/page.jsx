"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Eye,
  EyeOff,
  Chrome,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center md:mt-10 bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Welcome Back
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black pr-12 transition"
              />
              <Mail
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black pr-12 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* OAuth Icons */}
        <div className="flex justify-center gap-6">
          <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <Chrome size={22} />
          </button>

          <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <Facebook size={22} />
          </button>

          <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <Twitter size={22} />
          </button>

          <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <Linkedin size={22} />
          </button>
        </div>

        {/* Register Link */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Don't have an account yet?{" "}
          <Link
            href="/authpages/register"
            className="font-semibold text-black hover:underline transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
