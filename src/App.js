import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Pages/Home/About/About";
import Home from "./Pages/Home/Home/Home";
import Projects from "./Pages/Home/Projects/Projects";
import "./tailwind.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
