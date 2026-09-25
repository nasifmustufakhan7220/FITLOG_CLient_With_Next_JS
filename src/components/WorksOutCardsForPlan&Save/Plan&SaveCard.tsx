import { IExercisesType } from "@/types/workOut.type";
import Image from "next/image";
import { FaCheck, FaClock, FaFire, FaStar, FaXmark } from "react-icons/fa6";
import ViewDetailsBtn from "../ViewDetailsBtn/ViewDetailsBtn";

interface IPlanProps {
  exercise: IExercisesType;
}

const PlanSaveCard = ({ exercise }: IPlanProps) => {
  return (
    <div className="card w-full border border-[#272b33] bg-[#13161c] shadow-none">
      <div
        className="
          flex
          flex-col
          gap-5
          p-4
          
          sm:p-5
          
          md:flex-row
          md:items-center
          md:gap-5
          
          lg:p-5
        "
      >
        {/* Image */}
        <div className="shrink-0">
          <Image src={exercise.image} alt={exercise.name} width={200} height={300} className="w-full h-auto rounded-2xl object-cover sm:h-52 md:h-25 md:w-43.75 md:rounded-xl lg:h-25 lg:w-44"
          />
        </div>

        {/* Workout Information */}
        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            justify-center
          "
        >
          {/* Title */}
          <h2
            className="
              truncate
              text-xl
              font-black
              uppercase
              tracking-wide
              text-white
              
              md:text-[19px]
            "
          >
            {exercise.name}
          </h2>

          {/* Category */}
          <p className="mt-1 text-sm text-[#8f939d]">{exercise.equipment}</p>

          {/* Stats */}
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            {/* Duration */}
            <div className="flex items-center gap-2 text-sm text-[#b8bbc3]">
              <FaClock className="text-base text-[#c6ff00]" />
              <span>{exercise.duration}</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2 text-sm text-[#b8bbc3]">
              <FaFire className="text-base text-[#c6ff00]" />
              <span>{exercise.caloriesBurned}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 text-sm text-[#b8bbc3]">
              <FaStar className="text-base text-[#c6ff00]" />
              <span>{exercise.rating}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className=" flex w-full items-center gap-3 sm:justify-end md:w-auto md:shrink-0">
          {/* View Details */}
          <ViewDetailsBtn exercise={exercise} />

          {/* Mark as Done */}
          <button
            type="button"
            className=" btn h-11 min-h-0 flex-1 rounded-full border-0 bg-[#c6ff00] px-5 text-sm font-semibold text-black shadow-none hover:bg-[#b8ef00] sm:flex-none
            "
          >
            <FaCheck className="text-sm" />
            Mark as Done
          </button>

          {/* Close */}
          <button
            type="button"
            aria-label="Remove workout"
            className="btn btn-circle btn-ghost hidden h-10 min-h-0 w-10 text-[#737985] hover:bg-[#1d2027] hover:text-white sm:flex
            "
          >
            <FaXmark className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanSaveCard;
