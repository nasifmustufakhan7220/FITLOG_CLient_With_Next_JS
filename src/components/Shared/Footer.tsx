
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";
import { oswald } from "@/app/font";

const Footer = () => {
  return (
    <footer className="border-t border-[#1c1f24] bg-[#0b0d10] text-neutral-content">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:gap-5 sm:px-6 md:px-8 lg:flex-row">
        {/* Logo */}
        <Link
          href="/"
          aria-label="FITLOG Home"
          className="flex items-center gap-3"
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

        {/* Copyright */}
        <p className="max-w-full text-center text-xs leading-relaxed text-[#92969f] sm:text-sm lg:text-right">
          © 2026 FitLog — Workout Library.
          <span className="block sm:inline"> Train hard, log honest.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;