"use client"

import { IExercisesType } from "@/types/workOut.type";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

interface IContextType{
    addPlans: IExercisesType[];
    setaddPlans: Dispatch<SetStateAction<IExercisesType[]>>

    saveLater: IExercisesType[];
    setSaveLater: Dispatch<SetStateAction<IExercisesType[]>>;

    toggle: boolean;
    setToggle:Dispatch<SetStateAction<boolean>>

    isLoading: boolean;
    setIsLoading:Dispatch<SetStateAction<boolean>>

    isDisabled:boolean

}

export const exerciseContext = createContext<IContextType>({
    addPlans:[],
    setaddPlans:()=>{},

    saveLater: [],
    setSaveLater: ()=>{},

    toggle: true,
    setToggle:()=>{},

    isLoading: true,
    setIsLoading:()=>{},

    isDisabled:true
});


const ExerciseContextProvider = ({children}:{children:React.ReactNode}) => {
    const [addPlans, setaddPlans] = useState<IExercisesType[]>([]);
    const [saveLater, setSaveLater] = useState<IExercisesType[]>([]);
    const [toggle, setToggle] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(()=>{
        const getPlanExercise = localStorage.getItem("addPlans");
        const getSaveExercise = localStorage.getItem("saveLater");
        if(getPlanExercise){
            const parsedPlan = JSON.parse(getPlanExercise);
            setaddPlans(parsedPlan);
        }

        if(getSaveExercise){
            const parsedSave = JSON.parse(getSaveExercise);
            setSaveLater(parsedSave);
        }

        setIsLoading(false);
    }, []);

    useEffect(()=>{
        if(isLoading === false){
             localStorage.setItem("addPlans",JSON.stringify(addPlans));
        }


    },[addPlans, isLoading]);



    useEffect(()=>{
        const saveExerciseStringify = JSON.stringify(saveLater);

        if(isLoading === false){
            localStorage.setItem("saveLater", saveExerciseStringify);
        }

    },[saveLater, isLoading]);

    const isDisabled = addPlans.length >= 5;

    const obj={
        addPlans,
        setaddPlans,
        saveLater,
        setSaveLater,
        toggle,
        setToggle,
        isLoading,
        setIsLoading,
        isDisabled,
    }
    return (
       <exerciseContext.Provider value={obj}>
            {children}
       </exerciseContext.Provider>
    );
};

export default ExerciseContextProvider;