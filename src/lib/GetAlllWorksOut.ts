export const getExercises = async()=>{
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {cache: "no-store",});
        if(!res.ok) throw new Error("Failed to fetch exercises")
        return res.json();
    
}