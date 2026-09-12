//Fragment groups multiple elements without adding an extra HTML tag.
//Without Fragment, an extra <div> is added to the HTML/DOM.

import React from "react";

const Fragment01 = () =>{
    return (
        <>
            <h1>Hello</h1>
            <p>React</p>
            <p>Fragment concept</p>
        </>
    )
}

export default Fragment01;