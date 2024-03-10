/* eslint-disable react/prop-types */
const Skills = ({ Skills }) => {
  return (
    <div className="Cointaner ">
      <div className="Wrapper"  id="skills" >
        <h1 className="Title ">Skills</h1>
        <p className="Desc text-lg max-w-[600px]  text-center md:text-sm">
          Here are some of my skills that I have been working on
        </p>
        <div className="Skill-Container  w-full flex flex-wrap mt-7 gap-8  justify-center text-gray-500  ">
          {Skills.map((items, index) => (
            <div
            className="Skill w-full max-w-[500px]   rounded-2xl  border border-purple-500    bg-slate-950 shadow-lg mix-blend-color-burn shadow-purple-500 py-5  px-9 md:w-[400px] md:py-2 sm:w-[330px]"
            key={index}
            >
              <h2 className="SkillTitle text-[28px] text-gray-400  font-semibold  mb-5 text-center">
                {items.title}
              </h2>
              <div className="SkillList flex justify-center flex-wrap gap-3 mb-5">
                {items.skills.map((skill, skillIndex) => (
                  <div
                  key={skillIndex}
                  className="SkillItem text-lg font-[400px]  text-gray-300 border-[1px] px-4 py-3 flex items-center justify-center gap-2 md:text-sm md:px-3 md:py-2 sm:text-sm sm:py-[6px]"
                  >
                    <img
                      className="SkillIamge icon-style w-6 h-6"
                      src={skill.image}
                      />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
