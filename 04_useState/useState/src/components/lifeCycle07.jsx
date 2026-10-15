import { useEffect, useState } from "react";

const LifeCycle07 = () => {
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    setCount(count + 1);
  };

  //mounting
  //  Empty Dependency
  // Runs only once when component is loaded
  useEffect(() => {
    console.log("Component Mounted");
  }, []); //[]: meanse -> only first time run



  //updating
  //  Dependency
  // Runs whenever name changes
  useEffect(() => {
    console.log("count Updated:");
  }, [count]); //[count]: means-> whenever count value changes, count updated will print in the console.


  //unmounting
  useEffect(() => {
    return () => {
      console.log("Component Removed");
    };
  }, []); //return function = cleanup function

  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={handleCount}>increase</button>
    </>
  );
};
export default LifeCycle07;
