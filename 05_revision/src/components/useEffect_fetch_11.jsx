import { useEffect,useState } from "react";

const UseEffect_fetch_11 = ()=>{
    const [albums,setAlbums] = useState([]);
    const [fetchData,setFetchData] = useState(false);

    useEffect(()=>{
        const fetchAlbums = async () =>{
            const res = await fetch("https://jsonplaceholder.typicode.com/albums");

            const data = await res.json();

            console.log("data",data);
        };

        if(fetchData === true){
            fetchAlbums()
        }
    },[fetchData]);


    return(
        <>
            <h1>albums</h1>

            <button onClick={()=>setFetchData(true)}>fetch albums data</button>
        </>
    )
}

export default UseEffect_fetch_11;