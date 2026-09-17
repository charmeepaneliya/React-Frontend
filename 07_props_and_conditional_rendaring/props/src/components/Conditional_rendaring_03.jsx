import React,{useState} from 'react';

const Conditional_rendaring_03 = () =>{
    const [color,setColor] = useState("purple");

    let content;

    if(color === "blue"){
        content = <h1 style={{color:"blue"}}>you select blue color</h1>
    }else if(color === "pink"){
        content = <h1 style={{color:"pink"}}>you select pink color</h1>
    }else if(color === "green"){
        content = <h1 style={{color:"green"}}>you select green color</h1>
    }else if(color === "purple"){
        content = <h1 style={{color:"purple"}}>you select purple color</h1>
    }else if(color === "yellow"){
        content = <h1 style={{color:"yellow"}}>you select yellow color</h1>
    }else{
        content = <h1>wrong color selected</h1>
    }

    return (
        <>
            {content}
        </>
    )
}

export default Conditional_rendaring_03;