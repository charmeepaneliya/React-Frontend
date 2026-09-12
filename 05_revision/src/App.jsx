import { useState } from "react";
import JSX from "./components/JSX_01";
import Fragment01 from "./components/fragment_02";
import Functional_component_03 from "./components/functional_component_03";
import ClassComponent_04 from "./components/classComponent_04";

const App = () => {
  const [counter, setCounter] = useState(10);
  console.log("app");

  return(
    <>
      {/* <JSX/>  */}
      {/* <Fragment01/>  */}
      {/* < Functional_component_03/>  */}
      < ClassComponent_04/>
    </>
  )
}

export default App;