import { useState } from "react";
import State from "./components/state_01.jsx";
import PrevState from "./components/prev_state_03.jsx";
import MultipleState from "./components/multiple_state_04.jsx";
import State02 from "./components/state_02.jsx";
import NameExample from './components/nameExample.jsx'
import ObjectUseState_06 from "./components/objectUseState_06.jsx";
import State_05 from "./components/state_05.jsx";
import LifeCycle07 from "./components/lifeCycle07.jsx"

import UseEffect_fetch_09 from "./components/useEffect_fetch_09.jsx";
import UseEffect_fetch_10 from "./components/useEffect_fetch_10.jsx";
 
const App = () => {
  const [counter, setCounter] = useState(10);
  console.log("app");

  return (
    <>
      {/* <State/> */}
      {/* <PrevState /> */}
      {/* <MultipleState/> */}
      {/* <State02/> */}
      {/* <NameExample/> */}
      {/* <ObjectUseState_06/> */}
      {/* < State_05/> */}
      {/* <LifeCycle07/> */}
      {/* <UseEffect_fetch_09/> */}
      < UseEffect_fetch_10/>
    </>
  );
};
export default App;
