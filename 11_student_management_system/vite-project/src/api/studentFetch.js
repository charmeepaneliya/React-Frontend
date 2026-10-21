
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