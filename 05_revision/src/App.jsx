import { useState } from "react";
import JSX from "./components/JSX_01";
import Fragment01 from "./components/fragment_02";
import Functional_component_03 from "./components/functional_component_03";
import ClassComponent_04 from "./components/classComponent_04";
import State_01 from "./components/state_05";
import State_06 from "./components/state_06";
import PrevState_07 from "./components/prevState_07";
import PrevState_08 from "./components/prevState_08";
import ObjectUseState_09 from "./components/objectUseState_09";
import LifeCycle_10 from "./components/lifeCycle_10";
import UseEffect_fetch_11 from "./components/useEffect_fetch_11";

const App = () => {
  const [counter, setCounter] = useState(10);
  console.log("app");

  return(
    <>
      {/* <JSX/>  */}
      {/* <Fragment01/>  */}
      {/* < Functional_component_03/>  */}
      {/* < ClassComponent_04/> */}
      {/* <State_01/> */}
      {/* <State_06/> */}
      {/* <PrevState_07/> */}
      {/* <PrevState_08/> */}
      {/* <ObjectUseState_09/> */}
      {/* <LifeCycle_10/> */}
      <UseEffect_fetch_11/>
    </>
  )
}

export default App;