import React from "react";
import Image from "next/image";
import rasm1 from "../public/rasm1.png";
import rasm2 from "../public/rasm2.png";
import now1 from "../public/now1.png";
import now2 from "../public/now2.png";
import now3 from "../public/now3.png";
import now4 from "../public/now4.png";
import denim1 from "../public/denim1.png";
import denim2 from "../public/denim2.png";
import trending1 from "../public/trending1.png";
import trending2 from "../public/trending2.png";
import trending3 from "../public/trending3.png";
 import hero from "../public/hero.jpg";
const HomePage = () => {
  return (
    <>
      <section className="bg-[#f3f3f3] overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10 md:pt-[80px]">
          <div className="w-full md:w-1/1 flex justify-center">
            <div className="relative  w-full h-[700p] max-[600px]:h-[400px]">
             <Image src={hero} alt="jnef" fill className="object-cover"/>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6 md:pl-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-[900px]:text-center max-[600px]:text-center font-light tracking-tight leading-tight uppercase text-slate-900">
              Denim <br />
              <span className="font-normal">Collection</span>
            </h1>

            <p className="text-sm md:text-base text-gray-600 max-[900px]:text-center max-[600px]:text-center leading-relaxed max-w-[450px]">
              An enigmatic and contemporary <br /> collection that exalts nautical
              style <br /> through meticulous fabrics, prints, <br /> and precise forms.
            </p>

            <div className="flex max-[600px]:flex-col items-center gap-4 sm:gap-6 pt-4">
              <button className="bg-black text-white px-8 py-3.5 text-[10px] md:text-xs uppercase tracking-widest hover:bg-gray-800 transition cursor-pointer rounded-[10px]">
                View Collection
              </button>
              <button className="text-[10px] md:text-xs uppercase tracking-widest font-bold border-b-2 border-black py-1 hover:opacity-60 transition cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto max-w-[1200px] w-full px-4 pt-[60px]">
          <h2 className="text-[20px] md:text-[24px] font-bold uppercase tracking-tight">
            Trending
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
            <div className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-[5px] ">
                <Image src={trending1} alt="e"  fill className="object-cover transition-transform duration-700 group-hover:scale-105"/>
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium mt-4 leading-tight">
                New from Jordan
              </h3>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest text-[10px]">
                Made to Flight
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-[5px]">
                <Image src={trending2} alt="jn" fill className="object-cover transition-transform duration-700 group-hover:scale-105"/>
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium mt-4 leading-tight">
                Trail Running Essentials
              </h3>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest text-[10px]">
                Trail Runners
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-[5px]">
               <Image src={trending3} alt="e" fill className="object-cover transition-transform duration-700 group-hover:scale-105"/>
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium mt-4 leading-tight">
                Tourney Ready Gear
              </h3>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest text-[10px]">
                Outerwear
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto max-w-[1200px] w-full px-4 pt-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative group overflow-hidden rounded-[5px] h-[400px] md:h-[600px]">
              <Image
                src={denim1}
                alt="denim jacket 1"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-50 left-6 md:left-10 text-white">
                <h2 className="text-[20px] md:text-[24px] font-bold uppercase font-stretch-expanded tracking-tight leading-tight mb-6">
                  Reversible Denim Jacket
                </h2>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-[5px] h-[400px] md:h-[600px]">
              <Image
                src={denim2}
                alt="denim jacket 2"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-20 left-6 md:left-10 text-white">
                <h2 className="text-[20px] md:text-[24px] font-stretch-expanded font-bold uppercase tracking-tight leading-tight mb-6">
                  Reversible Denim Jacket
                </h2>
                <button className="bg-white text-black px-8 md:px-10 py-3 text-xs md:text-sm font-bold uppercase tracking-widest rounded-full hover:bg-gray-100 transition cursor-pointer shadow-lg">
                  Shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto max-w-[1200px] w-full px-4 pt-[60px]">
          <h2 className="text-[22px] font-bold tracking-tight">
            Popular Right Now
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[5px] bg-[#F6F6F6]">
                <Image
                  src={now1}
                  fill
                  alt="je"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-[#B13D03] text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  Just In
                </p>
                <h3 className="text-base md:text-[20px] font-bold">$145</h3>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative  aspect-[3/4] overflow-hidden rounded-[5px] bg-[#F6F6F6]">
                <Image
                  src={now2}
                  alt="n"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-[#B13D03] text-[10px] md:text-xs font-bold uppercase">
                  Sustainable Materials
                </p>
                <h4 className="text-[12px] md:text-[14px] font-bold leading-tight">
                  Nike Tech Fleece Windrunner
                </h4>
                <h3 className="text-base md:text-[20px] font-bold">$145</h3>
                <p className="text-[#047D48] text-[10px] md:text-xs font-bold">
                  Extra 20% Off SPRING
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[5px] bg-[#F6F6F6]">
                <Image
                  src={now3}
                  alt="nbe"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-[#B13D03] text-[10px] md:text-xs font-bold uppercase">
                  Just In
                </p>
                <h3 className="text-base md:text-[20px] font-bold">$145</h3>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[5px] bg-[#F6F6F6]">
                <Image
                  src={now4}
                  alt="kne"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-[#B13D03] text-[10px] md:text-xs font-bold uppercase">
                  Just In
                </p>
                <h3 className="text-base md:text-[20px] font-bold">$145</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 md:px-8">
        <div className="container max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <h1 className="text-3xl md:text-[42px] font-bold leading-[1.2] tracking-tight">
                Dresses you’ll turn <br className="hidden md:block" /> to again
                and again.
              </h1>
              <p className="text-base md:text-[20px] text-gray-700 max-w-[450px] mx-auto lg:mx-0">
                Here is your chance to upgrade your wardrobe with a variation of
                styles and fits that are both.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mt-8">
                <button className="bg-black text-white px-10 py-5 rounded-[10px] text-lg font-bold cursor-pointer hover:bg-gray-800 transition shadow-lg w-full sm:w-auto">
                  View Collection
                </button>
                <button className="text-lg font-bold cursor-pointer border-b-2 border-black pb-1 hover:opacity-60 transition">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2  h-[500px] md:h-[700px] flex  items-center justify-center lg:justify-end">
              <div className=" relative md:left-10 w-[280px] h-[430px] md:w-[338px] aspect-[3/4]  overflow-hidden rounded-[5px]">
                <Image src={rasm1} alt="Hero" className="object-cover" fill />
              </div>
              <div className="relative w-[380px] h-[582px] md:w-[450px] aspect-[3/4]  rounded-[5px] overflow-hidden">
                <Image src={rasm2} alt="Hero" className="object-cover" fill />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
