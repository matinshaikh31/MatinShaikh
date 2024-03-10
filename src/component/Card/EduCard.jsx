import React from 'react'

export const EduCard = ({items}) => {
  return (
    <div className="Card w-[650px] rounded-2xl px-4 py-4 flex justify-between relative overflow-hidden flex-col gap-3  duration-300 transition-transform ease-in-out  md:p-3 md:gap-2 md:w-[300px] hover:-translate-y-5 border border-solid border-blue-500   bg-slate-950 shadow-md mix-blend-color-burn shadow-purple-500">
    <div className="Top w-full flex gap-3">
      <div className="logo ">
        <img
          className=" h-12 bg-black rounded-xl mt-1 md:h-10"
          src={items.img}
        />
      </div>
      <div className="Body flex flex-col w-full ">
        <div className="role text-lg font-semibold text-gray-300 md:text-sm ">
          {items.school}
        </div>
        <div className="company role text-lg font-medium text-gray-300 md:text-sm">
          {items.degree}
        </div>
        <div className="duration role text-xs  font-normal text-gray-300 md:text-sm">
          {items.date}
        </div>
      </div>
    </div>
    <div className=' text-sm font-semibold text-300 md:text-xs'>{items.grade}</div>
    <div className="Description w-full text-sm font-normal  text-gray-300 mb-2 md:text-xs">
     <div className='description  font-normal text-white mt-2 max-w-fit  line-clamp-3 truncate-custom'>{items.desc}</div>
    </div>
 
  </div>
  )
}
