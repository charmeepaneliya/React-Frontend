import { useEffect,useState } from "react";

const UseEffect_fetch = ()=>{
    const [user,setUser]=useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            console.log(data);
        };
        fetchData();
    },[]);

    return(
        <>
            <h1>Users</h1>

        </>
    )
}

export default UseEffect_fetch;