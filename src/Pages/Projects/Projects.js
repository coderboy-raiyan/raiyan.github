import React from "react";
import Header from "./../Home/Header/Header";

const Projects = () => {
  return (
    <>
      <Header />
      {/* Project section here */}
      <section className="max-w-6xl mx-auto py-8">
        {/* projects header */}
        <div className="flex justify-between items-end">
          <h2 className="text-3xl font-semibold">PROJECTS</h2>
          <h5 className="text-sm">Total Stars : 147k</h5>
        </div>
        <div>
          <p>More projects are coming soon</p>
          <img
            src="https://i.ibb.co/wNpNgsd/Under-construction-rafiki.png"
            alt=""
            className="w-2/5 mx-auto"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
