import Container from '@/components/Container'
import Flex from '@/components/Flex'
import Images from '@/components/Images'
import React, { useState } from 'react'
import productCart from '../../src/assets/productinCart.png'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
import { ImCross } from 'react-icons/im'
import Button from '@/components/Button'
import { FaArrowRight } from 'react-icons/fa'

const Cart = () => {

    const [ count , setCount ] = useState(1)
    const [ countTwo , setCountTwo ] = useState(1)

    // first count
    const handleIncrement = ()=> {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    // first count
    
    // second count
    const handleIncrementTwo = ()=> {
        setCountTwo(countTwo + 1)
    }
    const handleDecrementTwo = () => {
        if (countTwo > 1) {
            setCountTwo(countTwo - 1)
        }
    }
    // second count
    return (
        <>
        <section className='cart'>
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] bg-cover bg-center pt-[100px] pb-[100px] md:pt-[174px] md:pb-[154px]">
            {/* common bg for pages */}
                <Container>
                {/* common tag for pages */}
                <div className="text-center">
                    <h3 className="text-[36px] md:text-[50px] font-bold text-white uppercase">Cart</h3>
                    <p className="text-[16px] md:text-[20px] text-white">Home  /  Cart</p>
                </div>
                {/* common tag for pages */}
                </Container>
            </div>
            <div className="pt-12.5 pb-20 md:pt-[71px] md:pb-[169px]">
                <Container>
                    {/* names - Hidden on Mobile, Visible on Desktop */}
                    <Flex className={'hidden md:flex justify-between pb-7.5 border-b border-[#E4E4E4]'}>
                        <div className="item w-[30%]">
                            <h4 className='text-[20px] font-bold text-primaryTwo'>Item</h4>
                        </div>
                        <div className="price w-[20%]">
                            <h4 className='text-[20px] font-bold text-primaryTwo'>Price</h4>
                        </div>
                        <div className="quantity w-[20%]">
                            <h4 className='text-[20px] font-bold text-primaryTwo'>Quantity</h4>
                        </div>
                        <div className="subtotal w-[20%]">
                            <h4 className='text-[20px] font-bold text-primaryTwo'>Subtotal</h4>
                        </div>
                        <div className="removem w-[10%]">
                            <h4 className='text-[20px] font-bold text-primaryTwo'>Remove</h4>
                        </div>
                    </Flex>
                    {/* names */}
                    {/* items and details 1 */}
                    <Flex className={'flex-col md:flex-row items-center text-center md:text-left pt-7.5 justify-between pb-7.5 border-b border-[#E4E4E4] gap-y-6 md:gap-y-0'}>
                        <div className="item w-full md:w-[30%] flex flex-col md:flex-row gap-y-4 gap-x-10 items-center">
                            <Images imgSrc={productCart}/>
                            <h4 className='text-[20px] font-bold text-primaryTwo'>Office Chair</h4>
                        </div>
                        <div className="price w-full md:w-[20%]">
                            <h4 className='text-[20px] font-medium text-primaryTwo'>$10.33 </h4>
                        </div>
                        <div className="quantity w-full md:w-[20%] flex justify-center md:justify-start items-center">
                            <div onClick={handleDecrement} className="py-5 px-4 border border-[#E4E4E4] rounded-tl-[10px] rounded-bl-[10px] cursor-pointer hover:bg-gray-100 transition">
                                <FiMinus/>
                            </div>
                            <div className="py-4 px-5 border border-[#E4E4E4]">
                                {count}
                            </div>
                            <div onClick={handleIncrement} className="py-5 px-4 border border-[#E4E4E4] rounded-tr-[10px] rounded-br-[10px] cursor-pointer hover:bg-gray-100 transition">
                                <FiPlus/>
                            </div>
                        </div>
                        <div className="subtotal w-full md:w-[20%]">
                            <h4 className='text-[20px] font-medium text-primaryTwo'>$10.33 </h4>
                        </div>
                        <div className="removem w-full md:w-[10%] flex justify-center md:justify-start">
                            <h4 className='text-[20px] font-bold cursor-pointer hover:text-red-500 transition'><ImCross/></h4>
                        </div>
                    </Flex>
                    {/* items and details 2 */}
                    <Flex className={'flex-col md:flex-row items-center text-center md:text-left pt-7.5 justify-between pb-7.5 border-b border-[#E4E4E4] gap-y-6 md:gap-y-0'}>
                        <div className="item w-full md:w-[30%] flex flex-col md:flex-row gap-y-4 gap-x-10 items-center">
                            <Images imgSrc={productCart}/>
                            <h4 className='text-[20px] font-bold text-primaryTwo'>Round Chair</h4>
                        </div>
                        <div className="price w-full md:w-[20%]">
                            <h4 className='text-[20px] font-medium text-primaryTwo'>$10.33 </h4>
                        </div>
                        <div className="quantity w-full md:w-[20%] flex justify-center md:justify-start items-center">
                            <div onClick={handleDecrementTwo} className="py-5 px-4 border border-[#E4E4E4] rounded-tl-[10px] rounded-bl-[10px] cursor-pointer hover:bg-gray-100 transition">
                                <FiMinus/>
                            </div>
                            <div className="py-4 px-5 border border-[#E4E4E4]">
                                {countTwo}
                            </div>
                            <div onClick={handleIncrementTwo} className="py-5 px-4 border border-[#E4E4E4] rounded-tr-[10px] rounded-br-[10px] cursor-pointer hover:bg-gray-100 transition">
                                <FiPlus/>
                            </div>
                        </div>
                        <div className="subtotal w-full md:w-[20%]">
                            <h4 className='text-[20px] font-medium text-primaryTwo'>$10.33 </h4>
                        </div>
                        <div className="removem w-full md:w-[10%] flex justify-center md:justify-start">
                            <h4 className='text-[20px] font-bold cursor-pointer hover:text-red-500 transition'><ImCross/></h4>
                        </div>
                    </Flex>
                    {/* Cart Bottom Section */}
                    <div className="pt-15">
                        <Flex className={'justify-between flex-col lg:flex-row items-start gap-y-10 lg:gap-y-0'}>
                            <div className="w-full lg:w-auto">
                                <Flex className={"gap-x-3 gap-y-4 flex-col sm:flex-row"}>
                                    <input type="text" placeholder="Enter coupon code" className="py-5 px-6 rounded-md w-full sm:w-[303px] outline-none border-none bg-[#F6F6F6]"/>
                                    <div className="bg-[#f58c37] text-white text-[18px] font-bold rounded-md w-full sm:w-[210px]">
                                        <Button btnText={<>Apply Coupon<FaArrowRight /></>}className={"bg-secondarys py-[19px] px-8 rounded-md w-full sm:w-[210px] clip-ss flex justify-center items-center gap-x-2"}/>
                                    </div>
                                </Flex>
                            </div>
                            <div className="w-full lg:w-auto">
                                <Flex className={'justify-between gap-x-5 lg:gap-x-[150px] pb-7.5 w-full'}>
                                    <p className='text-[20px] font-medium text-primaryTwo'>Subtotal</p>
                                    <p className='text-[20px] font-medium text-primaryTwo'>$20.33 </p>
                                </Flex>
                                <Flex className={'justify-between gap-x-5 lg:gap-x-[150px] pb-7.5 border-b border-[#E4E4E4] w-full'}>
                                    <p className='text-[20px] font-medium text-primaryTwo'>Shipping</p>
                                    <p className='text-[20px] font-medium text-primaryTwo'>$0.00 </p>
                                </Flex>
                                <Flex className={'justify-between gap-x-5 lg:gap-x-45 pt-7.5 pb-10 w-full'}>
                                    <p className='text-[20px] font-bold text-primaryTwo'>Total</p>
                                    <p className='text-[20px] font-bold text-primaryTwo'>$20.00</p>
                                </Flex>
                            </div>
                        </Flex>
                        <Flex className={'justify-end pt-5'}>
                            <div className="w-full lg:w-auto">
                                <Flex className={'gap-x-5 flex-col sm:flex-row gap-y-4 sm:gap-y-0'}>
                                    <div className="bg-primaryTwo/80 text-white text-[18px] font-bold rounded-md w-full sm:w-40">
                                        <Button btnText={<>Update<FaArrowRight /></>}className={"bg-primaryTwo py-[19px] px-8 rounded-md w-full sm:w-40 clip-ss flex justify-center items-center gap-x-2"}/>
                                    </div>
                                    <div className="bg-[#f58c37] text-white text-[18px] font-bold rounded-md w-full sm:w-[180px]">
                                        <Button btnText={<>Checkout<FaArrowRight /></>}className={"bg-secondarys py-[19px] px-8 rounded-md w-full sm:w-[180px] clip-ss flex justify-center items-center gap-x-2"}/>
                                    </div>
                                </Flex>
                            </div>
                        </Flex>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Cart