// React se useState ko import kiya
import {useState} from 'react';

function State(){
     // count = current value
    // setCount = count ki value change karne ke liye
    // 0 = starting value
    const [count,setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    function decrease(){
        setCount(count - 1);
    }
    return(
        <>
        <h1>Count:{count}</h1>

        {/*  Button click hone par count + 1 hoga. */}
        {/* <button onClick={()=>setCount(count +1)}>increase</button> */}



        {/* Button click hone par handleClick function chalega.
            IMPORTANT:
            handleClick = function ko pass karna
            handleClick() = function ko turant call karna */}
        <button onClick={handleClick}>Increase</button><br></br><br/><hr></hr>



        
        {/*  Pehle arrow function chalega,
            phir handleClick() call hoga. */}
        {/* <button onClick={(e)=>handleClick(e)}>Increase</button> */}


        

        {/* This is not allowed */}

        {/* <button onClick={handleClick()}>Increase</button> */}

        <button onClick={decrease}>decrease</button>
        {/* <button onClick={()=>setCount(count - 1)}>decrease</button> */}
        

        </>

     
    )
}

export default State;