import React from "react";
import Image from "next/image";

const MenPage = () => {
  const sizes = ["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5"];
  const recommended = ["now1.png", "now2.png", "now3.png", "now4.png"];

  return (
    <section className="py-8">
      <div className="container mx-auto max-w-[1200px] w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="relative w-full lg:w-[557px] max-w-full aspect-[557/600] overflow-hidden rounded-md">
            <Image
              src="/now1.png"
              fill
              alt="je"
              className="object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="flex-1 space-y-6 w-full">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">140 purchased in the last 7 days</p>
              <h1 className="text-2xl lg:text-3xl font-bold">Air Jordan 1 Low</h1>
              <p className="text-gray-700">Men’s Shoes</p>
              <p className="text-xl lg:text-2xl font-semibold">$145</p>
            </div>
            <div>
              <h2 className="mb-2 font-semibold text-lg">Select Size</h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                {sizes.map((size) => (
                  <div
                    key={size}
                    className="flex-1 h-[50px] border border-gray-400 flex items-center justify-center rounded-xl text-lg cursor-pointer hover:border-black transition-colors"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full lg:w-[380px] h-[80px] bg-black text-white text-xl lg:text-2xl font-bold rounded-full mt-5 hover:bg-gray-800 transition-colors">
              Add to Bag
            </button>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-5">You Might Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommended.map((img, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md bg-[#F6F6F6]">
                  <Image
                    src={`/${img}`}
                    alt="product"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <p className="text-[#B13D03] text-xs font-bold uppercase">Just In</p>
                  <h3 className="text-lg font-bold">$145</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenPage;
