import Container from '@/components/Container'
import Flex from '@/components/Flex'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

const Gallery = () => {
    return (
        <>
        <section className='gallery'>
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
            {/* common bg for pages */}
                <Container>
                {/* common tag for pages */}
                <div className="text-center">
                    <h3 className="lg:text-[50px] text-[35px] font-bold text-white uppercase">Gallery </h3>
                    <p className="text-[20px] text-white">Home  /  Gallery</p>
                </div>
                {/* common tag for pages */}
                </Container>
            </div>
            <div className="py-30">
                <Container>
                    <Flex className={'flex flex-wrap gap-x-9 gap-y-10'}>
                        <div className="w-[416px] h-[533px] rounded-full bg-[#152B4A] group flex justify-center items-center hover:bg-primarys duration-300">
                            <FiPlus className='text-[80px] text-white opacity-0 group-hover:opacity-100 duration-300'/>
                        </div>
                        <div className="w-[416px] h-[533px] rounded-full bg-[#152B4A] group flex justify-center items-center hover:bg-primarys duration-300">
                            <FiPlus className='text-[80px] text-white opacity-0 group-hover:opacity-100 duration-300'/>
                        </div>
                        <div className="w-[416px] h-[533px] rounded-full bg-[#152B4A] group flex justify-center items-center hover:bg-primarys duration-300">
                            <FiPlus className='text-[80px] text-white opacity-0 group-hover:opacity-100 duration-300'/>
                        </div>
                        <div className="w-[416px] h-[533px] rounded-full bg-[#152B4A] group flex justify-center items-center hover:bg-primarys duration-300">
                            <FiPlus className='text-[80px] text-white opacity-0 group-hover:opacity-100 duration-300'/>
                        </div>
                        <div className="w-[416px] h-[533px] rounded-full bg-[#152B4A] group flex justify-center items-center hover:bg-primarys duration-300">
                            <FiPlus className='text-[80px] text-white opacity-0 group-hover:opacity-100 duration-300'/>
                        </div>
                        <div className="w-[416px] h-[533px] rounded-full bg-[#152B4A] group flex justify-center items-center hover:bg-primarys duration-300">
                            <FiPlus className='text-[80px] text-white opacity-0 group-hover:opacity-100 duration-300'/>
                        </div>
                    </Flex>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Gallery