import styled from "styled-components";
import {
  Nav,
  Hero,
  Skills,
  Expercience,
  Project,
  Education,
  Contact,
  Footer,
} from "./component";
import StyledStarsCanvas from "./component/Canva/Stars.jsx";
import { AnimatePresence } from "framer-motion";
import {
  Bio,
  skills,
  experiences,
  education,
  projects,
  TimeLineData,
} from "./data/index.js";

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;


function App() {
  return (
    <>
      <Nav />
      <div className="bg-black w-full overflow-x-hidden relative">
      <StyledStarsCanvas />
      <AnimatePresence>
       <div className="">
      <Hero Bio={Bio} />
      <Wrapper>
      <Skills Skills={skills} />
      <Expercience Exp={experiences} />
      </Wrapper>
      <Project Project={projects} />
      <Wrapper>
      <Education Education={education} />
      <Contact />
      </Wrapper>
      <Footer />
      </div>
      
     
      
      </AnimatePresence>
      </div>
    </>
  );
}

export default App;
