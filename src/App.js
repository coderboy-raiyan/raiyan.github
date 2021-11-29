import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blogs from "./Pages/Blog/Blogs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ProjectProvider from "./Pages/context/ProjectProvider";
import Home from "./Pages/Home/Home/Home";
import Projects from "./Pages/Projects/Projects";
import "./tailwind.css";

const App = () => {
  return (
    <ProjectProvider>
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
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/contactus">
            <ContactUs></ContactUs>
          </Route>
        </Switch>
      </BrowserRouter>
    </ProjectProvider>
  );
};

export default App;
