import ExerciseDetailsCard from '@/components/ExerciseCard/ExerciseDetailsCard';
import ExerciseDetailsSkeleton from '@/components/LibrarySkeleton/ExerciseDetailsSkeleton';
import { getExerciseDetails } from '@/lib/GetAlllWorksOut';
import { IExercisesType } from '@/types/workOut.type';
import React, { Suspense } from 'react';

interface IparamsProps{
    params: Promise<{exerciseId:string}>
}
const ExerciseDetailsPage = async({params}:IparamsProps) => {
    const {exerciseId} = await params;
    const exercise:IExercisesType = await getExerciseDetails(Number(exerciseId));

    return (
        <div className="min-h-screen bg-[#0d0f13]">
            <Suspense fallback={<ExerciseDetailsSkeleton/>}>
                <ExerciseDetailsCard exercise={exercise}/>
            </Suspense>
        </div>
    );
};

export default ExerciseDetailsPage;