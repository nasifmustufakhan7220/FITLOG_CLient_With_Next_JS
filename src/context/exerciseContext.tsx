"use client"

import { IExercisesType } from "@/types/workOut.type";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IContextType{
    exercises: IExercisesType[];
    setExercises: Dispatch<SetStateAction<IExercisesType[]>>
}

export const exerciseContext = createContext<IContextType>({
    exercises:[],
    setExercises:()=>{}
});


const ExerciseContextProvider = ({children}:{children:React.ReactNode}) => {
    const [exercises, setExercises] = useState<IExercisesType[]>([]);
    const obj={
        exercises,
        setExercises
    }
    return (
       <exerciseContext.Provider value={obj}>
            {children}
       </exerciseContext.Provider>
    );
};

export default ExerciseContextProvider;