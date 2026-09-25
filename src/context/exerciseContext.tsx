"use client"

import { IExercisesType } from "@/types/workOut.type";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IContextType{
    addPlans: IExercisesType[];
    setaddPlans: Dispatch<SetStateAction<IExercisesType[]>>
    saveLater: IExercisesType[];
    setSaveLater: Dispatch<SetStateAction<IExercisesType[]>>
}

export const exerciseContext = createContext<IContextType>({
    addPlans:[],
    setaddPlans:()=>{},
    saveLater: [],
    setSaveLater: ()=>{}

});


const ExerciseContextProvider = ({children}:{children:React.ReactNode}) => {
    const [addPlans, setaddPlans] = useState<IExercisesType[]>([]);
    const [saveLater, setSaveLater] = useState<IExercisesType[]>([]);
    const obj={
        addPlans,
        setaddPlans,
        saveLater,
        setSaveLater
    }
    return (
       <exerciseContext.Provider value={obj}>
            {children}
       </exerciseContext.Provider>
    );
};

export default ExerciseContextProvider;