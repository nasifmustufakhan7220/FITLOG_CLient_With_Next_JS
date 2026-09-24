import { IExercisesType } from "@/types/workOut.type";
import Image from "next/image";
import { FaBookmark, FaCalendarPlus } from "react-icons/fa";


interface ExerciseDetailsCardProps {
  exercise: IExercisesType;
}

const ExerciseDetailsCard = ({ exercise }: ExerciseDetailsCardProps) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = exercise;

  const details = [
    { label: "EQUIPMENT", value: equipment },
    { label: "DIFFICULTY", value: difficulty },
    { label: "SETS", value: sets },
    { label: "REPS", value: reps },
    { label: "DURATION", value: `${duration} min` },
    { label: "CALORIES", value: `${caloriesBurned} kcal` },
    { label: "RATING", value: rating },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="grid grid-cols-1 gap-6 rounded-2xl bg-[#313338] p-4 shadow-xl sm:p-6 lg:grid-cols-2 lg:gap-8 lg:p-8 xl:grid-cols-[1fr_1.05fr]">
        {/* Exercise Image */}
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl sm:aspect-4/3 lg:aspect-auto lg:min-h-130">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Exercise Content */}
        <div className="flex flex-col justify-center gap-5 py-2 sm:gap-6 lg:py-0">
          {/* Title and Description */}
          <div className="space-y-3">
            <h1 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              {name}
            </h1>

            <p className="max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              {description}
            </p>

            {/* Muscle Group Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="badge border-none bg-[#b6ff00] px-3 py-3 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          {/* Exercise Information */}
          <div className="overflow-hidden rounded-xl border border-[#242730] bg-[#15171e]">
            {details.map((detail, index) => (
              <div
                key={detail.label}
                className={`flex items-center justify-between gap-4 px-4 py-3 sm:px-5 ${
                  index !== details.length - 1
                    ? "border-b border-[#242730]"
                    : ""
                }`}
              >
                <span className="text-[10px] font-bold tracking-wider text-gray-500 sm:text-xs">
                  {detail.label}
                </span>

                <span className="text-right text-xs font-medium text-gray-200 sm:text-sm">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
              INSTRUCTIONS
            </h2>

            <ol className="list-decimal space-y-2 pl-4 text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
              {instructions.map((instruction, index) => (
                <li key={index} className="pl-1">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
            <button className="btn h-11 min-h-11 rounded-lg border-none bg-[#b6ff00] px-4 text-xs font-bold text-black hover:bg-[#a4e600]">
              <FaCalendarPlus className="text-sm" />
              Add to today&apos;s plan
            </button>

            <button className="btn h-11 min-h-11 rounded-lg border border-[#363b48] bg-transparent px-4 text-xs font-medium text-gray-300 hover:border-[#b6ff00] hover:bg-[#1c2028]">
              <FaBookmark className="text-sm" />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExerciseDetailsCard;
