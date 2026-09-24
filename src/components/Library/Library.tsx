import { oswald } from "@/app/font";
import { getExercises } from "@/lib/GetAlllWorksOut";
import { IExercisesType } from "@/types/workOut.type";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

const Library = async () => {
  const exercises: IExercisesType[] = await getExercises();
  return (
    <div id="library" className="mx-auto max-w-6xl px-9 mt-20">
      <div className="space-y-2">
        <h2 className={`${oswald.className} text-[30px] font-bold`}>
          THE LIBRARY
        </h2>
        <p className="text-[14px] text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="mx-auto mt-5 grid w-full grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default Library;
