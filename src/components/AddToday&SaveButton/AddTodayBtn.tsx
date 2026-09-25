"use client";
import { exerciseContext } from "@/context/exerciseContext";
import { IExercisesType } from "@/types/workOut.type";
import { useContext } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { Slide, toast } from "react-toastify";

const AddTodayPlanBtn = ({ exercise }: { exercise: IExercisesType }) => {
  const { addPlans, setaddPlans,isDisabled} = useContext(exerciseContext);

  const handelAddToday = (id:number) => {

    const exited = addPlans.find(planId=> Number(planId.id) === Number(id));

    if(exited){
      toast.error(`${exercise.name} is already added to today's plan!!!`,{
        position: "top-right",
        autoClose: 2000,
        transition: Slide,
        className: "!bg-[#13151c]"
      });
      return;
    }

    setaddPlans([...addPlans, exercise]);
    toast.success(`${exercise.name} added to today's plan successfully!`, {
      position: "top-right",
      autoClose: 3000,
      transition: Slide,
      className: "!bg-[#13151c]",
    });
  };
  return (
    <div>
      <button
        onClick={() => handelAddToday(exercise.id)}
        className="btn h-11 min-h-11 rounded-lg border-none bg-[#b6ff00] px-4 text-xs font-bold text-black hover:bg-[#a4e600] disabled:cursor-not-allowed disabled:bg-[#242b1b] disabled:text-[#7e8870] disabled:opacity-100 sm:flex-none"
        disabled={isDisabled}
      >
        <FaCalendarPlus className="text-sm" />
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default AddTodayPlanBtn;
