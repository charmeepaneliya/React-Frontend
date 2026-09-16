import { useRef,useState } from "react";

const UseRef_02 = () =>{
    const [name,setName] = useState("");
    const inputName = useRef();

    const handleClick = () =>{
        inputName.current.focus();
        setName(inputName.current.value);
    };

    return(
        <>
            <input type="text" ref={inputName} placeholder = "Enter name"/>
            <button onClick={handleClick}>Submit</button>
            <br/><br/>
            <h1>Name:{name}</h1>
        </>
    )
}

export default UseRef_02;