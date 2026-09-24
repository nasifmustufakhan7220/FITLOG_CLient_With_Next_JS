import { IExercisesType } from "@/types/workOut.type";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaStar, FaFire } from "react-icons/fa";

interface IExerciseProps {
  exercise: IExercisesType;
}

const ExerciseCard = ({ exercise }: IExerciseProps) => {
  return (
    <div className="card w-full overflow-hidden rounded-2xl border border-[#292c35] bg-[#15171d] text-white shadow-none transition-all duration-300 hover:border-[#3a3e48]">
      {/* Exercise Image */}
      <figure className="w-full h-75">
        <Image
          src={exercise.image}
          alt="Exercise image"
          width={400}
          height={250}
          className="w-full h-auto"
        />
      </figure>

      {/* Card Content */}
      <Link href={`/${exercise.id}`}>
        <div className="card-body gap-0 p-6">
          {/* Muscle Group Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c8ff00] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Exercise Name */}
          <h2 className="font-oswald text-[19px] font-bold uppercase leading-tight tracking-wide text-white">
            {exercise.name}
          </h2>

          {/* Equipment */}
          <p className="mt-2 text-[13px] font-normal text-[#9296a3]">
            {exercise.equipment}
          </p>

          {/* Divider */}
          <div className="my-4 h-px w-full bg-[#252830]" />

          {/* Exercise Stats */}
          <div className="flex items-center justify-between gap-2 text-[#a0a4b0]">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <FaRegClock className="text-[14px]" />
              <span className="text-[12px]">{exercise.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <FaFire className="text-[14px]" />
              <span className="text-[12px]">
                {exercise.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <FaStar className="text-[14px]" />
              <span className="text-[12px]">{exercise.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ExerciseCard;
