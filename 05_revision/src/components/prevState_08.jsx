import React, { useState } from "react";

const PrevState_08 = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems((prev) => [...prev,item]);

    setItem("");
  };

  return (
    <>
      <h1>Item List</h1>

     <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} placeholder="Enter Item"/>
        <br/><br/>

        <button type="submit">Add item</button>
     </form>

     <ul>
        {items.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
     </ul>
    </>
  );
};

export default PrevState_08;
