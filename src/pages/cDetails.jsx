import React from "react";
import Container from '@/components/Container';
import { PlayCircle, Folder, Lightbulb } from 'lucide-react'; 
import Flex from "@/components/Flex";
import Images from "@/components/Images";
import cdImg from '../../src/assets/cdImg.png'
import Rating from '../../src/assets/Rating.png'
import { IoIosCheckmarkCircle } from "react-icons/io";


const Cdetails = () => {
  return (
    <>
        <section>
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
            {/* common bg for pages */}
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
                <Flex>
                  <div className="left">
                    <div className="img">
                      <Images imgSrc={cdImg}/>
                    </div>
                    <div className="pt-10 pb-7.5">
                      <Flex className={'justify-between'}>
                        <div className="flex gap-x-10 items-center">
                          <div className="h-11 w-11 rounded-full bg-[#152B4A] mr-2.5"></div>
                          <div className="">
                            <h4 className="text-primaryTwo font-bold text-base">Guy Hawkins</h4>
                            <p className="text-[#697585] font-medium text-[12px]">Project Manager</p>
                          </div>
                          <div className="badge px-2.5 py-[7px] bg-primarys rounded-[5px]">
                            <p className="text-[14px] font-semibold text-white">Development</p>
                          </div>
                          <div className="">
                            <Images imgSrc={Rating}/>
                          </div>
                        </div>
                        <div className="">
                          <h4 className="text-[32px] font-bold text-secondarys">$473.00</h4>
                        </div>
                      </Flex>
                    </div>
                    <h3 className="text-[32px] font-bold text-primaryTwo pb-10">The Complete Web Developer Guideline 2023</h3>
                    <div className="p-[15px] bg-[#F6F6F6] rounded-[14px]">
                      <Flex className={'gap-x-5'}>
                        <button className="px-4 py-[19px] rounded-[10px] bg-white text-base font-semibold text-primaryTwo hover:text-white hover:bg-secondarys duration-300 cursor-pointer">Overview</button>
                        <button className="px-4 py-[19px] rounded-[10px] bg-white text-base font-semibold text-primaryTwo hover:text-white hover:bg-secondarys duration-300 cursor-pointer">Curriculum</button>
                        <button className="px-4 py-[19px] rounded-[10px] bg-white text-base font-semibold text-primaryTwo hover:text-white hover:bg-secondarys duration-300 cursor-pointer">Reviews</button>
                        <button className="px-4 py-[19px] rounded-[10px] bg-white text-base font-semibold text-primaryTwo hover:text-white hover:bg-secondarys duration-300 cursor-pointer">Instructor</button>
                      </Flex>
                    </div>
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
                    {/* rafi : carriculam */}
                    <div className="py-10 px-2 w-[868px]">
                      <Container>
                        <div className="mb-14">
                          <h4 className="text-primaryTwo text-2xl  font-bold pb-4">
                            Starting Beginners Level Course
                          </h4>
                          <p className="text-[#697585] text-base  font-semibold pb-10 leading-relaxed">
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
                                <span className="bg-[#F2F5F7] text-[#697585] text-xs px-3 py-1 rounded-full">Preview</span>
                              </div>
                              <span className="text-[#697585] font-semibold ">10 Minutes</span>
                            </div>
                            {/* Item 2: Overview */}
                            <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
                              <div className="flex items-center gap-4">
                                <PlayCircle className="text-[#F15A24]" size={24} />
                                <span className="text-primaryTwo text-lg font-bold ">Overview of Editing</span>
                                <span className="bg-[#F2F5F7] text-[#697585] text-xs px-3 py-1 rounded-full">Preview</span>
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
                                <span className="bg-[#F2F5F7] text-[#697585] text-xs px-3 py-1 rounded-full">Preview</span>
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
                    {/* rafi : carriculam */}
                  </div>
                </Flex>
              </Container>
            </div>
        </section>
    </>
  );
};

export default Cdetails;