import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import td from '../../src/assets/td.png'
import { Progress } from "@/components/ui/progress"
import { FaArrowRight, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6'
import Button from '@/components/Button'

const TeacherDetails = () => {

        const [progressValues, setProgressValues] = useState({
        uiux: 0
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgressValues({
                uiux: 80
            });
        }, 100);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
        <section>
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
            {/* common bg for pages */}
                <Container>
                {/* common tag for pages */}
                <div className="text-center">
                    <h3 className="text-[50px] font-bold text-white uppercase">Teacher Details</h3>
                    <p className="text-[20px] text-white">Home  /  Teacher</p>
                </div>
                {/* common tag for pages */}
                </Container>
            </div>
            <div className="">
                <Container>
                    <Flex className={'gap-x-[75px]'}>
                        <div className="left">
                            <Images imgSrc={td}/>
                        </div>
                        <div className="right pt-[165px] pb-[180px]">
                            <h4 className='text-primaryTwo text-[32px] font-bold'>Hello, I’m William Ketty</h4>
                            <p className='text-[20px] text-secondarys'>UI/UX Designer</p>
                            <p className='text-[#697585] text-base font-semibold leading-8 w-[678px] pt-7.5 pb-12.5'>There are many variations of passages of Lorem Ipsum avagtilable, but the majority have suffered alteration in some form, by injected hudfdfmour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent pe</p>
                            <p className='text-[#697585] text-base font-semibold leading-8 w-[678px] pb-12.5'>Himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolo</p>
                            {/* progress */}
                            <div className="progressBar">
                                <div className="flex justify-between pb-5.5">
                                    <span className="text-[20px] font-semibold text-primary ">UI / UX Design</span>
                                    <span className="text-[20px] font-medium text-[#697585]">80%</span>
                                </div>
                                <Progress value={progressValues.uiux} className="w-full bg-[#E4E4E4] *:bg-primarys *:duration-2000"/>
                            </div>
                            {/* icon */}
                            <div className="pt-7.5 pb-12.5">
                                <Flex className={'gap-x-4'}>
                                <div className="px-3 py-3 bg-[#F6F6F6] text-primaryTwo rounded-full cursor-pointer">
                                    <FaFacebookF  className="text-[20px]"/>
                                </div>
                                <div className="px-3 py-3 bg-[#F6F6F6] text-primaryTwo rounded-full cursor-pointer">
                                    <FaLinkedinIn className="text-[20px]"/>
                                </div>
                                <div className="px-3 py-3 bg-[#F6F6F6] text-primaryTwo rounded-full cursor-pointer">
                                    <FaTwitter   className="text-[20px]"/>
                                </div>
                                <div className="px-3 py-3 bg-[#F6F6F6] text-primaryTwo rounded-full cursor-pointer">
                                    <FaYoutube   className="text-[20px]"/>
                                </div>
                                </Flex>
                            </div>
                            {/* btn */}
                            {/* <div className="bg-[#f58c37]  text-white text-[18px] font-bold rounded-md w-[178px]">
                            <Button btnText={<>Get In Touch<FaArrowRight /></>}className={"bg-secondarys py-[19px] px-5 rounded-md clip-ss flex items-center gap-x-2"}/>
                            </div> */}
                                <button className="btn">
                                    Get In Touch
                                    <FaArrowRight />
                                </button>
                                {/* btn */}
                        </div>
                    </Flex>
                </Container>
            </div>
        </section>
        </>
    )
}

export default TeacherDetails