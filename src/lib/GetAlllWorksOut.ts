export const getExercises = async()=>{
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {cache: "no-store",});
        if(!res.ok) throw new Error("Failed to fetch exercises")
        return res.json();
    
}

export const getExerciseDetails = async(id:number)=>{
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {next:{revalidate: 60}});
        if(!res.ok) throw new Error("Failed to fetch exercise details");
        return res.json();
}