import Container from '@/components/Container'
import Aboutus from '@/components/sections/Aboutus'
import OurTeam from '@/components/sections/OurTeam'
import Subscribe from '@/components/sections/Subscribe'
import Testimonial from '@/components/sections/Testimonial'
import React from 'react'

const About = () => {
    return (
        <>
        <section className="about">
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
            {/* common bg for pages */}
                <Container>
                {/* common tag for pages */}
                <div className="text-center">
                    <h3 className="lg:text-[50px] text-[35px] font-bold text-white uppercase">About </h3>
                    <p className="text-[20px] text-white">Home  /  About</p>
                </div>
                {/* common tag for pages */}
                </Container>
            </div>
            <div className="pt-30">
                <Aboutus/>
                <Testimonial/>
                <OurTeam/>
                <Subscribe/>
            </div>
        </section>
        </>
    )
}

export default About