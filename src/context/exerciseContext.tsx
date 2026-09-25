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
    isDisabled: boolean;
    setIsDisabled:Dispatch<SetStateAction<boolean>>

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
    isDisabled: true,
    setIsDisabled:()=>{},
});


const ExerciseContextProvider = ({children}:{children:React.ReactNode}) => {
    const [addPlans, setaddPlans] = useState<IExercisesType[]>([]);
    const [saveLater, setSaveLater] = useState<IExercisesType[]>([]);
    const [toggle, setToggle] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

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
        const planExerciseStringify = JSON.stringify(addPlans);

        if(isLoading === false){
             localStorage.setItem("addPlans",planExerciseStringify);
        }

    },[addPlans, isLoading]);

    useEffect(()=>{

        const saveExerciseStringify = JSON.stringify(saveLater);

        if(isLoading === false){
            localStorage.setItem("saveLater", saveExerciseStringify);
        }

    },[saveLater, isLoading]);

    useEffect(()=>{
        const getAddPlans = localStorage.getItem("addPlans");
        if(getAddPlans){
            const parsed = JSON.parse(getAddPlans);
            const todayPlanCount = parsed.length;
            
            if(todayPlanCount === 5){
                setIsDisabled(true);
                return;
            }else if(todayPlanCount < 5){
                setIsDisabled(false);
                return;
            }
        }
    },[addPlans]);

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
        setIsDisabled
    }
    return (
       <exerciseContext.Provider value={obj}>
            {children}
       </exerciseContext.Provider>
    );
};

export default ExerciseContextProvider;