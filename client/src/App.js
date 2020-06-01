import React from "react";

import "./App.css";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import JokesList from "./components/JokesList";

function App() {
  return (
    <div className="App">
      Hello from App!
      <Route exact path="/" render={props => <Login {...props} />} />
      <PrivateRoute
        exact
        path="/jokes"
        render={props => <JokesList {...props} />}
      />
    </div>
  );
}

export default App;
