import React from 'react'
import Container from '../components/Container'
import Images from '../components/Images'
import error from '../../src/assets/error.png'
import Commonh3 from '../components/Commonh3'
import { LuSearch } from 'react-icons/lu'
// import { FaArrowRightLong } from 'react-icons/fa6'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Error = () => {
    return (
        <>
        <section className='errorPage'>
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
            {/* common bg for pages */}
                <Container>
                {/* common tag for pages */}
                <div className="text-center">
                    <h3 className="text-[50px] font-bold text-white uppercase">Error</h3>
                    <p className="text-[20px] text-white">Home  /  404 Error</p>
                </div>
                {/* common tag for pages */}
                </Container>
            </div>
            <Container className="py-30 text-center">
                <Images imgSrc={error} className={'mx-auto'}/>
                <Commonh3 commonh3={'Oops! Page not Found'} className={'text-primaryTwo pt-20 pb-2'}/>
                <p className='text-base text-[#697585] font-semibold pb-7.5'>The page you are looking for is not exist.</p>
                <div className="flex justify-center pb-7.5"> 
                    <div className="relative flex items-center">
                        {/* Input Field */}
                        <input type="text" placeholder='Type Here' className='text-base font-semibold text-[#697585] pl-[55px] pr-[25px] py-[25px] bg-[#F6F6F6] outline-none lg:w-[496px] rounded-sm'/>
                        {/* Search Icon */}
                        <LuSearch className="absolute left-5 text-[#697585] text-[25px]" />
                    </div>
                </div>
                {/* button */}
                <Link to={'/'}>
                {/* <div className="bg-[#f58c37] text-white text-[18px] font-bold rounded-md w-51 mx-auto">
                    <Button btnText={<>Back to Home<FaArrowRight /></>}className={"bg-secondarys py-[19px] px-8 rounded-md w-51 clip-ss flex items-center gap-x-2"}/>
                </div> */}
                <button className="btn">
                    Update
                    <FaArrowRight />
                </button>
                </Link>
                {/* button */}
            </Container>
        </section>
        </>
    )
}

export default Error