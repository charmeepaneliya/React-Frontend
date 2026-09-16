import {useRef} from "react";

const UseRef_01 = () => {
    const useRefInput = useRef(""); 

    
const handleClick = () =>{
    useRefInput.current.focus();
};

return(
    <>
        <input ref={useRefInput} placeholder="Enter your name"/>
        <button onClick={handleClick}>Input</button>
    </>
)
}

export default UseRef_01;



