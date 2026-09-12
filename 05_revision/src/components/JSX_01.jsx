import React from "react";

const JSX =()=>{
    const JSX_01 = React.createElement(
        "charmi",null,"without JSX"
    );

    const element2 = <p>Hello , This is with JSX</p>

    return (
    <>
        <h1>without JSX:{JSX_01}</h1>
        <h1>with JSX:{element2}</h1>
    </>
)
}


export default JSX;