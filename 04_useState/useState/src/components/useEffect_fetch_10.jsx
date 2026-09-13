import { useEffect,useState } from "react";
import axios from "axios";

const UseEffect_fetch_10 = ()=>{
    const [user,setUser]=useState([]);
    const [fetchData,setFetchData] = useState(false);


    useEffect(()=>{
        const fetchUsers = async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUser(data);
        };
         if(fetchData === true){
            fetchUsers()
        }
    },[fetchData]);

    return(
        <>
            <h1>Users</h1>
            <button onClick={()=>setFetchData(true)}>fetch user data</button>

            <ul>
                {user.map((u)=>{
                    return(
                        <li key={u.id}>
                            {u.name} - {u.email}
                        </li>
                    )
                })}
            </ul>

        </>
    )
}

export default UseEffect_fetch_10;