import {useEffect,useState} from "react";

const LifeCycle_10 = () =>{
    const [number,setNumber] = useState(1);
    const [item,setItem] = useState("");

    const handleNumber = () =>{
        setNumber((num)=> num +1);
    };

    //mounting

    useEffect(()=>{
        console.log("Component Mounted");
    },[]);

    //updating

    useEffect(()=>{
        console.log("Number Updated");
    },[number]);

    //unmounting

    useEffect(()=>{
        console.log("Effect started");
    });


    return(
        <>
            <h1>Number:{number}</h1>
            <button onClick={handleNumber}>add number</button>
            <br/><br/>
            <input type="text" value={item} onChange={(e) =>setItem(e.target.value)} placeholder="Enter item name"/>

            <br/><br/>

            <h1>item:{item}</h1>
        </>
    )
}

export default LifeCycle_10;