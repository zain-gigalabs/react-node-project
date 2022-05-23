import { useState } from "react";
import exampleContext from "./exampleContext";

const ExampleState = (props) => {
  const s1 = {
    name: "zain",
    age: 24,
  };

  const [state, setState] = useState(s1);
  return (
    <exampleContext.Provider value={s1}>
      {props.children}
    </exampleContext.Provider>
  );
};

export default ExampleState;
