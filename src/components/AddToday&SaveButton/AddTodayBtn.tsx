"use client";
import { exerciseContext } from "@/context/exerciseContext";
import { IExercisesType } from "@/types/workOut.type";
import { useContext } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { Slide, toast } from "react-toastify";

const AddTodayPlanBtn = ({ exercise }: { exercise: IExercisesType }) => {
  const { addPlans, setaddPlans } = useContext(exerciseContext);
  const handelAddToday = () => {
    setaddPlans([...addPlans, exercise]);
    toast.success("Item added to cart successfully!", {
      position: "top-right",
      autoClose: 3000,
      transition: Slide,
      className: "!bg-[#13151c]",
    });
  };
  return (
    <div>
      <button
        onClick={() => handelAddToday()}
        className="btn h-11 min-h-11 rounded-lg border-none bg-[#b6ff00] px-4 text-xs font-bold text-black hover:bg-[#a4e600]"
      >
        <FaCalendarPlus className="text-sm" />
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default AddTodayPlanBtn;
