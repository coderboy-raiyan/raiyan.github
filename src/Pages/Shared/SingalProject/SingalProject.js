import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

const SingalProject = ({ project }) => {
  const [isOpend, setIsOpened] = useState(false);

  const handelClick = () => {
    setIsOpened(!isOpend);
  };

  console.log(project);
  return (
    <div className="shadow-lg h-full border-2 border-gray-200  rounded-lg overflow-hidden">
      <a href={project.live_link} target="_blank" rel="noreferrer" className="">
        <img
          className="hover:scale-110 transition-all transform cursor-pointer"
          src={project.img}
          alt="blog"
        />
      </a>
      <div className="p-4">
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col space-y-2 my-3">
            <h2 className="tracking-widest text-lg text-gray-900 font-semibold">
              {project.name}
            </h2>
            <h1 className="text-xs  text-gray-900 ">{project.duration}</h1>
            <p className="leading-relaxed ">{project?.des?.slice(0, 60)}...</p>
          </div>
        </div>
        {/* card footer */}

        {/* tags */}
        <ul className="flex flex-row flex-wrap justify-center lg:justify-start xl:justify-start">
          <li className="hero-tags-li">
            <span className="hero-tags">JavaScript</span>
          </li>
          <li className="hero-tags-li">
            <span className="hero-tags">React</span>
          </li>
          <li className="hero-tags-li">
            <span className="hero-tags">Node js</span>
          </li>
          {isOpend && (
            <>
              <li className="hero-tags-li">
                <span className="hero-tags">Express js</span>
              </li>
              <li className="hero-tags-li">
                <span className="hero-tags">Full Stack</span>
              </li>
            </>
          )}
          <p
            className="inline cursor-pointer text-xs my-auto"
            onClick={handelClick}
          >
            {isOpend ? "-less" : " +more"}
          </p>
        </ul>

        {/* Links of codes */}
        <div className="flex items-center flex-wrap lg:justify-start space-x-2  my-3  justify-center">
          <a
            href={project.live_link}
            target="_blank"
            rel="noreferrer"
            className="btn text-xs p-2 lg:my-0 "
          >
            <FaPlay className="inline" /> Demo
          </a>
          <a
            href={project.client_side_code}
            target="_blank"
            rel="noreferrer"
            className="btn text-xs p-2 lg:my-0"
          >
            <BsGithub className="inline " /> Client Side Code
          </a>
          <a
            href={project.server_side_code}
            target="_blank"
            rel="noreferrer"
            className="btn text-xs p-2 lg:mt-3"
          >
            <BsGithub className="inline " /> Server Side Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingalProject;
