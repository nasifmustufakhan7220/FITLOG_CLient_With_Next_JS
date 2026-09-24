
import Link from "next/link";
import { oswald } from "@/app/font";
import { FaDumbbell, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">

        {/* 404 Icon */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#30343D] bg-[#15171D] sm:h-28 sm:w-28">
          <FaDumbbell
            className="text-[36px] text-[#C2F800] sm:text-[44px]"
          />
        </div>

        {/* Error Code */}
        <p className="mb-2 text-xs font-bold tracking-[0.3em] text-[#C2F800]">
          ERROR 404
        </p>

        {/* Heading */}
        <h1
          className={`${oswald.className} text-5xl font-bold uppercase leading-tight text-white sm:text-6xl md:text-7xl`}
        >
          PAGE NOT FOUND
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-md text-sm leading-6 text-[#9CA3AF] sm:text-base">
          Looks like this workout went off the map.
          The page you&apos;re looking for doesn&apos;t exist
          or has been moved.
        </p>

        {/* Back Home Button */}
        <Link
          href="/"
          className="btn mt-8 h-auto min-h-11 rounded-full border-none bg-[#C2F800] px-6 py-3 text-xs font-bold text-black transition-colors hover:bg-[#a8d900] sm:px-8"
        >
          <FaArrowLeft className="text-sm" />
          BACK TO HOME
        </Link>

        {/* Bottom Label */}
        <p className="mt-8 text-[10px] font-bold tracking-[0.2em] text-[#555B68]">
          TRAIN WITH INTENT. LOG EVERY SET.
        </p>

      </div>
    </main>
  );
};

export default NotFound;