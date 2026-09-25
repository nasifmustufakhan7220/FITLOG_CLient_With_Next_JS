"use client";
import { exerciseContext } from "@/context/exerciseContext";
import { IExercisesType } from "@/types/workOut.type";
import { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";

const RemoveBtn = ({ exercise }: { exercise: IExercisesType }) => {
  const { addPlans, setaddPlans, saveLater, setSaveLater, toggle } =
    useContext(exerciseContext);

  const handelRemove = (id: number) => {
    if (toggle) {
      const filteredPlanExercise = addPlans.filter(
        (planId) => Number(planId.id) !== Number(id),
      );
      setaddPlans(filteredPlanExercise);
      toast.success(`${exercise.name} is remove succesfully from the Today's plan!`,{
        className: "!bg-[#13151c]"
      });
      return;
    }

    const filteredSaveExercise = saveLater.filter(
      (saveId) => Number(saveId.id) !== Number(id),
    );
    setSaveLater(filteredSaveExercise);
    toast.success(`${exercise.name} is remove succesfully from the Save for later!`, {
      className: "!bg-[#13151c]"
    });
  };

  return (
    <div>
      <button
        onClick={() => handelRemove(exercise.id)}
        type="button"
        aria-label="Remove workout"
        className="btn btn-circle btn-ghost hidden h-10 min-h-0 w-10 text-[#737985] hover:bg-[#1d2027] hover:text-white sm:flex"
      >
        <FaXmark className="text-lg" />
      </button>
    </div>
  );
};

export default RemoveBtn;
