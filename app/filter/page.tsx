"use client";

import React from "react";
import Image from "next/image";

const FilterPage = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1200px] w-full px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-[260px] flex-shrink-0 lg:sticky lg:top-10 self-start">
            <h1 className="text-xl font-semibold mb-4">New Releases (50)</h1>

            <div className="border-b border-gray-200 pb-4 space-y-2">
              <h2>Top & T-Shirts</h2>
              <h2>Shirts</h2>
              <h2>Hoodies & Pullovers</h2>
              <h2>Jackets & Vests</h2>
              <h2>Pants & Tights</h2>
              <h2>Fleece</h2>
              <h2>Compression & Baselayer</h2>
              <h2>Tracksuits</h2>
              <h2>Socks</h2>
            </div>
            <div className="mt-6 border-b border-gray-200 pb-4">
              <h1 className="font-semibold mb-2">Sale & Offers</h1>

              <label className="flex items-center gap-3 cursor-pointer group mt-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-2 border-gray-300 rounded-lg checked:bg-red-600 checked:border-red-600 appearance-none cursor-pointer transition-all relative
                  after:content-['✓'] after:absolute after:text-white after:text-xs after:font-bold after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100"
                />
                <span className="text-sm text-gray-700 group-hover:text-black">
                  Up to 50% Off
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group mt-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-2 border-gray-300 rounded-lg checked:bg-red-600 checked:border-red-600 appearance-none cursor-pointer transition-all relative
                  after:content-['✓'] after:absolute after:text-white after:text-xs after:font-bold after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100"
                />
                <span className="text-sm text-gray-700 group-hover:text-black">
                  Sale
                </span>
              </label>
            </div>
            <div className="mt-6">
              <h1 className="font-semibold mb-3">Color</h1>
              <div className="flex flex-wrap gap-4">
                {["red-600", "blue-600", "black", "pink-600"].map(
                  (color, i) => (
                    <div key={i} className="text-center">
                      <span
                        className={`block w-8 h-8 rounded-full bg-${color} border cursor-pointer`}
                      ></span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {["now1.png", "now2.png", "now3.png", "now4.png"].map(
                (img, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-[#F6F6F6]">
                      <Image
                        src={`/${img}`}
                        alt="product"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-3 space-y-1">
                      <p className="text-[#B13D03] text-xs font-bold uppercase">
                        Just In
                      </p>
                      <h3 className="text-lg font-bold">$145</h3>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPage;
