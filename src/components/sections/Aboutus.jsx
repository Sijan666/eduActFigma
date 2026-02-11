import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import aboutUs from "/src/assets/aboutUs.png";
import aboutUsIcon from "/src/assets/aboutUsRightIcon.png";
import aboutUsRight from "/src/assets/aboutUsRight.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";

const Aboutus = () => {
  return (
    <div className="aboutUs my-[120px]">
      <Container>
        <Flex className={"items-start gap-x-[65px]"}>
          <div className="">
            <Images imgSrc={aboutUs} />
          </div>
          <div className="">
            <div className="flex items-center gap-x-2">
              <h4 className="text-2xl text-[#4F5DE4] font-black font-Urbanist">
                aboutUs
              </h4>
              <Images imgSrc={aboutUsIcon} className={"h-[10px] w-[10px]"} />
            </div>
            <h3 className="text-[#2A254D] text-[40px] font-black font-Urbanist w-[630px] leading-11 mt-7">
              Establishing a community that encourages lifelong learning
            </h3>
            <p className="text-[#697585] text-base font-semibold font-Urbanist w-[642px] leading-6 my-10">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks
            </p>
            <Images imgSrc={aboutUsRight} />
            <div className="flex gap-x-[65px] mt-12">
              <div className="flex items-center gap-x-3">
                <IoIosCheckmarkCircle className="text-[#4F5DE4] text-[20px] font-bold font-Urbanist" />
                <h4>Free Incoming method</h4>
              </div>
              <div className="flex items-center gap-x-3">
                <IoIosCheckmarkCircle className="text-[#F57005] text-[20px] font-bold font-Urbanist" />
                <h4>Provide Best Support</h4>
              </div>
            </div>
            <div className="flex gap-x-[72px] mt-1">
              <div className="flex items-center gap-x-3">
                <IoIosCheckmarkCircle className="text-[#F57005] text-[20px] font-bold font-Urbanist" />
                <h4>Expert Many Teacher </h4>
              </div>
              <div className="flex items-center gap-x-3">
                <IoIosCheckmarkCircle className="text-[#4F5DE4] text-[20px] font-bold font-Urbanist" />
                <h4>Lifetime access </h4>
              </div>
            </div>
            <button
              className={
                "mt-12 bg-[#4F5DE4] py-6 px-[31px] rounded-md text-white cursor-pointer text-[18px] font-black font-Urbanist flex items-center gap-x-2.5"
              }
            >
              Discover More <FaArrowRightLong />
            </button>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Aboutus;
