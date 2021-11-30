import React from "react";
import TechStacks from "../../TechStacks/TechStacks";
import Hero from "../Hero/Hero";
import HomeProjects from "../HomeProjects/HomeProjects";
import Header from "./../Header/Header";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <HomeProjects />
      <TechStacks />
    </main>
  );
};

export default Home;
