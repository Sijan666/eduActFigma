import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import aboutUs from "/src/assets/aboutUs.png";
import aboutUsIcon from "/src/assets/aboutUsRightIcon.png";
import aboutUsRight from "/src/assets/aboutUsRight.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <div className="aboutUs lg:my-30 my-15">
      {/* Container */}
      <Container className="w-[390px] lg:w-330 mx-auto">
        <Flex className={"gap-x-[65px] flex flex-wrap lg:flex-nowrap items-center justify-center"}>
          {/* Image Section */}
          <div className="w-full lg:w-auto flex justify-center">
            <Images imgSrc={aboutUs} className="max-w-full h-auto" />
          </div>
          {/* Content Section */}
          <div className="mx-auto lg:mx-0 w-full lg:w-auto">
            <div className="flex items-center gap-x-2 pt-10 lg:pt-0 justify-center lg:justify-start">
              <h4 className="text-xl lg:text-2xl text-primarys font-bold">About Us</h4>
              <Images imgSrc={aboutUsIcon} className={"h-2.5 w-2.5"} />
            </div>
            {/* Title */}
            <h3 className="text-primaryTwo text-[28px] lg:text-[40px] font-bold lg:w-[630px] w-full leading-tight lg:leading-11 mt-5 lg:mt-7 text-center lg:text-left">
              Establishing a community that encourages lifelong learning
            </h3>
            {/* Description */}
            <p className="text-[#697585] text-sm lg:text-base font-semibold lg:w-[642px] w-full leading-6 my-6 lg:my-10 text-center lg:text-left">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks
            </p>
            <div className="w-full">
              <Images imgSrc={aboutUsRight} className={"mx-auto lg:mx-0 max-w-full"} />
            </div>
            {/* Features List */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 mt-10">
              <div className="flex items-center gap-x-2">
                <IoIosCheckmarkCircle className="text-primarys text-[18px] lg:text-[20px] font-bold shrink-0" />
                <h4 className="text-[13px] lg:text-base font-bold">Free Incoming method</h4>
              </div>
              <div className="flex items-center gap-x-2">
                <IoIosCheckmarkCircle className="text-secondarys text-[18px] lg:text-[20px] font-bold shrink-0" />
                <h4 className="text-[13px] lg:text-base font-bold">Provide Best Support</h4>
              </div>
              <div className="flex items-center gap-x-2">
                <IoIosCheckmarkCircle className="text-secondarys text-[18px] lg:text-[20px] font-bold shrink-0" />
                <h4 className="text-[13px] lg:text-base font-bold">Expert Many Teacher</h4>
              </div>
              <div className="flex items-center gap-x-2">
                <IoIosCheckmarkCircle className="text-primarys text-[18px] lg:text-[20px] font-bold shrink-0" />
                <h4 className="text-[13px] lg:text-base font-bold">Lifetime access</h4>
              </div>
            </div>
            {/* Button Section */}
            <div className="mt-10 pb-12.5 flex justify-center lg:justify-start">
              <Link to={"/"}>
                <button className="btnTwo flex items-center gap-2">
                  Try for free
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Aboutus;