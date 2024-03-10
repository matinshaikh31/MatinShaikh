import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsBrowserChrome } from "react-icons/bs"

const ProjectCard = ({ projects }) => {
  return (
    <div className="Card w-[330px] h-[490px] bg-slate-950 cursor-pointer rounded-xl shadow-xl overflow-hidden px-5 py-7 flex flex-col gap-4 transition-all duration-150  hover:-translate-y-3 hover:shadow-slate-950 hover:block">
      <div className="Img w-full h-[180px] bg-white rounded-lg shadow-black ">
        <img src={projects.image} alt="img" className="h-[95%] pl-12" />
      </div>
      <div className="Tags w-full flex text-centre flex-wrap gap-2 mt-1 ">
        {projects.tags?.map((tag, index) => (
          <div className=" text-purple-700 text-xs font-medium bg-gray-800 px-1 py-2 rounded-xl">
            {tag}
          </div>
        ))}
      </div>
      <div className="Details w-full flex flex-col py-[2px]">
        <div className="Titl text-xl font-semibold text-gray-500 max-w-full flex line-clamp-3 flex-col">
          {projects.title}
        </div>
        <div className="date text-xs ml-1 font-normal text-gray-500 md:text-[10px]">
          {projects.date}
        </div>
        <div
          className="description  font-normal text-gray-500 mt-2 max-w-fit  line-clamp-3 truncate-custom "
        >
          {projects.description}
        </div>
        <div className="flex gap-2 mt-4">
       <a href={projects.github}><AiFillGithub size={20} /></a>
       <a href={projects.webapp}><BsBrowserChrome size={20}/></a>
        </div>
      </div>
      <div className="Memeber flex  items-center pl-2">
        {projects.member?.map((member) => (
          <div className="Avtar w-9 h-9 rounded-[50%] -ml-2 bg-slate-50 border-[3px]">{member.image}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
