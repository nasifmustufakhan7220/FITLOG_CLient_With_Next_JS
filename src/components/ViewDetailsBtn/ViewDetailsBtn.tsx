import { IExercisesType } from "@/types/workOut.type";
import Link from "next/link";

const ViewDetailsBtn = ({exercise}:{exercise: IExercisesType}) => {
  return (
    <div>
      <Link href={`/${exercise.id}`}>
      
        <button
        type="button"
        className=" btn h-11 min-h-0 flex-1 rounded-full border border-[#38404d] bg-transparent  px-5  text-sm font-normal text-white shadow-none hover:border-[#596271] hover:bg-[#1a1e25] sm:flex-none"
      >
        View Details
      </button>
      
      </Link>
    </div>
  );
};

export default ViewDetailsBtn;
