import {useRef} from "react"

const Uncontrolled_components_07 =()=>{
    const inputRef = useRef("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log("input",inputRef.current.value);
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} placeholder="Enter name"/>
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Uncontrolled_components_07;