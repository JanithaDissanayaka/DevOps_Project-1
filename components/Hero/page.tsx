"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen bg-black text-white mb-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 items-center">
          {/* Left - Burger Image */}
          <div className="relative">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <Image
                  src="/Burger1.png"
                  alt="Delicious Burger"
                  width={300} // control width
                  height={100} // decrease height
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              ENJOY BURGER MAKE
              <br />
              YOUR TUMMY HAPPY
            </h1>

            <div className="w-45 h-0.5 bg-yellow-400"></div>

            <div className="w-[400px] text-center">
              <p className="text-gray-300 text-lg">
                Whether you&apos;re craving familiar favorites or
                <br />
                exploring culinary innovations, burgers come <br />
                in a remarkable range of styles.
              </p>
            </div>

            {/* Features */}
            <div className="flex gap-25 py-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/Delicious.png"
                    alt="Burger"
                    width={80}
                    height={80}
                    className="rounded object-cover"
                  />
                </div>
                <span className="text-sm font-semibold">Delicious</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/fresh.png"
                    alt="Burger"
                    width={80}
                    height={80}
                    className="rounded object-cover"
                  />
                </div>
                <span className="text-sm font-semibold">Fresh</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/organic.png"
                    alt="Burger"
                    width={80}
                    height={80}
                    className="rounded object-cover"
                  />
                </div>
                <span className="text-sm font-semibold">Organic</span>
              </div>
            </div>

            <button className="bg-yellow-400 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-500 transition">
              learn more
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-yellow-500 my-4"></div>

      {/* Category Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {/* Food Card */}
          <div className="max-w-[350px] w-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-6 flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform">
            <div className="flex-shrink-0">
              <Image
                src="/burger2.png"
                alt="Burger"
                width={80}
                height={80}
                className="rounded object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl mb-1">FOOD</h3>
              <p className="text-black text-sm font-semibold">Buy Online</p>
            </div>
          </div>

          {/* Snack Card */}
          <div className="max-w-[350px] w-full bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform">
            <div className="flex-shrink-0">
              <Image
                src="/potato.png"
                alt="Fries"
                width={80}
                height={80}
                className="rounded object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl mb-1">SNACK</h3>
              <p className="text-black text-sm font-semibold">Buy Online</p>
            </div>
          </div>

          {/* Beverage Card */}
          <div className="max-w-[350px] w-full bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform">
            <div className="flex-shrink-0">
              <Image
                src="/juice.png"
                alt="Drinks"
                width={80}
                height={80}
                className="rounded object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl mb-1">BEVERAGE</h3>
              <p className="text-black text-sm font-semibold">Buy Online</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-yellow-300 my-4"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-35 max-w-[1300px] w-full">
            {/* Burger Promo */}
            <div className="max-w-[600px] w-full bg-[#171717] rounded-lg p-8 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-yellow-400 text-sm uppercase tracking-wider">
                  Payday Promo
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                  GET A 10% DISCOUNT ON <br /> PAYDAY WEEK
                </h3>
                <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition">
                  Buy Online
                </button>
              </div>
              <div className="absolute right-4 bottom-4 w-40 h-40">
                <Image
                  src="/burger3.png"
                  alt="Burger"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Drink Promo */}
            <div className="max-w-[600px] w-full bg-[#171717] rounded-lg p-8 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-yellow-400 text-sm uppercase tracking-wider">
                  Payday Promo
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                  BUY 1 COKE GET MORE <br /> FREE 1 COKE
                </h3>
                <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition">
                  Buy Online
                </button>
              </div>
              <div className="absolute right-4 bottom-4 w-40 h-48">
                <Image
                  src="/cocacola.png"
                  alt="Drink"
                  fill
                  className="object-cover rounded-lg opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-5 items-center max-w-7xl mx-auto">
            {/* Left - Burger Image */}
            <div className="relative w-[500px] h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/Burger4.png"
                alt="Burger"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {/* Right - Content */}
            <div className="space-y-6 w-[700px]">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                FIND YOUR BEST TASTED FOOD AND DRINK JUST IN ONE PLACE
              </h2>

              <div className="w-55 h-0.5 bg-yellow-400"></div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">Best price</span>
                </div>

                <div className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">Best Service</span>
                </div>

                <div className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">Fresh Ingredient</span>
                </div>

                <div className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">Health Protocol</span>
                </div>
              </div>

              <button className="bg-yellow-400 text-black px-6 py-2.5 rounded font-semibold text-sm hover:bg-yellow-500 transition">
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
