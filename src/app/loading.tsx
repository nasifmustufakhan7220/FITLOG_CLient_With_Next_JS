
const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="flex flex-col items-center gap-5 text-center">

        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#292c35] border-t-[#C2F800]" />

        {/* Loading Text */}
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wide text-white">
            LOADING FITLOG
          </h2>

          <p className="mt-2 text-sm text-[#9CA3AF]">
            Preparing your workout experience...
          </p>
        </div>

      </div>
    </main>
  );
};

export default Loading;