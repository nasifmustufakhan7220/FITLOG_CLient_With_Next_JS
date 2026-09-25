"use client"
import { exerciseContext } from '@/context/exerciseContext';
import { IExercisesType } from '@/types/workOut.type';
import { useContext } from 'react';

import { FaBookmark } from 'react-icons/fa';
import { Slide, toast } from 'react-toastify';

const SaveBtn = ({exercise}:{exercise:IExercisesType}) => {
    const {saveLater, setSaveLater} = useContext(exerciseContext);

    const handelSave = (id:number)=>{

        const exited = saveLater.find(saveId=> Number(saveId.id) === Number(id));
        if(exited){
            toast.error(`${exercise.name} is already added to the save for later`,{
                position: "top-right",
                autoClose: 2000,
                transition: Slide,
                className: "!bg-[#13151c]"
            });
            return;
        }
        setSaveLater([...saveLater, exercise]);
        toast.success(`${exercise.name} added to save for later successfully!`, {
            position: "top-right",
            autoClose: 2000,
            transition: Slide,
            className: "!bg-[#13151c]"
        })
    }
    return (
        <div>
            <button onClick={()=> handelSave(exercise.id)} className="btn h-11 min-h-11 rounded-lg border border-[#363b48] bg-transparent px-4 text-xs font-medium text-gray-300 hover:border-[#b6ff00] hover:bg-[#1c2028]">
              <FaBookmark className="text-sm" />
              Save for later
            </button>
        </div>
    );
};

export default SaveBtn;