"use client";
import { exerciseContext } from "@/context/exerciseContext";
import { IExercisesType } from "@/types/workOut.type";
import React, { useContext } from "react";
import { FaXmark } from "react-icons/fa6";

const RemoveBtn = ({ exercise }: { exercise: IExercisesType }) => {
  const { addPlans, setaddPlans, saveLater, setSaveLater, toggle } =
    useContext(exerciseContext);

  const handelRemove = (id: number) => {
    if (toggle) {
      const filteredPlanExercise = addPlans.filter(
        (planId) => Number(planId.id) !== Number(id),
      );
      setaddPlans(filteredPlanExercise);
      return;
    }

    const filteredSaveExercise = saveLater.filter(
      (saveId) => Number(saveId.id) !== Number(id),
    );
    setSaveLater(filteredSaveExercise);
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
