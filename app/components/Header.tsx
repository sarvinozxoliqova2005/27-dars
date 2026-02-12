import Link from "next/link";
import { IoSearch, IoMenuOutline } from "react-icons/io5"; // IoMenuOutline qo'shildi
import { FiHeart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="border-b sticky top-0 bg-white z-50 w-full">
      <div className="container max-w-[1200px] mx-auto px-4 py-4 md:py-[20px] flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg md:text-xl font-bold tracking-tighter cursor-pointer whitespace-nowrap"
        >
          DOLCE & GABBANA
        </Link>
        <nav className="hidden lg:flex space-x-8 text-[10px] md:text-xs font-medium uppercase tracking-widest">
          <Link href="/filter" className="hover:text-gray-500 transition">
            New & Featured
          </Link>
          <Link href="/men" className="hover:text-gray-500 transition">
            Men
          </Link>
          <a href="#" className="hover:text-gray-500 transition">
            Women
          </a>
          <a href="#" className="hover:text-gray-500 transition">
            Sale
          </a>
        </nav>

        <div className="flex items-center gap-2 md:space-x-4">
          <div className="flex items-center gap-2 px-3 py-1.5 md:py-2 bg-[#F2F2F2] rounded-full w-full max-w-[120px] md:max-w-[200px]">
            <IoSearch className="text-gray-500 flex-shrink-0" />
            <input
              type="search"
              placeholder="Search"
              className="bg-transparent outline-none text-xs w-full placeholder:text-gray-400"
            />
          </div>

          <span className="cursor-pointer text-xl hover:text-red-500 transition shrink-0">
            <FiHeart />
          </span>

          <span className="lg:hidden cursor-pointer text-2xl shrink-0">
            <IoMenuOutline />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
