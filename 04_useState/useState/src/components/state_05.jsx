import React, { useState } from "react";

const State_05 =()=>{
    const[email,setEmail] =useState("");
    const[password,setPassword] =useState("");

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    return(
        <>
            <input type="email" value={email} placeholder="Enter Email" onChange={handleEmail}/>
            <br/><br/>
            <input type="password" value={password} placeholder="Enter Password" onChange={handlePassword}/>
            <br/><br/>
            <h1>Email:{email}</h1>
            <h1>Password:{password}</h1>
        </>
    )
}

export default State_05;