/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import ExpCard from "./Card/ExpCard";
const Expercience = ({ Exp }) => {
  return (
    <div className="Cointaner "> 
      <div className="Wrapper " id="exp">
        <div className="Title ">
          Expercience
        </div>
        <div className="Desc text-lg max-w-[600px]  text-center md:text-sm">
          Here Is Some Of My Expercience
        </div>
        <div className="TimeLineSection w-full max-w-[1000px] mt-3 flex flex-col justify-center items-center gap-3  ">
          <div className="TimeLine">
            <Timeline>
              {Exp.map((items, index) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outline"/>
                    {index !== items.length-1 &&  <TimelineConnector/>}
                  
                  </TimelineSeparator>
                  <TimelineContent sx={{py:"12px", px:"2"}}><ExpCard key={index} items={items}/></TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expercience;
