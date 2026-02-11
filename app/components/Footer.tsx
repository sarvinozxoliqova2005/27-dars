import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 md:px-12 mt-20">
      <div className="max-w-[1280px] w-full container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest">
              Company
            </h5>
            <ul className="space-y-4 text-xs font-medium">
              <li>
                <p className="text-gray-400 mb-1">
                  Find location nearest to you:
                </p>
                <a
                  href="#"
                  className="border-b border-white pb-0.5 hover:text-gray-300 transition"
                >
                  See Our Stores
                </a>
              </li>
              <li className="text-gray-100">+998 99 123 45 67</li>
              <li className="text-gray-100">hello@mail.com</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest">
              Information
            </h5>
            <ul className="space-y-4 text-xs font-medium text-gray-100">
              <li className="hover:text-gray-400 cursor-pointer transition">
                My Account
              </li>
              <li className="hover:text-gray-400 cursor-pointer transition">
                Login
              </li>
              <li className="hover:text-gray-400 cursor-pointer transition">
                My Cart
              </li>
              <li className="hover:text-gray-400 cursor-pointer transition">
                Wishlist
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest">
              Services
            </h5>
            <ul className="space-y-4 text-xs font-medium text-gray-100">
              <li className="hover:text-gray-400 cursor-pointer transition">
                About us
              </li>
              <li className="hover:text-gray-400 cursor-pointer transition">
                Careers
              </li>
              <li className="hover:text-gray-400 cursor-pointer transition">
                Delivery Information
              </li>
              <li className="hover:text-gray-400 cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest">
              Subscribe
            </h5>
            <p className="text-xs text-gray-400 leading-relaxed max-w-[280px]">
              Enter your e-mail below to be the first to know about new
              collections and product launches.
            </p>
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                ✉️
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-gray-700 py-3 pl-10 pr-10 text-xs rounded-full focus:outline-none focus:border-white transition"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:translate-x-1 transition">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
