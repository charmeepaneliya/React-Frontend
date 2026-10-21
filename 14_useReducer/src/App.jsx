import React, { useReducer, useState } from 'react'

const initialArg = {
  counter:0,
}

const reducer = (state,action) =>{
  switch(action.type){
    case  "increment":{
      return{
        ...state,
        counter:state.counter + 1,
      };
    }

    case "decrement" : {
      return{
        ...state,
        counter : state.counter - 1,
      };
    }

    case "custom":{
      return{
        ...state,
        counter: state.counter + Number(action.payload),
      }
    }

    default:{
      console.log("invalid");
    }
  }
}

const App = () => {

    const [state,dispatch] = useReducer(reducer,initialArg);

    const [number,setNumber] = useState(0);

    console.log("number",number);


  return (
    <>
      <h1>Counter value {state.counter}</h1>

      <button onClick={()=>{
        dispatch({type:"increment"});
      }}>increment+1</button><br/><br/>
      <button onClick={()=>{
        dispatch({type:"decrement"});
      }}>decrement-1</button><br/><br/>

      <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>

      <br/>
      <br/>

      <button onClick={()=>dispatch({type:"custom", payload:number})}> {number} add{" "}</button>


    </>
  )
}

export default App
