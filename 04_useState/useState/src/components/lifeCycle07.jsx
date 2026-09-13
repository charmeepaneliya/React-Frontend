import { useEffect,useState } from "react";

const LifeCycle01 =() =>{
    const [count,setCount] = useState(0);

    const handleCount = (e)=>{
        setCount(count + 1);
    };

    //mounting
     //  Empty Dependency
  // Runs only once when component is loaded
    useEffect(()=>{
        console.log("Component Mounted");
    },[]);

    //updating
      //  Dependency
  // Runs whenever name changes
   useEffect(()=>{
        
            console.log("count Updated:");
        
    },[count]);

    useEffect(()=>{
        return()=>{
            console.log("Component Removed");
        }
    },[]);

    return(
        <>  
            <h1>Count:{count}</h1>
            <button onClick={handleCount}>increase</button>
        </>
    )
}
export default LifeCycle01;