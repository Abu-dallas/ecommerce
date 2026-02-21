"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, User, Phone, Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center mt-12 bg-gray-100 px-4 py-10">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Create Account
        </h2>

        <form className="space-y-6">
          {/* Names Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="relative">
                <input
                  id="firstName"
                  type="text"
                  className="w-full bg-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black pr-12 transition"
                  placeholder="Enter first name"
                />
                <User
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <div className="relative">
                <input
                  id="lastName"
                  type="text"
                  className="w-full bg-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black pr-12 transition"
                  placeholder="Enter last name"
                />
                <User
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
              </div>
            </div>

            {/* Middle Name */}
            <div className="md:col-span-2">
              <label
                htmlFor="middleName"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Middle Name
              </label>
              <div className="relative">
                <input
                  id="middleName"
                  type="text"
                  className="w-full bg-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black pr-12 transition"
                  placeholder="Enter middle name"
                />
                <User
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
              </div>
            </div>
          </div>

          {/* Email */}
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
                className="w-full bg-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black pr-12 transition"
                placeholder="Enter your email"
              />
              <Mail
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="relative">
              <input
                id="phone"
                type="tel"
                className="w-full bg-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black pr-12 transition"
                placeholder="Enter your phone number"
              />
              <Phone
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>
          </div>

          {/* Password */}
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
                className="w-full bg-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black pr-12 transition"
                placeholder="Enter password"
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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="w-full bg-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black pr-12 transition"
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/authpages/login"
            className="font-semibold text-black hover:underline transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
