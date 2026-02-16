import Team from '@/components/Team'
import { teamforTeacher } from '@/data/forCategory'
import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Container from "@/components/Container"
import Flex from '@/components/Flex'

const Teacher = () => {
    return (
        <>
        <section className="teacher">
            {/* common bg for pages */}
            <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
            {/* common bg for pages */}
                <Container>
                {/* common tag for pages */}
                <div className="text-center">
                    <h3 className="lg:text-[50px] text-[35px] font-bold text-white uppercase">Teacher </h3>
                    <p className="text-[20px] text-white">Home  /  Teacher</p>
                </div>
                {/* common tag for pages */}
                </Container>
            </div>
            <div className="lg:pt-80 lg:pb-30 pt-50 pb-20">
                <Container>
                    <Flex className="flex-wrap justify-center lg:justify-between gap-y-40 lg:gap-y-65 px-4"> 
                        {teamforTeacher.map((item) => (
                            <div 
                                key={item.id} 
                                className="w-full sm:w-[80%] md:w-[45%] lg:w-[32%] flex justify-center">
                                <Team
                                    teamImg={item.teamImg}
                                    teamName={item.teamName}
                                    jobTitle={item.jobTitle}
                                    icon1={<FaFacebookF />}
                                    link1=""
                                    icon2={<FaGithub />}
                                    link2=""
                                    icon3={<FaLinkedinIn />}
                                    link3=""
                                />
                            </div>
                        ))}
                    </Flex>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Teacher