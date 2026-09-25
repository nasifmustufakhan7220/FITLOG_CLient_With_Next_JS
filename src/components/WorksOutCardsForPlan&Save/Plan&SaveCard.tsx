import { IExercisesType } from "@/types/workOut.type";

import Image from "next/image";

import {FaClock, FaFire, FaStar } from "react-icons/fa6";

import ViewDetailsBtn from "../ViewDetailsBtn/ViewDetailsBtn";
import RemoveBtn from "../RemoveExerciseFromPlanAndSave/RemoveBtn";
import MarkAsDoneBtn from "../AddToday&SaveButton/MarkAsDoneBtn";

interface IPlanProps {
  exercise: IExercisesType;
}

const PlanSaveCard = ({ exercise }: IPlanProps) => {
  return (
    <div className="card w-full gap-4 border border-[#272b33] bg-[#13161c] shadow-none">
      <div className="flex flex-col gap-5 p-4 sm:p-5 md:flex-row md:items-center md:gap-5 lg:p-5">
        {/* Workout Image */}
        <div className="w-full shrink-0 md:w-43.75 lg:w-44">
          <Image loading="eager"
            src={exercise.image}
            alt={exercise.name}
            width={200}
            height={300}
            className="h-52 w-full rounded-2xl object-cover sm:h-60 md:h-25 md:rounded-xl lg:h-25"
          />
        </div>

        {/* Workout Information */}
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          {/* Title */}
          <h2 className="truncate text-xl font-black uppercase tracking-wide text-white md:text-[19px]">
            {exercise.name}
          </h2>

          {/* Category */}
          <p className="mt-1 text-sm text-[#8f939d]">
            {exercise.equipment}
          </p>

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
        <div className="flex w-full flex-wrap items-center gap-3 md:w-auto md:shrink-0">
          {/* View Details */}
          <ViewDetailsBtn exercise={exercise} />

          {/* Mark as Done */}
         <MarkAsDoneBtn exercise={exercise} />

          {/* Close */}
          <RemoveBtn exercise={exercise}/>
        </div>
      </div>
    </div>
  );
};

export default PlanSaveCard;