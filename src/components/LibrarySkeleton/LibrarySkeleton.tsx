
const LibrarySkeleton = () => {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-9">
      {/* Library Header Skeleton */}
      <div className="animate-pulse space-y-3">
        <div className="h-9 w-48 rounded-md bg-[#292c35]" />

        <div className="h-4 w-72 max-w-full rounded-md bg-[#292c35]" />
      </div>

      {/* Cards Skeleton */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse overflow-hidden rounded-2xl border border-[#292c35] bg-[#15171d]"
          >
            {/* Image Skeleton */}
            <div className="h-48 w-full bg-[#292c35]" />

            {/* Content Skeleton */}
            <div className="space-y-4 p-6">
              {/* Tags */}
              <div className="flex gap-2">
                <div className="h-6 w-20 rounded-full bg-[#30343D]" />
                <div className="h-6 w-16 rounded-full bg-[#30343D]" />
              </div>

              {/* Title */}
              <div className="h-5 w-3/4 rounded-md bg-[#292c35]" />

              {/* Equipment */}
              <div className="h-4 w-1/2 rounded-md bg-[#292c35]" />

              {/* Divider */}
              <div className="h-px w-full bg-[#252830]" />

              {/* Stats */}
              <div className="flex justify-between gap-2">
                <div className="h-4 w-14 rounded-md bg-[#292c35]" />
                <div className="h-4 w-14 rounded-md bg-[#292c35]" />
                <div className="h-4 w-10 rounded-md bg-[#292c35]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LibrarySkeleton;