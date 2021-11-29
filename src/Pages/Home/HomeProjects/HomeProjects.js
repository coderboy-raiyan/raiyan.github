import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Slide from "react-reveal/Slide";
import SingalProject from "../../Shared/SingalProject/SingalProject";
import useProjectContext from "./../../hooks/useProjectContext";
import ProjectCardSke from "./../../Skelitons/ProjectCardSke";

const HomeProjects = () => {
  const { allProjects, isProjectLoaded } = useProjectContext();

  return (
    //   Home projects starts here
    <section className="lg:max-w-6xl mx-4 lg:mx-auto py-11">
      <h1 className="text-4xl font-medium border-b-2 pb-3 mb-8">Projects</h1>
      {/* My home projects section starts */}

      <Slide right>
        <div className="grid lg:grid-cols-3 grid-col-1 gap-y-7 gap-x-5">
          {allProjects.map((project, index) =>
            isProjectLoaded ? (
              <ProjectCardSke key={index} />
            ) : (
              <SingalProject key={index} project={project} />
            )
          )}
        </div>
        {/* More projects button */}
        <div>
          <button className="btn block mx-auto my-5">
            Explore More <BsArrowRight className="inline" />
          </button>
        </div>
      </Slide>
    </section>
  );
};

export default HomeProjects;
