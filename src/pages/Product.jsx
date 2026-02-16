import Container from '@/components/Container'
import Flex from '@/components/Flex'
import ProductCard from '@/components/ProductCard';
import { Slider } from "@/components/ui/slider";
import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { RxDoubleArrowRight } from 'react-icons/rx';
import { productApi } from '@/data/forCategory';

const Product = () => {

    const [priceRange, setPriceRange] = useState([75]);
    const currentPrice = priceRange[0] * 25;

    return (
        <>
        <section className='product'>
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] bg-cover bg-center pt-[100px] pb-[100px] lg:pt-[174px] lg:pb-[154px]">
            {/* common bg for pages */}
                <Container>
                {/* common tag for pages */}
                <div className="text-center">
                    <h3 className="text-[36px] lg:text-[50px] font-bold text-white uppercase">Product</h3>
                    <p className="text-[16px] lg:text-[20px] text-white">Home  /  Product</p>
                </div>
                {/* common tag for pages */}
                </Container>
            </div>
            <div className="py-10 lg:py-30">
                <Container>
                    <Flex className={'flex-col lg:flex-row items-start gap-y-10 lg:gap-x-9'}>
                        <div className="left w-full lg:w-[20%]">
                            <div className="px-7.5 py-7.5 bg-secondarys rounded-[7px] ">
                                <p className='flex items-center gap-x-2 text-white text-base'><IoSearch  className='text-[20px]'/>Type Here</p>
                            </div>
                            <div className="mt-9 p-7.5 shadow-newMade rounded-[14px]">
                                <h4 className='text-[24px] font-bold text-black pb-5'>Price</h4>
                                <div className="range">
                                    <Slider
                                    defaultValue={[75]}
                                    max={100}
                                    step={1}
                                    onValueChange={(value) => setPriceRange(value)}
                                    className="custom-range-slider w-full mx-auto"
                                    />
                                </div>
                                <div className="price py-6">
                                    <Flex className={"justify-between"}>
                                            <p className="text-[#697585] text-base font-semibold">
                                                $0 - $ {currentPrice}
                                            </p>
                                            <p className='px-4 py-3.5 bg-[#F6F6F6] rounded-[5px] text-[#697585] text-base font-semibold cursor-pointer'>Apply</p>
                                    </Flex>
                                </div>
                            </div>
                            <div className="mt-9 py-7.5 px-5 shadow-newMade rounded-[14px]">
                                <h4 className='text-[24px] font-bold text-black pb-7.5 border-b border-dotted border-secondarys'>Categories</h4>
                                <div className="pt-7.5">
                                    <Flex className={'gap-x-2 items-center pb-7.5 border-b border-[#E4E4E4]'}>
                                        <RxDoubleArrowRight className='text-secondarys text-[24px]'/>
                                        <p className='text-[#697585] text-[20px] font-semibold'>Web Development</p>
                                    </Flex>
                                    <Flex className={'gap-x-2 items-center pt-7.5 pb-7.5 border-b border-[#E4E4E4]'}>
                                        <RxDoubleArrowRight className='text-secondarys text-[24px]'/>
                                        <p className='text-[#697585] text-[20px] font-semibold'>Social Marketing</p>
                                    </Flex>
                                    <Flex className={'gap-x-2 items-center pt-7.5 pb-7.5 border-b border-[#E4E4E4]'}>
                                        <RxDoubleArrowRight className='text-secondarys text-[24px]'/>
                                        <p className='text-[#697585] text-[20px] font-semibold'>Technology</p>
                                    </Flex>
                                    <Flex className={'gap-x-2 items-center pt-7.5 '}>
                                        <RxDoubleArrowRight className='text-secondarys text-[24px]'/>
                                        <p className='text-[#697585] text-[20px] font-semibold'>Business & Finance</p>
                                    </Flex>
                                </div>
                            </div>
                        </div>
                        {/* leftBar End */}
                        {/* right side */}
                        <div className="right w-full lg:w-[80%]">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-y-4">
                                <div className="">
                                    <p className='text-[20px] text-[#697585] font-bold'>Showing 1-9 of 12 Results</p>
                                </div>
                                <div className="px-7.5 py-4 lg:py-7.5 bg-[#F6F6F6] rounded-[7px] w-full md:w-auto text-center md:text-left">
                                    <p className='text-[#697585] text-base font-semibold lg:w-[303px]'>Sort By Popular</p>
                                </div>
                            </div>
                            <div className="pt-9">
                                <div className="flex flex-wrap justify-between gap-x-4 gap-y-9">
                                    {productApi?.map((item)=>(
                                        <div key={item?.id} className='w-full sm:w-[48%] lg:w-[30%] grow'>
                                            <ProductCard 
                                            productImg={item?.productImg}
                                            productTitle={item?.productTitle}
                                            productofferPrice={item.productofferPrice}
                                            productPrice={item.productPrice}
                                            productRating={item.productRating}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* right side End */}
                    </Flex>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Product