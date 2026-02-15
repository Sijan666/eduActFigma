import React, { useState } from 'react'
import Images from './Images'
import { IoMdHeart } from 'react-icons/io'
import { GoHeartFill } from 'react-icons/go'

const CourseCard = ({className , courseTime, courseRating , courseTitle , insName , insTitle , price , lessons}) => {
        const [isLiked, setIsLiked] = useState(false);
        const handleLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        <>
        {/* parent div */}
        <div className={` ${className} w-full max-w-[416px] rounded-[14px] overflow-hidden shadow-newMade group bg-white`}>
            {/* relative */}
            <div className="relative">
                <div className="w-full h-[300px] bg-[#152B4A] rounded-bl-[50%] rounded-br-[50%] absolute z-1 top-0 left-0"></div>
                <div className="w-[94%] h-[318px] bg-secondarys rounded-bl-[50%] rounded-br-[50%] absolute top-0 left-1/2 -translate-x-1/2 group-hover:bg-primarys duration-300"></div>
                <button className="p-4 bg-secondarys rounded-full z-10 absolute top-5 left-5">
                    <GoHeartFill onClick={handleLike} className={`text-[20px] lg:text-[25px] cursor-pointer duration-300 ${isLiked ? 'text-primaryTwo' : 'text-white'}`}/>
                </button>
            </div>
            {/* children div */}
            <div className="p-7.5 mt-80">
                {/* time */}
                <p className='px-2.5 py-[7px] text-white rounded-[5px] font-semibold text-[14px] bg-primaryTwo inline-block'>{courseTime}</p>
                {/* image */}
                <div className="py-5">
                    <Images imgSrc={courseRating} className={'w-fit'}/>
                </div>
                <div className="pb-7.5">
                    <h4 className='text-[22px] lg:text-[24px] font-bold text-primaryTwo leading-tight'>{courseTitle}</h4>
                </div>
                <div className="flex justify-between bg-[#F6F6F6] rounded-md px-4 py-3 items-center">
                    <div className="flex gap-x-2.5 items-center">
                        <div className="w-11 h-11 bg-[#152B4A] rounded-full shrink-0"></div>
                        <div className="">
                            <h3 className='text-sm lg:text-base text-primaryTwo font-bold'>{insName}</h3>
                            <p className='text-[10px] lg:text-[12px] font-medium text-[#697585]'>{insTitle}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <h3 className='text-[18px] lg:text-[20px] text-primaryTwo font-bold'>{price}</h3>
                        <p className='text-[12px] lg:text-[14px] font-medium text-[#697585]'>{lessons}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CourseCard