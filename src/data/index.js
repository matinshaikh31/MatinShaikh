import img from "../assets/img/webApp.png"


export const navItems = [
  { id: 1, text: "Home", target: "home" },
  { id: 2, text: "Skills", target: "skills" },
  { id: 3, text: "Experience", target: "exp" },
  { id: 4, text: "Project", target: "projects" },
  { id: 5, text: "Education", target: "education" },
  { id: 6, text: "Contact", target: "contact" },
];



export const Bio = {
    name: "Matin Shaikh",
    roles: [
      "Full Stack Developer",
      "Programmer",
      "UI/UX Designer",
    ],
    description:
      "I am an enthusiastic and adaptable individual, constantly seeking out fresh opportunities for growth. Driven by my love for learning, I am committed to producing exceptional outcomes. With a optimistic outlook and a mindset geared towards growth, I am prepared to add value and accomplish remarkable feats.",
    github: "https://github.com/rishavchanda",
    resume:
      "https://drive.google.com/file/d/1_0FbVXlqbgtx-LVaOEPoaFMe7Bp4pe9c/view?usp=sharing",
  };
  
  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "Redux",
          image:
            "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
        },
        {
          name: "Talwind Css",
          image:"https://media.licdn.com/dms/image/C560BAQEqxAr_aNlnrw/company-logo_200_200/0/1673360493141/tailwind_labs_logo?e=1715817600&v=beta&t=G3Ib1TMkG5GuGdAcIW5uCXubvXFbCEf90a3IrT76Zz8"
        },
     
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
    
      ],
    },
    {
      title: "Backend",
      skills: [
        
        {
          name: "MongoDB",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        },
        {
          name: "Express Js",
          image:
            "data:image/png;base64,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",
        },
    
        {
          name: "Node Js",
          image: "https://nodejs.org/static/images/logo.svg",
        },
        {
          name: "MySQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },
      
      ],
    },
    {
      title: "Programming Language",
      skills: [
        {
          name: "Java",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Python",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
      
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Git",
          image:"https://media.licdn.com/dms/image/C4D0BAQGrMqMhHHsyPw/company-logo_200_200/0/1674330277544?e=1715817600&v=beta&t=Cb2vTuyY0vbgT_lhA0ACRSPQeaS4CneJMO3vIjyZtpQ"
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          name: "Postman",
          image:
            "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
        },
        {
          name: "Figma",
          image:
            "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
        },
      
      ],
    },
  ];
  
  export const experiences = [
   
    {
      id: 1,
      img: "https://media.licdn.com/dms/image/C510BAQGNb35mPhG2vA/company-logo_100_100/0/1630585993427?e=1715817600&v=beta&t=tUNr8HQ7USFXJAY-ad1IIa056-f3i0hOd3F4JIzk_0o",
      role: "Wizard Developer",
      company: "GDSC",
      date: "August 2023 -Present",
      desc: "Build a WebPages base on the events take place in university  and design poster for same ",
  
    },
    {
      id: 0,
      img: "https://media.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_100_100/0/1630536914848/udemy_logo?e=1715817600&v=beta&t=tJT6W6AavzSdQRgx1oAvzYEvVRPvz_-Jx61Njqw6jT0",
      role: "The Complete Web Devlopment BootCamp",
      company: "Udemy",
      date: "Issued dec 2023",
      desc: "In this bootcamp i learn about the full stack development ",
      skills: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "ReactJS",
        "Node",
        "Express",
        "MongoDb",
        "MySql",
      ],
      doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
    },
  
  ];
  
  export const education = [
    {
      id: 0,
      img: "https://media.licdn.com/dms/image/C560BAQFSQdcGiQMBSA/company-logo_200_200/0/1630645031627/navrachana_university_logo?e=1715817600&v=beta&t=PgDFoPuqoLvi75h74cct1OdszfkWzyHQp2yl_0VJB5c",
      school: "Navrachana University, Gujarat",
      date: "Jun 2022 - Jun 2025",
      grade: "8.31 CGPA",
      desc: "I am currently pursuing a Bachelor's degree in Computer Application  at Navrachana University, Vadodara. I have completed 4 semesters and have a CGPA of 8.30. The Subject I Study is Java,Python,Computer Networking,OOPS,  Database Management Systems, Operating Systems etc among others. I am also a member of the Google Developers Student Club (GDSC) at KIIT, where I am learning and working on exciting projects with a team of talented developers.",
      degree: "Bachelor in Computer Application",
    },
    {
      id: 1,
      img: "https://media.licdn.com/dms/image/D4D0BAQGfCc-KYVfSyw/company-logo_200_200/0/1689049681754?e=1715817600&v=beta&t=zscbbj9aypiXSJoaBv79Lz5FaPdXNP_fwXmcwzcO470",
      school: "Vidyut Board Vidyalaya, Vadodara,Gujarat",
      date: "Apr 2021 - Apr 2022",
      grade: "68.2%",
      desc: "I completed my class 12 high school education at Vidyut Board Vidyalaya, Vadodara, where I studied Commerce in HSC.",
      degree: "HSC(XII), Commerce",
    },
    {
      id: 2,
      img: "https://media.licdn.com/dms/image/D4D0BAQGfCc-KYVfSyw/company-logo_200_200/0/1689049681754?e=1715817600&v=beta&t=zscbbj9aypiXSJoaBv79Lz5FaPdXNP_fwXmcwzcO470",
      school: "Vidyut Board Vidyalaya, Vadodara,Gujarat",
      date: "Apr 2019 - Apr 2020",
      grade: "85.3%",
      desc: "I completed my class 10 education at Vidyut Board Vidyalaya, Vadodara.",
      degree: "SSC(X), ",
    },
  ];
  
  export const projects = [
    {
      id: 9,
      title: "E-Commerce WebSite",
      date: "Dec 2023 - Jan 2024",
      description:
        "I led the development of a dynamic e-commerce website for Nike products using React, Tailwind CSS, and Redux. This project involved designing and implementing a modern and intuitive user interface, incorporating Nike's branding elements while ensuring responsiveness across various devices. Leveraging React, I created reusable UI components to streamline development and maintenance processes. Tailwind CSS facilitated rapid styling with its utility-first approach, maintaining consistency in design across the website.",
      image:
        img,
      tags: [
      "React",
      "Talwind CSS",
      "Redux",
      ],
      category: "web app",
      github: "https://github.com/matinshaikh31/Nike-E-Commerce-Website",
      webapp: "https://nike-e-commerce-website.vercel.app/",
    },
    {
      id: 0,
      title: "Disney Hotstar Clone",
      date: "Jan 2024 ",
      description:
        "As the primary developer, I spearheaded the creation of a Disney+ Hotstar clone using React, Tailwind CSS, Redux, and API integration. This project aimed to replicate the functionality and user experience of the popular streaming platform while incorporating additional features to enhance user engagement.",
      image:
        img,
      tags: ["React Js","Talwind CSS","Mob Api"],
      category: "web app",
      github: "https://github.com/matinshaikh31/Disney-Clone",
      webapp: "https://disney-clone-nine-gamma.vercel.app/",
      member: [
       
      ],
    },
    {
      id: 1,
      title: "Book Store",
      date: "Apr 2023 - May 2023",
      description:
        "I led the development of an online bookstore using pure HTML, CSS, and JavaScript, focusing on delivering a simple yet functional e-commerce platform for book enthusiasts. This project showcased my proficiency in front-end web development fundamentals and my ability to create interactive and visually appealing user interfaces without relying on frameworks or libraries.",
      image:
        img,
      tags: ["Html","Css","JavaScript","Jquery"],
      category: "web app",
      github: "https://github.com/matinshaikh31/BookStore",
      webapp: "https://matinshaikh31.github.io/BookStore/",
    },
    {
      id: 2,
      title: "TinDog",
      date: "May 2023",
      description:
        "I spearheaded the development of a unique  platform that facilitates the sale of dogs and the purchase of tech products using HTML, JavaScript, and Bootstrap. This project showcased my expertise in front-end web development and my ability to create versatile and user-friendly interfaces with a combination of essential web technologies and popular frameworks.",
      image:
       img,
      tags: ["Html","Css","JavaScript","Jquery","BootStrap"],
      category: "web app",
      github: "https://github.com/matinshaikh31/TingDog",
      webapp: "https://matinshaikh31.github.io/TingDog/",
    },
    {
      id: 3,
      title: "Chat Bot",
      date: "Jun 2023 - july 2023",
      description:
        "As the primary developer, I conceptualized and implemented a chatbot tailored for answering questions related to Data Structures and Algorithms (DSA) using JavaScript, HTML, and CSS. This project combined my expertise in DSA concepts with my proficiency in front-end and Core JS web development to create an interactive and educational platform for users.",
      image:
        img,
      tags: ["Html","Css","JavaScript","Jquery"],
      category: "web app",
      github: "https://github.com/matinshaikh31/ChatBot",
      webapp: "https://matinshaikh31.github.io/ChatBot/",
      member: [
       
      ],
    },
    {
      id: 4,
      title: "Dic Roll",
      date: "March 2022",
      description:
        "As a novice web developer eager to explore interactive web applications, I undertook the development of a Dice Roll Simulator using HTML, CSS, and JavaScript. This project aimed to provide users with a simple yet entertaining tool for simulating the roll of a standard six-sided dice, showcasing my proficiency in front-end web development fundamentals.",
      image:
        img,
      tags: ["Html","Css","JavaScript"],
      category: "web app",
      github: "https://github.com/matinshaikh31/Dice-Roll",
      webapp: "https://matinshaikh31.github.io/Dice-Roll/",
    },
   
    {
      id: 5,
      title: "Spotify Clone",
      date: "March 2023 ",
      description:
        "In pursuit of advancing my skills in web development and exploring audio integration capabilities, I embarked on creating a Spotify Clone using HTML, CSS, and JavaScript. This project aimed to replicate the core functionalities of the popular music streaming platform while delving into the intricacies of handling audio playback in a web environment.",
      image:
        img,
      tags: ["Html","Css","Core JavaScript"],
      category: "web app",
      github: "https://github.com/matinshaikh31/SpotiyfyClone",
      webapp: "https://matinshaikh31.github.io/SpotiyfyClone/",
    },
    {
      id:6,
      title: "Drum Kit",
      date: "Feb 2023",
      description:
        "I embarked on creating a Drum Kit website utilizing HTML, CSS, and JavaScript. This project served as an exploration into integrating audio functionality into web applications, providing an interactive and engaging experience for users interested in percussion instruments.",
      image:
        img,
      tags: ["Html","Css","JavaScript"],
      category: "web app",
      github: "https://github.com/matinshaikh31/DrumKit",
      webapp: "https://matinshaikh31.github.io/DrumKit/",
    },
    {
      id: 7,
      title: "Flyo Data File",
      date: "Jan 2023",
      description:
        "I embarked on creating the Flyo Data website using fundamental technologies like HTML and CSS. This project served as an entry point into the world of web development, allowing me to grasp essential concepts while gaining hands-on experience in building static web pages.",
      image:
        img,
      tags: ["Html","CSS"],
      category: "web app",
      github: "https://github.com/matinshaikh31/DataFile",
      webapp: "https://matinshaikh31.github.io/DataFile/",
    },
    
  ];
  
  export const TimeLineData = [
    { year: 2017, text: "Started my journey" },
    { year: 2018, text: "Worked as a freelance developer" },
    { year: 2019, text: "Founded JavaScript Mastery" },
    { year: 2020, text: "Shared my projects with the world" },
    { year: 2021, text: "Started my own platform" },
  ];
  