import React, { Suspense } from "react";
import "./App.css";

// import SignUp from "./components/account/signUp";
import Practice from "./components/practice/practice";
import Hooks from "./components/practice/hooks";
import ExampleState from "./components/practice/exampleState";
import User from "./components/practice/redux/User";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
// import("./components/practice/advanceGuides").then((math) => {
//   console.log(math.Add(16, 26));
// });

// const SignUp = React.lazy(() => import("./components/account/signUp"));

function App() {
  return (
    <>
      <HeaderContainer />
      <HomeContainer />
      {/* <User data={{ name: "zain", age: "24" }} /> */}
      {/* <ExampleState> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
          <SignUp />
        </Suspense> */}
      {/* <Practice name="class-prop" /> */}
      {/* <Hooks hook="hook-prop" /> */}
      {/* </ExampleState> */}
    </>
  );
}

export default App;
