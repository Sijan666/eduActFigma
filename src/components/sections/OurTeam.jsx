import React from "react";
import Container from "../Container";
import Images from "../Images";
import HeadingImg from "/src/assets/headingImg.png";
import brandLogo from "/src/assets/brandLogo.png";
import Team from "../Team";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { team } from "@/data/forCategory";
import Flex from "../Flex";

const OurTeam = () => {
  return (
    <div className="py-16 lg:py-30">
      <Container>
        {/* Heading Part */}
        <div className="text-center px-4">
          <div className="flex items-center justify-center gap-x-[15px] pb-5 lg:pb-0">
            <h4 className="text-primarys text-xl lg:text-2xl font-bold">Our Team</h4>
            <Images imgSrc={HeadingImg} />
          </div>
          <h3 className="w-full lg:w-[510px] mx-auto text-primaryTwo lg:text-[40px] text-[28px] font-bold leading-tight">
            Meet Our Professional Team Members
          </h3>
        </div>
      </Container>
      {/* Team Part */}
      <div className="pt-50 lg:pt-80">
        <div className="lg:bg-[url('/src/assets/teamBG.png')] lg:h-[430px] bg-no-repeat bg-center bg-cover relative">
          <Container>
            <Flex className="flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-y-40 lg:gap-y-0 px-4">
              {team.map((item) => (
                <div key={item.id} className="w-full sm:w-[80%] md:w-[45%] lg:w-[32%] flex justify-center">
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
      </div>
      <div className="pt-32 lg:pt-40">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-around gap-8 items-center justify-items-center opacity-50 px-4">
            <Images imgSrc={brandLogo} className="w-24 lg:w-auto" />
            <Images imgSrc={brandLogo} className="w-24 lg:w-auto" />
            <Images imgSrc={brandLogo} className="w-24 lg:w-auto" />
            <Images imgSrc={brandLogo} className="w-24 lg:w-auto" />
            <Images imgSrc={brandLogo} className="w-24 lg:w-auto" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurTeam;