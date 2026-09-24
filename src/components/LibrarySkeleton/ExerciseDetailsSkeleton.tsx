const ExerciseDetailsSkeleton = () => {
  return (
    <div className="mx-auto mt-8 w-full max-w-6xl animate-pulse rounded-2xl border border-[#1c1f26] bg-[#101115] p-4 shadow-xl sm:p-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left Side: Image Skeleton */}
        <div className="h-105 w-full rounded-xl bg-[#292c35] sm:h-130 lg:h-172.5" />

        {/* Right Side: Details Skeleton */}
        <div className="flex flex-col space-y-6">
          {/* Title & Description */}
          <div className="space-y-4">
            {/* Exercise Title */}
            <div className="h-8 w-4/5 rounded-md bg-[#292c35] sm:h-10" />

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-[#292c35]" />
              <div className="h-4 w-11/12 rounded bg-[#292c35]" />
              <div className="h-4 w-3/5 rounded bg-[#292c35]" />
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              <div className="h-6 w-16 rounded-full bg-[#292c35]" />
              <div className="h-6 w-16 rounded-full bg-[#292c35]" />
            </div>
          </div>

          {/* Exercise Information Box */}
          <div className="overflow-hidden rounded-xl border border-[#292c35]">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-[#292c35] px-5 py-4 last:border-b-0"
              >
                {/* Label */}
                <div className="h-3 w-20 rounded bg-[#292c35]" />

                {/* Value */}
                <div className="h-4 w-24 rounded bg-[#292c35]" />
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="space-y-4">
            {/* Instructions Heading */}
            <div className="h-5 w-32 rounded bg-[#292c35]" />

            {/* Instruction Items */}
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-start gap-3">
                  {/* Number */}
                  <div className="h-4 w-4 shrink-0 rounded bg-[#292c35]" />

                  {/* Instruction Text */}
                  <div className="h-4 w-full rounded bg-[#292c35]" />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {/* Add to Plan Button */}
            <div className="h-11 w-40 rounded-lg bg-[#292c35]" />

            {/* Save Button */}
            <div className="h-11 w-32 rounded-lg border border-[#292c35] bg-[#15171d]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailsSkeleton;