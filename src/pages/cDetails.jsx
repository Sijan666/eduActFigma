import React, { useState } from "react";
import Container from '@/components/Container';
import { PlayCircle, Folder, Lightbulb } from 'lucide-react'; 
import Flex from "@/components/Flex";
import Images from "@/components/Images";
import cdImg from '../../src/assets/cdImg.png'
import Rating from '../../src/assets/Rating.png'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { GiBackwardTime, GiNotebook } from "react-icons/gi";
import { FcReading } from "react-icons/fc";
import { FiPlayCircle } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import reviewImg from '../../src/assets/reviewImg.png'
import Button from "@/components/Button";
import { FaArrowRightLong } from "react-icons/fa6";

const Cdetails = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <section>
        {/* common bg for pages */}
        <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
          <Container>
            {/* common tag for pages */}
            <div className="text-center">
              <h3 className="text-[50px] font-bold text-white uppercase">Course Details</h3>
              <p className="text-[20px] text-white">Home  /  Course</p>
            </div>
            {/* common tag for pages */}
          </Container>
        </div>
        <div className="py-30">
          <Container>
            <Flex className={'items-start gap-x-9'}>
              {/* Left Side Content */}
              <div className="left lg:w-[70%] w-full">
                <div className="img">
                  <Images imgSrc={cdImg} className={'w-full'}/>
                </div>
                <div className="pt-10 pb-7.5">
                  <Flex className={'justify-between'}>
                    <div className="flex gap-x-10 items-center">
                      <div className="h-11 w-11 rounded-full bg-[#152B4A] mr-2.5"></div>
                      <div className="">
                        <h4 className="text-primaryTwo font-bold text-base">Guy Hawkins</h4>
                        <p className="text-[#697585] font-medium text-[12px] hidden lg:block">Project Manager</p>
                      </div>
                      <div className="badge px-2.5 py-[7px] bg-primarys rounded-[5px] hidden lg:block">
                        <p className="text-[14px] font-semibold text-white">Development</p>
                      </div>
                      <div className=" hidden lg:block">
                        <Images imgSrc={Rating}/>
                      </div>
                    </div>
                    <div className="">
                      <h4 className="text-[32px] font-bold text-secondarys">$473.00</h4>
                    </div>
                  </Flex>
                </div>
                <h3 className="text-[32px] font-bold text-primaryTwo pb-10">The Complete Web Developer Guideline 2023</h3>
                {/* Tab Buttons */}
                <div className="lg:p-[15px] p-2.5 bg-[#F6F6F6] rounded-[14px]">
                  <Flex className={'lg:gap-x-5 justify-between lg:justify-normal'}>
                    <button 
                      onClick={() => setActiveTab('overview')} 
                      className={`lg:px-4 lg:py-[19px] px-2 py-2 rounded-[10px] text-base font-semibold duration-300 cursor-pointer ${activeTab === 'overview' ? 'bg-secondarys text-white' : 'bg-white text-primaryTwo hover:text-white hover:bg-secondarys'}`}>
                      Overview
                    </button>
                    <button 
                      onClick={() => setActiveTab('curriculum')} 
                      className={`lg:px-4 lg:py-[19px] px-2 py-2 rounded-[10px] text-base font-semibold duration-300 cursor-pointer ${activeTab === 'curriculum' ? 'bg-secondarys text-white' : 'bg-white text-primaryTwo hover:text-white hover:bg-secondarys'}`}>
                      Curriculum
                    </button>
                    <button 
                      onClick={() => setActiveTab('reviews')} 
                      className={`lg:px-4 lg:py-[19px] px-2 py-2 rounded-[10px] text-base font-semibold duration-300 cursor-pointer ${activeTab === 'reviews' ? 'bg-secondarys text-white' : 'bg-white text-primaryTwo hover:text-white hover:bg-secondarys'}`}>
                      Reviews
                    </button>
                    <button 
                      onClick={() => setActiveTab('instructor')} 
                      className={`lg:px-4 lg:py-[19px] px-2 py-2 rounded-[10px] text-base font-semibold duration-300 cursor-pointer ${activeTab === 'instructor' ? 'bg-secondarys text-white' : 'bg-white text-primaryTwo hover:text-white hover:bg-secondarys'}`}>
                      Instructor
                    </button>
                  </Flex>
                </div>
                {/* Content: Overview */}
                {activeTab === 'overview' && (
                  <div className="overview-content">
                    <div className="pt-12.5">
                      <p className="text-base text-[#697585] leading-8 font-semibold">Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. </p>
                      <p className="text-base text-[#697585] leading-8 font-semibold py-10">Himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolo</p>
                      <p className="text-base text-[#697585] leading-8 font-semibold">Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. </p>
                    </div>
                    <div className="py-10">
                      <div className="flex items-center gap-x-[13px]">
                        <IoIosCheckmarkCircle className="text-[20px] text-secondarys" />
                        <p className="font-medium lg:text-[20px] text-base text-primaryTwo leading-[47px]">
                          Nibh. Nam nec eros id magna hendrerit s
                        </p>
                      </div>
                      <div className="flex items-center gap-x-[13px]">
                        <IoIosCheckmarkCircle className="text-[20px] text-secondarys" />
                        <p className="font-medium lg:text-[20px] text-base text-primaryTwo leading-[47px]">
                          Vitae nibh. Nam nec eros id magna hendrerit s
                        </p>
                      </div>
                      <div className="flex items-center gap-x-[13px]">
                        <IoIosCheckmarkCircle className="text-[20px] text-secondarys" />
                        <p className="font-medium lg:text-[20px] text-base text-primaryTwo leading-[47px]">
                          Nam nec eros id magna hendrerit s
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {/* Content: Curriculum */}
                {activeTab === 'curriculum' && (
                  <div className="py-10 px-2 lg:w-[868px]">
                    <Container>
                      <div className="mb-14">
                        <h4 className="text-primaryTwo text-2xl font-bold pb-4">
                          Starting Beginners Level Course
                        </h4>
                        <p className="text-[#697585] text-base font-semibold pb-10 leading-relaxed">
                          Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. 
                          Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum.
                        </p>
                        {/* List Items */}
                        <div className="flex flex-col border-t border-[#E8EDF2]">
                          {/* Item 1: Introduction */}
                          <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
                            <div className="flex items-center gap-4">
                              <PlayCircle className="text-[#F15A24]" size={24} />
                              <span className="text-primaryTwo text-lg font-bold ">Introduction of Editing</span>
                              <span className="bg-[#F2F5F7] text-[#697585] text-xs px-3 py-1 rounded-full hidden lg:block">Preview</span>
                            </div>
                            <span className="text-[#697585] font-semibold ">10 Minutes</span>
                          </div>
                          {/* Item 2: Overview */}
                          <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
                            <div className="flex items-center gap-4">
                              <PlayCircle className="text-[#F15A24]" size={24} />
                              <span className="text-primaryTwo text-lg font-bold ">Overview of Editing</span>
                              <span className="bg-[#F2F5F7] text-[#697585] text-xs px-3 py-1 rounded-full hidden lg:block">Preview</span>
                            </div>
                            <span className="text-[#697585] font-semibold ">10 Minutes</span>
                          </div>
                          {/* Item 3: Folder */}
                          <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
                            <div className="flex items-center gap-4">
                              <Folder className="text-[#F15A24]" size={24} />
                              <span className="text-primaryTwo text-lg font-bold ">Basic Editing Technology</span>
                            </div>
                          </div>
                          {/* Item 4: Quiz */}
                          <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
                            <div className="flex items-center gap-4">
                              <Lightbulb className="text-[#F15A24]" size={24} />
                              <span className="text-primaryTwo text-lg font-bold ">Quiz</span>
                            </div>
                            <span className="text-[#697585] font-semibold ">6 Questions</span>
                          </div>
                        </div>
                      </div>
                      {/* --- Section 2: Intermediate Level --- */}
                      <div className="mt-10">
                        <h4 className="text-primaryTwo text-2xl font-bold pb-4">
                          Intermediate Level Course
                        </h4>
                        <p className="text-[#697585] text-base font-semibold pb-10 leading-relaxed">
                          Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. 
                          Nullam sed mi non odio feugiat volutpat sit amet nec elit.
                        </p>
                        <div className="flex flex-col border-t border-[#E8EDF2]">
                          {/* Item: Introduction */}
                          <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
                            <div className="flex items-center gap-4">
                              <PlayCircle className="text-[#F15A24]" size={24} />
                              <span className="text-primaryTwo text-lg font-bold">Introduction of Editing</span>
                              <span className="bg-[#F2F5F7] text-[#697585] text-xs px-3 py-1 rounded-full hidden lg:block">Preview</span>
                            </div>
                            <span className="text-[#697585] font-semibold">10 Minutes</span>
                          </div>
                          {/* Item : Folder */}
                          <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
                            <div className="flex items-center gap-4">
                              <Folder className="text-[#F15A24]" size={24} />
                              <span className="text-primaryTwo text-lg font-bold">Basic Editing Technology</span>
                            </div>
                          </div>
                          {/* Item : Quiz */}
                          <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
                            <div className="flex items-center gap-4">
                              <Lightbulb className="text-[#F15A24]" size={24} />
                              <span className="text-primaryTwo text-lg font-bold">Quiz</span>
                            </div>
                            <span className="text-[#697585] font-semibold">6 Questions</span>
                          </div>
                        </div>
                      </div>
                    </Container>
                  </div>
                )}
                {/* Review Part Start */}
                {activeTab === "reviews" && (
                <div className="my-30">
                <p className="font-Urbanist font-bold text-[24px] text-primaryTwo leading-[47px]">
                  2 Reviews
                </p>
                <div className="pt-[60px] pb-20">
                  <div className="pb-[60px] border-b border-[#E4E4E4] flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal items-center gap-[30px]">
                    <Images imgSrc={reviewImg} />
                    <div className="">
                      <div className="flex justify-between mb-5">
                        <div className="">
                          <p className=" font-bold text-[24px] text-primaryTwo leading-[26px]">
                            David Shon
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-[20px] text-secondarys" />
                          <FaStar className="text-[20px] text-secondarys" />
                          <FaStar className="text-[20px] text-secondarys" />
                          <FaStar className="text-[20px] text-secondarys" />
                          <FaStar className="text-[20px] text-secondarys" />
                        </div>
                      </div>
                      <p className="font-Urbanist font-bold text-base text-[#697585] leading-8 tracking-[2%]">
                        Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. 
                      </p>
                    </div>
                  </div>
                  <div className="py-15 border-b border-[#E4E4E4] flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal items-center gap-[30px]">
                    <Images imgSrc={reviewImg} />
                    <div className="">
                      <div className="flex justify-between mb-5">
                        <div className="">
                          <p className="font-Urbanist font-bold text-[24px] text-primaryTwo leading-[26px]">
                            David Shon
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-[20px] text-secondarys" />
                          <FaStar className="text-[20px] text-secondarys" />
                          <FaStar className="text-[20px] text-secondarys" />
                          <FaStar className="text-[20px] text-secondarys" />
                          <FaStar className="text-[20px] text-secondarys" />
                        </div>
                      </div>
                      <p className="font-Urbanist font-bold text-base text-[#697585] leading-8 tracking-[2%]">
                        Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="font-Urbanist font-bold text-[24px] text-primaryTwo leading-[47px]">
                    Add a Review
                  </p>
                  <div className="flex items-center gap-4 py-10">
                    <p className="font-Urbanist font-semibold text-[20px] text-[#697585] leading-[26px]">
                      Rate this Product
                    </p>
                    <div className="flex gap-x-1">
                      <FaStar className="text-[20px] text-secondarys" />
                      <FaStar className="text-[20px] text-secondarys" />
                      <FaStar className="text-[20px] text-secondarys" />
                      <FaStar className="text-[20px] text-secondarys" />
                      <FaStar className="text-[20px] text-secondarys" />
                    </div>
                  </div>
                  <div className="mb-[50px]">
                    <div className="lg:space-x-5">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="py-[25px] px-[30px] w-full lg:w-[650px] bg-[#F6F6F6] rounded-sm outline-0 font-Urbanist font-bold text-base text-[#697585] leading-[26px]"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="py-[25px] px-[30px] mt-5 lg:mt-0 w-full lg:w-[650px] bg-[#F6F6F6] rounded-sm outline-0 font-Urbanist font-bold text-base text-[#697585] leading-[26px]"
                      />
                    </div>
                    <textarea
                      name=""
                      id=""
                      placeholder="Write a Message"
                      className="mt-5 pl-[30px] pt-6 bg-[#F6F6F6] w-full rounded-sm outline-0 font-Urbanist font-bold text-base text-[#697585] leading-[26px]"
                      rows={8}
                      cols={127}
                    ></textarea>
                  </div>
                  <div className="relative text-center lg:text-left cursor-pointer">
                    <Button
                      btnText={"Leave a Review"}
                      className={
                        "py-[19px] pl-8 pr-[52px] bg-secondarys rounded-md text-white text-[18px] font-bold relative"
                      }
                    />
                    <FaArrowRightLong className="font-bold text-white absolute top-1/2 left-[13%] -translate-y-1/2" />
                  </div>
                </div>
                </div>
                )}
                {/* Review Part end */}
                {/* instructor part start */}
                {activeTab === "instructor" &&(
                <div className="my-30 ">
                  <Flex className={'lg:gap-x-7.5 flex-wrap lg:flex-nowrap flex gap-y-5'}>
                    <div className="w-[165px] h-[165px] rounded-full bg-[#152B4A] mx-auto lg:mx-0"></div>
                    <div className="text-center lg:text-left">
                      <h4 className="text-[24px] font-bold text-primaryTwo">Guy Hawkins</h4>
                      <p className="text-[#697585] font-medium text-[12px] pt-2 pb-3">Project Manager</p>
                      <p className="text-[#697585] font-semibold text-base lg:w-[673px]">Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. </p>
                    </div>
                  </Flex>
                </div>
                )}
                {/* instructor part end */}
              </div>
              {/* Right Side Bar */}
              <div className="right lg:w-[30%] hidden lg:block">
                {/* Course Feature */}
                <div className="p-7.5 shadow-newMade rounded-[14px]">
                  <h4 className="pb-7.5 border-b border-dashed border-secondarys text-[24px] font-bold text-primaryTwo">Course Features</h4>
                  <div className="py-9 flex justify-between items-center border-b border-[#E4E4E4]">
                    <div className="flex gap-x-3.5 items-center">
                      <GiBackwardTime className='text-secondarys' size={20}/>
                      <p className="text-[20px] text-[#697585] font-medium">Duration:</p>
                    </div>
                    <p className="text-primaryTwo font-semibold text-[20px]"> 20 Hours</p>
                  </div>
                  <div className="py-9 flex justify-between items-center border-b border-[#E4E4E4]">
                    <div className="flex gap-x-3.5 items-center">
                      <GiNotebook className='text-secondarys' size={20}/>
                      <p className="text-[20px] text-[#697585] font-medium">Lessons:</p>
                    </div>
                    <p className="text-primaryTwo font-semibold text-[20px]"> 15</p>
                  </div>
                  <div className="py-9 flex justify-between items-center border-b border-[#E4E4E4]">
                    <div className="flex gap-x-3.5 items-center">
                      <FcReading className='text-secondarys' size={20}/>
                      <p className="text-[20px] text-[#697585] font-medium">Students:</p>
                    </div>
                    <p className="text-primaryTwo font-semibold text-[20px]"> Max 15</p>
                  </div>
                  <div className="py-9 flex justify-between items-center border-b border-[#E4E4E4]">
                    <div className="flex gap-x-3.5 items-center">
                      <FiPlayCircle className='text-secondarys' size={20}/>
                      <p className="text-[20px] text-[#697585] font-medium">Videos</p>
                    </div>
                    <p className="text-primaryTwo font-semibold text-[20px]"> 10 Hours</p>
                  </div>
                  <div className="py-9 flex justify-between items-center border-b border-[#E4E4E4]">
                    <div className="flex gap-x-3.5 items-center">
                      <HiLightBulb  className='text-secondarys' size={20}/>
                      <p className="text-[20px] text-[#697585] font-medium">Skill Level</p>
                    </div>
                    <p className="text-primaryTwo font-semibold text-[20px]"> Advanced</p>
                  </div>
                  <div className="py-9 flex justify-between items-center border-b border-[#E4E4E4]">
                    <div className="flex gap-x-3.5 items-center">
                      <LiaLanguageSolid  className='text-secondarys' size={20}/>
                      <p className="text-[20px] text-[#697585] font-medium">Language:</p>
                    </div>
                    <p className="text-primaryTwo font-semibold text-[20px]"> English</p>
                  </div>
                  {/* btn */}
                  <button className="btn w-full mt-7.5">
                    Buy This Course
                    <FaArrowRight />
                  </button>
                </div>
                {/* Latest Post */}
                <div className="shadow-newMade bg-white p-5 lg:p-7.5 rounded-[14px] mt-9">
                  <h5 className="text-xl lg:text-2xl text-primaryTwo font-bold pb-6 border-b-2 border-dashed border-secondarys mb-7.5">
                    Latest Post
                  </h5>
                  {/* Item 1 */}
                  <Flex className="pb-7.5 border-b-2 border-[#E4E4E4] mb-7.5 gap-x-4 lg:gap-x-5">
                    <div className="h-20 w-20 lg:h-[90px] lg:w-[90px] rounded-[6px] bg-[#152B4A] shrink-0"></div>
                    <div className="">
                      <Flex className="text-xs lg:text-base text-[#697585] font-semibold gap-x-2 items-center">
                        <MdOutlineWatchLater className="text-secondarys text-lg lg:text-2xl" />
                        26 Mar, 2023
                      </Flex>
                      <p className="text-base lg:text-xl font-bold text-primaryTwo w-full lg:w-60 mt-1">
                        The Complete Web ......
                      </p>
                    </div>
                  </Flex>
                  {/* Item 2 */}
                  <Flex className="pb-7.5 border-b-2 border-[#E4E4E4] mb-7.5 gap-x-4 lg:gap-x-5">
                    <div className="h-20 w-20 lg:h-[90px] lg:w-[90px] rounded-[6px] bg-[#152B4A] shrink-0"></div>
                    <div className="">
                      <Flex className="text-xs lg:text-base text-[#697585] font-semibold gap-x-2 items-center">
                        <MdOutlineWatchLater className="text-secondarys text-lg lg:text-2xl" />
                        26 Mar, 2023
                      </Flex>
                      <p className="text-base lg:text-xl font-bold text-primaryTwo w-full lg:w-60 mt-1">
                        The Complete Web ......
                      </p>
                    </div>
                  </Flex>
                  {/* Item 3 */}
                  <Flex className="gap-x-4 lg:gap-x-5">
                    <div className="h-20 w-20 lg:h-[90px] lg:w-[90px] rounded-[6px] bg-[#152B4A] shrink-0"></div>
                    <div className="">
                      <Flex className="text-xs lg:text-base text-[#697585] font-semibold gap-x-2 items-center">
                        <MdOutlineWatchLater className="text-secondarys text-lg lg:text-2xl" />
                        26 Mar, 2023
                      </Flex>
                      <p className="text-base lg:text-xl font-bold text-primaryTwo w-full lg:w-60 mt-1">
                        The Complete Web ......
                      </p>
                    </div>
                  </Flex>
                </div>
              </div>
            </Flex>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Cdetails;