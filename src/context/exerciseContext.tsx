"use client"

import { IExercisesType } from "@/types/workOut.type";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IContextType{
    addPlans: IExercisesType[];
    setaddPlans: Dispatch<SetStateAction<IExercisesType[]>>
    saveLater: IExercisesType[];
    setSaveLater: Dispatch<SetStateAction<IExercisesType[]>>;
    toggle: boolean;
    setToggle:Dispatch<SetStateAction<boolean>>

}

export const exerciseContext = createContext<IContextType>({
    addPlans:[],
    setaddPlans:()=>{},
    saveLater: [],
    setSaveLater: ()=>{},
    toggle: true,
    setToggle:()=>{},
});


const ExerciseContextProvider = ({children}:{children:React.ReactNode}) => {
    const [addPlans, setaddPlans] = useState<IExercisesType[]>([]);
    const [saveLater, setSaveLater] = useState<IExercisesType[]>([]);
    const [toggle, setToggle] = useState<boolean>(true);
    const obj={
        addPlans,
        setaddPlans,
        saveLater,
        setSaveLater,
        toggle,
        setToggle

    }
    return (
       <exerciseContext.Provider value={obj}>
            {children}
       </exerciseContext.Provider>
    );
};

export default ExerciseContextProvider;