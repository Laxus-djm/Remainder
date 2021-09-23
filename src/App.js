import "./App.css";
import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/home";

function App() {


  
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default App;
