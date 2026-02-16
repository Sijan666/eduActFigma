import Button from '@/components/Button'
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Login = () => {
    return (
        <>
        <section className='login&reg'>
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
            {/* common bg for pages */}
                <Container>
                {/* common tag for pages */}
                <div className="text-center">
                    <h3 className="text-[50px] font-bold text-white uppercase">Login</h3>
                    <p className="text-[20px] text-white">Home  /  Login</p>
                </div>
                {/* common tag for pages */}
                </Container>
            </div>
            <Container>
                <div className="py-30">
                    <div className="py-10 px-12.5 bg-[#F6F6F6] mb-12.5 rounded-[14px]">
                        <p className='font-medium text-primaryTwo lg:text-[18px] text-base'>We have a demo account setup. <span className='font-bold'>Username: demo</span> and <span className='font-bold'>Password:</span> <span className='font-bold text-secondarys'>demo</span></p>
                    </div>
                    <div className="p-15 shadow-newMade rounded-[14px]">
                        <Flex className={'lg:justify-between flex-wrap gap-y-10'}>
                            {/* login */}
                            <div className="login">
                                <h4 className='text-[32px] font-bold text-primaryTwo pb-10'>Login</h4>
                                <div className="name pb-5">
                                    <input type="text" placeholder='User Namer or Email Address*' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold lg:w-[496px] bg-[#F6F6F6] outline-none'/>
                                </div>
                                <div className="pass pb-7.5">
                                    <input type="number" placeholder='Password*' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold lg:w-[496px] bg-[#F6F6F6] outline-none'/>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-2.5 items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p className='text-[#697585] text-base font-semibold'>Remember Me?</p>
                                    </div>
                                    <p className='text-[#697585] text-base font-semibold'>Forget Password?</p>
                                </div>
                                {/* btn */}
                                {/* <div className="bg-[#f58c37] text-white text-[18px] font-bold rounded-md w-27 mt-10">
                                    <Button btnText={'Login'}className={"bg-secondarys py-5 px-8 rounded-md w-27 clip-ss flex items-center gap-x-2"}/>
                                </div> */}
                                <button className="btn">
                                    Login
                                    <FaArrowRight />
                                </button>
                                {/* btn */}
                            </div>
                            {/* login */}
                            {/* border */}
                            <div className="lg:h-100 lg:w-px w-60 h-px border-dashed border border-[#B7B0B4]"></div>
                            {/* border */}
                            {/* register */}
                            <div className="register">
                                <h4 className='text-[32px] font-bold text-primaryTwo pb-10'>Register</h4>
                                <div className="name pb-5">
                                    <input type="text" placeholder='User Name' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold lg:w-[496px] bg-[#F6F6F6] outline-none'/>
                                </div>
                                <div className="pass pb-7.5">
                                    <input type="number" placeholder='Password*' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold lg:w-[496px] bg-[#F6F6F6] outline-none'/>
                                </div>
                                <div className="flex gap-x-2.5 items-center">
                                    <input type="checkbox" name="" id="" />
                                    <p className='text-[#697585] text-base font-semibold'>I Accept Company Privacy Policy</p>
                                </div>
                                {/* btn */}
                                {/* <div className="bg-[#f58c37] text-white text-[18px] font-bold rounded-md w-[130px] mt-10">
                                    <Button btnText={'Register'}className={"bg-secondarys py-5 px-8 rounded-md w-[130px] clip-ss flex items-center gap-x-2"}/>
                                </div> */}
                                <button className="btn">
                                    Register
                                    <FaArrowRight />
                                </button>
                                {/* btn */}
                            </div>
                            {/* register */}
                        </Flex>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}

export default Login