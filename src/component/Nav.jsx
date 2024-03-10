import { useState } from "react";
import { Link } from "react-scroll";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { FaGreaterThan ,FaLessThan} from "react-icons/fa";
import { navItems } from "../data/index.js"; 
import { RxSlash } from "react-icons/rx";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

 
  const socialIcons = [
    {
      id: 1,
      platform: "GitHub",
      url: "https://github.com/matinshaikh31",
      icon: <AiFillGithub size={20} />,
    },
    {
      id: 2,
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/matin-shaikh-5a0639248/",
      icon: <AiFillLinkedin size={20} />,
    },
    {
      id: 3,
      platform: "Facebook",
      url: "https://www.facebook.com/RiccardoEnea95?mibextid=ZbWKwL",
      icon: <AiFillFacebook size={20} />,
    },
  ];

  return (
    <div className="sticky top-0 z-50  bg text-white bg-black px-28 md:p-0 ">
      <div className="flex justify-between items-center h-20 mx-auto px-4">
        <div className="flex">
          <h1 className="text-lg font-bold flex items-center"><FaLessThan className=" text-purple-600"/>Matin<RxSlash className=" text-purple-600 -m-1 text-2xl "/>Shaikh<FaGreaterThan  className=" text-purple-600"/></h1>
        </div>
        
        <ul className="md:hidden flex ">
          <div className="flex items-center justify-center gap-4 mr-24 ">
            {navItems.map((item) => (
              
              <li
                key={item.id}
                className=" flex item-centre justify-center p-2 hover:bg-purple-500 rounded-xl   cursor-pointer duration-300 hover:text-black"
              >
                <Link
                  to={item.target}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            
          </div>
          <div className="flex">
            {socialIcons.map((icon) => (
              <li
                key={icon.id}
                className="p-4 hover:bg-purple-900 rounded-xl m-2 cursor-pointer duration-300"
              >
                <a href={icon.url}>{icon.icon}</a>
              </li>
            ))}
          </div>
        </ul>
        
        <div onClick={handleNav} className="md:block hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-24 w-full h-full bg-black bg-opacity-50 z-50"
            : "hidden"
        }
        onClick={handleNav}
      ></div>
      <ul
        className={
          nav
            ? "fixed left-0 top-24 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-24 bottom-0 left-[-100%]"
        }
      >
     
        <li>
          <div onClick={handleNav} className="md:block hidden">
         
          </div>
        </li>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-purple-900 duration-300  cursor-pointer text-white border-gray-600"
          >
            <Link
              to={item.target}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {item.text}
            </Link>
          </li>
        ))}
        <li>
          <div className="flex">
            {socialIcons.map((icon) => (
              <li
                key={icon.id}
                className="p-4  hover:bg-purple-900 rounded-xl text-white m-2 cursor-pointer duration-300 hover:text-black"
              >
                <a href={icon.url}>{icon.icon}</a>
              </li>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
