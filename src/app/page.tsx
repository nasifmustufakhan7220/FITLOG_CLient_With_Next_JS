import Banner from "@/components/Banner/Banner";
import Library from "@/components/Library/Library";
import LibrarySkeleton from "@/components/LibrarySkeleton/LibrarySkeleton";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div>
        <Banner/>
        <Suspense fallback={<LibrarySkeleton/>}>
          <Library/>
        </Suspense>
    </div>
  );
};

export default HomePage;