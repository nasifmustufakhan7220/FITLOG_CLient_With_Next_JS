"use client"
import { exerciseContext } from "@/context/exerciseContext";
import { IExercisesType } from "@/types/workOut.type";
import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const MarkAsDoneBtn = ({ exercise }: { exercise: IExercisesType }) => {
    const [addMark,setAddMark] = useState<boolean>(false);
    const [saveMark,setSaveMark] = useState<boolean>(false);
    const {addPlans, saveLater, toggle} = useContext(exerciseContext)

    const handelMarkAsDone = (exercise:IExercisesType)=>{

        if(toggle){
            console.log(toggle);
            const exits = addPlans.find(planId=> planId.id === exercise.id);
            if(exits){
                setAddMark(true);
                toast.success(`Today's ${exercise.name} plan is done`,{
                    className: "!bg-[#13151c]"
                });
            }
            return;
        }
        const exits = saveLater.find(saveId=> saveId.id === exercise.id);
        if(exits){
            setSaveMark(true);
            toast.success(`Save for later ${exercise.name} plan is done`, {
                className: "!bg-[#13151c]"
            });
        }

        
    }
  return (
    <div>
      <button onClick={()=>handelMarkAsDone(exercise)}
        type="button"
        disabled={toggle ? addMark : saveMark}
        className="btn h-11 min-h-0 flex-1 cursor-pointer rounded-full border-0 bg-[#c6ff00] px-5 text-sm font-semibold text-black shadow-none transition-all duration-200 hover:bg-[#b8ef00] disabled:cursor-not-allowed disabled:bg-[#242b1b] disabled:text-[#7e8870] disabled:opacity-100 sm:flex-none">
        <FaCheck className="text-sm" />
        Mark as Done
      </button>
    </div>
  );
};

export default MarkAsDoneBtn;
