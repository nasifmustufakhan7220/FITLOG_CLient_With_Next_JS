
import { oswald } from "@/app/font";
import Image from "next/image";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="mb-8 mx-auto mt-8 w-full max-w-6xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-10 overflow-hidden rounded-2xl bg-[#15171D] px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:flex-row lg:gap-8 lg:px-12 lg:py-14 xl:px-14">
        {/* Left Content */}
        <div className="w-full space-y-5 text-center lg:max-w-[55%] lg:space-y-6 lg:text-left">
          {/* Label */}
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#C2F800] sm:text-[11px]">
            WORKOUT LIBRARY
          </p>

          {/* Heading */}
          <h1
            className={`${oswald.className} text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[48px] xl:text-[60px]`}
          >
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-xl text-sm leading-6 text-[#9CA3AF] sm:text-base lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <button
            type="button"
            className="btn h-auto min-h-11 rounded-full border-none bg-[#C2F800] px-6 py-3 text-xs font-bold text-black hover:bg-[#a8d900] sm:px-7"
          >
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Right Image */}
        <div className="flex w-full items-center justify-center lg:w-[45%] lg:justify-end">
          <Image
            src={bannerImg}
            alt="Workout illustration"
            priority
            className="h-auto w-full max-w-70 object-contain sm:max-w-85 md:max-w-100 lg:max-w-90 xl:max-w-107.5"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;