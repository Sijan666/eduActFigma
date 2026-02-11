import React from 'react'
import Container from '../Container'
import Commonh3 from '../Commonh3'
import Button from '../Button'
import { FaArrowRightLong } from 'react-icons/fa6'

const Discover = () => {
    return (
        <>
        <section className='discover'>
            {/* <Container> */}
                <div className={"bg-[url('/src/assets/discoverBg.png')] bg-center bg-cover bg-no-repeat py-20 lg:px-30 w-full lg:w-330 px-5 mx-auto rounded-bl-[14px] rounded-br-[14px]"}>
                    {/* common tag */}
                    <Commonh3 commonh3={'Discover the campus through a video tour'} className={'leading-10 lg:w-132 text-white lg:pb-10 pb-3 text-center lg:text-left'}/>
                    {/* common tag */}
                    {/* button */}
                    <div className="relative text-center lg:text-left">
                        <Button btnText={'Discover More'} className={'py-5 pr-14 pl-6 bg-secondary rounded-md text-white text-[18px] font-bold relative'}/>
                        <FaArrowRightLong className='text-white font-bold absolute top-1/2 lg:left-37 left-60 -translate-y-1/2'/>
                    </div>
                    {/* button */}
                </div>
            {/* </Container> */}
        </section>
        </>
    )
}

export default Discover