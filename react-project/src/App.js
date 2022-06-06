import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignUp from "./components/account/signUp";
import Login from "./components/account/login";
import Profile from "./components/account/profile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profle" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
