
"use client";

import { oswald } from "@/app/font";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`text-xs font-bold transition-all duration-200 sm:text-sm ${
            pathname === "/"
              ? "rounded-full bg-[#1c2c0c] px-4 py-2 text-[#c2f800] sm:px-5"
              : "text-white hover:text-[#c2f800]"
          }`}
        >
          Workouts
        </Link>
      </li>
    </>
  );

  return (
    <header className="border-b border-[#1c1f24]">
      <div className="navbar mx-auto min-h-16 w-full max-w-6xl px-4 py-2 sm:px-6 lg:px-8">
        {/* Left Section: Menu + Logo */}
        <div className="navbar-start min-w-0 gap-2 sm:gap-4">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open navigation menu"
              className="btn btn-ghost btn-sm border border-[#303a20] bg-[#1c2c0c] text-[#c2f800] hover:bg-[#293d12] hover:text-[#c2f800] sm:btn-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-50 mt-3 w-52 rounded-box border border-[#303a20] bg-[#0b0d10] p-2 text-white shadow-xl"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            aria-label="FITLOG Home"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <Image
              src={logo}
              alt="FITLOG Logo"
              width={32}
              height={32}
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />

            <p
              className={`${oswald.className} text-base font-bold tracking-wide text-white sm:text-lg`}
            >
              FITLOG
            </p>
          </Link>
        </div>

        {/* Center Section: Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center px-1">
            {links}
          </ul>
        </div>

        {/* Right Section: Actions */}
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <button type="button" className=" py-2 text-xs font-semibold text-white sm:text-sm cursor-pointer">
              Plan <span className="rounded-3xl bg-[#c2f800] p-1 text-black">0</span>
            </button>

            <button type="button" className=" py-2 text-xs font-semibold text-white sm:text-sm cursor-pointer">
              Saved <span className="rounded-3xl bg-[#c2f800] p-1 text-black">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;