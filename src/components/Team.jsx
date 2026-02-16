import React from 'react';
import Images from './Images';
import { Link } from 'react-router-dom';

const Team = ({ className, teamImg, teamName, jobTitle, icon1, link1, icon2, link2, icon3, link3 }) => {
    return (
        <div className={`h-[280px] lg:h-[310px] w-full max-w-[380px] lg:max-w-[416px] bg-secondarys hover:bg-primarys transition-all duration-500 rounded-b-full relative group ${className}`}>
        {/* Team Image Container */}
        <div className="w-[300px] h-[400px] lg:w-[350px] lg:h-[510px] rounded-full absolute left-1/2 bottom-[30px] lg:bottom-[35px] -translate-x-1/2 overflow-hidden border-4 border-white lg:border-none shadow-lg">
            <Images imgSrc={teamImg} className="w-full h-full object-cover"/>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#181818]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
            <div className="text-center text-white">
                <h4 className="text-2xl lg:text-[32px] font-bold">{teamName}</h4>
                <h5 className="text-lg lg:text-xl pb-4 lg:pb-6">{jobTitle}</h5>
                <div className="flex items-center justify-center gap-x-3">
                {icon1 && (
                    <button className="h-10 w-10 border border-primarys rounded-full hover:bg-primarys cursor-pointer flex items-center justify-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                    <Link to={link1} target="_blank" className="flex items-center justify-center w-full h-full text-white">
                        {icon1}
                    </Link>
                    </button>
                )}
                {icon2 && (
                    <button className="h-10 w-10 border border-primarys rounded-full hover:bg-primarys cursor-pointer flex items-center justify-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 duration-300 delay-75">
                    <Link to={link2} target="_blank" className="flex items-center justify-center w-full h-full text-white">
                        {icon2}
                    </Link>
                    </button>
                )}
                {icon3 && (
                    <button className="h-10 w-10 border border-primarys rounded-full hover:bg-primarys cursor-pointer flex items-center justify-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 duration-300 delay-150">
                    <Link to={link3} target="_blank" className="flex items-center justify-center w-full h-full text-white">
                        {icon3}
                    </Link>
                    </button>
                )}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Team;