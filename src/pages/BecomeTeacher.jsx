
import Button from '@/components/Button'
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const BecomeTeacher = () => {
    return (
        <>
        <section className='ourCategory'>
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
            {/* common bg for pages */}
                <Container>
                {/* common tag for pages */}
                <div className="text-center">
                    <h3 className="lg:text-[50px] text-[35px] font-bold text-white uppercase">Become a Teacher </h3>
                    <p className="text-[20px] text-white">Home  /  Teacher</p>
                </div>
                {/* common tag for pages */}
                </Container>
            </div>
            <div className="py-30">
                <Container>
                    <Flex className={'gap-x-[70px] items-start flex-wrap lg:flex-nowrap'}>
                        <div className="left lg:w-[722px]">
                            <h4 className='text-[32px] font-bold text-primaryTwo'>Teacher Rules</h4>
                            <div className="pt-7.5">
                                <div className="flex gap-x-4 items-center pb-7.5">
                                    <div className="lg:h-2 lg:w-2 rounded-full bg-secondarys"></div>
                                    <p className='lg:text-base text-[#697585] font-semibold'>There are many variations of passages of Lorem Ipsum available</p>
                                </div>
                                <div className="flex gap-x-4 items-center pb-7.5">
                                    <div className="lg:h-2 lg:w-2 rounded-full bg-secondarys"></div>
                                    <p className='lg:text-base text-[#697585] font-semibold'>suffered alteration in some form, by injected humour, or randomised words which don't look</p>
                                </div>
                                <div className="flex gap-x-4 items-center pb-7.5">
                                    <div className="lg:h-2 lg:w-2 rounded-full bg-secondarys"></div>
                                    <p className='lg:text-base text-[#697585] font-semibold'>You need to be sure there isn't anything embarrassing hidden</p>
                                </div>
                                <div className="flex gap-x-4 items-center pb-7.5">
                                    <div className="lg:h-2 lg:w-2 rounded-full bg-secondarys"></div>
                                    <p className='lg:text-base text-[#697585] font-semibold'> If you are going to use a passage of Lorem Ipsum, </p>
                                </div>
                                <div className="flex gap-x-4 items-center pb-7.5">
                                    <div className="lg:h-2 lg:w-2 rounded-full bg-secondarys"></div>
                                    <p className='lg:text-base text-[#697585] font-semibold'>There are many variations of passages of Lorem Ipsum available, </p>
                                </div>
                            </div>
                            <div className="pt-15">
                                <h4 className='text-[32px] font-bold text-primaryTwo pb-7.5'>Areas of Expertise</h4>
                                <p className='text-base text-[#697585] font-semibold'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            </div>
                            <div className="pt-15">
                                <h4 className='text-[32px] font-bold text-primaryTwo pb-7.5'>Education</h4>
                                <p className='text-base text-[#697585] font-semibold leading-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            </div>
                        </div>
                        <div className="right mt-7.5 lg:mt-0 p-7.5 shadow-newMade lg:w-[529px] rounded-[14px]">
                            <h4 className='text-[24px] font-bold text-primaryTwo pb-7.5 border-b border-dashed border-secondarys'>Apply for Registration</h4>
                            <div className="pt-7.5">
                                <input type="text" placeholder='Your Name' className='px-7.5 py-[25px] bg-[#F6F6F6] text-[#697585] text-base font-semibold w-full outline-none rounded-sm mb-7.5'/>
                                <input type="email" placeholder='Email Address' className='px-7.5 py-[25px] bg-[#F6F6F6] text-[#697585] text-base font-semibold w-full outline-none rounded-sm mb-7.5'/>
                                <input type="number" placeholder='Phone Number' className='px-7.5 py-[25px] bg-[#F6F6F6] text-[#697585] text-base font-semibold w-full outline-none rounded-sm mb-7.5'/>
                                <textarea name="" id="" rows={5} cols={5} placeholder='Comment' className='px-7.5 py-[25px] bg-[#F6F6F6] text-[#697585] text-base font-semibold w-full outline-none rounded-sm mb-7.5'></textarea>
                                {/* button */}
                                <div className="bg-[#f58c37] text-white text-[18px] font-bold rounded-md w-[238px]">
                                    <Button btnText={<>Become a Techer<FaArrowRight /></>}className={"bg-secondarys py-[19px] px-8 rounded-md w-[238px] clip-ss flex items-center gap-x-2"}/>
                                </div>
                                {/* button */}
                            </div>
                        </div>
                    </Flex>
                </Container>
            </div>
        </section>
        </>
    )
}

export default BecomeTeacher