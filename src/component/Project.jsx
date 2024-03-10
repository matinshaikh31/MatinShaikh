/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import ProjectCard from "./Card/ProjectCard";

const Project = ({ Project, active }) => {
  const [toggle, setToggle] = useState("All");

  console.log(toggle);
  return (
    <div className="Cointaner">
      <div className="Wrapper" id="projects">
        <div className="Title" >Project</div>
        <div className="desc text-lg max-w-[600px] text-center md:text-sm">
          Here Is Some Of My Project
        </div>
        <div className="toggle-group flex border-[1.5px] border-purple-600 text-purple-500 text-base rounded-xl font-medium my-6 mx-0 md:text-xs">
          <div
            className={
              "btn" + (toggle === "All" ? " bg-purple-300 rounded-lg" : "")
            }
            onClick={() => setToggle("All")}
            >
            All
          </div>
          <div className="divider w-[1.5px] bg-purple-600" />
          <div
            className={
              "btn" + (toggle === "web app" ? " bg-purple-300 rounded-lg" : "")
            }
            onClick={() => setToggle("web app")}
            >
            WebApplication
          </div>
          <div className="divider w-[1.5px] bg-purple-600" />
          <div
            className={
              "btn" + (toggle === "android app" ? " bg-purple-300 rounded-lg" : "")
            }
            onClick={() => setToggle("android app")}
            >
            Others
          </div>
          <div className="divider w-[1.5px] bg-purple-600" />
          {/* <div
            className={
              "btn" + (toggle === "machine learning" ? " bg-purple-300 rounded-lg" : "")
            }
            onClick={() => setToggle("machine learning")}
            >
            ML
          </div> */}
          <div className="divider w-[1.5px]" />
        </div>
        <div className="CardCointaner flex justify-center items-center gap-7 flex-wrap">
          {toggle === "All" &&
            Project.map((projects, index) => (
              <ProjectCard projects={projects} />
              ))}
          {Project.filter((items) => items.category === toggle).map((projects) => (
            <ProjectCard  projects={projects}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
