import React, { useState, useEffect, useContext, useRef } from "react";
import exampleContext from "./exampleContext";

const Hooks = (props) => {
  console.log(props);
  const a = useContext(exampleContext);
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mount");
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => console.log("unmounting...");
  }, []);

  //   useEffect(() => {
  //     console.log("update mount");
  //   }, [count]);

  const handleInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.style.color = "red";
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me </button>
      <h1>I've rendered {count} times!</h1>
      <hr />
      <h1>Using useContext Hook</h1>
      <h5>
        {a.name} {a.age}
      </h5>
      <hr />
      <h1>UseRef Hook</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Click</button>
    </div>
  );
};

export default Hooks;
