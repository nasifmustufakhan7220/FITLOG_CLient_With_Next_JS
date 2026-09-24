import Link from "next/link";

const EmptyTextShowing = () => {
  return (
    <div className="w-full my-3 rounded-2xl border border-dashed border-[#292c32] bg-[#0f1014] px-6 py-24">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Heading */}
        <h2 className="text-[22px] font-black uppercase tracking-wide text-white">
          Nothing Here Yet
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-[#9b9da5]">
          Browse the library and add a lift to get today moving.
        </p>

        {/* Button */}
        <Link href={`/`}>
          <button
            type="button"
            className=" btn mt-7 min-h-0 h-11 rounded-full border-0 bg-[#c6ff00] px-7 text-sm font-bold text-black shadow-[0_8px_20px_rgba(198,255,0,0.12)] hover:bg-[#b8f000] hover:shadow-[0_8px_25px_rgba(198,255,0,0.2)]"
          >
            Go to workouts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyTextShowing;
