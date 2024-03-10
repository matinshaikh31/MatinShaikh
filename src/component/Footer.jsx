import React from 'react';
import { navItems } from "../data/index.js"; 
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { Link } from "react-scroll";
const Footer = () => {
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
    <div className="Cointaner bg-black text-white py-8">
    <div className="Wrapper ">
    <div className="container mx-auto text-center md:flex md:flex-col">
        <h2 className="text-2xl font-extrabold text-purple-600">Matin Shaikh</h2>
        <ul className="flex  justify-center gap-6 mt-4 md:flex-wrap">
        {navItems.map((item) => (
              <li
                key={item.id}
                className="hover:text-purple-600 text-lg font-semibold"
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
       
        </ul>
        <ul className='flex  justify-center gap-6 mt-4 md:flex-wrap'>
        {socialIcons.map((icon) => (
              <li
                key={icon.id}
                className="hover:text-purple-600 text-lg font-semibold "
              >
                <a href={icon.url}>{icon.icon}</a>
              </li>
            ))}
        </ul>
        
        <p className="mt-6">&copy; {new Date().getFullYear()} Matin Shaikh. All rights  reserved.</p>
      </div>
      </div>
      </div>
    
  
  );
};

export default Footer;
