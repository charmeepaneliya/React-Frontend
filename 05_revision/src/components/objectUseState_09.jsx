import { useState } from "react";

const ObjectUseState_09 = () =>{
    
const [studenet,setStudent] =useState({
    name:"",
    class:"",
    course:""
});

const handleChange = (field,e)=>{
    setStudent((prev)=>{
        return{
            ...prev,[field]:e.target.value,
        }
    })
};

return (
    <>
        <h1>Student details</h1>
        <input type="text" value={studenet.name} placeholder="Enter name" onChange={(e)=>handleChange("name",e)}/>
        <br/><br/>
        <input type="text" value={studenet.class} placeholder="Enter class" onChange={(e)=>handleChange("class",e)}/>
        <br/><br/>
        <input type="text" value={studenet.course} placeholder="Enter course" onChange={(e)=>handleChange("course",e)}/>
        <br/><br/>
        <h1>Name:{studenet.name}</h1>
        <h1>class:{studenet.class}</h1>
        <h1>course:{studenet.course}</h1>

    </>
)
}

export default ObjectUseState_09;
