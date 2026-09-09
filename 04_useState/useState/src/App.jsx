import { useState } from "react";
import State from "./components/state_01.jsx";
import PrevState from "./components/prev_state_03.jsx";
import MultipleState from "./components/multiple_state_04.jsx";
import State02 from "./components/state_02.jsx";
import NameExample from './components/nameExample.jsx'
 
const App = () => {
  const [counter, setCounter] = useState(10);
  console.log("app");

  return (
    <>
      {/* <State/> */}
      {/* <PrevState /> */}
      {/* <MultipleState/> */}
      {/* <State02/> */}
      <NameExample/>
    </>
  );
};
export default App;
