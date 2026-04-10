import Button from '@/components/Button'
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Login = () => {
    return (
        <>
        <section className='login-reg'>
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] bg-cover bg-center pt-20 pb-16 md:pt-[174px] md:pb-[154px]">
                <Container>
                    {/* common tag for pages */}
                    <div className="text-center">
                        <h3 className="text-3xl md:text-[50px] font-bold text-white uppercase">Login</h3>
                        <p className="text-base md:text-[20px] text-white mt-2 md:mt-0">Home  /  Login</p>
                    </div>
                    {/* common tag for pages */}
                </Container>
            </div>
            
            <Container>
                <div className="py-12 md:py-30">
                    <div className="py-6 px-6 md:py-10 md:px-12.5 bg-[#F6F6F6] mb-8 md:mb-12.5 rounded-[14px]">
                        <p className='font-medium text-primaryTwo text-sm md:text-base lg:text-[18px]'>
                            We have a demo account setup. <span className='font-bold'>Username: demo</span> and <span className='font-bold'>Password:</span> <span className='font-bold text-secondarys'>demo</span>
                        </p>
                    </div>
                    
                    <div className="p-6 md:p-10 lg:p-15 shadow-newMade rounded-[14px]">
                        <Flex className={'flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-y-10 lg:gap-y-0'}>
                            {/* login */}
                            <div className="login w-full lg:w-auto">
                                <h4 className='text-2xl md:text-[32px] font-bold text-primaryTwo pb-6 md:pb-10'>Login</h4>
                                <div className="name pb-5">
                                    <input type="text" placeholder='User Name or Email Address*' className='w-full lg:w-[496px] rounded-sm px-5 py-4 md:px-7.5 md:py-[25px] text-[#697585] text-sm md:text-base font-semibold bg-[#F6F6F6] outline-none'/>
                                </div>
                                <div className="pass pb-7.5">
                                    <input type="password" placeholder='Password*' className='w-full lg:w-[496px] rounded-sm px-5 py-4 md:px-7.5 md:py-[25px] text-[#697585] text-sm md:text-base font-semibold bg-[#F6F6F6] outline-none'/>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                                    <div className="flex gap-x-2.5 items-center">
                                        <input type="checkbox" name="" id="remember_me" />
                                        <label htmlFor="remember_me" className='text-[#697585] text-sm md:text-base font-semibold cursor-pointer'>Remember Me?</label>
                                    </div>
                                    <p className='text-[#697585] text-sm md:text-base font-semibold cursor-pointer hover:underline'>Forget Password?</p>
                                </div>
                                {/* btn */}
                                <button className="btn mt-6 md:mt-5 w-full sm:w-auto flex justify-center items-center gap-2">
                                    Login
                                    <FaArrowRight />
                                </button>
                                {/* btn */}
                            </div>
                            {/* login */}
                            {/* border */}
                            <div className="lg:h-[450px] lg:w-px w-full h-px border-dashed border border-[#B7B0B4] my-2 lg:my-0"></div>
                            {/* border */}
                            {/* register */}
                            <div className="register w-full lg:w-auto">
                                <h4 className='text-2xl md:text-[32px] font-bold text-primaryTwo pb-6 md:pb-10'>Register</h4>
                                <div className="name pb-5">
                                    <input type="text" placeholder='User Name' className='w-full lg:w-[496px] rounded-sm px-5 py-4 md:px-7.5 md:py-[25px] text-[#697585] text-sm md:text-base font-semibold bg-[#F6F6F6] outline-none'/>
                                </div>
                                <div className="pass pb-7.5">
                                    <input type="password" placeholder='Password*' className='w-full lg:w-[496px] rounded-sm px-5 py-4 md:px-7.5 md:py-[25px] text-[#697585] text-sm md:text-base font-semibold bg-[#F6F6F6] outline-none'/>
                                </div>
                                <div className="flex gap-x-2.5 items-center">
                                    <input type="checkbox" name="" id="privacy_policy" />
                                    <label htmlFor="privacy_policy" className='text-[#697585] text-sm md:text-base font-semibold cursor-pointer'>I Accept Company Privacy Policy</label>
                                </div>
                                {/* btn */}
                                <button className="btn mt-6 md:mt-5 w-full sm:w-auto flex justify-center items-center gap-2">
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