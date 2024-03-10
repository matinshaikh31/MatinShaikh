/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Typewriter from "typewriter-effect";
import HeroImg from "../assets/img/header-img.svg";
import { FaArrowCircleRight } from "react-icons/fa";
import StyledStarsCanvas from "./Canva/Stars";


const Hero = ({ Bio: { name, roles, description,resume } }) => {
  return (
    
    <div  className=" h-full w-full flex flex-col gap-24 relative text-white justify-center items-center py-12 px-28 md:p-0  z-10 ">
      <div>
        <StyledStarsCanvas/>
      </div>
      <div className="flex justify-center items-center md:flex-col-reverse md:flex-wrap relative">
        {/* left div */}
        <div className="md:text-center md:justify-center ml-4 ">
          <div>
            <h1 className=" font-bold  text-[40px]  md:text-center">
              Hi! I'm <br/>{name} <br />{" "}
              <div className=" text-purple-600">
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                }}
                />
              </div>
            </h1>
          </div>
          <div className="flex  w-[65%] pt-7 text-xl sm:text-sm md:mx-auto">
            <p className="md:text-center">
              {description}
            </p>
          </div>
          <div className="pt-7 font-semibold flex md:justify-center md:text-center">
        
            <span>
              <button className=" flex gap-2 bg-purple-600 rounded-3xl p-4 text-2xl  cursor-pointer">
              Check Resume
                <a href={resume}><FaArrowCircleRight
                  size={30}
                  className=" justify-center text-center "
                  /></a>
              </button>
            </span>
          </div>
        </div>
        {/* right div  */}
        <div className="flex text-center justify-center relative h-auto w-[200%] mr-5 md:h-auto md:w-[50%] md:pl-8 md:items-center md:mx-auto sm:w-[100%]">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
                
  );
};

export default Hero;
