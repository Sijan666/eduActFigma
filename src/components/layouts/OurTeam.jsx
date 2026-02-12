import React from "react";
import Container from "../Container";
import Images from "../Images";
import HeadingImg from "/src/assets/headingImg.png";
import Ashfak from "/src/assets/ashfak.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import brandLogo from "/src/assets/brandLogo.png"

const OurTeam = () => {
  return (
    <div className="font-Urbanist py-30">
      <Container>
        {/* Heading Part  */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-x-[15px]">
            <h4 className="text-primary text-2xl font-bold">Our Team</h4>
            <Images imgSrc={HeadingImg} />
          </div>
          <h3 className="w-[510px] mx-auto text-primaryTwo text-[40px] font-bold">
            Meet Our Professional Team Members
          </h3>
        </div>
      </Container>
      {/* Team Part */}
      <div className="pt-80">
        <div className="bg-[url('/src/assets/teamBG.png')] h-[430px] bg-no-repeat bg-center bg-cover relative">
          <Container>
            <div className="absolute left-1/2 bottom-[120px] -translate-x-1/2">
              <div className="flex items-center gap-9">
                <div className="group">
                  <div className="h-[310px] w-[416px] bg-secondary group-hover:bg-primary transition-all duration-500 rounded-b-full relative">
                    <div className="w-[350px] h-[510px] rounded-full absolute left-1/2 bottom-[35px] -translate-x-1/2 overflow-hidden">
                      <Images
                        imgSrc={Ashfak}
                        className="w-full h-full object-cover rounded-full"
                      />
                      <div className="absolute inset-0 bg-[#181818]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full flex items-center justify-center">
                        <div className="text-center text-white">
                          <h4 className="text-[32px] font-bold">
                            Ashfak Mahmud
                          </h4>
                          <h5 className="text-xl pb-6">Front-End Developer</h5>
                          <div className="flex items-center justify-center gap-x-3">
                            <Link
                              to={"https://www.facebook.com/ashfakmahmuddev"}
                              target="_blank"
                              className="h-10 w-10 flex items-center justify-center border border-primary rounded-full hover:bg-primary transition-all duration-400"
                            >
                              <FaFacebookF />
                            </Link>
                            <Link
                              to={"https://github.com/ashfakmahmuddev"}
                              target="_blank"
                              className="h-10 w-10 flex items-center justify-center border border-primary rounded-full hover:bg-primary transition-all duration-400"
                            >
                              <FaGithub />
                            </Link>
                            <Link
                              to={"https://www.linkedin.com/in/ashfakmahmuddev"}
                              target="_blank"
                              className="h-10 w-10 flex items-center justify-center border border-primary rounded-full hover:bg-primary transition-all duration-400"
                            >
                              <FaLinkedinIn />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="h-[310px] w-[416px] bg-secondary group-hover:bg-primary transition-all duration-500 rounded-b-full relative">
                    <div className="w-[350px] h-[510px] rounded-full absolute left-1/2 bottom-[35px] -translate-x-1/2 overflow-hidden">
                      <Images
                        imgSrc={Ashfak}
                        className="w-full h-full object-cover rounded-full"
                      />
                      <div className="absolute inset-0 bg-[#181818]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full flex items-center justify-center">
                        <div className="text-center text-white">
                          <h4 className="text-[32px] font-bold">
                            Ashfak Mahmud
                          </h4>
                          <h5 className="text-xl pb-6">Front-End Developer</h5>
                          <div className="flex items-center justify-center gap-x-3">
                            <Link
                              to={"https://www.facebook.com/ashfakmahmuddev"}
                              target="_blank"
                              className="h-10 w-10 flex items-center justify-center border border-primary rounded-full hover:bg-primary transition-all duration-400"
                            >
                              <FaFacebookF />
                            </Link>
                            <Link
                              to={"https://github.com/ashfakmahmuddev"}
                              target="_blank"
                              className="h-10 w-10 flex items-center justify-center border border-primary rounded-full hover:bg-primary transition-all duration-400"
                            >
                              <FaGithub />
                            </Link>
                            <Link
                              to={"https://www.linkedin.com/in/ashfakmahmuddev"}
                              target="_blank"
                              className="h-10 w-10 flex items-center justify-center border border-primary rounded-full hover:bg-primary transition-all duration-400"
                            >
                              <FaLinkedinIn />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="h-[310px] w-[416px] bg-secondary group-hover:bg-primary transition-all duration-500 rounded-b-full relative">
                    <div className="w-[350px] h-[510px] rounded-full absolute left-1/2 bottom-[35px] -translate-x-1/2 overflow-hidden">
                      <Images
                        imgSrc={Ashfak}
                        className="w-full h-full object-cover rounded-full"
                      />
                      <div className="absolute inset-0 bg-[#181818]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full flex items-center justify-center">
                        <div className="text-center text-white">
                          <h4 className="text-[32px] font-bold">
                            Ashfak Mahmud
                          </h4>
                          <h5 className="text-xl pb-6">Front-End Developer</h5>
                          <div className="flex items-center justify-center gap-x-3">
                            <Link
                              to={"https://www.facebook.com/ashfakmahmuddev"}
                              target="_blank"
                              className="h-10 w-10 flex items-center justify-center border border-primary rounded-full hover:bg-primary transition-all duration-400"
                            >
                              <FaFacebookF />
                            </Link>
                            <Link
                              to={"https://github.com/ashfakmahmuddev"}
                              target="_blank"
                              className="h-10 w-10 flex items-center justify-center border border-primary rounded-full hover:bg-primary transition-all duration-400"
                            >
                              <FaGithub />
                            </Link>
                            <Link
                              to={"https://www.linkedin.com/in/ashfakmahmuddev"}
                              target="_blank"
                              className="h-10 w-10 flex items-center justify-center border border-primary rounded-full hover:bg-primary transition-all duration-400"
                            >
                              <FaLinkedinIn />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* Brand Logo Part */}
      <div className="pt-30">
        <Container>
          <div className="flex justify-around">
            <Images imgSrc={brandLogo}/>
            <Images imgSrc={brandLogo}/>
            <Images imgSrc={brandLogo}/>
            <Images imgSrc={brandLogo}/>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurTeam;
