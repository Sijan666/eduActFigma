import Button from '@/components/Button'
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoCheckmarkOutline } from 'react-icons/io5'

const Checkout = () => {

    const [isActive, setIsActive] = useState(false);
    const [isActiveTwo, setIsActiveTwo] = useState(false);

    return (
        <>
        <section className='checkout'>
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
            {/* common bg for pages */}
                <Container>
                {/* common tag for pages */}
                <div className="text-center">
                    <h3 className="text-[50px] font-bold text-white uppercase">Checkout</h3>
                    <p className="text-[20px] text-white">Home  /  Checkout</p>
                </div>
                {/* common tag for pages */}
                </Container>
            </div>
            <Container className="py-30">
                <p className='font-medium text-primaryTwo lg:text-[18px] text-[25px] py-10 px-12.5 bg-[#F6F6F6]  rounded-[14px] lg:w-[643px]'>Have a coupon? <span className='cursor-pointer font-bold text-secondarys'>Click here to enter your code</span></p>
                <Flex className={'lg:justify-between flex-wrap lg:flex-nowrap gap-x-9 lg:items-start!'}>
                    {/* left side */}
                    <div className="left">
                        {/* billing details */}
                        <div className="mt-15 mb-20">
                            <h4 className='text-[32px] font-bold text-primaryTwo pb-10'>Billing Details</h4>
                            <div className="flex flex-col lg:flex-row lg:justify-between">
                                <div className="name pb-5">
                                    <input type="text" placeholder='First Name' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold w-[350px] lg:w-[311px] bg-[#F6F6F6] outline-none'/>
                                </div>
                                <div className="pass pb-7.5">
                                    <input type="text" placeholder='Last Name' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold w-[350px] lg:w-[311px] bg-[#F6F6F6] outline-none'/>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:justify-between">
                                <div className="email pb-5">
                                    <input type="email" placeholder='Email Address' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold w-[350px] lg:w-[311px] bg-[#F6F6F6] outline-none'/>
                                </div>
                                <div className="number pb-7.5">
                                    <input type="number" placeholder='Phone Number' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold w-[350px] lg:w-[311px] bg-[#F6F6F6] outline-none'/>
                                </div>
                            </div>
                            <div className="company pb-7.5">
                                <input type="text" placeholder='Company' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold w-[350px] lg:w-[642px] bg-[#F6F6F6] outline-none'/>
                            </div>
                            <div className="address pb-7.5">
                                <input type="text" placeholder='Address' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold w-[350px] lg:w-[642px] bg-[#F6F6F6] outline-none'/>
                            </div>
                            <div className="apartment pb-7.5">
                                <input type="text" placeholder='Apartment, Unit, etc(optional)' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold lg:w-[642px] w-[350px] bg-[#F6F6F6] outline-none'/>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:justify-between">
                                <div className="town pb-5">
                                    <input type="text" placeholder='Town/City' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold w-[350px] lg:w-[311px] bg-[#F6F6F6] outline-none'/>
                                </div>
                                <div className="state pb-7.5">
                                    <input type="text" placeholder='State' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold w-[350px] lg:w-[311px] bg-[#F6F6F6] outline-none'/>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:justify-between">
                                <div className="town pb-5">
                                    <input type="number" placeholder='Zip code' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold w-[350px] lg:w-[311px] bg-[#F6F6F6] outline-none'/>
                                </div>
                                <div className="state pb-7.5">
                                    <input type="text" placeholder='Country' className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold w-[350px] lg:w-[311px] bg-[#F6F6F6] outline-none'/>
                                </div>
                            </div>
                        </div>
                        {/* billing details */}
                        {/* Shipping Details */}
                        <h4 className='text-[32px] font-bold text-primaryTwo pb-10'>Shipping Details</h4>
                        <div className="flex gap-x-4 items-center">
                            <input type="checkbox" className='text-[20px]'/>
                            <p className='text-[#697585] text-[20px] font-semibold'>Same as  Billing Details</p>
                        </div>
                        {/* Shipping Details */}
                        {/* order */}
                        <h4 className='text-[32px] font-bold text-primaryTwo pb-10 border-b border-[#E4E4E4] pt-30'>Your Order</h4>
                        <div className="flex justify-between py-7.5">
                            <h4 className='font-bold text-[20px] text-primaryTwo'>Product</h4>
                            <h4 className='font-bold text-[20px] text-primaryTwo'>Price</h4>
                        </div>
                        <div className="flex justify-between py-7.5 border-t border-b border-[#E4E4E4]">
                            <div className="name">
                                <h4 className='font-medium text-[20px] text-primaryTwo pb-7.5'>Product Name</h4>
                                <h4 className='font-medium text-[20px] text-primaryTwo pb-7.5'>Subtotal</h4>
                                <h4 className='font-medium text-[20px] text-primaryTwo'>Shipping</h4>
                            </div>
                            <div className="price">
                                <h4 className='font-medium text-[20px] text-primaryTwo pb-7.5'>$10.33 </h4>
                                <h4 className='font-medium text-[20px] text-primaryTwo pb-7.5'>$10.33 </h4>
                                <h4 className='font-medium text-[20px] text-primaryTwo'>$0.00 </h4>
                            </div>
                        </div>
                        <div className="flex justify-between py-7.5">
                            <h4 className='font-bold text-[20px] text-primaryTwo'>Total</h4>
                            <h4 className='font-bold text-[20px] text-primaryTwo'>$20.00</h4>
                        </div>
                        {/* order */}
                    </div>
                    {/* left side */}
                    {/* right side */}
                    <div className="right">
                        <h4 className='text-[32px] font-bold text-primaryTwo pb-10 mt-15'>Additional Information</h4>
                        <textarea name="" id="" rows={5} cols={5} className='rounded-sm px-7.5 py-[25px] text-[#697585] text-base font-semibold w-[350px] lg:w-[642px] bg-[#F6F6F6] outline-none' placeholder='Write a Message'></textarea>
                        <div className="lg:pt-[950px] pt-10">
                            <div className="rounded-[14px] bg-[#F6F6F6] p-10">
                                <div className="flex gap-x-5 items-start! pb-10">
                                    <div onClick={() => setIsActive(!isActive)}
                                    className={`cursor-pointer rounded-full p-2 duration-300 ${isActive ? 'bg-secondarys' : 'bg-white'} `}>
                                        <IoCheckmarkOutline className={`text-[20px] duration-300 ${isActive ? 'text-white' : 'text-white'} `}/>
                                    </div>
                                    <div className="">
                                        <h4 className='font-bold text-[20px] text-primaryTwo pb-[25px]'>Direct bank transfer</h4>
                                        <p className='text-[#697585] font-semibold text-base'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                    </div>
                                </div>
                                <div className="flex gap-x-5 items-start!">
                                    <div onClick={() => setIsActiveTwo(!isActiveTwo)}
                                    className={`cursor-pointer rounded-full p-2 duration-300 ${isActiveTwo ? 'bg-secondarys' : 'bg-white'} `}>
                                        <IoCheckmarkOutline className={`text-[20px] duration-300 ${isActiveTwo ? 'text-white' : 'text-white'} `}/>
                                    </div>
                                    <div className="">
                                        <h4 className='font-bold text-[20px] text-primaryTwo pb-[25px]'>Cash on delivery</h4>
                                        <p className='text-[#697585] font-semibold text-base'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                    </div>
                                </div>
                            </div>
                                {/* button */}
                                <div className="bg-[#f58c37] text-white text-[18px] font-bold rounded-md w-[238px]  mt-12.5">
                                    <Button btnText={<>Plance your Order<FaArrowRight /></>}className={"bg-secondarys py-[19px] px-8 rounded-md w-[238px] clip-ss flex items-center gap-x-2"}/>
                                </div>
                                {/* button */}
                        </div>
                    </div>
                    {/* right side */}
                </Flex>
            </Container>
        </section>
        </>
    )
}

export default Checkout