export const getExercises = async()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {cache: "no-store",});
        if(!res.ok) throw new Error("Failed to fetch exercises")
        return res.json();
    
}

export const getExerciseDetails = async(id:number)=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {next:{revalidate: 60}});
        if(!res.ok) throw new Error("Failed to fetch exercise details");
        return res.json();
}