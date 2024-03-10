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

import { EduCard } from './Card/EduCard';

const Education = ({Education}) => {
  return (
    <div className="Cointaner ">
      <div className="Wrapper "   id='education'>
        <div className="Title ">
        Education
        </div>
        <div className="Desc text-lg max-w-[600px]  text-center md:text-sm">
          Here Is My Education Journy
        </div>
        <div className="TimeLineSection w-full max-w-[1000px] mt-3 flex flex-col justify-center items-center gap-3">
          <div className="TimeLine">
           
          <Timeline>
              {Education.map((items, index) => (
                <TimelineItem>
            
                  <TimelineContent sx={{py:"12px", px:"2"}}><EduCard items={items} index={index}/></TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outline"/>
                    {index !== items.length-1 &&  <TimelineConnector/>}
                  
                  </TimelineSeparator>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education