import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home,Array, Timer ,Params} from "./components/NewInput";
import HomeButton from "./components/useHistory";

export default function BasicExample() {

  return (

    <Router>

      <Link style={{ padding: "30px" }} to="/">Home</Link>

      <Link style={{ padding: "30px" }} to="/array">Array</Link>

      <Link style={{ padding: "30px" }} to="/timer">Timer</Link>

      <Link style={{ padding: "30px" }} to="/page/Ejemplo UseParams">Params</Link>


      <hr />

      <HomeButton />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/array">
          <Array />
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
        <Route path="/page/:id">
          <Params />
        </Route>
      </Switch>

    </Router>

    
  );
}