
const BASURL = import.meta.env.VITE_BASE_URL;
export const getAllStudents = async ()=>{
    
    const res = await fetch(`${BASURL}/getAllStudents`);

    const data = await res.json();

    

    if(!res.ok){
        throw new Error("failed to fetch student data");
        
    }

    console.log("data",data.students);
    

    return data.students;
}

export const addStudent = async (stdData) => {
    try {
        const res = await fetch(`${BASURL}/add`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(stdData),
        });
        if(!res.ok){
            throw new Error(data.message || "failed to add student data");
            
        }
        const data = await res.json();
        return data;
    } catch (error) {
        
        throw error;
    }
}