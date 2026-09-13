import React,{useState} from "react";

const State_06 = () =>{
    const [name,setName ] = useState("");

    const [age,setAge] = useState("");

    const handleName = (e)=>{
        setName(e.target.value);
    }

    const handleAge = (e)=>{
        setAge(e.target.value);
    };

    return(
        <>
            <input type="text" value={name} placeholder="Enter name" onChange={handleName}/>
            <br/><br/>
            <input type="number" value={age} placeholder="Enter age" onChange={handleAge}/>
            <br/><br/>

            <h1>Name:{name}</h1>
            <h1>Age:{age}</h1>
        </>
    )
}

export default State_06;