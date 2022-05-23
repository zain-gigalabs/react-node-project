import SignUp from "./components/account/signUp";
import Practice from "./components/practice/practice";
import Hooks from "./components/practice/hooks";
import ExampleState from "./components/practice/exampleState";
function App() {
  return (
    <>
      <ExampleState>
        {/* <SignUp/> */}
        {/* <Practice name="class-prop" /> */}
        <Hooks hook="hook-prop" />
      </ExampleState>
    </>
  );
}

export default App;
