import React from 'react'
import Container from '../Container'
import Commonh3 from '../Commonh3'
import Button from '../Button'
import { FaArrowRightLong } from 'react-icons/fa6'

const Discover = () => {
    return (
        <>
        <section className='discover'>
            <div className="">
                <Container className={"bg-[url('/src/assets/discoverBg.png')] bg-center bg-cover bg-no-repeat py-20 lg:w-330 px-30"}>
                    <Commonh3 commonh3={'Discover the campus through a video tour'} className={'leading-10 w-132 text-white pb-10'}/>
                    <div className="relative">
                        <Button btnText={'Discover More'} className={'py-5 pr-14 pl-6 bg-secondary rounded-md text-white text-[18px] font-bold relative'}/>
                        <FaArrowRightLong className='text-white font-bold absolute top-1/2 left-37 -translate-y-1/2'/>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Discover