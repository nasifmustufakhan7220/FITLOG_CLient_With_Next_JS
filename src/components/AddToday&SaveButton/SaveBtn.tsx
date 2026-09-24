"use client"
import { IExercisesType } from '@/types/workOut.type';

import { FaBookmark } from 'react-icons/fa';

const SaveBtn = ({exercise}:{exercise:IExercisesType}) => {

    const handelSave = ()=>{
        console.log(exercise.id);
    }
    return (
        <div>
            <button className="btn h-11 min-h-11 rounded-lg border border-[#363b48] bg-transparent px-4 text-xs font-medium text-gray-300 hover:border-[#b6ff00] hover:bg-[#1c2028]">
              <FaBookmark className="text-sm" />
              Save for later
            </button>
        </div>
    );
};

export default SaveBtn;